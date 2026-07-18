# Task 05 — Blog và tài liệu

## Routes

- `/blog`
- `/blog/[slug]`
- `/resources`

## Công việc

- [x] Danh mục blog.
- [x] Danh sách bài.
- [x] Chi tiết bài.
- [x] Bài liên quan.
- [x] Danh sách tài liệu.
- [x] Link xem/tải.
- [x] CTA đến khóa học/tư vấn.

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

## Kết quả triển khai module Blog — 2026-07-18

- Đã tạo types/service và route động `/blog`, `/blog/[slug]` theo luồng Page → blog service → Supabase server client.
- `/blog` có hero, bài nổi bật, danh mục active, filter URL, grid responsive, empty state và CTA khóa học/tư vấn.
- Chi tiết có Markdown an toàn qua `react-markdown`/`remark-gfm`, metadata động, breadcrumb, tag, tác giả, nguồn, khóa học, dịch vụ và bài liên quan.
- Có loading, error và not-found; không hard-code bài viết hoặc tự tạo schema/migration blog.
- Supabase hiện trả HTTP 404 cho cả bảy bảng blog nên chưa thể xác nhận 4 bài mẫu hoặc runtime dữ liệu; theo dõi tại `ISSUE-021`.
- `/resources` và hai mục tài liệu vẫn chưa thực hiện, đúng phạm vi phiên này.
- Kiểm tra code: lint đạt; production build đạt ngày 2026-07-18. Build trong sandbox lần đầu bị Google Fonts network, chạy lại có network đạt.

## Kết quả triển khai Tài liệu miễn phí — 2026-07-18

- Theo chỉ đạo người dùng, tạm bỏ qua blocker Kinh nghiệm của Task 04 và tiếp tục Task 05.
- Đã tạo `/resources` với danh sách tài liệu published từ `resource.service`, card responsive, ảnh/placeholder, loại tài liệu, link xem/tải và empty state.
- URL tài liệu chỉ chấp nhận HTTP/HTTPS; link ngoài mở tab mới với `noopener noreferrer`; bản ghi thiếu link hiển thị trạng thái đang cập nhật.
- Có loading/error boundary và metadata riêng; route dùng dynamic rendering để build không phụ thuộc database runtime.
- Supabase hiện trả HTTP 404 vì chưa có `public.resources`; chưa kiểm tra được link dữ liệu thật. Blocker được theo dõi tại `ISSUE-031`.
- File tạo: `src/types/resource.ts`, `src/services/resource.service.ts`, `src/components/resources/ResourceCard.tsx`, `src/app/resources/page.tsx`, `loading.tsx`, `error.tsx`.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt và `/resources` là dynamic route.
