# Task 05 — Blog và tài liệu

## Routes

- `/blog`
- `/blog/[slug]`
- `/resources`

## Công việc

- [x] Danh mục blog.
- [x] Danh sách bài.
- [x] Chi tiết bài.
- [x] Bài liên quan.
- [x] Danh sách tài liệu.
- [x] Link xem/tải.
- [x] CTA đến khóa học/tư vấn.

## Tiêu chí

- Nội dung tối ưu đọc trên mobile.
- Không upload video lớn vào Supabase.
- Metadata động cho bài viết.

## Kết quả thực hiện — Khung danh mục Blog

- Trạng thái: chưa hoàn thành mục Danh mục blog vì chưa có taxonomy hoặc bài viết thật; checkbox giữ `[ ]`.
- File tạo: `src/app/blog/page.tsx`, `src/components/blog/BlogCategoriesSection.tsx`, `src/data/blog.ts`.
- File sửa: `tasks/04-EXPERT-CONSULTATION.md`, `tasks/05-BLOG-RESOURCES.md` và các project log liên quan.
- Quyết định: tạo `/blog` với empty state minh bạch; không tự dùng ba định hướng 70/20/10 làm tên danh mục chính thức và không tạo bài viết giả.
- Responsive: nội dung mobile-first; danh sách thông tin cần cung cấp chuyển hai cột từ `sm` và ba cột từ `lg`.
- Accessibility: một `h1`, heading đúng thứ tự, section có `aria-labelledby`, danh sách semantic và chi tiết trang trí được ẩn khỏi assistive technology.
- Giới hạn: `ISSUE-014` tiếp tục Open; chưa làm các mục Danh sách bài trở đi hoặc route `/resources`.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt và `/blog` được prerender tĩnh; production runtime `/blog` trả HTTP 200, có đủ trạng thái chờ, danh sách thông tin cần xác nhận và ghi chú taxonomy.

## Kết quả triển khai module Blog — 2026-07-18

- Đã tạo types/service và route động `/blog`, `/blog/[slug]` theo luồng Page → blog service → Supabase server client.
- `/blog` có hero, bài nổi bật, danh mục active, filter URL, grid responsive, empty state và CTA khóa học/tư vấn.
- Chi tiết có Markdown an toàn qua `react-markdown`/`remark-gfm`, metadata động, breadcrumb, tag, tác giả, nguồn, khóa học, dịch vụ và bài liên quan.
- Có loading, error và not-found; không hard-code bài viết hoặc tự tạo schema/migration blog.
- Supabase hiện trả HTTP 404 cho cả bảy bảng blog nên chưa thể xác nhận 4 bài mẫu hoặc runtime dữ liệu; theo dõi tại `ISSUE-021`.
- `/resources` và hai mục tài liệu vẫn chưa thực hiện, đúng phạm vi phiên này.
- Kiểm tra code: lint đạt; production build đạt ngày 2026-07-18. Build trong sandbox lần đầu bị Google Fonts network, chạy lại có network đạt.

## Kết quả triển khai Tài liệu miễn phí — 2026-07-18

- Theo chỉ đạo người dùng, tạm bỏ qua blocker Kinh nghiệm của Task 04 và tiếp tục Task 05.
- Đã tạo `/resources` với danh sách tài liệu published từ `resource.service`, card responsive, ảnh/placeholder, loại tài liệu, link xem/tải và empty state.
- URL tài liệu chỉ chấp nhận HTTP/HTTPS; link ngoài mở tab mới với `noopener noreferrer`; bản ghi thiếu link hiển thị trạng thái đang cập nhật.
- Có loading/error boundary và metadata riêng; route dùng dynamic rendering để build không phụ thuộc database runtime.
- Supabase hiện trả HTTP 404 vì chưa có `public.resources`; chưa kiểm tra được link dữ liệu thật. Blocker được theo dõi tại `ISSUE-031`.
- File tạo: `src/types/resource.ts`, `src/services/resource.service.ts`, `src/components/resources/ResourceCard.tsx`, `src/app/resources/page.tsx`, `loading.tsx`, `error.tsx`.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt và `/resources` là dynamic route.

## Hoàn thiện module Resources theo database — 2026-07-18

- Đã bổ sung `getActiveResourceCategories`, filter category qua URL, `getPublishedResources`, `getResourceBySlug` và `createResourceDownloadEvent`.
- Tạo `/resources/[slug]` với metadata, not-found/loading, tác giả, file type, access type và tối đa các khóa học do `resource_courses` liên kết.
- Tài nguyên `public` dùng Server Action: kiểm tra lại slug/bản ghi published/access type, ghi event rồi mới redirect tới URL HTTP/HTTPS.
- Tài nguyên `registration_required` không lộ link; không tạo form newsletter/thu lead vì Task 05 không định nghĩa trường và quy trình xử lý.
- Không update `download_count` từ client, không dùng service-role và không hard-code tài nguyên.
- Supabase project đang cấu hình vẫn trả HTTP 404 cho cả bốn bảng Resources; source/build hoàn thành nhưng dữ liệu, nested relation, RLS insert event và redirect thật chưa thể kiểm tra runtime.
- Kiểm tra: lint đạt; build đạt; `/resources` và `/resources/[slug]` đều là dynamic routes.

## Tích hợp ảnh bài viết từ Supabase Storage — 2026-07-21

- Bucket public `Public-Media` được dùng cho media website; bốn ảnh trong thư mục `post` đã được xác minh trả HTTP 200 và đúng MIME ảnh.
- Thêm cấu hình ánh xạ slug bài viết sang object path tại `src/config/public-media.ts`; service ưu tiên `cover_image_url` trong database và chỉ dùng ảnh Storage đã xác nhận khi cột này đang trống.
- URL public được tạo từ `NEXT_PUBLIC_SUPABASE_URL`, có encode từng segment và không chứa project URL hoặc key hard-code.
- Bổ sung alt text mô tả cho cả bốn ảnh. Chưa ánh xạ khóa học, chuyên gia, tài liệu và câu chuyện vì chưa có danh sách tên file tương ứng.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt ngày 2026-07-21, toàn bộ route compile và TypeScript thành công.
- Runtime production local có kết nối Supabase: `/blog` và `/blog/hsk-la-gi-va-nen-bat-dau-tu-cap-do-nao` trả HTTP 200; HTML có URL `Public-Media/post`, tên file HSK và alt text tương ứng.
- Sửa lỗi hiển thị ngày 2026-07-21: Supabase Storage phân biệt hoa/thường, object thật nằm trong `post` thay vì `Post`; endpoint tối ưu ảnh Next.js hiện trả HTTP 200 và `image/jpeg`.

## Gỡ trang Tài liệu — 2026-07-21

- Theo yêu cầu người dùng, xóa route public `/resources`, `/resources/[slug]` và các loading/error/not-found/action đi kèm.
- Header, sitemap và khối kiến thức trang chủ không còn liên kết tới tài liệu; khối này chỉ giữ Blog.
- Giữ `/admin/resources`, service/type/component và dữ liệu Supabase để không xóa dữ liệu hoặc khả năng quản trị.
- Lint/build đạt; production build không còn route public Resources.

## Bộ 20 bài viết về lợi ích học tiếng Trung — 2026-07-26

- Tạo migration `supabase/migrations/202607260001_seed_20_chinese_learning_benefit_posts.sql` gồm 20 bài Markdown nguyên bản, metadata SEO, excerpt, thời gian đọc và ngày xuất bản.
- Bổ sung danh mục `Lợi ích học tiếng Trung`; liên kết tác giả active theo slug `vu-thinh`, không hard-code UUID production.
- Migration chạy lại an toàn bằng `ON CONFLICT (slug) DO UPDATE` và tự kiểm tra đủ 20 bài trước khi commit transaction.
- LearnIT4students chỉ được tham khảo cách tổ chức dạng cẩm nang; không sao chép nội dung. Ảnh bìa giữ `null` vì chưa có tài sản được xác nhận quyền sử dụng.
- Chưa áp dụng migration lên production; nội dung cần chủ sở hữu/chuyên môn duyệt trước khi chạy trong Supabase SQL Editor.
- Kiểm tra: đủ 20 slug và 20 khối Markdown; `git diff --check`, `npm.cmd run lint` và `npm.cmd run build` đều đạt.

## Ánh xạ ảnh Storage cho 9 bài Blog mới — 2026-07-26

- Đọc trực tiếp `Public-Media/post` và đối chiếu tên object với slug/title trong `blog_posts`.
- Bổ sung 9 ánh xạ vào `src/config/public-media.ts`: nghề nghiệp, sinh viên, người đi làm, văn hóa, du lịch, chữ Hán, trẻ em, nguồn tài liệu và thương mại.
- Giữ nguyên tên object thực tế, bao gồm `loi-ich-tieng-tung-voi-sinh-vien.jpg` và `vi-sao-len-hoc-tieng-trung.jpg`; không đổi tên hoặc xóa file trên Storage.
- Service tiếp tục ưu tiên `cover_image_url` do admin lưu; mapping chỉ làm fallback khi database đang để trống.
- 9/9 URL public trả HTTP 200 và đúng MIME ảnh; lint/build đạt.
- 11 bài còn lại trong bộ 20 bài chưa có object ảnh tương ứng trong `Public-Media/post`.
