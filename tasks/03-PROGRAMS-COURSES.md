# Task 03 — Chương trình và khóa học

## Routes

- `/programs`
- `/courses`
- `/courses/[slug]`

## Công việc

- [x] Danh sách nhóm chương trình.
- [x] Bộ lọc danh mục cơ bản.
- [ ] Danh sách khóa học.
- [ ] Chi tiết khóa học.
- [ ] CTA đăng ký.
- [ ] Empty state.
- [ ] Metadata động cho khóa học.

## Nhóm chương trình

- Tiếng Trung thiếu nhi.
- Tiếng Trung giao tiếp.
- HSK.
- Tiếng Trung thương mại.
- Kỹ năng sống.
- Quản trị cảm xúc.
- Giá trị sống và hạnh phúc.

## Tiêu chí

- Thông tin khóa học rõ ràng.
- Không yêu cầu đăng nhập.
- Chưa có thanh toán online.

## Kết quả thực hiện — Danh sách nhóm chương trình

- File tạo: `src/app/programs/page.tsx`, `src/components/programs/ProgramGroupsSection.tsx`, `src/data/programs.ts`.
- File sửa: `tasks/03-PROGRAMS-COURSES.md` và các project log liên quan.
- Quyết định: hiển thị đúng bảy nhóm đã xác định ở cấp định hướng; nhấn mạnh bốn nhóm tiếng Trung và không tạo khóa học, học phí, lịch học hoặc kết quả giả.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt và `/programs` được prerender tĩnh; production local HTTP 200, có đủ bảy nhóm, không có bộ lọc hoặc link khóa học.
- Responsive: một cột trên mobile, hai cột từ `sm` và ba cột từ `lg`.
- Accessibility: page có `main`, section dùng `aria-labelledby`, một `h1`, danh sách `ul`/`li` và heading nhóm `h2`; số thứ tự trang trí được ẩn khỏi assistive technology.
- Giới hạn: chưa có dữ liệu khóa học chi tiết được khách hàng xác nhận; chưa làm bộ lọc hoặc các phần tiếp theo; chưa kiểm tra trực quan trên thiết bị thật/browser automation.
- Commit: `3119778` — `feat: add program group listing`.

## Kết quả thực hiện — Bộ lọc danh mục cơ bản

- File tạo: `src/components/programs/ProgramGroupFilter.tsx`.
- File sửa: `src/components/programs/ProgramGroupsSection.tsx`, `src/data/programs.ts`, `tasks/03-PROGRAMS-COURSES.md` và các project log liên quan.
- Quyết định: giữ section/header là Server Component và cô lập state/event trong một Client Component nhỏ; lọc theo Tất cả, Tiếng Trung, Năng lực sống và Phát triển con người.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt và `/programs` được prerender tĩnh; production local HTTP 200, artifact build có đủ bốn nút, `aria-pressed="true"` cho Tất cả và trạng thái ban đầu 7 nhóm; không có link khóa học.
- Responsive: nhóm nút tự xuống dòng; danh sách giữ một cột mobile, hai cột từ `sm`, ba cột từ `lg`.
- Accessibility: bộ lọc có `role="group"`/`aria-label`, nút có `aria-pressed`, chiều cao tối thiểu 44px, focus-visible và kết quả dùng `role="status"`/`aria-live`.
- Giới hạn: chưa kiểm tra thao tác click trực quan bằng browser automation/thiết bị thật; chưa làm danh sách khóa học hoặc phần tiếp theo.
- Commit: `bd88cda` — `feat: add program category filter`.

## Kết quả rà soát — Danh sách khóa học

- Trạng thái: bị chặn do chưa có dữ liệu khóa học được khách hàng xác nhận; checkbox vẫn để `[ ]`.
- File tạo: không có.
- File sửa: `tasks/03-PROGRAMS-COURSES.md` và các project log liên quan; không sửa source chức năng.
- Dữ liệu đã kiểm tra: toàn bộ `src/`, `docs/`, `tasks/` và `project-log/` chỉ có taxonomy nhóm, yêu cầu trường và schema dự kiến; không có bản ghi khóa học thật.
- Dữ liệu tối thiểu cần cung cấp cho mỗi khóa học: tên, slug, nhóm chương trình, mô tả ngắn, đối tượng, mục tiêu, nội dung chính, thời lượng, hình thức học, học phí hoặc trạng thái Liên hệ và trạng thái xuất bản.
- Quyết định: không tạo khóa học, học phí, lịch học hoặc thông tin đầu ra giả; không làm trước Empty state vì đây là mục riêng phía sau trong checklist.
- Kiểm tra source hiện tại: `npm.cmd run lint` đạt; `npm.cmd run build` đạt, `/`, `/about` và `/programs` tiếp tục được prerender tĩnh.
- Giới hạn/blocker: cần ít nhất một bản ghi khóa học đã duyệt hoặc chỉ đạo rõ cho phép chuyển sang thực hiện mục Empty state theo đúng thứ tự.
- Commit tài liệu: `e777ef6` — `docs: record course data blocker`.

## Bổ sung tài liệu bàn giao nội dung — 2026-07-17

- File tạo: `docs/CONTENT_REQUIREMENTS.md`.
- File sửa: `tasks/03-PROGRAMS-COURSES.md` và các project log liên quan.
- Quyết định: tổng hợp yêu cầu nội dung toàn website nhưng giữ nguyên phạm vi thực thi Task 03; không tạo dữ liệu khóa học giả hoặc chuyển sang mục tiếp theo.
- Vấn đề còn lại: cần tối thiểu một khóa học được phép công bố; khuyến nghị cung cấp toàn bộ khóa đang tuyển sinh theo cấu trúc trong tài liệu mới.
- Kiểm tra: đã đối chiếu với `ISSUES.md`, toàn bộ `docs/`, `tasks/` và source; không có bản ghi khóa học thật mới. `npm.cmd run lint` và `npm.cmd run build` đều đạt ngày 2026-07-17; các route `/`, `/about` và `/programs` tiếp tục được prerender tĩnh.
