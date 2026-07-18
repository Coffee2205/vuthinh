# Task 04 — Chuyên gia và tư vấn

## Routes

- `/expert`
- `/consultation`

## Công việc

- [x] Hồ sơ một chuyên gia.
- [x] Chuyên môn.
- [ ] Kinh nghiệm.
- [x] Chứng chỉ nếu có.
- [x] Dịch vụ tư vấn.
- [x] Form đăng ký tư vấn.
- [x] Validation.
- [x] Lưu dữ liệu.
- [x] Trang/thông báo thành công.

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

## Trạng thái tạm hoãn — 2026-07-17

- Theo chỉ đạo của người dùng, tạm bỏ qua các mục còn lại của Task 04 để chuyển sang Task 05.
- Task 04 không được đánh dấu hoàn thành; toàn bộ checkbox vẫn giữ `[ ]`.
- Khi quay lại, tiếp tục từ Hồ sơ một chuyên gia sau khi có dữ liệu và quyền công bố.

## Tiến độ kết nối Supabase — 2026-07-18

- Đã tạo types/service và giao diện `/expert`, `/consultation`, `/consultation/success` từ dữ liệu Supabase thật.
- Public query xác nhận: 1 expert, 1 qualification, 6 specialization, 3 service, 5 benefit và 6 FAQ active.
- Lint/build đạt; runtime hồ sơ, ba service slug, invalid slug và success state đều HTTP 200.
- Blocker: publishable key insert `consultation_requests` bị HTTP 401 do thiếu quyền/policy insert.
- Đã tạo migration tối thiểu `202607180002_allow_public_consultation_requests.sql`; chưa áp dụng, chưa tạo request thử và chưa đánh dấu các mục form/lưu dữ liệu hoàn thành.

## Kết quả triển khai Task 04 — 2026-07-18

- `/expert` đọc hồ sơ `vu-thinh`, qualification, 6 specialization, 3 service, benefits và 6 FAQ active từ Supabase.
- `/consultation` kiểm tra service query string bằng dữ liệu active; invalid slug không được tự chọn và hiển thị cảnh báo.
- Form dùng native client constraints và Zod validation phía server; Server Action chỉ truyền các cột form cho service.
- Service kiểm tra expert/service active và đúng quan hệ trước insert; không gửi `status`, `admin_note` hoặc timestamps.
- RLS migration đã áp dụng lại thành công; payload thiếu trường trả NOT NULL, request QA hợp lệ trả HTTP 201, public select trả mảng rỗng.
- Success route thông báo đã ghi nhận nhưng chưa xác nhận lịch, có link về chuyên gia và khóa học.
- Checkbox Kinh nghiệm giữ chưa hoàn thành vì database không có số năm/nội dung kinh nghiệm được xác nhận; UI không tự tạo dữ liệu.
- Bản ghi QA: `TEST_ONLY_TASK04_20260718`, tên `Codex QA Task 04`; admin có thể xóa sau khi đối chiếu.
- Kiểm tra cuối: `npm.cmd run lint` đạt; `npm.cmd run build` đạt với `.env.local`; `/expert`, `/consultation`, ba service slug, invalid slug và `/consultation/success` đều HTTP 200.

## Rà soát mục Kinh nghiệm — 2026-07-18

- Public query bản ghi `vu-thinh` xác nhận bảng `experts` hiện không có cột `experience_years`, `experience` hoặc nội dung kinh nghiệm tương đương.
- Không có bảng/logic kinh nghiệm trong service và type hiện tại; checkbox giữ `[ ]` để không tạo số năm hay timeline giả.
- Task 04 bị chặn ở dữ liệu/schema cho đúng một mục này; không chuyển sang Task 05 trong phiên rà soát.
- Kiểm tra sau rà soát: `npm.cmd run lint` đạt; `npm.cmd run build` đạt (lần đầu trong sandbox lỗi tải Google Fonts, chạy lại có network thành công).
