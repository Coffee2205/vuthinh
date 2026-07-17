# Task 04 — Chuyên gia và tư vấn

## Routes

- `/expert`
- `/consultation`

## Công việc

- [ ] Hồ sơ một chuyên gia.
- [ ] Chuyên môn.
- [ ] Kinh nghiệm.
- [ ] Chứng chỉ nếu có.
- [ ] Dịch vụ tư vấn.
- [ ] Form đăng ký tư vấn.
- [ ] Validation.
- [ ] Lưu dữ liệu.
- [ ] Trang/thông báo thành công.

## Lưu ý

- Không tạo danh sách nhiều chuyên gia ở UI.
- Data model vẫn nên có `expert_id`.
- Không làm calendar realtime.
- Không tự động tạo Zoom/Google Meet.

## Kết quả thực hiện — Khung hồ sơ chuyên gia

- Trạng thái: chưa hoàn thành mục Hồ sơ một chuyên gia vì chưa có dữ liệu thật; checkbox giữ `[ ]`.
- File tạo: `src/app/expert/page.tsx`, `src/components/expert/ExpertProfileSection.tsx`, `src/data/expert.ts`.
- File sửa: `tasks/03-PROGRAMS-COURSES.md`, `tasks/04-EXPERT-CONSULTATION.md` và các project log liên quan.
- Quyết định: tạo route `/expert` với empty state minh bạch, chỉ giới thiệu cấu trúc một chuyên gia; không tạo tên, ảnh, kinh nghiệm, chuyên môn hoặc chứng chỉ giả.
- Responsive: một cột trên mobile/tablet và hai vùng từ `lg`; danh sách thông tin cần cung cấp chuyển hai cột từ `sm`.
- Accessibility: một `h1`, heading đúng thứ tự, section có `aria-labelledby`, danh sách semantic và chi tiết trang trí được ẩn khỏi assistive technology.
- Giới hạn: hồ sơ production vẫn chờ dữ liệu theo `ISSUE-011`; chưa làm các mục Chuyên môn trở đi và chưa tạo `/consultation`.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt và `/expert` được prerender tĩnh; production runtime `/expert` trả HTTP 200, có đủ trạng thái chờ và danh sách thông tin cần xác nhận.
