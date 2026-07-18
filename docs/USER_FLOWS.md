# Luồng hoạt động của website

## 1. Luồng tìm hiểu và đăng ký khóa học

1. Người dùng vào Trang chủ.
2. Xem lợi ích, chương trình và khóa học nổi bật.
3. Truy cập danh sách hoặc chi tiết khóa học.
4. Chọn `Đăng ký học` hoặc `Đăng ký học thử`.
5. Điền thông tin:
   - Họ tên.
   - Số điện thoại.
   - Email.
   - Độ tuổi học viên.
   - Khóa học quan tâm.
   - Ghi chú.
6. Hệ thống kiểm tra dữ liệu.
7. Hệ thống lưu đăng ký.
8. Người dùng nhận thông báo gửi thành công.
9. Admin thấy đăng ký mới trong dashboard.
10. Admin cập nhật trạng thái:
    - Mới.
    - Đã liên hệ.
    - Đã đăng ký.
    - Hủy.

## 2. Luồng đăng ký tư vấn

1. Người dùng xem trang chuyên gia hoặc CTA tư vấn.
2. Mở trang đăng ký tư vấn.
3. Điền:
   - Họ tên.
   - Số điện thoại.
   - Email.
   - Đối tượng cần tư vấn.
   - Mục tiêu học tập.
   - Khó khăn hiện tại.
   - Ngày mong muốn.
   - Khung giờ mong muốn.
   - Hình thức online/offline.
   - Dịch vụ quan tâm, nếu đã xác định.
   - Đồng ý chính sách bảo mật.
4. Hệ thống kiểm tra dữ liệu.
5. Server kiểm tra lại chuyên gia và dịch vụ active.
6. Lưu yêu cầu ở trạng thái `Mới` do database tự đặt.
7. Hiển thị xác nhận đã ghi nhận yêu cầu, chưa phải lịch hẹn.
8. Admin/chuyên gia liên hệ xác nhận thủ công.
9. Admin cập nhật trạng thái:
   - Mới.
   - Đã liên hệ.
   - Đã xác nhận.
   - Hoàn thành.
   - Hủy.

Giai đoạn 1 không khóa lịch realtime và không tự động chống trùng lịch.

## 3. Luồng đọc blog và tài liệu

1. Người dùng truy cập Blog hoặc Tài liệu.
2. Lọc theo danh mục nếu có.
3. Mở bài viết/tài liệu.
4. Xem nội dung.
5. Chọn CTA phù hợp:
   - Xem khóa học.
   - Đăng ký học thử.
   - Đăng ký tư vấn.

## 4. Luồng quản trị nội dung

1. Admin đăng nhập.
2. Truy cập dashboard.
3. Chọn module.
4. Thêm/sửa/xóa/ẩn-hiện nội dung.
5. Hệ thống xác nhận dữ liệu.
6. Lưu thay đổi.
7. Trang public phản ánh nội dung mới.

## 5. Luồng liên hệ

1. Người dùng vào trang Liên hệ.
2. Chọn gọi điện, Zalo, Facebook hoặc gửi form.
3. Với form:
   - Điền họ tên, liên hệ, chủ đề, nội dung.
   - Gửi dữ liệu.
4. Admin nhận và xử lý thủ công.

## 6. Nguyên tắc CTA

Mỗi trang public phải có ít nhất một CTA chính:

- Đăng ký học thử.
- Đăng ký khóa học.
- Đăng ký tư vấn.
- Liên hệ.

Không đặt quá nhiều CTA có cùng mức độ nổi bật trong một section.
