# Quy tắc nghiệp vụ

## Dữ liệu khóa học

Mỗi khóa học tối thiểu có:

- Tên.
- Slug duy nhất.
- Ảnh đại diện.
- Mô tả ngắn.
- Nội dung chi tiết.
- Đối tượng.
- Trình độ.
- Thời lượng.
- Hình thức học.
- Học phí hoặc trạng thái `Liên hệ`.
- Trạng thái hiển thị.
- Danh mục.

Không hiển thị khóa học ở trạng thái nháp.

## Chuyên gia

Giai đoạn 1 chỉ có một chuyên gia.

Trang chuyên gia hiển thị:

- Họ tên.
- Chức danh.
- Ảnh.
- Tiểu sử.
- Kinh nghiệm.
- Chuyên môn.
- Chứng chỉ nếu có.
- Dịch vụ tư vấn.
- CTA đăng ký tư vấn.

Kiến trúc dữ liệu vẫn cho phép thêm nhiều chuyên gia sau này.

## Blog

Mỗi bài viết có:

- Tiêu đề.
- Slug duy nhất.
- Tóm tắt.
- Ảnh.
- Nội dung.
- Danh mục.
- Trạng thái.
- Ngày xuất bản.
- Tác giả.

Chỉ bài `published` và có ngày xuất bản hợp lệ mới xuất hiện công khai.

## Tài liệu miễn phí

Mỗi tài liệu có:

- Tên.
- Mô tả.
- Ảnh.
- Loại tài liệu.
- Link xem hoặc tải.
- Trạng thái.

Không upload video lớn trực tiếp lên server.

## Form

Mọi form phải:

- Kiểm tra trường bắt buộc.
- Kiểm tra email đúng định dạng.
- Kiểm tra số điện thoại cơ bản.
- Chống submit nhiều lần.
- Có trạng thái loading.
- Có thông báo thành công/thất bại.
- Không để lộ lỗi kỹ thuật chi tiết cho người dùng.

## Admin

Admin có thể:

- Quản lý khóa học.
- Quản lý bài viết.
- Quản lý tài liệu.
- Quản lý cảm nhận.
- Quản lý FAQ.
- Xem đăng ký học.
- Xem yêu cầu tư vấn.
- Thay đổi trạng thái xử lý.

Không triển khai phân quyền nhiều cấp ở Giai đoạn 1.

## SEO

Mỗi trang cần:

- Title riêng.
- Description riêng.
- URL rõ nghĩa.
- Heading đúng thứ tự.
- Ảnh có alt.
- Open Graph cơ bản.
- Sitemap.
- robots.txt.

## Bảo mật

- Không đưa khóa bí mật vào frontend.
- Dùng biến môi trường.
- Kiểm tra quyền admin ở server.
- Không tin dữ liệu gửi từ client.
- Không cho phép HTML tùy ý nếu chưa sanitize.
