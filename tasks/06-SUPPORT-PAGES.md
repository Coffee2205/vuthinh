# Task 06 — Các trang hỗ trợ

## Routes

- `/success-stories`
- `/faq`
- `/careers`
- `/contact`
- `/privacy-policy`
- `/terms`

## Công việc

- [x] Thành quả học viên.
- [x] Cảm nhận phụ huynh.
- [x] FAQ accordion.
- [x] Tuyển dụng.
- [x] Liên hệ.
- [x] Chính sách.
- [x] Điều khoản.

## Tiêu chí

- Không hiển thị testimonial giả.
- Form liên hệ lưu dữ liệu hoặc gửi thông báo.
- Thông tin liên hệ lấy từ config chung.

## Rà soát database trước triển khai — 2026-07-18

- Supabase project trong `.env.local` trả HTTP 404 cho cả chín bảng: `success_stories`, `faq_categories`, `faqs`, `job_posts`, `job_applications`, `contact_messages`, `trial_registrations`, `course_registrations`, `site_settings`.
- Không tìm thấy schema SQL tương ứng trong repository hoặc thư mục dữ liệu local để xác minh tên cột, constraint và payload insert.
- Chưa sửa source hoặc đánh dấu checklist: việc đoán schema cho form ứng tuyển/liên hệ/đăng ký có nguy cơ insert sai hoặc mất dữ liệu.
- Cần xác minh các bảng được tạo trong đúng Supabase project đang cấu hình, reload PostgREST schema cache và cung cấp schema nếu project URL hiện tại không phải project chứa các bảng.

## Kết quả hoàn thành Task 06 — 2026-07-18

- `/success-stories` chỉ đọc `published` + `consent_confirmed`; database chưa có story nên empty state, không tạo review/kết quả giả.
- `/faq` đọc 3 category và FAQ active, filter URL và accordion semantic.
- `/careers`, `/careers/[slug]` chỉ đọc job published/chưa hết hạn; hiện empty state. Form application dùng Zod/Server Action, không có CV vì private Storage/cột URL chưa được triển khai.
- `/contact` đọc organization/contact từ `site_settings`, form insert `contact_messages`.
- `/trial-registration` hỗ trợ `?course=<slug>` và hai chế độ trial/course; CTA khóa học đã nối tới `course_registrations`.
- `/privacy`, `/privacy-policy` alias và `/terms` có nội dung tạm, ghi rõ chờ phê duyệt pháp lý.
- Mọi form dùng allowlist, không truyền status/admin_note/timestamps, có validation/database/success/pending-disabled; không dùng service-role.
- RLS QA: contact/trial/course insert thành công; public select rỗng; payload `status` bị HTTP 401. Job application chưa insert hợp lệ vì chưa có job published.
- Bản ghi QA có tên `Codex QA Task 06`, email `qa-task06@example.invalid`, marker `TEST_ONLY_TASK06`; admin cần xóa sau đối chiếu.
- Lint/build đạt. Runtime toàn bộ route chính HTTP 200; Careers slug sai hiển thị not-found.
## Bổ sung form học thử trang chủ — 2026-07-18

- Form tại `#trial-registration` dùng cùng service/Zod/Server Action với route đăng ký và redirect success về section.
