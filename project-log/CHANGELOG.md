# Changelog

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
