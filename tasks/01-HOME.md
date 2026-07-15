# Task 01 — Trang chủ

## Mục tiêu

Tạo trang chủ thuyết phục phụ huynh và dẫn người dùng đến đăng ký.

## Sections

- [x] Hero.
- [x] Vì sao phụ huynh tin tưởng.
- [x] Chương trình học nổi bật.
- [x] Hành trình học tập.
- [x] Giới thiệu chuyên gia.
- [x] Thành quả học viên.
- [x] Cảm nhận phụ huynh.
- [x] Bài viết/tài liệu nổi bật.
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

- `3a0e2b4` — `feat: add home hero section`.

## Kết quả thực hiện — Vì sao phụ huynh tin tưởng

### File đã tạo

- `src/components/home/TrustSection.tsx`: section nguyên tắc đồng hành với bố cục card responsive.

### File đã sửa

- `src/data/home.ts`: bổ sung nội dung tĩnh cho Trust Section.
- `src/app/page.tsx`: gắn Trust Section ngay sau Hero.
- `tasks/01-HOME.md`: đánh dấu section đã hoàn thành và ghi kết quả.
- Các file trạng thái liên quan trong `project-log/`.

### Quyết định kỹ thuật

- Trust Section là Server Component, không thêm thư viện hoặc JavaScript phía client.
- Các lý do tin tưởng chỉ diễn đạt định hướng đã có trong PRD và tài liệu dự án; không dùng số liệu, thành tích, chứng chỉ hoặc testimonial.
- Dùng số thứ tự `01`–`04` để hỗ trợ quét nội dung; đây là thứ tự trình bày, không phải số liệu thành tích.
- Nội dung Trust Section tiếp tục dùng nguồn dữ liệu tĩnh chung `src/data/home.ts`.

### Kiểm tra

- `npm.cmd run lint`: Đạt ngày 2026-07-15, không có lỗi ESLint.
- `npm.cmd run build`: Đạt ngày 2026-07-15; TypeScript và static generation thành công.
- Runtime local: route `/` trả HTTP 200 và chứa heading cùng đủ bốn nguyên tắc của Trust Section.
- Responsive: cấu trúc một cột trên mobile, hai cột từ breakpoint `sm` và bố cục hai vùng từ `lg`; chưa kiểm tra trực quan bằng thiết bị thật/browser automation.
- Accessibility: section dùng `aria-labelledby`, cấu trúc `h2`/`h3` hợp lệ và chi tiết trang trí có `aria-hidden`.

### Giới hạn còn lại

- Nội dung chưa được khách hàng duyệt bản cuối.
- Chưa có kiểm tra trực quan trên thiết bị thật.
- Các section tiếp theo của Task 01 chưa thực hiện.

### Commit

- `637d763` — `feat: add home trust section`.

## Kết quả thực hiện — Chương trình học nổi bật

### File đã tạo

- `src/components/home/ProgramsSection.tsx`: section nhóm chương trình với tiếng Trung được ưu tiên thị giác.

### File đã sửa

- `src/data/home.ts`: bổ sung dữ liệu tĩnh cho ba nhóm chương trình.
- `src/app/page.tsx`: gắn Programs Section sau Trust Section.
- `tasks/01-HOME.md`: đánh dấu section đã hoàn thành và ghi kết quả.
- Các file trạng thái liên quan trong `project-log/`.

### Quyết định kỹ thuật

- Chỉ giới thiệu nhóm chương trình đã có trong tài liệu, không tạo khóa học, học phí, lịch học hoặc kết quả giả.
- Gộp các hướng tiếng Trung vào một thẻ trọng tâm lớn; kỹ năng/cảm xúc và giá trị sống là hai thẻ bổ trợ.
- Section là Server Component và dùng dữ liệu tĩnh từ `src/data/home.ts`.
- CTA dẫn tới `/programs` theo sitemap; route này thuộc Task 03 và chưa được triển khai.

### Kiểm tra

- `npm.cmd run lint`: Đạt ngày 2026-07-15, không có lỗi ESLint.
- `npm.cmd run build`: Đạt ngày 2026-07-15; TypeScript và static generation thành công.
- Runtime local: route `/` trả HTTP 200 và chứa đủ ba nhóm, bốn hướng tiếng Trung cùng CTA chương trình.
- Responsive: một cột trên mobile, hai cột từ `lg`; thẻ tiếng Trung chiếm vùng lớn hơn trên desktop. Chưa kiểm tra trực quan bằng thiết bị thật/browser automation.
- Accessibility: section dùng `aria-labelledby`, cấu trúc `h2`/`h3`, danh sách hướng học và focus-visible cho CTA.

### Giới hạn còn lại

- Nội dung mô tả chương trình chưa được khách hàng duyệt bản cuối.
- CTA `/programs` hiện chưa có route đích vì thuộc Task 03.
- Các section tiếp theo của Task 01 chưa thực hiện.

### Commit

- `ebf2d2b` — `feat: add featured programs section`.

## Kết quả thực hiện — Hành trình học tập

### File đã tạo

- `src/components/home/LearningJourneySection.tsx`: timeline bốn bước responsive.

### File đã sửa

- `src/data/home.ts`: bổ sung dữ liệu hành trình.
- `src/app/page.tsx`: gắn Learning Journey sau Programs Section.
- `tasks/01-HOME.md` và các project log liên quan.

### Quyết định kỹ thuật

- Hành trình chỉ mô tả quy trình định hướng từ chia sẻ nhu cầu đến bắt đầu học; không tạo roadmap cá nhân hóa hay cam kết kết quả.
- Dùng semantic ordered list và Server Component; dữ liệu tĩnh đặt trong `src/data/home.ts`.
- Ghi rõ tư vấn/xác nhận thủ công và chưa có lộ trình tự động trong Giai đoạn 1.

### Kiểm tra

- `npm.cmd run lint`: Đạt ngày 2026-07-15.
- `npm.cmd run build`: Đạt ngày 2026-07-15; TypeScript và static generation thành công.
- Runtime `/`: HTTP 200, có heading, đủ bốn bước và ghi chú giới hạn.
- Responsive: một cột mobile, hai cột tablet, bốn cột desktop; chưa kiểm tra trực quan trên thiết bị thật.
- Accessibility: `aria-labelledby`, `ol`/`li`, `h2`/`h3` đúng semantic.

### Giới hạn còn lại

- Nội dung hành trình chưa được khách hàng duyệt bản cuối.
- Chưa kiểm tra trực quan bằng thiết bị thật/browser automation.
- Các section tiếp theo của Task 01 chưa thực hiện.

### Commit

- `bd2b456` — `feat: add learning journey section`.

## Kết quả thực hiện — Giới thiệu chuyên gia

- File tạo: `src/components/home/ExpertSection.tsx`.
- File sửa: `src/data/home.ts`, `src/app/page.tsx`, task và project log.
- Quyết định: hiển thị trạng thái hồ sơ đang cập nhật; không tạo tên, ảnh, kinh nghiệm hoặc chứng chỉ giả; Server Component, CTA `/expert` và `/consultation`.
- Kiểm tra: lint/build đạt; runtime `/` HTTP 200 và có trạng thái hồ sơ cùng hai CTA; responsive một cột mobile, hai vùng desktop; heading/focus hợp lệ.
- Giới hạn: thiếu toàn bộ dữ liệu chuyên gia thật; route CTA thuộc task sau; chưa kiểm tra trực quan trên thiết bị thật.
- Commit: `7b5d838` — `feat: add home expert section`.

## Kết quả thực hiện — Thành quả học viên

- Tạo `src/components/home/StudentOutcomesSection.tsx`; sửa `src/data/home.ts`, `src/app/page.tsx` và log.
- Hiển thị empty state minh bạch, không dùng số liệu, ảnh hoặc kết quả giả; CTA `/success-stories`.
- Lint/build đạt; responsive và semantic heading/focus đã rà trong source.
- Giới hạn: chưa có dữ liệu thật, route CTA chưa triển khai, chưa kiểm tra trực quan thiết bị thật.
- Commit: `5743558` — `feat: add student outcomes empty state`.

## Kết quả thực hiện — Cảm nhận phụ huynh

- File tạo: `src/components/home/ParentTestimonialsSection.tsx`.
- File sửa: `src/data/home.ts`, `src/app/page.tsx`, `tasks/01-HOME.md` và các project log liên quan.
- Quyết định: dùng empty state thay cho testimonial giả; chỉ công bố chia sẻ, tên và hình ảnh sau khi phụ huynh xác nhận và đồng ý.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt, route `/` được prerender tĩnh; runtime production local HTTP 200 và có đúng nội dung empty state, chưa có section bài viết.
- Responsive: bố cục một cột trên mobile và hai vùng từ `lg`; semantic `section`, `aria-labelledby`, `h2`/`h3` đã rà trong source.
- Giới hạn: chưa có phản hồi phụ huynh thật hoặc kiểm tra trực quan trên thiết bị thật/browser automation.
- Commit: `71f7096` — `feat: add parent testimonials empty state`.

## Kết quả thực hiện — Bài viết/tài liệu nổi bật

- File tạo: `src/components/home/FeaturedContentSection.tsx`.
- File sửa: `src/data/home.ts`, `src/app/page.tsx`, `tasks/01-HOME.md` và các project log liên quan.
- Quyết định: dùng hai empty state thay cho bài viết/tài liệu giả; chỉ nội dung có trạng thái xuất bản và quyền sử dụng hợp lệ mới được hiển thị.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt và route `/` được prerender tĩnh; runtime production local HTTP 200, có hai trạng thái chờ cùng link `/blog`, `/resources`, chưa có form học thử.
- Responsive: một cột trên mobile, hai cột từ `md`; `section`, `article`, `aria-labelledby`, heading và focus-visible đã rà trong source.
- Giới hạn: chưa có bài viết/tài liệu thật; hai route đích thuộc Task 05 chưa được triển khai; chưa kiểm tra trực quan trên thiết bị thật/browser automation.
- Commit: sẽ cập nhật sau khi commit.
