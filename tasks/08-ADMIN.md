# Task 08 — Admin cơ bản

## Routes

- `/admin/login`
- `/admin`
- `/admin/courses`
- `/admin/posts`
- `/admin/resources`
- `/admin/testimonials`
- `/admin/faqs`
- `/admin/registrations`
- `/admin/consultations`

## Công việc

- [ ] Đăng nhập admin.
- [ ] Bảo vệ route admin.
- [ ] Dashboard số liệu cơ bản.
- [ ] CRUD khóa học.
- [ ] CRUD bài viết.
- [ ] CRUD tài liệu.
- [ ] CRUD cảm nhận.
- [ ] CRUD FAQ.
- [ ] Xem đăng ký học.
- [ ] Xem yêu cầu tư vấn.
- [ ] Cập nhật trạng thái.

## Không làm

- Phân quyền nhiều cấp.
- Biểu đồ phức tạp.
- Báo cáo doanh thu.
- Export nâng cao.

## Kết quả triển khai 2026-07-18

- Đã tạo toàn bộ route bắt buộc, login/logout bằng Supabase Auth và bảo vệ route phía server qua `user_profiles`.
- Đã tạo admin layout responsive, dashboard count, list/search/filter/pagination, editor whitelist và status action.
- Cảm nhận không thể publish khi chưa xác nhận consent; tài nguyên chỉ nhận URL.
- Lint/build đạt. Chưa đánh dấu checklist vì chưa có admin session để kiểm tra Auth và mutation thực tế.
- Runtime chưa đăng nhập: `/admin/login` HTTP 200 có form/noindex; `/admin` redirect 307 tới `/admin/login`.
- Editor quan hệ nhiều dòng chưa hoàn tất; Task 08 vẫn chưa hoàn thành.
