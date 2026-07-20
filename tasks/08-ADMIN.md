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

- [x] Đăng nhập admin.
- [x] Bảo vệ route admin.
- [x] Dashboard số liệu cơ bản.
- [ ] CRUD khóa học.
- [ ] CRUD bài viết.
- [ ] CRUD tài liệu.
- [ ] CRUD cảm nhận.
- [ ] CRUD FAQ.
- [x] Xem đăng ký học.
- [x] Xem yêu cầu tư vấn.
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

## Kiểm tra production bằng admin session — 2026-07-20

- Supabase Auth đăng nhập thành công; `user_profiles` có đúng một hồ sơ với role `admin` và `is_active`.
- Form production `/admin/login` trả 303 tới `/admin`; session cookie mở dashboard HTTP 200 và hiển thị nút đăng xuất.
- Khi chưa đăng nhập, `/admin` vẫn redirect 307 về login; route protection được xác nhận ở cả hai phía session.
- Toàn bộ route dashboard, courses, posts, resources, testimonials, faqs, registrations và consultations trả HTTP 200 trong session admin, không rơi vào error/login state.
- Admin đọc được tám bảng quản trị qua JWT; REST trả HTTP 200/206 theo phân trang.
- Đánh dấu hoàn thành đăng nhập, bảo vệ route, dashboard, xem đăng ký và xem tư vấn.
- Chưa đánh dấu năm mục CRUD hoặc cập nhật trạng thái vì chưa chạy mutation tạo/sửa/xóa/status thực tế. Editor hiện cũng chưa có thao tác Delete và chưa quản lý quan hệ nhiều dòng.
- `npm.cmd run lint` và `npm.cmd run build`: kết quả gần nhất đều đạt ngày 2026-07-20.
