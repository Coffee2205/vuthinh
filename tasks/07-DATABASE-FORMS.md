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

> Schema catalog khóa học (`program_categories`, `course_categories`, `courses` và bốn bảng nội dung con) đã được thực hiện sớm trong Task 03 bằng migration `202607180001_create_course_catalog.sql`. Task 07 không tạo trùng các bảng này; chỉ áp migration lên project Supabase, bổ sung bảng form/Auth/nội dung còn thiếu và hoàn thiện chính sách quản trị.

## Công việc

- [ ] Tạo Supabase project.
- [ ] Thiết kế migration/schema còn lại (schema khóa học đã hoàn thành ở Task 03).
- [x] Tạo file mẫu biến môi trường (`.env.example`; chưa có env thật).
- [x] Tạo server client cho catalog khóa học.
- [ ] Tạo validation schemas.
- [ ] Kết nối form đăng ký học.
- [ ] Kết nối form tư vấn.
- [ ] Kết nối form liên hệ.
- [ ] Thiết lập RLS phù hợp.

## Tiêu chí

- Public chỉ được insert vào các form cho phép.
- Public không được đọc dữ liệu đăng ký.
- Admin mới được đọc và cập nhật dữ liệu quản trị.
