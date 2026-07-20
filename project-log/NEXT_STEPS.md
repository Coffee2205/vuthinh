# Việc tiếp theo

## Task 08 — mutation còn lại sau khi có admin session

1. Tạo và cập nhật một bản ghi QA có thể xóa/hoàn tác cho từng module khóa học, bài viết, tài liệu, cảm nhận và FAQ.
2. Kiểm tra cập nhật trạng thái/ghi chú cho đăng ký học, học thử và tư vấn bằng bản ghi QA, không sửa dữ liệu khách hàng thật.
3. Bổ sung thao tác Delete hoặc thống nhất dùng archive để hoàn tất ý nghĩa CRUD.
4. Hoàn thiện editor quan hệ nhiều dòng và selector danh mục thay cho nhập UUID thủ công.
5. Chỉ đánh dấu các mục CRUD/status sau khi xác minh RLS và mutation production thành công.

## Task 09 — bước tiếp theo 2026-07-20

1. Rà soát trực quan production ở desktop, tablet và mobile; kiểm tra menu bằng thao tác thật.
2. Dùng một đăng ký thật được chủ sở hữu cho phép để test form/validation production, sau đó đối chiếu bản ghi trong admin hoặc Supabase.
3. Đăng nhập tài khoản admin active để kiểm tra role protection và mutation thực tế.
4. Tách/xác nhận các thay đổi Task 08 đang có trong worktree, commit/push Task 9 và chờ Vercel redeploy.
5. Sau deploy, xác nhận `/robots.txt`, `/sitemap.xml`, title không lặp và trang 404 tùy biến trên `vuthinh.io.vn`.
6. Bàn giao quyền GitHub, Vercel, Supabase và domain theo `docs/DEPLOYMENT_HANDOFF.md`.

## Task 08 — bước tiếp theo 2026-07-18

1. Chủ dự án tạo/xác nhận Supabase Auth user và `user_profiles` role `admin`, trạng thái active.
2. Kiểm tra login/logout, route protection và RLS bằng tài khoản đó.
3. Kiểm tra từng CRUD/status mutation và hoàn thiện editor quan hệ nhiều dòng.
4. Chỉ sau kiểm tra thực tế mới đánh dấu Task 08; không bắt đầu Task 09.

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
## Sau Task 06

1. Admin xóa ba bản ghi QA `Codex QA Task 06` sau khi đối chiếu trạng thái mặc định.
2. Thêm story có consent và job published để kiểm tra card/detail/job application hợp lệ.
3. Cung cấp contact settings thật và nội dung privacy/terms đã được tư vấn pháp lý duyệt.
4. Không bắt đầu Task 07/08 cho đến khi người dùng yêu cầu.
## Sau khi kích hoạt form trang chủ

1. Admin xóa bản ghi QA Task 06 sau đối chiếu.
2. Kiểm tra submission thật trên Vercel khi cấu hình env production.
