# Task 02 — Trang Giới thiệu

## Nội dung

- [x] Giới thiệu trung tâm.
- [x] Câu chuyện hình thành.
- [x] Tầm nhìn.
- [x] Sứ mệnh.
- [ ] Giá trị cốt lõi.
- [ ] Triết lý giáo dục.
- [ ] CTA đăng ký tư vấn/học thử.

## Tiêu chí

- Nội dung dễ đọc.
- Không lặp toàn bộ trang chủ.
- Không tự tạo thành tựu chưa được xác nhận.

## Kết quả thực hiện — Giới thiệu trung tâm

- File tạo: `src/app/about/page.tsx`, `src/components/about/AboutIntroduction.tsx`, `src/data/about.ts`.
- File sửa: `tasks/02-ABOUT.md` và các project log liên quan.
- Quyết định: nội dung chỉ dùng định vị đã xác nhận trong PRD và Project Vision; không tạo lịch sử, đội ngũ, cơ sở, số liệu hoặc thành tựu.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt và `/about` được prerender tĩnh; runtime production local HTTP 200, metadata cùng nội dung giới thiệu đúng và chưa có Câu chuyện/Tầm nhìn/Sứ mệnh.
- Responsive: một cột trên mobile, hai vùng từ `lg`; các thẻ bổ trợ thay đổi theo `sm`/`lg`/`xl`.
- Accessibility: một `h1`, heading đúng thứ tự, `aria-labelledby`, nội dung dạng `article` và độ tương phản đã được rà trong source.
- Giới hạn: chưa có thông tin lịch sử, đội ngũ, cơ sở hoặc thành tựu được khách hàng xác nhận; chưa kiểm tra trực quan trên thiết bị thật/browser automation.
- Commit: `2955001` — `feat: add about introduction`.

## Kết quả thực hiện — Câu chuyện hình thành

- File tạo: `src/components/about/FormationStorySection.tsx`.
- File sửa: `src/app/about/page.tsx`, `src/components/about/AboutIntroduction.tsx`, `src/data/about.ts`, `tasks/02-ABOUT.md` và các project log liên quan.
- Quyết định: dùng empty state minh bạch và liệt kê dữ liệu cần xác nhận; không tạo năm thành lập, người sáng lập, động lực hoặc mốc phát triển giả.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt và `/about` được prerender tĩnh; runtime production local HTTP 200, có trạng thái lịch sử đang cập nhật và chưa có Tầm nhìn/Sứ mệnh.
- Responsive: một cột trên mobile, hai vùng từ `lg`; danh sách dữ liệu cần cung cấp chuyển hai cột từ `sm`.
- Accessibility: page chỉ khai báo một `main` trong source; section dùng `aria-labelledby`, `h2`/`h3` và danh sách semantic.
- Giới hạn: chưa có dữ liệu lịch sử thật hoặc hình ảnh được phép sử dụng; chưa kiểm tra trực quan trên thiết bị thật/browser automation.
- Commit: `a0004af` — `feat: add formation story empty state`.

## Kết quả thực hiện — Tầm nhìn

- File tạo: `src/components/about/VisionSection.tsx`.
- File sửa: `src/app/about/page.tsx`, `src/data/about.ts`, `tasks/02-ABOUT.md` và các project log liên quan.
- Quyết định: diễn đạt Tầm nhìn từ định vị đã có; không dùng cam kết dẫn đầu, quy mô, thời hạn hoặc kết quả chưa xác nhận.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt và `/about` được prerender tĩnh; runtime production local HTTP 200, có đủ ba hướng Tầm nhìn, ghi chú duyệt nội dung và chưa có Sứ mệnh/Giá trị cốt lõi.
- Responsive: một cột trên mobile, ba cột từ `md`; nội dung và khoảng cách mobile-first.
- Accessibility: section dùng `aria-labelledby`, cấu trúc `h2`/`h3`, các hướng dùng `article` và màu chữ tương phản trên nền tối.
- Giới hạn: câu chữ Tầm nhìn chưa được khách hàng duyệt bản cuối; chưa kiểm tra trực quan trên thiết bị thật/browser automation.
- Commit: `59d635b` — `feat: add about vision section`.

## Kết quả thực hiện — Sứ mệnh

- File tạo: `src/components/about/MissionSection.tsx`.
- File sửa: `src/app/about/page.tsx`, `src/data/about.ts`, `tasks/02-ABOUT.md` và các project log liên quan.
- Quyết định: mô tả Sứ mệnh bằng các vai trò có trong PRD; không tạo cam kết kết quả học tập, trách nhiệm vận hành hoặc claim chất lượng chưa xác nhận.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt và `/about` được prerender tĩnh; runtime production local HTTP 200, có đủ bốn trách nhiệm, ghi chú duyệt nội dung và chưa có Giá trị cốt lõi/Triết lý giáo dục.
- Responsive: một cột trên mobile; danh sách hai cột từ `sm`, bố cục nội dung hai vùng từ `lg`.
- Accessibility: section dùng `aria-labelledby`, `ol`/`li`, cấu trúc `h2`/`h3`; số thứ tự trang trí được ẩn khỏi assistive technology.
- Giới hạn: câu chữ Sứ mệnh chưa được khách hàng duyệt bản cuối; chưa kiểm tra trực quan trên thiết bị thật/browser automation.
- Commit: `8f55a44` — `feat: add about mission section`.
