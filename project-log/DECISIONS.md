# Nhật ký quyết định

Mỗi quyết định phải ghi ngày, nội dung, lý do và ảnh hưởng.

## 2026-07-17 — Tạm hoãn phần còn lại của Task 04

**Quyết định:** Theo chỉ đạo của người dùng, tạm bỏ qua các mục chưa hoàn thành của Task 04 và chuyển Task 05 thành task hiện tại.

**Lý do:** Hồ sơ chuyên gia thật đang thiếu; người dùng chủ động yêu cầu ghi nhận việc bỏ qua và tiếp tục task kế tiếp.

**Ảnh hưởng:** Task 04 không được coi là hoàn thành và các checkbox không thay đổi. `ISSUE-011` tiếp tục Open; route `/expert` giữ empty state và `/consultation` chưa được triển khai.

## 2026-07-17 — Tạm hoãn phần còn lại của Task 03

**Quyết định:** Theo chỉ đạo của người dùng, tạm bỏ qua các mục chưa hoàn thành của Task 03 và chuyển Task 04 thành task hiện tại.

**Lý do:** Danh sách khóa học đang bị chặn bởi dữ liệu nghiệp vụ; người dùng chủ động yêu cầu ghi nhận việc bỏ qua và tiếp tục task kế tiếp.

**Ảnh hưởng:** Task 03 không được coi là hoàn thành và các checkbox còn lại không thay đổi. `ISSUE-009` tiếp tục Open; khi quay lại phải bắt đầu từ Danh sách khóa học, không bỏ qua dữ liệu bắt buộc.

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

## 2026-07-15 — Learning Journey là quy trình định hướng, không phải roadmap tự động

**Quyết định:** Section mô tả bốn bước thủ công: chia sẻ nhu cầu, học thử/tư vấn, lựa chọn chương trình và bắt đầu/trao đổi.

**Lý do:** Phù hợp user flow Giai đoạn 1 và không tạo chức năng roadmap cá nhân hóa ngoài phạm vi.

**Ảnh hưởng:** Nội dung không cam kết kết quả và ghi rõ chưa có lộ trình tự động.

## 2026-07-15 — Expert Section dùng trạng thái chờ nội dung

**Quyết định:** Không tạo hồ sơ chuyên gia giả; hiển thị rõ tên, ảnh, kinh nghiệm và chứng chỉ đang chờ xác nhận.

**Lý do:** Project chưa có dữ liệu chuyên gia thật.

**Ảnh hưởng:** Layout và CTA sẵn sàng, nội dung hồ sơ phải được thay khi khách hàng cung cấp.

## 2026-07-15 — Thành quả học viên dùng empty state

**Quyết định:** Không hiển thị kết quả giả; dùng trạng thái chờ dữ liệu đã xác nhận.

**Lý do:** Chưa có thành quả, ảnh hoặc số liệu thật từ khách hàng.

**Ảnh hưởng:** Section sẵn sàng thay bằng case study thật sau này.

## 2026-07-15 — Cảm nhận phụ huynh dùng empty state có điều kiện đồng ý

**Quyết định:** Không tạo testimonial minh họa; chỉ hiển thị phản hồi, tên và hình ảnh sau khi phụ huynh xác nhận nội dung và đồng ý công bố.

**Lý do:** Project chưa có phản hồi thật hoặc bằng chứng về quyền sử dụng thông tin cá nhân.

**Ảnh hưởng:** Section hiện thông báo trạng thái đang cập nhật và có thể được thay bằng dữ liệu thật mà không đổi vị trí trong trang chủ.

## 2026-07-15 — Bài viết/tài liệu nổi bật dùng empty state

**Quyết định:** Trang chủ không tạo bài viết hoặc tài liệu minh họa; hiển thị hai trạng thái chờ và link tới route Blog/Tài liệu theo sitemap.

**Lý do:** Chưa có nội dung đáp ứng đủ trạng thái xuất bản, metadata và quyền sử dụng theo quy tắc nghiệp vụ.

**Ảnh hưởng:** Layout sẵn sàng nhận dữ liệu thật; `/blog` và `/resources` vẫn thuộc Task 05 và chưa được tạo trong Task 01.

## 2026-07-15 — Khóa form học thử cho đến khi có xử lý dữ liệu thật

**Quyết định:** Hiển thị đầy đủ giao diện form trong Task 01 nhưng vô hiệu hóa toàn bộ fieldset và nút gửi; không giả lập trạng thái thành công.

**Lý do:** Supabase, validation server, chống submit lặp và lưu `course_registrations` thuộc Task 07, chưa được triển khai.

**Ảnh hưởng:** Người dùng thấy trước thông tin cần cung cấp nhưng không thể gửi dữ liệu vào một luồng chưa hoạt động; form sẽ được kích hoạt trong Task 07.

## 2026-07-15 — CTA cuối trang liên kết nội bộ tới form học thử

**Quyết định:** CTA cuối trang chỉ có một hành động chính, dùng anchor `#trial-registration` tới form preview hiện có.

**Lý do:** CTA hoạt động ngay trong phạm vi trang chủ, tránh dẫn người dùng tới route `/trial-registration` chưa được triển khai và tuân thủ quy tắc không đặt nhiều CTA ngang cấp.

**Ảnh hưởng:** CTA không tạo thêm route hoặc logic gửi dữ liệu; khi form được kích hoạt trong Task 07, liên kết nội bộ vẫn giữ nguyên giá trị sử dụng.

## 2026-07-15 — Phần giới thiệu chỉ dùng định vị đã xác nhận

**Quyết định:** Nội dung mở đầu `/about` chỉ diễn đạt định vị hệ sinh thái giáo dục gia đình, tiếng Trung trọng tâm và các mảng phát triển bổ trợ từ PRD/Project Vision.

**Lý do:** Chưa có hồ sơ doanh nghiệp chính thức về lịch sử, đội ngũ, cơ sở hoặc thành tựu.

**Ảnh hưởng:** Route giới thiệu có thể hoạt động mà không tạo claim chưa kiểm chứng; các dữ liệu thực tế sẽ được bổ sung ở đúng section sau khi khách hàng xác nhận.

## 2026-07-15 — Câu chuyện hình thành dùng empty state

**Quyết định:** Không suy diễn lịch sử từ định vị dự án; section chỉ thông báo trạng thái chờ và liệt kê thông tin cần khách hàng xác nhận.

**Lý do:** Project không có năm thành lập, người sáng lập, bối cảnh khởi đầu hoặc mốc phát triển đáng tin cậy.

**Ảnh hưởng:** Cấu trúc trang được hoàn thiện trong đúng phạm vi mà không tạo câu chuyện thương hiệu giả; `ISSUE-016` tiếp tục theo dõi dữ liệu còn thiếu.

## 2026-07-15 — Tầm nhìn giới hạn ở định hướng đã có

**Quyết định:** Tầm nhìn diễn đạt hướng kết nối ngôn ngữ, kỹ năng sống và phát triển con người trong hệ sinh thái giáo dục gia đình.

**Lý do:** Đây là định vị dài hạn đã có trong Project Vision; project không có cơ sở cho claim dẫn đầu, quy mô hoặc mốc thời gian.

**Ảnh hưởng:** Section có nội dung định hướng nhưng kèm ghi chú cần khách hàng duyệt bản cuối; không lấn sang Sứ mệnh.

## 2026-07-15 — Sứ mệnh mô tả vai trò, không cam kết kết quả

**Quyết định:** Section Sứ mệnh chỉ diễn đạt các vai trò có trong phạm vi dự án: giới thiệu hướng học, ưu tiên tiếng Trung, kết nối năng lực sống và tạo kênh học thử/tư vấn.

**Lý do:** PRD xác nhận các hoạt động này nhưng không cung cấp cơ sở cho cam kết đầu ra hoặc claim chất lượng tuyệt đối.

**Ảnh hưởng:** Nội dung phân biệt với Tầm nhìn và không lấn sang Giá trị cốt lõi; câu chữ vẫn cần khách hàng duyệt.

## 2026-07-15 — Giá trị cốt lõi chỉ dùng nguyên tắc có căn cứ

**Quyết định:** Section Giá trị cốt lõi tổng hợp bốn nguyên tắc Rõ ràng, Lắng nghe, Phát triển toàn diện và Trung thực từ PRD, Project Vision và quy tắc nội dung hiện có.

**Lý do:** Trình bày định hướng nhất quán mà không tự gắn phẩm chất thương hiệu, thành tích hoặc cam kết chưa được xác nhận.

**Ảnh hưởng:** Nội dung được giữ trong dữ liệu tĩnh, có ghi chú cần khách hàng duyệt và chưa được xem là tuyên bố thương hiệu chính thức.

## 2026-07-15 — Triết lý giáo dục bám theo định vị ba trụ cột

**Quyết định:** Diễn giải Triết lý giáo dục từ thông điệp “Nuôi dưỡng trí tuệ – ngôn ngữ – nhân cách” và phạm vi phát triển con người đã có trong Project Vision.

**Lý do:** Đây là căn cứ rõ nhất cho quan điểm giáo dục hiện tại; project chưa có tài liệu xác nhận phương pháp sư phạm hoặc cam kết đầu ra cụ thể.

**Ảnh hưởng:** Section chỉ mô tả định hướng Trí tuệ, Ngôn ngữ và Nhân cách, kèm yêu cầu khách hàng cùng đội ngũ chuyên môn duyệt trước production.

## 2026-07-15 — CTA Trang Giới thiệu dùng anchor học thử hiện hữu

**Quyết định:** CTA cuối `/about` dẫn tới `/#trial-registration` và nêu rõ form đang ở trạng thái xem trước.

**Lý do:** Anchor đích đã tồn tại; `/consultation` thuộc Task 04 và chưa được triển khai nên không dùng làm link chết hoặc mở rộng phạm vi.

**Ảnh hưởng:** Người dùng có thể điều hướng tới thông tin đăng ký hiện hữu mà không bị hiểu nhầm rằng dữ liệu đang được tiếp nhận; CTA tư vấn riêng chờ đúng task.

## 2026-07-15 — Route chương trình bắt đầu bằng taxonomy tĩnh đã xác nhận

**Quyết định:** `/programs` dùng dữ liệu tĩnh tách riêng để hiển thị đúng bảy nhóm trong Task 03, với bốn nhóm tiếng Trung là trọng tâm.

**Lý do:** Taxonomy nhóm đã được tài liệu xác nhận nhưng chưa có dữ liệu khóa học chi tiết đáng tin cậy hoặc database.

**Ảnh hưởng:** Route có thể cung cấp định hướng rõ ràng mà không tạo khóa học giả; bộ lọc, danh sách và chi tiết khóa học tiếp tục được triển khai theo từng mục sau.

## 2026-07-15 — Cô lập bộ lọc chương trình trong Client Component nhỏ

**Quyết định:** Giữ page và section `/programs` là Server Components; chỉ `ProgramGroupFilter` dùng `use client` để quản lý lựa chọn và lọc danh sách tại chỗ.

**Lý do:** Bộ lọc cần state/event trình duyệt, trong khi phần còn lại không cần JavaScript phía client.

**Ảnh hưởng:** Bốn lựa chọn lọc hoạt động không cần database hoặc thư viện mới; dữ liệu vẫn nằm trong `src/data/programs.ts` và phạm vi client được giới hạn.
