# Task 05 — Blog và tài liệu

## Routes

- `/blog`
- `/blog/[slug]`
- `/resources`

## Công việc

- [ ] Danh mục blog.
- [ ] Danh sách bài.
- [ ] Chi tiết bài.
- [ ] Bài liên quan.
- [ ] Danh sách tài liệu.
- [ ] Link xem/tải.
- [ ] CTA đến khóa học/tư vấn.

## Tiêu chí

- Nội dung tối ưu đọc trên mobile.
- Không upload video lớn vào Supabase.
- Metadata động cho bài viết.

## Kết quả thực hiện — Khung danh mục Blog

- Trạng thái: chưa hoàn thành mục Danh mục blog vì chưa có taxonomy hoặc bài viết thật; checkbox giữ `[ ]`.
- File tạo: `src/app/blog/page.tsx`, `src/components/blog/BlogCategoriesSection.tsx`, `src/data/blog.ts`.
- File sửa: `tasks/04-EXPERT-CONSULTATION.md`, `tasks/05-BLOG-RESOURCES.md` và các project log liên quan.
- Quyết định: tạo `/blog` với empty state minh bạch; không tự dùng ba định hướng 70/20/10 làm tên danh mục chính thức và không tạo bài viết giả.
- Responsive: nội dung mobile-first; danh sách thông tin cần cung cấp chuyển hai cột từ `sm` và ba cột từ `lg`.
- Accessibility: một `h1`, heading đúng thứ tự, section có `aria-labelledby`, danh sách semantic và chi tiết trang trí được ẩn khỏi assistive technology.
- Giới hạn: `ISSUE-014` tiếp tục Open; chưa làm các mục Danh sách bài trở đi hoặc route `/resources`.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt và `/blog` được prerender tĩnh; production runtime `/blog` trả HTTP 200, có đủ trạng thái chờ, danh sách thông tin cần xác nhận và ghi chú taxonomy.
