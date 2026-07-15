# Task 01 — Trang chủ

## Mục tiêu

Tạo trang chủ thuyết phục phụ huynh và dẫn người dùng đến đăng ký.

## Sections

- [x] Hero.
- [ ] Vì sao phụ huynh tin tưởng.
- [ ] Chương trình học nổi bật.
- [ ] Hành trình học tập.
- [ ] Giới thiệu chuyên gia.
- [ ] Thành quả học viên.
- [ ] Cảm nhận phụ huynh.
- [ ] Bài viết/tài liệu nổi bật.
- [ ] Form đăng ký học thử.
- [ ] CTA cuối trang.

## Quy tắc

- Không sử dụng số liệu giả.
- Khối tiếng Trung phải nổi bật hơn các mảng khác.
- CTA chính là đăng ký học thử.
- Responsive đầy đủ.

## Tiêu chí hoàn thành

- Người dùng hiểu website làm gì trong 5 giây đầu.
- Có đường dẫn rõ đến khóa học, chuyên gia và form đăng ký.

## Kết quả thực hiện — Hero Section

### File đã tạo

- `src/components/home/HeroSection.tsx`: Hero responsive, ưu tiên tiếng Trung và có hai CTA rõ ràng.
- `src/data/home.ts`: nội dung tĩnh của Hero tách khỏi component.

### File đã sửa

- `src/app/page.tsx`: thay nội dung kiểm tra nền tảng bằng Hero Section.
- `tasks/01-HOME.md`: đánh dấu Hero đã hoàn thành và ghi kết quả kiểm tra.
- Các file trạng thái liên quan trong `project-log/`.

### Quyết định kỹ thuật

- Hero là Server Component, không thêm JavaScript phía client.
- Chưa dùng ảnh vì chưa có hình ảnh thật được khách hàng cung cấp; phần thị giác dùng typography, màu và khối nội dung trung tính.
- Nội dung Hero được tách vào `src/data/home.ts`.
- CTA chính dẫn tới `/trial-registration`; CTA phụ dẫn tới `/programs` theo sitemap.

### Kiểm tra

- `npm.cmd run lint`: Đạt ngày 2026-07-15, không có lỗi ESLint.
- `npm.cmd run build`: Đạt ngày 2026-07-15; TypeScript và static generation thành công.
- Runtime local: route `/` trả HTTP 200 và chứa headline, hai CTA cùng hai lĩnh vực trọng tâm.
- Responsive: đã kiểm tra cấu trúc mobile-first và breakpoint `sm`/`lg` trong source; chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.
- Accessibility: có một `h1`, thứ tự heading hợp lệ, link có focus-visible, chi tiết trang trí được ẩn với assistive technology.

### Giới hạn còn lại

- Chưa có ảnh thật nên Hero hiện dùng visual card thay cho ảnh giáo viên/học viên.
- Các route CTA thuộc task sau chưa được triển khai và hiện có thể trả về 404.
- Các section còn lại của Task 01 chưa thực hiện.

### Commit

- Chưa cập nhật; sẽ ghi sau khi tạo commit cho Hero Section.
