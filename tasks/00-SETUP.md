# Task 00 — Khởi tạo nền tảng

## Mục tiêu

Tạo project chạy ổn định và bộ khung dùng chung.

## Công việc

- [x] Khởi tạo Next.js + TypeScript + Tailwind.
- [x] Thiết lập font Be Vietnam Pro.
- [x] Thiết lập màu sắc.
- [x] Tạo `Container`.
- [x] Tạo `Logo`.
- [x] Tạo `Header`.
- [x] Tạo `Footer`.
- [x] Thiết lập metadata mặc định.
- [x] Kiểm tra mobile menu.
- [x] Chạy lint và build.

## Tiêu chí hoàn thành

- Trang `/` chạy.
- Header và Footer xuất hiện.
- Menu hoạt động trên mobile.
- Không lỗi TypeScript nghiêm trọng.

## Kết quả thực hiện

### File đã tạo

- `src/components/common/Container.tsx`: container responsive dùng chung.
- `src/components/common/Logo.tsx`: logo chữ dùng chung và liên kết về trang chủ.
- `src/components/layout/Header.tsx`: điều hướng desktop và menu mobile.
- `src/components/layout/Footer.tsx`: footer dùng chung.

### File đã sửa

- `src/app/layout.tsx`: font Be Vietnam Pro, metadata mặc định, Header và Footer.
- `src/app/globals.css`: màu thương hiệu, typography và style nút chính.
- `src/app/page.tsx`: trang xác nhận bộ khung tại route `/`, chưa triển khai nội dung Task 01.
- `next.config.ts`: cố định Turbopack root tại thư mục project.
- `tasks/00-SETUP.md`: cập nhật checklist và kết quả kiểm tra.

### Quyết định kỹ thuật

- Giữ Server Components làm mặc định; menu mobile dùng phần tử HTML `details/summary`, không cần thêm Client Component.
- Dùng `next/font/google` cho Be Vietnam Pro với các weight 400, 500, 600 và 700.
- Khai báo design tokens qua Tailwind CSS v4 trong `globals.css`.
- Cố định `turbopack.root` bằng `process.cwd()` để Next.js không chọn nhầm lockfile ở thư mục cha.

### Vấn đề còn tồn tại

- Các link trong Header/Footer trỏ tới route thuộc các task sau và sẽ trả về 404 cho đến khi những task đó được thực hiện.
- Build cần kết nối mạng ở lần tải Google Font; production build đã được xác minh thành công khi có quyền mạng.
- Logo hiện tại là logo chữ `VT` tạm thời; đang chờ khách hàng cung cấp logo chính thức.
- Chưa có nội dung, hình ảnh và thông tin liên hệ chính thức từ khách hàng.

### Kiểm tra

- `npm.cmd run lint`: Đạt, không có lỗi ESLint.
- `npm.cmd run build`: Đạt; compile, TypeScript và static generation thành công. Route `/` được prerender tĩnh.

### Commit gần nhất

- `237e4eb` — `Initial commit from Create Next App` (2026-07-15).
- Các thay đổi của Task 00 và project log hiện chưa được commit.
