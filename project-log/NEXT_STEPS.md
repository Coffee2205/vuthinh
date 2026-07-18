# Việc tiếp theo

## Nhiệm vụ gần nhất

> Task 03 đã hoàn thành phần code/schema ngày 2026-07-18. Không tự chuyển task khi chưa có chỉ đạo mới.

## Bước vận hành catalog còn lại

1. Khách hàng tạo/cấp quyền Supabase project.
2. Áp migration `202607180001_create_course_catalog.sql` và seed demo nếu cần staging.
3. Cấu hình `NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Thay seed demo bằng dữ liệu khóa học, hình ảnh và giá đã duyệt.
5. Kiểm tra RLS/query/runtime trên Supabase thực tế và thiết bị thật.

## Chưa làm ngay

- Các phần còn lại của Task 04 cho đến khi có chỉ đạo quay lại.
- Danh sách bài và các mục sau Danh mục blog của Task 05.
- Các schema ngoài catalog, form lưu dữ liệu thật, Supabase Auth/Storage.
- Admin, AI, thanh toán hoặc LMS.
