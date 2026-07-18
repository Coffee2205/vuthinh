# Task 06 — Các trang hỗ trợ

## Routes

- `/success-stories`
- `/faq`
- `/careers`
- `/contact`
- `/privacy-policy`
- `/terms`

## Công việc

- [ ] Thành quả học viên.
- [ ] Cảm nhận phụ huynh.
- [ ] FAQ accordion.
- [ ] Tuyển dụng.
- [ ] Liên hệ.
- [ ] Chính sách.
- [ ] Điều khoản.

## Tiêu chí

- Không hiển thị testimonial giả.
- Form liên hệ lưu dữ liệu hoặc gửi thông báo.
- Thông tin liên hệ lấy từ config chung.

## Rà soát database trước triển khai — 2026-07-18

- Supabase project trong `.env.local` trả HTTP 404 cho cả chín bảng: `success_stories`, `faq_categories`, `faqs`, `job_posts`, `job_applications`, `contact_messages`, `trial_registrations`, `course_registrations`, `site_settings`.
- Không tìm thấy schema SQL tương ứng trong repository hoặc thư mục dữ liệu local để xác minh tên cột, constraint và payload insert.
- Chưa sửa source hoặc đánh dấu checklist: việc đoán schema cho form ứng tuyển/liên hệ/đăng ký có nguy cơ insert sai hoặc mất dữ liệu.
- Cần xác minh các bảng được tạo trong đúng Supabase project đang cấu hình, reload PostgREST schema cache và cung cấp schema nếu project URL hiện tại không phải project chứa các bảng.
