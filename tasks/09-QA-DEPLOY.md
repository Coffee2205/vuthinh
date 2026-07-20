# Task 09 — Kiểm thử và deploy

## Kiểm thử

- [ ] Desktop.
- [ ] Tablet.
- [ ] Mobile.
- [x] Menu.
- [x] Links.
- [ ] Forms.
- [ ] Validation.
- [x] Loading.
- [x] Error.
- [x] Empty state.
- [x] Admin protection.
- [x] SEO metadata.
- [x] 404.

## Hiệu năng

- [x] Dùng `next/image`.
- [ ] Không tải ảnh quá lớn.
- [x] Hạn chế client component.
- [x] Không import thư viện thừa.

## Deploy

- [ ] Push GitHub.
- [x] Deploy production.
- [x] Cấu hình environment variables.
- [x] Kết nối domain.
- [x] HTTPS.
- [ ] Kiểm tra form production.
- [x] Sitemap và robots.
- [ ] Bàn giao tài khoản và hướng dẫn.

## Definition of Done

Website hoạt động được trên domain thật và nhận đăng ký thực tế.

## Kết quả thực hiện — 2026-07-20

### Đã xác minh

- `https://vuthinh.io.vn` trả HTTP 200 qua HTTPS; các route public chính hoạt động và dữ liệu Supabase production tải được, xác nhận các biến môi trường bắt buộc đã được cấu hình.
- Menu desktop/mobile dùng breakpoint và hành vi HTML gốc; toàn bộ link điều hướng chính đã được đối chiếu bằng HTTP production.
- `/admin` trả redirect 307 khi chưa đăng nhập; `/admin/login` trả 200 và có `noindex`.
- URL không tồn tại trả HTTP 404. Đã bổ sung trang 404 cấp ứng dụng với CTA quay lại trang chủ/khóa học.
- Đã bổ sung `robots.ts` và `sitemap.ts`; sitemap có route tĩnh và tự thêm course/blog/resource published khi từng nguồn dữ liệu hoạt động.
- Đã loại bỏ title suffix bị lặp; root metadata tiếp tục quản lý template thương hiệu.
- Ảnh nội dung dùng `next/image`, bật tối ưu ảnh cho Supabase Storage; không có thẻ `<img>` thô.
- Client Component chỉ nằm ở form, filter, admin interaction, Supabase browser client và error boundary — các vị trí cần state/event/reset.
- Dependency trực tiếp trong `package.json` đều có import tương ứng trong source.
- Loading/error/empty state tồn tại cho các route dữ liệu động và production build nhận diện đầy đủ route.

### File đã tạo hoặc sửa

- Tạo `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/not-found.tsx`.
- Tạo `docs/DEPLOYMENT_HANDOFF.md`.
- Sửa `next.config.ts`, metadata các public page và các component ảnh.
- Sửa một so sánh field cũ trong `src/components/admin/AdminEditor.tsx` để tương thích với cấu hình admin đang thay đổi và khôi phục TypeScript build.

### Quyết định kỹ thuật

- Không để lỗi một bảng nội dung làm hỏng toàn bộ sitemap; dùng kết quả từng nguồn độc lập.
- Chỉ cho Image Optimization tải ảnh HTTPS từ Supabase, không mở wildcard host toàn Internet.
- Không gửi form QA production bằng dữ liệu giả khi chưa có quy trình xóa/đối chiếu qua tài khoản admin.

### Còn lại

- Chưa kiểm tra trực quan bằng browser thật ở ba viewport desktop/tablet/mobile.
- Chưa test submit form production và validation bằng dữ liệu thật được phép; chưa xác nhận bản ghi qua admin/Supabase.
- Chưa đăng nhập admin để kiểm tra protection theo role và mutation thực tế.
- Chưa kiểm tra kích thước file ảnh production vì nội dung/ảnh thật chưa đầy đủ.
- Source Task 9 chưa push/redeploy; production hiện vẫn trả 404 cho `/robots.txt` và `/sitemap.xml` cho tới deployment kế tiếp.
- Chưa bàn giao quyền tài khoản GitHub/Vercel/Supabase/domain; tài liệu hướng dẫn đã sẵn sàng.

### Kiểm tra

- `npm.cmd run lint`: đạt ngày 2026-07-20.
- `npm.cmd run build`: đạt ngày 2026-07-20; TypeScript và 25 route build thành công.
- Production route audit: các route public chính HTTP 200; `/admin` 307; URL lạ 404; domain dùng HTTPS.
