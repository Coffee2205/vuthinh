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
