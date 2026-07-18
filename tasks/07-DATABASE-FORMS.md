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
- [ ] Tạo validation schemas.
- [ ] Kết nối form đăng ký học.
- [x] Kết nối form tư vấn.
- [ ] Kết nối form liên hệ.
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
