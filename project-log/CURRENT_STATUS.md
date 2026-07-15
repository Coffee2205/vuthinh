# Trạng thái hiện tại

_Cập nhật gần nhất: 2026-07-15_

## Giai đoạn hiện tại

Giai đoạn 1 — Website giáo dục hoàn chỉnh có thể deploy và hoạt động thực tế.

## Task hiện tại

`Task 02 — Trang Giới thiệu` đã hoàn thành toàn bộ 7 mục theo checklist. `Task 03 — Chương trình và khóa học` là task tiếp theo nhưng chưa bắt đầu.

## Đã hoàn thành

### Phân tích và tài liệu

- Đã xác định mục tiêu và phạm vi Giai đoạn 1.
- Đã tạo `AGENTS.md`.
- Đã tạo PRD.
- Đã tạo tài liệu thiết kế kỹ thuật.
- Đã tạo sitemap, user flow, quy tắc nghiệp vụ, quy tắc giao diện và kiến trúc code.
- Đã chia Giai đoạn 1 thành các task từ `00` đến `09`.

### Source code nền tảng

- Đã khởi tạo cấu trúc Next.js App Router.
- Đã thiết lập TypeScript và Tailwind CSS.
- Đã thiết lập font Be Vietnam Pro.
- Đã thiết lập design tokens cơ bản.
- Đã tạo `Container`.
- Đã tạo logo chữ tạm thời.
- Đã tạo Header responsive.
- Đã tạo Footer.
- Đã thiết lập metadata mặc định.
- Đã tạo trang chủ tạm để kiểm tra layout.

### Kiểm tra Task 00

- Dependencies đã có trong môi trường local.
- Header desktop và menu mobile được điều khiển bằng breakpoint responsive.
- Menu mobile dùng `details/summary`, hỗ trợ mở/đóng bằng hành vi HTML gốc mà không cần Client Component.
- Header và Footer được gắn tại root layout nên xuất hiện trên route `/`.
- Route `/` được production build prerender thành static content.

### Task 01 — Hero Section

- Đã thay trang chủ tạm bằng Hero Section thực tế.
- Thông điệp định vị hệ sinh thái giáo dục gia đình hiển thị ngay đầu trang.
- Tiếng Trung là mảng được ưu tiên trong nội dung và thị giác.
- Có CTA chính tới đăng ký học thử và CTA phụ tới chương trình học.
- Nội dung tĩnh đã tách khỏi component.
- Chưa triển khai các section sau Trust Section.

### Task 01 — Vì sao phụ huynh tin tưởng

- Đã thêm section trình bày bốn nguyên tắc đồng hành dựa trên định hướng dự án.
- Nội dung nhấn mạnh mục tiêu rõ ràng, tiếng Trung trọng tâm, phát triển toàn diện và lắng nghe gia đình.
- Không sử dụng số liệu, chứng chỉ, thành tích hoặc phản hồi giả.
- Dữ liệu tĩnh nằm trong `src/data/home.ts`.
- Chưa bắt đầu các section sau Chương trình học nổi bật.

### Task 01 — Chương trình học nổi bật

- Đã thêm ba nhóm chương trình ở cấp định hướng, không tạo dữ liệu khóa học giả.
- Tiếng Trung là thẻ trọng tâm với bốn hướng: thiếu nhi, giao tiếp, HSK và thương mại.
- Kỹ năng/cảm xúc và giá trị sống/hạnh phúc được trình bày như hai nhóm bổ trợ.
- Có CTA tới `/programs`; route đích chưa được triển khai vì thuộc Task 03.
- Chưa bắt đầu các section sau Hành trình học tập.

### Task 01 — Hành trình học tập

- Đã thêm timeline bốn bước từ chia sẻ nhu cầu đến bắt đầu và duy trì trao đổi.
- Không tạo roadmap tự động, cá nhân hóa hoặc cam kết kết quả.
- Luồng tư vấn/xác nhận thủ công được ghi rõ.
- Chưa bắt đầu các section sau Giới thiệu chuyên gia.

### Task 01 — Giới thiệu chuyên gia

- Đã thêm section một chuyên gia với trạng thái hồ sơ đang cập nhật, không dùng dữ liệu giả.
- Có CTA tới `/expert` và `/consultation`; hai route chưa triển khai.
- Chưa bắt đầu các section sau Thành quả học viên.

### Task 01 — Thành quả học viên

- Đã thêm empty state minh bạch; không dùng social proof giả.
- CTA `/success-stories` chưa có route đích.

### Task 01 — Cảm nhận phụ huynh

- Đã thêm empty state minh bạch, không dùng lời nhận xét, tên, ảnh hoặc đánh giá giả.
- Chỉ công bố phản hồi sau khi phụ huynh xác nhận nội dung và đồng ý sử dụng thông tin.

### Task 01 — Bài viết/tài liệu nổi bật

- Đã thêm hai empty state cho Blog và Tài liệu miễn phí, không tạo nội dung xuất bản giả.
- Có link tới `/blog` và `/resources`; route đích chưa được triển khai vì thuộc Task 05.

### Task 01 — Form đăng ký học thử

- Đã thêm giao diện form gồm họ tên, điện thoại, email, độ tuổi, chương trình quan tâm và ghi chú.
- Form đang bị khóa và thông báo rõ chưa mở nhận đăng ký; không làm thất lạc hoặc giả lập lưu dữ liệu.
- Kết nối database, validation và trạng thái gửi nghiệp vụ vẫn thuộc Task 07.

### Task 01 — CTA cuối trang

- Đã thêm một CTA chính dẫn nội bộ tới form học thử trên cùng trang.
- Anchor và đích liên kết tồn tại, không tạo route hoặc chức năng ngoài Task 01.

### Trạng thái Task 01

- Hoàn thành toàn bộ checklist giao diện trang chủ.
- Task 01 không còn section giao diện chưa hoàn thành.

### Task 02 — Giới thiệu trung tâm

- Đã tạo route `/about` với metadata riêng và phần giới thiệu định vị Vũ Thịnh.
- Tiếng Trung được trình bày là trọng tâm; kỹ năng sống, cảm xúc và phát triển nội lực là các mảng bổ trợ.
- Không dùng lịch sử, số liệu, thành tựu, đội ngũ hoặc cơ sở chưa được xác nhận.

### Task 02 — Câu chuyện hình thành

- Đã thêm empty state minh bạch vì chưa có hồ sơ lịch sử được xác nhận.
- Section liệt kê bốn nhóm thông tin cần khách hàng cung cấp, không tạo mốc hoặc nhân vật giả.
- `main` được quản lý tại page để bao bọc các section của `/about`.

### Task 02 — Tầm nhìn

- Đã thêm tuyên bố hướng tới hệ sinh thái giáo dục đồng hành lâu dài cùng gia đình.
- Ba hướng gồm ngôn ngữ, năng lực sống và giá trị phát triển con người; không có cam kết quy mô hoặc vị thế.
- Câu chữ được ghi rõ cần khách hàng duyệt trước production.

### Task 02 — Sứ mệnh

- Đã thêm bốn vai trò: làm rõ lựa chọn học tập, ưu tiên tiếng Trung, kết nối năng lực toàn diện và mở đường trao đổi.
- Nội dung không cam kết kết quả học tập hoặc khả năng vận hành chưa được triển khai.
- Câu chữ được ghi rõ cần khách hàng duyệt trước production.

### Task 02 — Giá trị cốt lõi

- Đã thêm bốn nguyên tắc Rõ ràng, Lắng nghe, Phát triển toàn diện và Trung thực từ căn cứ hiện có của dự án.
- Nội dung tĩnh được tách khỏi Server Component và không dùng claim, thành tích hoặc cam kết chưa xác nhận.
- Câu chữ được ghi rõ cần khách hàng duyệt trước production.

### Task 02 — Triết lý giáo dục

- Đã diễn giải ba trụ cột Trí tuệ, Ngôn ngữ và Nhân cách từ định vị chính thức của dự án.
- Nội dung không tự tạo phương pháp giảng dạy, cam kết đầu ra hoặc tuyên bố chuyên môn.
- Câu chữ được ghi rõ cần khách hàng và đội ngũ chuyên môn duyệt trước production.

### Task 02 — CTA đăng ký tư vấn/học thử

- Đã thêm CTA cuối `/about` dẫn tới anchor học thử có thật trên trang chủ.
- CTA ghi rõ form đích đang ở trạng thái xem trước và chưa gửi hoặc lưu dữ liệu.
- Không tạo route tư vấn, form backend hoặc chức năng thuộc Task 04/07.

### Trạng thái Task 02

- Hoàn thành toàn bộ checklist Trang Giới thiệu.
- Task 02 không còn phần giao diện chưa hoàn thành.

## Chưa thực hiện

- Chương trình và khóa học.
- Trang chuyên gia và đăng ký tư vấn.
- Blog và tài liệu miễn phí.
- Các trang hỗ trợ.
- Supabase và database.
- Form lưu dữ liệu thật.
- Trang quản trị.
- Kiểm thử tổng thể và deploy production.

## Trạng thái kiểm tra

- `node_modules`: Đã có; các dependency chính được nhận diện.
- `npm.cmd run lint`: Đạt ngày 2026-07-15, không có lỗi ESLint.
- `npm.cmd run build`: Đạt ngày 2026-07-15; compile, TypeScript và static generation thành công.
- Runtime `/about` và `/`: HTTP 200; CTA hiển thị, href `/#trial-registration` và id đích `trial-registration` cùng tồn tại trong HTML build.

## Trạng thái project local

- Project có thể lint và production build trong môi trường hiện tại.
- Không có development server đang được duy trì sau phiên rà soát.
- Task 00 đã được commit và push lên `origin/dev`.
- Commit nền tảng gần nhất trước Hero: `3e5949b` — `feat: complete project foundation`.
- Hero Section đã được commit tại `3a0e2b4` — `feat: add home hero section`.
- Trust Section đã được commit tại `637d763` — `feat: add home trust section`.
- Programs Section đã được commit tại `ebf2d2b` — `feat: add featured programs section`.
- Learning Journey đã được commit tại `bd2b456` — `feat: add learning journey section`.
- Expert Section đã được commit tại `7b5d838` — `feat: add home expert section`.
- Student Outcomes đã được commit tại `5743558` — `feat: add student outcomes empty state`.
- Parent Testimonials đã được commit tại `71f7096` — `feat: add parent testimonials empty state`.
- Featured Content đã được commit tại `9ea640a` — `feat: add featured content empty states`.
- Trial Registration đã được commit tại `d31578f` — `feat: add trial registration form preview`.
- Final CTA và Task 01 đã được commit tại `8e64187` — `feat: complete home page final cta`.
- About Introduction đã được commit tại `2955001` — `feat: add about introduction`.
- Formation Story đã được commit tại `a0004af` — `feat: add formation story empty state`.
- Vision Section đã được commit tại `59d635b` — `feat: add about vision section`.
- Mission Section đã được commit tại `8f55a44` — `feat: add about mission section`.
- Core Values Section đã được commit tại `8b5821c` — `feat: add about core values section`.
- Education Philosophy Section đã được commit tại `f2cbd34` — `feat: add education philosophy section`.
- About CTA Section và Task 02 đã được commit tại `d2f6b49` — `feat: complete about page cta`.

## Task tiếp theo

`Task 03 — Chương trình và khóa học`. Bước đầu tiên là danh sách nhóm chương trình; Task 03 chưa bắt đầu.
