# Task 07 — Database và form

## Bảng tối thiểu

- courses
- course_categories
- course_registrations
- experts
- consultation_requests
- post_categories
- posts
- resources
- testimonials
- faqs
- contact_requests

> Schema catalog khóa học (`program_categories`, `course_categories`, `courses` và bốn bảng nội dung con) đã được thực hiện sớm trong Task 03 và đang hoạt động trực tiếp trên Supabase. Task 07 không tạo trùng các bảng này; chỉ bổ sung bảng form/Auth/nội dung còn thiếu và hoàn thiện chính sách quản trị.

## Công việc

- [x] Tạo Supabase project.
- [ ] Thiết kế schema còn lại (schema khóa học đã hoàn thành ở Task 03).
- [x] Tạo file mẫu và cấu hình biến môi trường local (`.env.local` không commit).
- [x] Tạo server client cho catalog khóa học.
- [x] Tạo validation schemas.
- [x] Kết nối form đăng ký học.
- [x] Kết nối form tư vấn.
- [x] Kết nối form liên hệ.
- [ ] Thiết lập RLS phù hợp.

## Tiêu chí

- Public chỉ được insert vào các form cho phép.
- Public không được đọc dữ liệu đăng ký.
- Admin mới được đọc và cập nhật dữ liệu quản trị.

## Kết quả kết nối catalog — 2026-07-18

- Project Supabase đã hoạt động và website kết nối bằng publishable key, không dùng service-role key.
- Public REST đọc được program/course theo RLS; build và runtime catalog đạt.
- RLS/schema cho form, Auth/Storage và quyền admin vẫn chưa thực hiện; không đánh dấu hoàn thành toàn bộ Task 07.

## Database chuyên gia và tư vấn

- Các bảng expert/consultation đã được tạo và seed ngoài source; Task 07 không tạo lại.
- Task 04 đã kết nối public read hồ sơ và public insert request qua RLS column grant tối thiểu.
- Task 07 sau này chỉ bổ sung Auth/admin policy và các phần database/form còn thiếu.

## Database blog

- Schema blog được quản lý ngoài source; Task 05 không tạo lại các bảng hoặc migration blog.
- Task 07 sau này chỉ bổ sung Auth và policy quản trị blog nếu cần.
- Project Supabase local hiện chưa expose các bảng blog qua REST; cần áp dụng/xác minh schema ở đúng project trước khi kiểm thử dữ liệu public.

## Database tài liệu

- Task 05 đã triển khai service/UI theo bảng `resources` được mô tả trong thiết kế kỹ thuật; không tạo schema trùng trong phiên giao diện.
- Supabase project hiện chưa có/expose `public.resources`; Task 07 cần tạo hoặc xác minh schema, RLS public read published và quyền admin sau này.

## Rà soát Task 07 — 2026-07-18

- `.env.example` chỉ chứa `NEXT_PUBLIC_SITE_URL`, Supabase URL và publishable key rỗng; không có secret/service-role.
- Server client dùng `@supabase/supabase-js` không lưu session; browser client dùng `@supabase/ssr`. Cả hai chỉ đọc publishable key từ env.
- Source thực tế chỉ có form/service/validation hoàn chỉnh cho consultation. Contact, trial, course registration, job application và resource registration chưa có schema/service/form; trạng thái này không khớp giả định “forms đã hoàn thành theo Task 05–06”.
- Consultation payload được tạo allowlist ở Server Action; không nhận `status`, `admin_note`, `created_at`, `updated_at`. Zod có trim, min/max, format và privacy consent.
- RLS publishable-key đã xác minh: đọc 4 course published; không đọc course non-published; đọc 1 expert active; không đọc expert inactive; public select consultation trả rỗng; payload truyền `status` bị HTTP 401.
- Không thể sinh database types đầy đủ: chín bảng Task 06 và các bảng Blog/Resources trả HTTP 404; OpenAPI schema yêu cầu secret API key. Không dùng secret chỉ để vượt giới hạn này.
- Checklist validation/form/RLS tổng thể giữ chưa hoàn thành vì chưa thể test thực tế các form còn lại. Lint/build đạt; build lần đầu trong sandbox lỗi Google Fonts và chạy lại có network thành công.

## Forms triển khai sớm trong Task 06

- Đã thêm Zod cho contact, trial, course registration và job application; consultation schema tiếp tục dùng từ Task 04.
- Contact/trial/course Server Actions insert payload allowlist; RLS insert/private select/forbidden status đã test thật.
- Job application code hoàn thành nhưng chưa test insert hợp lệ vì chưa có job published; RLS tổng thể vẫn giữ `[ ]`.
## Form học thử trang chủ — 2026-07-18

- Form preview đã được mở khóa và nối `trial_registrations`; không truyền cột quản trị.
