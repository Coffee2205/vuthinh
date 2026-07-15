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
- Commit gần nhất vẫn là `237e4eb` — `Initial commit from Create Next App`; thay đổi Task 00 chưa được commit.
