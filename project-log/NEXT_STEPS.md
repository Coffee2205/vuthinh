# Việc tiếp theo

## Sau cập nhật hồ sơ giảng viên — 2026-07-23

1. Chủ dự án duyệt và áp dụng `supabase/migrations/202607230001_update_lecturer_profile.sql` bằng quy trình có quyền quản trị.
2. Sau migration, xác minh record `vu-thinh`; chỉ bỏ lớp chiếu dữ liệu trong service khi database đã đồng bộ hoặc có admin hồ sơ ở task riêng.
3. Không chuyển sang task khác nếu chưa có yêu cầu mới.

## Sau tinh gọn trang chủ — 2026-07-22

- Không có bước kỹ thuật bắt buộc còn lại cho yêu cầu này; chỉ cần deploy khi người dùng muốn đưa thay đổi lên production.

## Sau triển khai media admin — 2026-07-21

1. Áp dụng migration `202607210001_configure_public_media_storage.sql` vào Supabase production.
2. Đăng nhập admin và chạy QA có thể hoàn tác cho create/replace/remove ở courses, posts, resources và testimonials.
3. Xác minh object nằm đúng folder record UUID, database lưu path, ảnh cũ bị xóa sau DB success và anonymous mutation bị từ chối.
4. Chỉ đánh dấu phần media/CRUD hoàn thành sau khi QA thật đạt; expert chưa có admin editor nên không mở module mới.

## Sau tích hợp Public-Media — 2026-07-21

1. Cung cấp tên file trong các thư mục chuyên gia, tài liệu và câu chuyện để ánh xạ theo slug/bản ghi.
2. Khi có quyền admin phù hợp, lưu URL ảnh trực tiếp vào các cột media trong database; service hiện ưu tiên dữ liệu database.

## Sau SEO mục 2–4

1. Deploy thay đổi SEO khi người dùng yêu cầu và kiểm tra HTML production sau deploy.
2. Khi có blog post published thật, xác minh `Article` JSON-LD bằng URL đó; không tạo bài giả để test.
3. Chỉ bổ sung logo/OG image organization khi chủ sở hữu cung cấp tài sản chính thức và quyền sử dụng.
4. Không tự chuyển sang các phần SEO khác ngoài metadata, thương hiệu và JSON-LD.

## Sau khi hoàn thành Task 09

1. Không còn bước kỹ thuật bắt buộc của Task 09.
2. Chủ sở hữu đổi mật khẩu admin đã dùng trong phiên QA và tiếp tục quản lý quyền GitHub/Vercel/Supabase/domain.
3. Khi bổ sung ảnh/nội dung production thật, kiểm tra quyền sử dụng, dung lượng và hiển thị responsive trước khi publish.
4. Task 08 vẫn còn mutation CRUD/status; chỉ tiếp tục khi người dùng yêu cầu quay lại Task 08.

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

## Sau cập nhật logo

1. Push commit logo để Vercel triển khai, sau đó kiểm tra Header/Footer và ảnh chia sẻ trên domain production.
2. Sau deploy, tải lại cứng hoặc xóa cache favicon nếu tab vẫn hiện icon cũ.

## Sau SEO on-page

1. Gửi sitemap production trong Google Search Console và yêu cầu index các URL ưu tiên.
2. Theo dõi Page indexing, Rich results và Core Web Vitals sau khi Google crawl lại.
3. Dùng URL Inspection yêu cầu index lại trang chủ để Google cập nhật favicon; thời gian xử lý có thể từ vài ngày đến vài tuần.

## Sau cập nhật ảnh chuyên gia

1. Deploy thay đổi và kiểm tra crop ảnh tại trang chủ cùng `/expert` trên mobile, tablet và desktop production.
2. Nếu muốn quản lý ảnh hoàn toàn qua admin, upload ảnh này vào folder expert của `Public-Media` và lưu path vào `experts.avatar_url`; ảnh local hiện vẫn là fallback an toàn.

## Sau cập nhật ảnh HSK 5 và HSK 6

1. Deploy source mới và kiểm tra card/hero ảnh của `/courses`, `/courses/luyen-thi-hsk-5` và `/courses/luyen-thi-hsk-6` trên production.
2. Có thể lưu trực tiếp `courses/hsk5.jpg` và `courses/hsk6.jpg` vào `thumbnail_url` qua admin để database trở thành nguồn cấu hình duy nhất; mapping hiện tại tiếp tục là fallback.

## Sau cập nhật ảnh nền đầu trang

1. Deploy và kiểm tra trực quan các route đại diện `/about`, `/courses`, course detail, `/blog`, blog detail, `/expert`, `/consultation`, `/privacy` trên mobile/desktop.
2. Xác nhận `/admin/login` và dashboard admin không nhận ảnh nền public.

## Sau khi gỡ Programs và Resources public

1. Sau deploy, xác nhận `/programs`, `/resources` và resource detail cũ trả 404.
2. Kiểm tra Header/Footer/Home/Sitemap production không còn link tới hai route; `/courses` và `/blog` tiếp tục HTTP 200.
