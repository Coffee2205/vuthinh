# Việc tiếp theo

## Nhiệm vụ gần nhất

> Task 04 đã hoàn thành phần chức năng; không tự chuyển task. Mục Kinh nghiệm còn chờ dữ liệu khách hàng xác nhận.

> Theo chỉ đạo mới ngày 2026-07-18, tạm bỏ qua Task 04 và tiếp tục Task 05. Task 04 không được đánh dấu hoàn thành.

## Bước gần nhất Task 05

1. Tạo/xác minh bảng `public.resources` trong đúng Supabase project và RLS public read cho bản ghi published.
2. Thêm ít nhất một tài liệu có quyền phân phối cùng link HTTP/HTTPS hợp lệ để kiểm tra runtime.
3. Kiểm tra `/resources` trên desktop/tablet/mobile và link thật sau khi database sẵn sàng.
4. Sau khi REST nhận diện bảng, kiểm tra một resource public, một resource registration-required, course relation và insert download event bằng publishable key.

## Bước gần nhất Task 05

1. Xác minh schema/seed blog đã được chạy trong đúng Supabase project `izgxirozmrrqyohqeqvq` và public select policy đã tồn tại.
2. Kiểm tra 4 slug mẫu, category filter và toàn bộ relation sau khi REST nhận diện bảng.
3. Bổ sung ảnh cover/OG được phép sử dụng và chuyên gia kiểm duyệt nội dung trước production.
4. Tiếp tục `/resources` chỉ khi người dùng yêu cầu trong Task 05.

## Bước gần nhất Task 04

1. Admin đối chiếu và xóa request QA `TEST_ONLY_TASK04_20260718` sau khi kiểm tra status `new`.
2. Cung cấp nội dung kinh nghiệm nếu muốn hiển thị trên `/expert`.
3. Cấu hình env trên Vercel và kiểm tra form deployment khi tới bước deploy.
4. Khi có dữ liệu kinh nghiệm đã duyệt, bổ sung schema/bảng phù hợp, cập nhật type/service và section `/expert`; chưa thực hiện trước khi có dữ liệu.

## Bước vận hành catalog còn lại

1. Thay dữ liệu demo trong Supabase bằng dữ liệu khóa học, hình ảnh và giá đã duyệt.
2. Xác lập quy trình migration/baseline mới nếu cần thay đổi schema về sau.
3. Cấu hình `NEXT_PUBLIC_SUPABASE_URL`, publishable key và `NEXT_PUBLIC_SITE_URL` trên Vercel.
4. Kiểm tra lại RLS và runtime trên deployment Vercel.
5. Tiếp tục schema form/Auth/Storage khi người dùng yêu cầu Task 07.

## Chưa làm ngay

- Các phần còn lại của Task 04 cho đến khi có chỉ đạo quay lại.
- Runtime dữ liệu Blog và phần `/resources` còn lại của Task 05.
- Các schema ngoài catalog, form lưu dữ liệu thật, Supabase Auth/Storage.
- Admin, AI, thanh toán hoặc LMS.
## Bước gần nhất Task 06

1. Xác minh `NEXT_PUBLIC_SUPABASE_URL` đang trỏ tới project chứa chín bảng Support.
2. Reload PostgREST schema cache hoặc cung cấp DDL/tên cột nếu bảng ở project khác.
3. Sau khi REST đọc được bảng, triển khai lần lượt Success Stories, FAQ, Careers, Contact, Trial/Course Registration và trang pháp lý.
## Bước gần nhất Task 07

1. Cấu hình `.env.local` tới đúng project chứa toàn bộ schema hoặc expose/reload các bảng đang thiếu.
2. Sinh `database.types.ts` bằng Supabase CLI/secret ở môi trường quản trị an toàn, không đưa secret vào browser/repository.
3. Hoàn thành Task 06 forms trước, sau đó test allowlist, length, duplicate submit, public insert/private select cho từng bảng.
4. Chỉ đánh dấu RLS hoàn thành khi mọi bảng content/form đã được kiểm tra bằng publishable key.
