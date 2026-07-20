# Changelog

## 2026-07-20 — SEO metadata, thương hiệu và JSON-LD

- Added: SEO config dùng chung và JSON-LD component an toàn.
- Changed: metadata/canonical/Open Graph/Twitter cho public pages; careers detail dùng metadata theo slug.
- Added: EducationalOrganization/WebSite, Course, Article, Person và FAQPage structured data từ dữ liệu thật.
- Verified: lint/build đạt; 16 public route runtime có metadata đầy đủ; năm nhóm JSON-LD khả dụng parse hợp lệ, trừ Article chưa có bản ghi published để chạy runtime.

## 2026-07-20 — Hoàn thành Task 09

- Deployed: commit `69124e1` qua Vercel; robots, sitemap, metadata và 404 mới đã live.
- Verified: ba viewport browser, 23 URL sitemap, form validation/submission production, admin protection và cleanup QA.
- Handoff: thêm hướng dẫn vận hành/tài khoản; không lưu credential hoặc secret trong repository.
- Status: Task 09 hoàn thành Definition of Done.

## 2026-07-20 — Xác minh admin production

- Verified: Supabase Auth, hồ sơ role admin active, login Server Action 303, dashboard/session HTTP 200 và unauthenticated redirect.
- Verified: toàn bộ route courses/posts/resources/testimonials/faqs/registrations/consultations tải HTTP 200 trong admin session.
- Changed docs: đánh dấu login, protection, dashboard và hai trang request đã hoàn thành.
- Remaining: mutation CRUD/status, Delete/archive và editor quan hệ nhiều dòng.

## 2026-07-20 — Task 09 QA và chuẩn bị redeploy

- Added: sitemap động chịu lỗi từng nguồn, robots, trang 404 và hướng dẫn bàn giao production.
- Changed: loại bỏ title thương hiệu bị lặp; bật Next Image Optimization cho ảnh Supabase.
- Verified: production domain/HTTPS/routes/admin redirect/404; ESLint và production build đạt.
- Remaining: browser QA ba viewport, form production + admin session, kiểm tra kích thước ảnh thật, commit/push/redeploy và bàn giao tài khoản.

## 2026-07-18 — Task 08 admin foundation

- Added: Supabase cookie auth, login/logout, server guard, responsive shell và toàn bộ route bắt buộc.
- Added: dashboard, list/search/filter/pagination, whitelisted editor và request status actions.
- Changed: ẩn public Header/Footer khi render admin shell.
- Verified: ESLint/build đạt; public không đọc được `user_profiles`.
- Verified: `/admin/login` HTTP 200/noindex và `/admin` trả redirect 307 khi chưa đăng nhập.
- Known issues: chưa có admin session; quan hệ nhiều dòng và Storage upload chưa hoàn tất.

## 2026-07-18 — Kết nối form học thử trang chủ

- Changed: thay form preview disabled bằng trial registration form dùng course Supabase.
- Added: home success redirect/state và reuse validation/service/Server Action Task 06.
- Verified: lint/build, runtime HTTP 200, form fields và success state.

## 2026-07-18 — Hoàn thành Support Pages và public forms

- Added: success stories, FAQ, careers/detail, contact, trial/course registration, privacy/terms và shared form/state components.
- Added: support service, types, Zod schemas và Server Actions payload allowlist.
- Changed: course CTA nối tới course registration; privacy-policy redirect tới privacy.
- Verified: lint/build, route runtime, FAQ data, site settings, contact/trial/course RLS insert/private select/forbidden status.
- Known issues: story/job data, job valid insert, CV Storage, contact settings và legal approval còn thiếu.

## 2026-07-18 — Audit Task 07 database/forms/RLS

- Verified: env/client không dùng service-role; consultation allowlist/Zod; published/active content read; private consultation select; forbidden status insert.
- Verified: lint/build đạt.
- Known issue: form Task 06 chưa tồn tại trong source, nhiều bảng HTTP 404 và database types không thể sinh bằng publishable key.
- Không tạo schema, không dùng secret và không chuyển Task 08.

## 2026-07-18 — Rà soát database Task 06

- Verified: kiểm tra trực tiếp chín bảng Support bằng publishable key; tất cả trả HTTP 404.
- Known issue: không có DDL local để xác minh schema/payload/RLS cho public forms.
- Không thay đổi source chức năng, không tạo schema và không chuyển Task 07.

## 2026-07-18 — Hoàn thiện database-backed Resources

- Added: category filter, resource detail route, metadata/not-found, related courses và Server Action download event.
- Changed: card hiển thị category/type, author, file type và access requirement; public link chỉ redirect sau server validation/event.
- Verified: lint/build đạt; `/resources` và `/resources/[slug]` dynamic.
- Known issue: bốn bảng Resources vẫn trả HTTP 404 trong Supabase project đang cấu hình, nên runtime/RLS chưa xác minh.

## 2026-07-18 — Triển khai trang Tài liệu miễn phí

- Added: type/service resource, `/resources`, card, metadata, loading/error/empty state.
- Changed: ghi nhận chỉ đạo tạm bỏ qua Task 04; Task 05 hoàn thành phần source giao diện tài liệu.
- Verified: lint/build đạt; route `/resources` dynamic.
- Known issue: Supabase chưa có `public.resources`, chưa kiểm tra được dữ liệu và link thật.

## 2026-07-18 — Rà soát blocker Task 04

- Xác minh trực tiếp Supabase: bản ghi expert không có trường/nội dung kinh nghiệm.
- Giữ checklist Kinh nghiệm chưa hoàn thành; ghi blocker vào Task 04 và project log.
- Không thay đổi source chức năng hoặc thực hiện Task 05 tiếp theo.

## 2026-07-18 — Kết nối module Blog với Supabase

- Thêm types/service, `/blog`, `/blog/[slug]`, category filter, Markdown, metadata, related content và loading/error/empty/not-found.
- Xóa placeholder/data blog tĩnh; thêm `react-markdown`, `remark-gfm`; lint và build đạt.
- Bảy bảng blog hiện trả HTTP 404 nên chưa thể kiểm tra seed và runtime relation.

## 2026-07-18 — Task 04 expert/consultation

### Added

- Types và service Supabase cho expert, qualification, specialization, service, benefit và FAQ.
- `/expert`, `/consultation`, form Server Action/Zod và `/consultation/success`.
- Migration RLS tối thiểu cho public consultation insert sau khi phát hiện HTTP 401.

### Verified

- Public expert/service/FAQ queries đạt; các route và service query string trả HTTP 200.
- RLS insert đạt HTTP 201 với request QA; public select request trả rỗng.
- Native client constraints, Zod server validation, active expert/service checks và success route đã được triển khai.

## 2026-07-18 — Dùng Supabase làm nguồn catalog duy nhất

### Removed

- `src/data/course-fallback-data.ts` và toàn bộ logic fallback trong course service/UI.
- Hai file migration/seed SQL cũ trong `supabase/` không còn khớp database đang vận hành.

### Changed

- Program, category, course và toàn bộ nội dung chi tiết bắt buộc đọc qua Supabase.
- Thiếu env hoặc lỗi query được chuyển tới error boundary thay vì dữ liệu hard-code.

## 2026-07-18 — Kết nối catalog với Supabase project

### Configured

- `.env.local` chứa Project URL và publishable key, được Git ignore.
- Catalog local chuyển từ fallback sang dữ liệu Supabase thật.

### Verified

- Public REST trả HTTP 200 và đọc được 3 program theo RLS.
- `/courses` và `/courses/mat-goc-den-hsk-3` trả HTTP 200; không có fallback notice.
- `npm.cmd run build` đạt với môi trường Supabase.

### Known issues

- Database dùng bộ SQL Editor trong Downloads, khác migration repo; theo dõi tại `ISSUE-024`.
- Dữ liệu hiện vẫn là demo và Vercel chưa được cấu hình env.

## 2026-07-18 — Hoàn thành Task 03: Programs & database-backed courses

### Added

- Catalog Supabase chuẩn hóa gồm 7 bảng, migration, RLS, index/trigger và seed 4 khóa demo.
- Supabase server client, types, course service và fallback demo tách riêng.
- `/courses`, `/courses/[slug]`, card/filter/price/detail/related và loading/empty/error/not-found states.

### Changed

- `/programs` đọc dữ liệu qua service, hiển thị đối tượng, số course và CTA lọc sang `/courses`.
- Root layout dùng wrapper `div` thay cho landmark `main`, tránh nested `main`; metadata có base URL từ env.
- Tài liệu Task 03/07, Technical Design, Functional Rules và project log phản ánh schema được đưa vào sớm.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/courses` và `/courses/[slug]` là dynamic server routes.
- Production runtime `/courses` trả HTTP 200 với fallback demo.

### Known issues

- Chưa kết nối/kiểm tra Supabase thực tế; chưa kiểm tra trực quan trên thiết bị thật/browser automation.

Tài liệu này ghi các thay đổi quan trọng của dự án. Không cần ghi từng chỉnh sửa nhỏ về format.

## 2026-07-15

### Added

- Khởi tạo project Next.js `vuthinh`.
- Thiết lập TypeScript và Tailwind CSS.
- Thêm font Be Vietnam Pro và design tokens.
- Thêm component `Container`.
- Thêm logo chữ tạm thời.
- Thêm Header responsive.
- Thêm Footer.
- Thêm metadata mặc định.
- Thêm trang chủ tạm để kiểm tra layout.
- Thêm `AGENTS.md`.
- Thêm bộ tài liệu trong `docs/`.
- Thêm roadmap task trong `tasks/`.
- Thêm thư mục `project-log/` để quản lý trạng thái, quyết định, lỗi và bước tiếp theo.

## 2026-07-15 — Hoàn tất và xác minh Task 00

### Added

- Bộ khung Next.js App Router.
- Design system cơ bản với Be Vietnam Pro và design tokens.
- Component `Container`.
- Logo chữ `VT` tạm thời.
- Header responsive với menu mobile.
- Footer dùng chung.
- Metadata mặc định.

### Changed

- Cập nhật root layout để dùng Header, Footer, font và metadata chung.
- Cập nhật global styles với màu thương hiệu, typography và style nút chính.
- Cố định Turbopack root tại thư mục project.

### Verified

- `npm.cmd run lint` đạt, không có lỗi ESLint.
- `npm.cmd run build` đạt; TypeScript và static generation thành công.
- Route `/` được prerender tĩnh và chứa Header, nội dung tạm cùng Footer.
- Mobile menu có hành vi mở/đóng bằng `details/summary` và chỉ hiển thị dưới breakpoint `lg`.
- Responsive cơ bản được thiết lập bằng các breakpoint Tailwind trong Container, Header, Footer và trang tạm.

### Ghi chú

- Task 01 chưa bắt đầu.
- Task 00 sau đó đã được commit tại `3e5949b` — `feat: complete project foundation` và push lên `origin/dev`.

## 2026-07-15 — Task 01: Hero Section

### Added

- Hero Section responsive cho trang chủ.
- Nội dung định vị hệ sinh thái giáo dục gia đình, ưu tiên tiếng Trung.
- CTA đăng ký học thử và CTA khám phá chương trình.
- Visual card cho tiếng Trung và kỹ năng/nội lực, không dùng số liệu hoặc hình ảnh giả.
- Dữ liệu tĩnh Hero trong `src/data/home.ts`.

### Changed

- Thay trang chủ tạm bằng `HeroSection`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; route `/` được prerender tĩnh.
- Production server local trả HTTP 200 cho `/` và có headline, CTA cùng lĩnh vực trọng tâm.
- Responsive mobile-first và breakpoint `sm`/`lg` đã được rà trong source.
- Semantic heading, focus-visible và nội dung trang trí ẩn khỏi assistive technology đã được rà.

### Known issues

- Chưa có ảnh thật cho Hero.
- Các route đích của CTA chưa được triển khai.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `3a0e2b4` — `feat: add home hero section`.

## 2026-07-15 — Task 01: Vì sao phụ huynh tin tưởng

### Added

- Trust Section với bốn nguyên tắc đồng hành dành cho phụ huynh và người học.
- Nội dung tĩnh Trust Section trong `src/data/home.ts`.

### Changed

- Trang chủ hiển thị Trust Section ngay sau Hero.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; TypeScript và static generation thành công.
- Production server local trên cổng kiểm tra riêng trả HTTP 200 và có đủ heading cùng bốn nguyên tắc.
- Cấu trúc heading, `aria-labelledby` và chi tiết trang trí đã được rà.
- Breakpoint mobile/tablet/desktop đã được rà trong source.

### Known issues

- Nội dung Trust Section chưa được khách hàng duyệt bản cuối.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `637d763` — `feat: add home trust section`.

## 2026-07-15 — Task 01: Chương trình học nổi bật

### Added

- Programs Section với ba nhóm chương trình đã được tài liệu xác nhận.
- Thẻ tiếng Trung trọng tâm gồm thiếu nhi, giao tiếp, HSK và thương mại.
- Hai thẻ bổ trợ cho kỹ năng/cảm xúc và giá trị sống/hạnh phúc.
- CTA xem tất cả chương trình.

### Changed

- Trang chủ hiển thị Programs Section sau Trust Section.
- Dữ liệu tĩnh trang chủ được bổ sung trong `src/data/home.ts`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; TypeScript và static generation thành công.
- Production server local trả HTTP 200 và có đủ nhóm, hướng tiếng Trung cùng CTA.
- Semantic heading, danh sách nội dung, focus-visible và breakpoint responsive đã được rà.

### Known issues

- Chưa có dữ liệu khóa học chi tiết được khách hàng xác nhận.
- CTA `/programs` chưa có route đích vì thuộc Task 03.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `ebf2d2b` — `feat: add featured programs section`.

## 2026-07-15 — Task 01: Hành trình học tập

### Added

- Timeline bốn bước từ chia sẻ nhu cầu đến bắt đầu và duy trì trao đổi.
- Ghi chú minh bạch về tư vấn thủ công và chưa có roadmap tự động.

### Changed

- Trang chủ hiển thị Learning Journey sau Programs Section.
- Bổ sung dữ liệu tĩnh trong `src/data/home.ts`.

### Verified

- Lint và build đạt; TypeScript/static generation thành công.
- Runtime `/` trả HTTP 200 và có đủ bốn bước.
- Ordered list, heading và breakpoint responsive đã được rà.

### Known issues

- Nội dung chưa được khách hàng duyệt bản cuối.
- Chưa kiểm tra trực quan bằng thiết bị thật/browser automation.

### Commit

- `bd2b456` — `feat: add learning journey section`.

## 2026-07-15 — Task 01: Giới thiệu chuyên gia

### Added

- Expert Section với trạng thái hồ sơ đang cập nhật và CTA chuyên gia/tư vấn.

### Verified

- Lint, build và runtime `/` đạt; semantic heading/focus và breakpoint đã được rà.

### Known issues

- Chưa có dữ liệu chuyên gia thật; hai route CTA chưa triển khai; chưa kiểm tra trực quan trên thiết bị thật.

### Commit

- `7b5d838` — `feat: add home expert section`.

## 2026-07-15 — Task 01: Thành quả học viên

### Added

- Student Outcomes empty state minh bạch và CTA thành quả.

### Verified

- Lint/build đạt; responsive, heading và focus đã rà.

### Known issues

- Chưa có dữ liệu thật và `/success-stories` chưa triển khai.

### Commit

- `5743558` — `feat: add student outcomes empty state`.

## 2026-07-15 — Task 01: Cảm nhận phụ huynh

### Added

- Parent Testimonials Section với empty state minh bạch, không dùng phản hồi hoặc thông tin nhận dạng giả.

### Changed

- Trang chủ hiển thị Cảm nhận phụ huynh sau Thành quả học viên.
- Bổ sung nội dung tĩnh trong `src/data/home.ts`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; TypeScript, static generation và prerender route `/` thành công.
- Production runtime local trả HTTP 200, có nội dung empty state và chưa có section Bài viết/tài liệu.
- Semantic heading và breakpoint responsive đã được rà trong source.

### Known issues

- Chưa có phản hồi phụ huynh thật hoặc quyền đồng ý công bố.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `71f7096` — `feat: add parent testimonials empty state`.

## 2026-07-15 — Task 01: Bài viết/tài liệu nổi bật

### Added

- Featured Content Section với hai empty state cho Blog và Tài liệu miễn phí.
- Link điều hướng tới `/blog` và `/resources` theo sitemap.

### Changed

- Trang chủ hiển thị nội dung kiến thức sau Cảm nhận phụ huynh.
- Bổ sung dữ liệu tĩnh trong `src/data/home.ts`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; TypeScript, static generation và prerender route `/` thành công.
- Production runtime local trả HTTP 200, có hai empty state, đúng hai href và chưa có Form đăng ký học thử.
- Semantic article/heading, focus-visible và breakpoint responsive đã được rà trong source.

### Known issues

- Chưa có bài viết hoặc tài liệu thật được xác nhận xuất bản.
- `/blog` và `/resources` thuộc Task 05 nên chưa có route đích.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `9ea640a` — `feat: add featured content empty states`.

## 2026-07-15 — Task 01: Form đăng ký học thử

### Added

- Giao diện form học thử với 6 trường theo user flow và danh sách nhóm chương trình đã xác định.
- Trạng thái thông báo form chưa mở nhận đăng ký.

### Changed

- Trang chủ hiển thị form preview sau Bài viết/tài liệu nổi bật.
- Bổ sung nội dung tĩnh trong `src/data/home.ts`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; TypeScript, static generation và prerender route `/` thành công.
- Production runtime local trả HTTP 200, có đủ field, fieldset disabled và chưa có CTA cuối trang.
- Label, fieldset/legend, trạng thái mô tả và breakpoint responsive đã được rà trong source.

### Known issues

- Form chưa thể gửi hoặc lưu dữ liệu; validation/loading/success/error nghiệp vụ thuộc Task 07.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `d31578f` — `feat: add trial registration form preview`.

## 2026-07-15 — Task 01: CTA cuối trang

### Added

- Final CTA Section với một hành động chính dẫn tới form học thử trên cùng trang.
- Anchor `trial-registration` cho section form.

### Changed

- Trang chủ hoàn thành toàn bộ 10 section theo checklist Task 01.
- Trạng thái dự án chuyển sang Task 02 là task tiếp theo nhưng chưa bắt đầu.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; TypeScript, static generation và prerender route `/` thành công.
- Production runtime local trả HTTP 200; CTA nằm sau form, href/id khớp và không có nội dung Task 02.
- Semantic heading, focus-visible, kích thước nút và breakpoint responsive đã được rà trong source.

### Known issues

- Form đích vẫn bị khóa cho tới khi hoàn thành xử lý dữ liệu trong Task 07.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `8e64187` — `feat: complete home page final cta`.

## 2026-07-15 — Task 02: Giới thiệu trung tâm

### Added

- Route `/about` với metadata riêng.
- About Introduction trình bày định vị hệ sinh thái giáo dục gia đình và tiếng Trung là trọng tâm.
- Nguồn dữ liệu tĩnh riêng tại `src/data/about.ts`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/about` được prerender tĩnh.
- Production runtime `/about` trả HTTP 200, metadata/nội dung đúng và chưa có các section tiếp theo.
- Heading, semantic article và breakpoint responsive đã được rà trong source.

### Known issues

- Chưa có lịch sử, đội ngũ, cơ sở, thành tựu hoặc hình ảnh thật được xác nhận.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `2955001` — `feat: add about introduction`.

## 2026-07-15 — Task 02: Câu chuyện hình thành

### Added

- Formation Story Section với trạng thái lịch sử đang cập nhật.
- Danh sách thông tin lịch sử cần khách hàng xác nhận.

### Changed

- `main` của `/about` được chuyển lên page để bao bọc nhiều section semantic.
- Bổ sung dữ liệu tĩnh trong `src/data/about.ts`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/about` được prerender tĩnh.
- Production runtime `/about` trả HTTP 200, có empty state lịch sử và chưa có Tầm nhìn/Sứ mệnh.
- Heading, danh sách semantic và breakpoint responsive đã được rà trong source.

### Known issues

- Chưa có dữ liệu lịch sử hoặc hình ảnh thật được xác nhận.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `a0004af` — `feat: add formation story empty state`.

## 2026-07-15 — Task 02: Tầm nhìn

### Added

- Vision Section với tuyên bố định hướng hệ sinh thái giáo dục gia đình.
- Ba hướng về ngôn ngữ, năng lực sống và phát triển con người.

### Changed

- `/about` hiển thị Tầm nhìn sau Câu chuyện hình thành.
- Bổ sung dữ liệu tĩnh trong `src/data/about.ts`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/about` được prerender tĩnh.
- Production runtime `/about` trả HTTP 200, có đủ ba hướng và chưa có Sứ mệnh/Giá trị cốt lõi.
- Heading, semantic article, tương phản và breakpoint responsive đã được rà trong source.

### Known issues

- Câu chữ Tầm nhìn chưa được khách hàng duyệt bản cuối.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `59d635b` — `feat: add about vision section`.

## 2026-07-15 — Task 02: Sứ mệnh

### Added

- Mission Section với bốn vai trò dựa trên phạm vi hoạt động trong PRD.
- Ghi chú yêu cầu duyệt câu chữ trước production.

### Changed

- `/about` hiển thị Sứ mệnh sau Tầm nhìn.
- Bổ sung dữ liệu tĩnh trong `src/data/about.ts`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/about` được prerender tĩnh.
- Production runtime `/about` trả HTTP 200, có đủ bốn trách nhiệm và chưa có Giá trị cốt lõi/Triết lý giáo dục.
- Ordered list, heading và breakpoint responsive đã được rà trong source.

### Known issues

- Câu chữ Sứ mệnh chưa được khách hàng duyệt bản cuối.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `8f55a44` — `feat: add about mission section`.

## 2026-07-15 — Task 02: Giá trị cốt lõi

### Added

- Core Values Section với bốn nguyên tắc có căn cứ trong tài liệu dự án.
- Ghi chú yêu cầu khách hàng duyệt câu chữ trước production.

### Changed

- `/about` hiển thị Giá trị cốt lõi sau Sứ mệnh.
- Bổ sung dữ liệu tĩnh trong `src/data/about.ts`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/about` được prerender tĩnh.
- Production runtime `/about` trả HTTP 200, có đủ bốn giá trị và chưa có Triết lý giáo dục.
- Danh sách semantic, heading, nội dung trang trí và breakpoint responsive đã được rà trong source.

### Known issues

- Câu chữ Giá trị cốt lõi chưa được khách hàng duyệt bản cuối.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `8b5821c` — `feat: add about core values section`.

## 2026-07-15 — Task 02: Triết lý giáo dục

### Added

- Education Philosophy Section với ba trụ cột Trí tuệ, Ngôn ngữ và Nhân cách.
- Ghi chú yêu cầu khách hàng cùng đội ngũ chuyên môn duyệt nội dung.

### Changed

- `/about` hiển thị Triết lý giáo dục sau Giá trị cốt lõi.
- Bổ sung dữ liệu tĩnh trong `src/data/about.ts`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/about` được prerender tĩnh.
- Production runtime `/about` trả HTTP 200, có đủ ba trụ cột và chưa có CTA đăng ký của Task 02.
- Danh sách semantic, heading, nội dung trang trí và breakpoint responsive đã được rà trong source.

### Known issues

- Câu chữ Triết lý giáo dục chưa được khách hàng và đội ngũ chuyên môn duyệt bản cuối.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `f2cbd34` — `feat: add education philosophy section`.

## 2026-07-15 — Task 02: CTA đăng ký và hoàn tất Trang Giới thiệu

### Added

- About CTA Section dẫn tới phần đăng ký học thử hiện hữu trên trang chủ.
- Ghi chú minh bạch về trạng thái xem trước của form.

### Changed

- `/about` hoàn thành toàn bộ 7 phần theo checklist Task 02.
- Trạng thái dự án chuyển sang Task 03 là task tiếp theo nhưng chưa bắt đầu.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/` và `/about` được prerender tĩnh.
- Production runtime trả HTTP 200 cho cả `/about` và `/`.
- HTML build xác nhận CTA có `href="/#trial-registration"` và trang chủ có `id="trial-registration"`.
- Heading, focus-visible, kích thước nút và breakpoint responsive đã được rà trong source.

### Known issues

- Form đích chưa gửi hoặc lưu dữ liệu; phần này thuộc Task 07.
- CTA tư vấn riêng chờ route `/consultation` trong Task 04.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `d2f6b49` — `feat: complete about page cta`.

## 2026-07-15 — Task 03: Danh sách nhóm chương trình

### Added

- Route `/programs` với metadata tĩnh.
- Danh sách bảy nhóm chương trình đã được tài liệu xác định.
- Nguồn dữ liệu tĩnh riêng tại `src/data/programs.ts`.

### Changed

- Link Chương trình học hiện có route đích `/programs` hoạt động.
- Task 03 chuyển sang trạng thái đang thực hiện theo từng phần.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/programs` được prerender tĩnh.
- Production runtime `/programs` trả HTTP 200 và có đủ bảy nhóm.
- Không có bộ lọc, link khóa học hoặc nội dung thuộc phần tiếp theo.
- Heading, danh sách semantic và breakpoint responsive đã được rà trong source.

### Known issues

- Chưa có dữ liệu khóa học chi tiết được khách hàng xác nhận.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

### Commit

- `3119778` — `feat: add program group listing`.

## 2026-07-15 — Task 03: Bộ lọc danh mục cơ bản

### Added

- Bộ lọc bốn lựa chọn cho danh sách nhóm chương trình.
- Trạng thái live thông báo số nhóm đang hiển thị.

### Changed

- Danh sách nhóm được chuyển vào Client Component nhỏ để hỗ trợ state và event.
- Ghi chú `/programs` được cập nhật theo trạng thái đã có bộ lọc.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/programs` được prerender tĩnh.
- Production runtime `/programs` trả HTTP 200 và có đủ bốn nhãn lọc.
- Artifact build xác nhận Tất cả có `aria-pressed="true"` và trạng thái ban đầu hiển thị 7 nhóm.
- Không có link hoặc danh sách khóa học thuộc phần tiếp theo.

### Known issues

- Chưa kiểm tra thao tác click trực quan bằng browser automation hoặc thiết bị thật.
- Dữ liệu khóa học chi tiết vẫn chưa được khách hàng cung cấp.

### Commit

- `bd88cda` — `feat: add program category filter`.

## 2026-07-15 — Task 03: Rà soát dữ liệu Danh sách khóa học

### Verified

- Rà toàn bộ `src/`, `docs/`, `tasks/` và `project-log/` để tìm dữ liệu khóa học thực tế.
- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/`, `/about` và `/programs` tiếp tục được prerender tĩnh.
- Checklist Danh sách khóa học được giữ chưa hoàn thành vì không có dữ liệu hợp lệ.

### Known issues

- Chưa có bản ghi khóa học được khách hàng xác nhận theo các trường tối thiểu trong `docs/FUNCTIONAL_RULES.md`.
- Danh sách khóa học bị chặn bởi dữ liệu nghiệp vụ; không có blocker kỹ thuật.
- Không triển khai trước Empty state, chi tiết khóa học, CTA hoặc metadata động.

### Commit

- `e777ef6` — `docs: record course data blocker`.

## 2026-07-17 — Tổng hợp yêu cầu nội dung còn thiếu

### Added

- `docs/CONTENT_REQUIREMENTS.md` làm checklist bàn giao nội dung cho toàn bộ website Giai đoạn 1.
- Số lượng tối thiểu/khuyến nghị, định dạng tệp, trường dữ liệu và vị trí sử dụng cho từng nhóm nội dung.
- Checklist về quyền hình ảnh, phê duyệt nội dung, form, SEO, pháp lý và hạ tầng production.

### Changed

- Cập nhật trạng thái và bước tiếp theo để tham chiếu tài liệu bàn giao mới.

### Verified

- Đối chiếu với toàn bộ issue đang mở, PRD, thiết kế kỹ thuật, quy tắc nghiệp vụ, sitemap, user flow và các task Giai đoạn 1.
- Đối chiếu lại source: chưa có bản ghi khóa học thật; `ISSUE-009` tiếp tục là blocker dữ liệu và không có thay đổi source chức năng.
- `npm.cmd run lint` đạt ngày 2026-07-17.
- `npm.cmd run build` đạt; `/`, `/about` và `/programs` được prerender tĩnh.

### Known issues

- Danh sách khóa học vẫn bị chặn cho đến khi có tối thiểu một bản ghi đã được phép công bố.

## 2026-07-17 — Bắt đầu Task 04 với khung hồ sơ chuyên gia

### Added

- Route `/expert` với metadata riêng.
- Empty state hồ sơ một chuyên gia và danh sách thông tin cần xác nhận.
- Nguồn nội dung tĩnh riêng tại `src/data/expert.ts`.

### Changed

- Task 03 được ghi nhận tạm hoãn theo chỉ đạo; Task 04 trở thành task hiện tại.

### Known issues

- Chưa có hồ sơ chuyên gia thật; `ISSUE-011` tiếp tục Open.
- Chưa làm các mục Chuyên môn trở đi hoặc route `/consultation`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/expert` được prerender tĩnh.
- Production runtime `/expert` trả HTTP 200 và có đủ nội dung empty state.
- Source có một `main`, một `h1`, section liên kết heading bằng `aria-labelledby` và danh sách semantic.

## 2026-07-20 — Tích hợp bộ logo chính thức

### Added

- Ba asset thương hiệu tại `public/images/brand`: mark trong suốt, wordmark trong suốt và wordmark nền trắng.

### Changed

- Header/Footer thay logo chữ tạm bằng asset chính thức.
- Metadata toàn site có favicon và ảnh Open Graph/Twitter mặc định.
- JSON-LD `EducationalOrganization` khai báo logo chính thức.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; 25 route build thành công.

## 2026-07-17 — Bắt đầu Task 05 với khung danh mục Blog

### Added

- Route `/blog` với metadata riêng.
- Empty state danh mục Blog và danh sách thông tin cần xác nhận.
- Nguồn nội dung tĩnh riêng tại `src/data/blog.ts`.

### Changed

- Task 04 được ghi nhận tạm hoãn theo chỉ đạo; Task 05 trở thành task hiện tại.

### Known issues

- Chưa có taxonomy hoặc bài viết thật; `ISSUE-014` tiếp tục Open.
- Chưa làm các mục Danh sách bài trở đi hoặc route `/resources`.

### Verified

- `npm.cmd run lint` đạt.
- `npm.cmd run build` đạt; `/blog` được prerender tĩnh.
- Production runtime `/blog` trả HTTP 200 và có đủ nội dung empty state.
- Source có một `main`, một `h1`, section liên kết heading bằng `aria-labelledby` và danh sách semantic.
