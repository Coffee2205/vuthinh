# Nhật ký quyết định

Mỗi quyết định phải ghi ngày, nội dung, lý do và ảnh hưởng.

## 2026-07-15 — Chia dự án thành nhiều giai đoạn

**Quyết định:** Giai đoạn 1 phải tạo ra website hoàn chỉnh, đã deploy và có thể phục vụ giới thiệu, tuyển sinh và nhận tư vấn.

**Lý do:** Giảm chi phí ban đầu và kiểm chứng nhu cầu trước khi xây LMS, roadmap và AI.

**Ảnh hưởng:** Các chức năng nâng cao không thuộc phạm vi Giai đoạn 1.

## 2026-07-15 — Sử dụng Next.js full-stack trong Giai đoạn 1

**Quyết định:** Dùng Next.js App Router cho cả trang public, admin và server-side logic cơ bản.

**Lý do:** Phạm vi hiện tại chưa cần backend NestJS riêng; giảm độ phức tạp và chi phí deploy.

**Ảnh hưởng:** Route Handlers hoặc Server Actions sẽ xử lý form và nghiệp vụ cơ bản.

## 2026-07-15 — Sử dụng Supabase

**Quyết định:** Dùng Supabase PostgreSQL, Auth và Storage.

**Lý do:** Phù hợp MVP, triển khai nhanh và có khả năng mở rộng.

**Ảnh hưởng:** Phải thiết kế RLS cẩn thận; không gọi Supabase tùy ý từ component trình bày.

## 2026-07-15 — Chỉ có một chuyên gia trong giao diện Giai đoạn 1

**Quyết định:** Trang public chỉ giới thiệu một chuyên gia và không xây marketplace.

**Lý do:** Phù hợp vận hành hiện tại và giảm khối lượng phát triển.

**Ảnh hưởng:** Database vẫn có bảng `experts` và `expert_id` để hỗ trợ mở rộng sau này.

## 2026-07-15 — Ưu tiên Server Components

**Quyết định:** Server Component là mặc định; chỉ dùng Client Component khi cần state, event hoặc browser API.

**Lý do:** Giảm JavaScript phía client và giữ code dễ quản lý.

## 2026-07-15 — Chưa sử dụng số liệu hoặc đánh giá giả

**Quyết định:** Không hiển thị số học viên, tỷ lệ hài lòng, chứng chỉ hoặc testimonial khi khách chưa cung cấp và xác nhận.

**Lý do:** Bảo đảm tính trung thực của website.

## 2026-07-15 — Nền tảng kỹ thuật thực tế của Task 00

**Quyết định:** Khởi tạo ứng dụng bằng Next.js App Router, TypeScript strict mode và Tailwind CSS v4.

**Lý do:** Tuân thủ stack Giai đoạn 1 và tạo nền tảng có kiểm tra kiểu, responsive và dễ mở rộng.

**Ảnh hưởng:** Root layout quản lý bộ khung dùng chung; style và component tiếp theo phải tiếp tục theo cấu trúc hiện tại.

## 2026-07-15 — Font và design tokens cơ bản

**Quyết định:** Dùng Be Vietnam Pro qua `next/font/google`; khai báo màu và font bằng CSS variables/design tokens trong `globals.css`.

**Lý do:** Đúng quy tắc giao diện và giữ typography, màu sắc nhất quán.

**Ảnh hưởng:** Production build cần kết nối tới Google Fonts khi font chưa có trong build cache.

## 2026-07-15 — Header, mobile menu và logo tạm

**Quyết định:** Header responsive dùng breakpoint Tailwind; menu mobile dùng HTML `details/summary` và logo hiện tại là logo chữ `VT` tạm thời. Header hiện không sticky.

**Lý do:** Có menu mở/đóng mà không cần JavaScript phía client, đồng thời tiếp tục tuân thủ ưu tiên Server Components.

**Ảnh hưởng:** Logo phải được thay khi khách hàng cung cấp nhận diện chính thức. Nếu sau này cần tự đóng menu khi đổi route hoặc hành vi phức tạp hơn, mới cân nhắc Client Component.

## 2026-07-15 — Chưa tích hợp dịch vụ và thư viện ngoài phạm vi Task 00

**Quyết định:** Chưa cài Supabase client và chưa cài thư viện UI.

**Lý do:** Supabase thuộc Task 07; Task 00 chỉ xây bộ khung nền tảng bằng stack hiện có.

**Ảnh hưởng:** Hiện chưa có database, Auth, Storage hay component từ UI framework bên thứ ba.

## 2026-07-15 — Hero không dùng ảnh giả hoặc ảnh chưa xác nhận

**Quyết định:** Hero dùng typography, design tokens và các visual card thể hiện lĩnh vực đào tạo; chưa dùng ảnh cho đến khi có ảnh thật từ khách hàng.

**Lý do:** Tuân thủ yêu cầu ưu tiên ảnh thật và không tự tạo dữ liệu/hình ảnh gây hiểu nhầm.

**Ảnh hưởng:** Visual hiện tại có thể được thay bằng ảnh thật trong một phiên sau mà không đổi cấu trúc nội dung chính.

## 2026-07-15 — Nội dung trang chủ tách khỏi component

**Quyết định:** Đặt nội dung tĩnh của Hero trong `src/data/home.ts`; `HeroSection` chỉ chịu trách nhiệm trình bày.

**Lý do:** Tuân thủ quy tắc kiến trúc và chuẩn bị cho các section trang chủ tiếp theo.

**Ảnh hưởng:** Nội dung trang chủ có một nguồn dữ liệu tĩnh riêng, chưa kết nối database.

## 2026-07-15 — Trust Section chỉ dùng nguyên tắc có trong định hướng dự án

**Quyết định:** Nội dung Trust Section được giới hạn ở mục tiêu học rõ ràng, tiếng Trung trọng tâm, phát triển toàn diện và khả năng học thử/tư vấn.

**Lý do:** Đây là các định hướng đã có trong PRD, Project Vision và user flow; không cần tạo số liệu, thành tích hoặc social proof chưa được xác nhận.

**Ảnh hưởng:** Section tạo niềm tin bằng tính minh bạch của định hướng thay vì claim định lượng. Nội dung vẫn cần khách hàng duyệt trước production.

## 2026-07-15 — Programs Section chỉ giới thiệu nhóm chương trình

**Quyết định:** Trang chủ chỉ hiển thị ba nhóm định hướng: tiếng Trung, kỹ năng/cảm xúc và giá trị sống/hạnh phúc; không tạo các khóa học cụ thể khi dữ liệu chưa được xác nhận.

**Lý do:** Các nhóm này có trong tài liệu dự án, trong khi thông tin khóa học chi tiết, học phí và lịch học chưa có dữ liệu thật.

**Ảnh hưởng:** Tiếng Trung được trình bày bằng thẻ lớn với bốn hướng đã xác định. Dữ liệu khóa học cụ thể sẽ thuộc Task 03 và Task 07.
