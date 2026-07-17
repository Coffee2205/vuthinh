# Việc tiếp theo

## Nhiệm vụ gần nhất

> Chờ dữ liệu khóa học đã được khách hàng xác nhận, sau đó chỉ thực hiện phần “Danh sách khóa học”; chưa làm chi tiết khóa học hoặc các phần khác.

Khách hàng có thể dùng `docs/CONTENT_REQUIREMENTS.md` làm checklist bàn giao. Ưu tiên trước mắt là các mục P0, đặc biệt toàn bộ khóa học đang tuyển sinh, thông tin thương hiệu/liên hệ, hồ sơ chuyên gia và xác nhận tên miền.

## Thứ tự thực hiện

1. Nhận tối thiểu tên, slug, nhóm, mô tả, đối tượng, mục tiêu, nội dung, thời lượng, hình thức, học phí/trạng thái Liên hệ và trạng thái xuất bản.
2. Xác nhận nội dung được phép công bố và chỉ hiển thị bản ghi có trạng thái xuất bản phù hợp.
3. Triển khai danh sách từ dữ liệu đã duyệt; chưa làm chi tiết khóa học, CTA, empty state hoặc metadata động trong cùng phần.
4. Kiểm tra responsive/accessibility, link, lint/build/runtime.
5. Cập nhật task/log, commit và push trước khi chuyển section.

## Chưa làm ngay

- Chi tiết khóa học và các phần sau danh sách khóa học của Task 03.
- Không chuyển sang Empty state để né blocker nếu chưa có chỉ đạo thực hiện mục đó.
- Database, form lưu dữ liệu thật và Supabase.
- Admin, AI, thanh toán hoặc LMS.
