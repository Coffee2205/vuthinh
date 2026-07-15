# Task 02 — Trang Giới thiệu

## Nội dung

- [x] Giới thiệu trung tâm.
- [x] Câu chuyện hình thành.
- [ ] Tầm nhìn.
- [ ] Sứ mệnh.
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
