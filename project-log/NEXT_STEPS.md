# Việc tiếp theo

## Nhiệm vụ gần nhất

> Task 04 đã hoàn thành phần chức năng; không tự chuyển task. Mục Kinh nghiệm còn chờ dữ liệu khách hàng xác nhận.

## Bước gần nhất Task 04

1. Admin đối chiếu và xóa request QA `TEST_ONLY_TASK04_20260718` sau khi kiểm tra status `new`.
2. Cung cấp nội dung kinh nghiệm nếu muốn hiển thị trên `/expert`.
3. Cấu hình env trên Vercel và kiểm tra form deployment khi tới bước deploy.

## Bước vận hành catalog còn lại

1. Thay dữ liệu demo trong Supabase bằng dữ liệu khóa học, hình ảnh và giá đã duyệt.
2. Xác lập quy trình migration/baseline mới nếu cần thay đổi schema về sau.
3. Cấu hình `NEXT_PUBLIC_SUPABASE_URL`, publishable key và `NEXT_PUBLIC_SITE_URL` trên Vercel.
4. Kiểm tra lại RLS và runtime trên deployment Vercel.
5. Tiếp tục schema form/Auth/Storage khi người dùng yêu cầu Task 07.

## Chưa làm ngay

- Các phần còn lại của Task 04 cho đến khi có chỉ đạo quay lại.
- Danh sách bài và các mục sau Danh mục blog của Task 05.
- Các schema ngoài catalog, form lưu dữ liệu thật, Supabase Auth/Storage.
- Admin, AI, thanh toán hoặc LMS.
