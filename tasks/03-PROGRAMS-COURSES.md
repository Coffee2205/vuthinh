# Task 03 — Chương trình và khóa học

## Routes

- `/programs`
- `/courses`
- `/courses/[slug]`

## Công việc

- [x] Danh sách nhóm chương trình.
- [x] Bộ lọc danh mục cơ bản.
- [x] Danh sách khóa học.
- [x] Chi tiết khóa học.
- [x] CTA đăng ký.
- [x] Empty state.
- [x] Metadata động cho khóa học.

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

## Trạng thái tạm hoãn — 2026-07-17

- Theo chỉ đạo của người dùng, tạm bỏ qua các mục còn lại của Task 03 để chuyển sang Task 04.
- Task 03 không được đánh dấu hoàn thành; các checkbox Danh sách khóa học, Chi tiết khóa học, CTA đăng ký, Empty state và Metadata động vẫn giữ `[ ]`.
- Khi quay lại, tiếp tục từ Danh sách khóa học sau khi có dữ liệu được phép công bố.

## Kết quả hoàn thành Task 03 — 2026-07-18

- Trạng thái: hoàn thành module giao diện và lớp dữ liệu; Supabase production chưa kết nối do chưa có project/env.
- Route: `/programs`, `/courses`, `/courses/[slug]`; có filter/sort qua URL, loading, empty, error, not-found, CTA và metadata động.
- Database: catalog Supabase gồm 7 bảng quan hệ, FK/index/trigger/RLS và public chỉ đọc active/published; các file SQL cũ trong repo đã được xóa sau khi database thực tế trở thành nguồn duy nhất.
- File source chính: `src/types/course.ts`, `src/lib/supabase/server.ts`, `src/services/course.service.ts`, các component trong `src/components/courses/`, `ProgramCard`, `ProgramGrid` và các route/state liên quan.
- File sửa: `.env.example`, `package.json`, `package-lock.json`, root layout, `/programs`, Task 03/07, tài liệu kỹ thuật/nghiệp vụ và project log.
- Quyết định hiện tại: component dùng cùng type/service và bắt buộc đọc Supabase; thiếu env hoặc query lỗi được xử lý bởi error boundary.
- Responsive: card 1/2/3 cột mobile/tablet/desktop; detail chuyển 1 sang 2 vùng ở `lg`; filter mobile-first.
- Accessibility/SEO: semantic heading/list/dl, một `main` mỗi page, breadcrumb, focus state, alt/placeholder ảnh, canonical/Open Graph, `notFound()` cho slug sai.
- Kiểm tra: `npm.cmd run lint` đạt; `npm.cmd run build` đạt ngày 2026-07-18. Runtime `/courses` HTTP 200; chưa hoàn tất kiểm tra trực quan trên thiết bị thật/browser automation.
- Vấn đề còn lại: cần thay dữ liệu demo đang nằm trong Supabase bằng dữ liệu khách hàng duyệt trước production.

## Kết nối Supabase thực tế — 2026-07-18

- Đã cấu hình Project URL và publishable key trong `.env.local`; file này bị Git ignore và không được commit.
- Database hiện có 3 program và 4 course demo từ bộ `01_schema.sql`/`02_seed.sql` đã chạy bằng Supabase SQL Editor.
- REST public với publishable key trả HTTP 200; `/courses` và `/courses/mat-goc-den-hsk-3` chạy HTTP 200 bằng dữ liệu Supabase, không dùng fallback.
- `npm.cmd run build` đạt với `.env.local`; Next.js nhận đúng môi trường Supabase.
- Chưa thay seed demo bằng nội dung production; chưa cấu hình biến môi trường tương ứng trên Vercel.

## Chuyển hoàn toàn sang dữ liệu Supabase — 2026-07-18

- Đã xóa `src/data/course-fallback-data.ts`; service không còn nhánh dữ liệu hard-code.
- Đã xóa các file SQL cũ trong `supabase/` vì không còn là schema đang được áp dụng cho project hiện tại.
- `/programs`, `/courses` và `/courses/[slug]` bắt buộc đọc dữ liệu qua `course.service` → Supabase server client.
- Thiếu env hoặc lỗi database sẽ hiển thị error state, không âm thầm dùng dữ liệu thay thế.

## Tích hợp ảnh khóa học từ Supabase Storage — 2026-07-21

- Ánh xạ cả bốn khóa học hiện có với bốn object trong `Public-Media/courses` khi `thumbnail_url` trong database đang trống.
- Database vẫn được ưu tiên; URL Storage chỉ là fallback cho object đã được chủ sở hữu cung cấp.
- Bốn URL gốc, trang danh sách/chi tiết khóa học và endpoint tối ưu ảnh Next.js đều trả HTTP 200; lint/build đạt.
- Runtime `/courses` xác nhận đủ bốn filename trong HTML; cả bốn request qua Next Image Optimizer trả HTTP 200 và `image/png`.
