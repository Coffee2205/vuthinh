# Task 09 — Kiểm thử và deploy

## Kiểm thử

- [x] Desktop.
- [x] Tablet.
- [x] Mobile.
- [x] Menu.
- [x] Links.
- [x] Forms.
- [x] Validation.
- [x] Loading.
- [x] Error.
- [x] Empty state.
- [x] Admin protection.
- [x] SEO metadata.
- [x] 404.

## Hiệu năng

- [x] Dùng `next/image`.
- [x] Không tải ảnh quá lớn.
- [x] Hạn chế client component.
- [x] Không import thư viện thừa.

## Deploy

- [x] Push GitHub.
- [x] Deploy production.
- [x] Cấu hình environment variables.
- [x] Kết nối domain.
- [x] HTTPS.
- [x] Kiểm tra form production.
- [x] Sitemap và robots.
- [x] Bàn giao tài khoản và hướng dẫn.

## Definition of Done

Website hoạt động được trên domain thật và nhận đăng ký thực tế.

## Kết quả thực hiện — 2026-07-20

### Đã xác minh

- `https://vuthinh.io.vn` trả HTTP 200 qua HTTPS; các route public chính hoạt động và dữ liệu Supabase production tải được, xác nhận các biến môi trường bắt buộc đã được cấu hình.
- Menu desktop/mobile dùng breakpoint và hành vi HTML gốc; toàn bộ link điều hướng chính đã được đối chiếu bằng HTTP production.
- `/admin` trả redirect 307 khi chưa đăng nhập; `/admin/login` trả 200 và có `noindex`.
- URL không tồn tại trả HTTP 404. Đã bổ sung trang 404 cấp ứng dụng với CTA quay lại trang chủ/khóa học.
- Đã bổ sung `robots.ts` và `sitemap.ts`; sitemap có route tĩnh và tự thêm course/blog/resource published khi từng nguồn dữ liệu hoạt động.
- Đã loại bỏ title suffix bị lặp; root metadata tiếp tục quản lý template thương hiệu.
- Ảnh nội dung dùng `next/image`, bật tối ưu ảnh cho Supabase Storage; không có thẻ `<img>` thô.
- Client Component chỉ nằm ở form, filter, admin interaction, Supabase browser client và error boundary — các vị trí cần state/event/reset.
- Dependency trực tiếp trong `package.json` đều có import tương ứng trong source.
- Loading/error/empty state tồn tại cho các route dữ liệu động và production build nhận diện đầy đủ route.

### File đã tạo hoặc sửa

- Tạo `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/not-found.tsx`.
- Tạo `docs/DEPLOYMENT_HANDOFF.md`.
- Sửa `next.config.ts`, metadata các public page và các component ảnh.
- Sửa một so sánh field cũ trong `src/components/admin/AdminEditor.tsx` để tương thích với cấu hình admin đang thay đổi và khôi phục TypeScript build.

### Quyết định kỹ thuật

- Không để lỗi một bảng nội dung làm hỏng toàn bộ sitemap; dùng kết quả từng nguồn độc lập.
- Chỉ cho Image Optimization tải ảnh HTTPS từ Supabase, không mở wildcard host toàn Internet.
- Không gửi form QA production bằng dữ liệu giả khi chưa có quy trình xóa/đối chiếu qua tài khoản admin.

### Còn lại

- Không còn hạng mục Task 09 chưa hoàn thành.
- Nội dung/ảnh production thật vẫn cần chủ sở hữu duyệt khi bổ sung; đây là công việc vận hành nội dung, không chặn QA/deploy.

### Kiểm tra

- `npm.cmd run lint`: đạt ngày 2026-07-20.
- `npm.cmd run build`: đạt ngày 2026-07-20; TypeScript và 25 route build thành công.
- Production route audit: các route public chính HTTP 200; `/admin` 307; URL lạ 404; domain dùng HTTPS.

## Xác minh cuối sau deploy — 2026-07-20

- Commit `69124e1` đã push lên `origin/dev`; Vercel tự động triển khai lên `https://vuthinh.io.vn`.
- `/robots.txt` và `/sitemap.xml` trả HTTP 200. Sitemap có 23 URL; toàn bộ trả 200 và không có title lặp tên thương hiệu.
- Chụp trực quan trang chủ bằng browser production tại desktop 1440px, tablet 768px và mobile breakpoint 500px: layout, CTA, card và menu nằm đúng viewport.
- Form học thử production: payload thiếu/sai trả validation state HTTP 200; payload QA hợp lệ trả 303 tới success URL và tạo đúng một bản ghi.
- Bản ghi có marker `TEST_ONLY_TASK09_20260720` đã được xác minh qua admin JWT, xóa thành công HTTP 204 và kiểm tra còn lại bằng 0.
- Admin production đăng nhập thành công, role active và route protection đã xác minh.
- Không có ảnh nội dung thật được tải tại năm route chính ở thời điểm QA; source không có `<img>` thô và ảnh Supabase bắt buộc đi qua Image Optimization.
- Tài liệu bàn giao nằm tại `docs/DEPLOYMENT_HANDOFF.md`; mật khẩu/secret không được lưu trong repository. Chủ sở hữu tiếp tục giữ và quản lý quyền GitHub, Vercel, Supabase và domain.
- Task 09 hoàn thành Definition of Done: domain HTTPS hoạt động và form production nhận được đăng ký thực tế.

## Hoàn thiện SEO mục 2–4 — 2026-07-20

### Phạm vi hoàn thành

- Chuẩn hóa metadata cho public pages: title, description, canonical, Open Graph và Twitter card dùng chung qua `src/lib/seo.ts`.
- Trang chủ có metadata tuyệt đối cho thương hiệu; root layout khai báo `applicationName`, creator, publisher, metadata base và tín hiệu thương hiệu nhất quán.
- Bổ sung `generateMetadata` theo slug cho `/careers/[slug]`; course, blog, resource và expert tiếp tục đọc đúng dữ liệu Supabase hiện đang render.
- Metadata route động không tìm thấy đặt `noindex`; `/privacy-policy` tiếp tục redirect canonical sang `/privacy`; các success/admin page giữ `noindex`.
- Thêm JSON-LD Server Component an toàn, escape ký tự `<` trước khi chèn script.
- Trang chủ xuất `EducationalOrganization` và `WebSite`; organization dùng đúng khóa public trong `site_settings`, chỉ nhận social URL HTTP/HTTPS.
- Chi tiết khóa học xuất `Course`, bài blog xuất `Article`, chuyên gia xuất `Person`, FAQ xuất `FAQPage` từ đúng dữ liệu đang hiển thị.

### File tạo hoặc sửa

- Tạo `src/lib/seo.ts`, `src/components/common/JsonLd.tsx`.
- Sửa root layout, trang chủ và metadata các public list/form/legal pages.
- Sửa route động course, blog, resource, expert, careers và FAQ để bổ sung metadata/JSON-LD phù hợp.
- Không sửa sitemap, robots, database, admin hoặc nội dung nghiệp vụ.

### Quyết định kỹ thuật

- Không tự tạo logo, địa chỉ, social profile, rating, lịch khai giảng hoặc dữ liệu doanh nghiệp chưa có.
- `Course` chỉ có `Offer` khi giá là số thật; `Article`, `Person` và `FAQPage` chỉ xuất field hiện diện trong type/service.
- Không thêm `JobPosting` trong phiên này vì yêu cầu structured data ưu tiên course/post/FAQ/expert và dữ liệu job hiện chưa đủ để mở rộng an toàn.

### Vấn đề còn lại

- Database hiện chưa có blog post published trong sitemap nên `Article` đã lint/build nhưng chưa có bản ghi thật để kiểm tra runtime HTML.
- Chưa có logo/OG image thương hiệu chính thức; không tạo hoặc dùng ảnh giả trong metadata.

### Kiểm tra

- `npm.cmd run lint`: đạt.
- `npm.cmd run build`: đạt; 25 route build thành công.
- Runtime production build local: 16 public route HTTP 200 và đều có canonical, description, Open Graph, Twitter.
- JSON-LD parse thành công: `EducationalOrganization`, `WebSite`, `Course`, `Person`, `FAQPage`.

## Bổ sung bộ nhận diện logo — 2026-07-20

- Đã đưa ba logo chính thức vào `public/images/brand` với tên file ổn định.
- Logo biểu tượng nền trong suốt dùng ở Header và favicon; logo có chữ nền trong suốt dùng ở Footer; logo có chữ nền trắng dùng làm ảnh Open Graph/Twitter mặc định và `EducationalOrganization.logo`.
- `npm.cmd run lint`: đạt.
- `npm.cmd run build`: đạt; TypeScript và 25 route build thành công.

### Favicon thương hiệu

- Đã thay `src/app/favicon.ico` mặc định bằng `src/app/icon.png` 512×512 tạo từ logo biểu tượng chính thức.
- Next.js nhận diện `/icon.png`; lint và build đạt.

## Hoàn thiện SEO on-page và structured data — 2026-07-20

### Đã hoàn thành

- Root metadata dùng domain từ `NEXT_PUBLIC_SITE_URL`, fallback `https://vuthinh.io.vn`; title mặc định là `Vũ Thịnh – Giáo dục tiếng Trung và phát triển bản thân` và description bao quát tiếng Trung, HSK, kỹ năng sống, quản lý cảm xúc, tư vấn học tập.
- Root khai báo index/follow; admin và admin login giữ noindex/nofollow, có canonical riêng để không kế thừa canonical trang chủ.
- H1 trang chủ được làm rõ lĩnh vực giáo dục tiếng Trung và phát triển bản thân; Header bổ sung link nội bộ mô tả rõ tới `/courses`.
- Thêm component `BreadcrumbJsonLd` tái sử dụng qua breadcrumb giao diện cho course, blog và resource detail; schema dùng URL tuyệt đối và dữ liệu title/slug đang render.
- Giữ nguyên Organization, WebSite, Article, Course, Person và FAQPage từ dữ liệu thật; không thêm rating, review hoặc số liệu giả.
- Blog detail không có cover vẫn dùng ảnh Open Graph thương hiệu mặc định.

### Kiểm tra

- `npm.cmd run lint`: đạt.
- `npm.cmd run build`: đạt; 25 route và `/icon.png` build thành công.
- Project không có test script riêng.
- Runtime local production: `/`, `/about`, `/courses`, một course detail, `/blog`, một blog detail, `/robots.txt`, `/sitemap.xml`, `/admin/login` đều HTTP 200.
- Các page HTML được kiểm tra có đúng một H1, description và canonical; public index/follow, admin login noindex/nofollow; Course/Article detail có BreadcrumbList hợp lệ.

### Favicon trong kết quả tìm kiếm

- Chuyển favicon sang URL ổn định `/favicon.png`, PNG vuông 512×512 và khai báo `rel="icon"`/`apple-touch-icon` trong root metadata.
- Trang chủ và favicon đều được robots cho phép crawl; cần yêu cầu Google index lại trang chủ và chờ hệ thống xử lý.

## Cấu hình ảnh Storage chặt hơn — 2026-07-21

- `next.config.ts` chỉ cho Image Optimizer tải đúng hostname Supabase hiện tại và pathname `/storage/v1/object/public/Public-Media/**`.
- Server Action cho phép payload 6 MB để validation ứng dụng giới hạn ảnh ở 5 MB.
- Course, Blog, Resource, Expert và Success Story chuẩn hóa URL/path trước khi render hoặc tạo metadata; URL ngoài được giữ tương thích và bỏ optimizer khi hostname không được allowlist.
- Không dùng Supabase Image Transformation và chưa chuyển đổi WebP tự động; file JPG/PNG/WebP hợp lệ được giữ nguyên để tránh thêm dependency/crop ngoài ý muốn.
## Logo màu từ `images (1).png` — 2026-07-21

- [x] Đưa asset vào thư mục brand với tên ổn định.
- [x] Dùng thống nhất cho Header, Footer, metadata, favicon và structured-data logo.
- [x] Xử lý nền đen bằng crop tròn, không chỉnh sửa ảnh gốc.
- [x] Lint/build đạt; chưa commit và chưa push.
## Header Dark purple-grey — 2026-07-21

- [x] Nền Header/menu mobile `#3D3242`.
- [x] Chữ, hover, focus và viền đạt độ tương phản trên nền tối.
- [x] Lint/build đạt; chưa commit và chưa push.
- [x] Logo Header/Footer crop chính giữa, bỏ phần thừa đầu trên/dưới; lint/build đạt.
