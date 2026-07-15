# Task 03 — Chương trình và khóa học

## Routes

- `/programs`
- `/courses`
- `/courses/[slug]`

## Công việc

- [x] Danh sách nhóm chương trình.
- [ ] Bộ lọc danh mục cơ bản.
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
- Commit: chờ tạo commit.
