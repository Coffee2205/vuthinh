# Danh sách thông tin cần cung cấp để hoàn thiện website

_Cập nhật: 2026-07-17_

## 1. Mục đích

Tài liệu này tổng hợp các dữ liệu còn thiếu từ `project-log/ISSUES.md`, yêu cầu nghiệp vụ và phạm vi Giai đoạn 1. Đây là checklist bàn giao cho khách hàng, không phải danh sách nội dung giả định sẽ tự đưa lên website.

Quy ước số lượng:

- **Tối thiểu**: đủ để triển khai và kiểm tra chức năng liên quan.
- **Khuyến nghị**: đủ để website khi công bố không quá trống; khách hàng có thể cung cấp nhiều hơn.
- Mọi nội dung, số liệu, chứng chỉ, kết quả và lời nhận xét chỉ được công bố sau khi chủ sở hữu xác nhận.

## 2. Ưu tiên bàn giao

| Mức | Nhóm thông tin | Lý do |
| --- | --- | --- |
| P0 | Khóa học đang tuyển sinh | Đang chặn phần Danh sách khóa học của Task 03 |
| P0 | Thương hiệu, liên hệ, tên miền | Dùng xuyên suốt Header, Footer, SEO, form và deploy |
| P0 | Hồ sơ chuyên gia và dịch vụ tư vấn | Cần cho `/expert` và `/consultation` |
| P1 | Hồ sơ trung tâm và nội dung thương hiệu cần duyệt | Thay các trạng thái chờ trên `/about` |
| P1 | Ảnh thật và quyền sử dụng | Cần hoàn thiện giao diện production |
| P1 | Bài viết, tài liệu, thành quả, cảm nhận và FAQ | Cần cho các trang nội dung và social proof |
| P1 | Nội dung liên hệ, tuyển dụng và pháp lý | Cần hoàn thiện toàn bộ public routes |
| P0 trước deploy | Tài khoản/hạ tầng và quy trình xử lý form | Cần nhận đăng ký thật, quản trị và đưa website lên domain |

## 3. Quy cách bàn giao chung

### 3.1. Văn bản và dữ liệu có cấu trúc

- Bàn giao bằng Google Sheets, Excel `.xlsx` hoặc CSV UTF-8; mỗi nhóm nội dung dùng một sheet.
- Nội dung dài có thể dùng Google Docs, Word `.docx` hoặc Markdown `.md`; ghi rõ bản cuối đã duyệt.
- Slug dùng chữ thường không dấu, nối bằng dấu gạch ngang, ví dụ `tieng-trung-giao-tiep-co-ban`.
- Ngày dùng định dạng `YYYY-MM-DD`; giá dùng số VND không có chữ trong cột dữ liệu và có thêm cột cách hiển thị.
- Không gộp nhiều giá trị vào một ô nếu có thể tách cột; danh sách như chuyên môn hoặc mục tiêu có thể tách mỗi ý một dòng.

### 3.2. Hình ảnh

- Ưu tiên ảnh gốc JPG/JPEG hoặc PNG, hệ màu sRGB; không gửi ảnh chụp màn hình hoặc ảnh đã lấy từ mạng khi chưa rõ bản quyền.
- Ảnh Hero: ảnh ngang, tối thiểu `1920 × 1080 px`, khuyến nghị chừa khoảng trống để đặt chữ.
- Ảnh thẻ/thumbnail: ảnh ngang tỷ lệ `16:9` hoặc `4:3`, cạnh dài tối thiểu `1600 px`.
- Ảnh chân dung: tỷ lệ `4:5` hoặc `1:1`, cạnh ngắn tối thiểu `1200 px`.
- Logo: ưu tiên SVG; kèm PNG nền trong suốt tối thiểu `1000 px` chiều ngang và phiên bản dùng trên nền sáng/tối.
- Mỗi ảnh cần: tên tệp rõ nghĩa, mô tả/alt, người sở hữu, nguồn, xác nhận quyền sử dụng và phạm vi được phép công bố.

### 3.3. Video và tệp tải

- Video gửi bằng link YouTube/Vimeo hoặc dịch vụ lưu trữ đã duyệt; không upload video lớn trực tiếp lên website/Supabase.
- Tài liệu tải xuống ưu tiên PDF đã tối ưu, tên tệp không dấu, dung lượng khuyến nghị dưới `20 MB` mỗi tệp.
- Chứng chỉ có thể là PDF/JPG/PNG rõ nét; phải che mã hoặc thông tin riêng tư nếu không được phép công bố.

## 4. Thương hiệu và thông tin liên hệ

| Mục cần cung cấp | Số lượng | Định dạng/trường bắt buộc | Dùng tại |
| --- | --- | --- | --- |
| Tên thương hiệu chính thức | 1 bộ | Tên đầy đủ, tên viết tắt, cách viết hoa, tên pháp lý nếu cần | Toàn website, metadata, pháp lý |
| Logo chính thức | 1 bộ, khuyến nghị 3 biến thể | SVG + PNG trong suốt; logo màu, nền sáng, nền tối; favicon/icon vuông | Header, Footer, favicon, Open Graph |
| Thông điệp thương hiệu | 1 câu chính + tối đa 2 câu phụ | Văn bản đã duyệt | Hero, About, SEO |
| Hotline | Tối thiểu 1 | Số hiển thị, số bấm gọi, giờ tiếp nhận | Header/Footer, Contact, CTA |
| Email | Tối thiểu 1 | Email công khai; khuyến nghị thêm email nhận form | Footer, Contact, form |
| Địa chỉ | Mỗi cơ sở 1 bản ghi | Tên cơ sở, địa chỉ đầy đủ, giờ mở cửa | Contact, Footer |
| Kênh mạng xã hội | Mỗi kênh 1 URL | Facebook, Zalo, YouTube/TikTok nếu dùng | Footer, Contact |
| Google Maps | Mỗi cơ sở 1 URL | Link chia sẻ và/hoặc mã nhúng được phép dùng | Contact |
| Tên miền | 1 | Domain chính thức, chủ tài khoản đăng ký, quyền cấu hình DNS | Production, SEO |

Liên quan: `ISSUE-002`, `ISSUE-004`, `ISSUE-006`.

## 5. Nội dung trang chủ cần xác nhận

| Khối | Số lượng | Nội dung cần cung cấp/duyệt | Hình ảnh |
| --- | --- | --- | --- |
| Hero | 1 bộ | Eyebrow, tiêu đề, mô tả ngắn, nhãn CTA; xác nhận thông điệp hiện có hoặc gửi bản thay thế | 1 ảnh Hero ngang chính, khuyến nghị thêm 1 ảnh dự phòng |
| Vì sao phụ huynh tin tưởng | 4 ý hiện có | Duyệt/sửa tên và mô tả từng nguyên tắc; không dùng claim chưa có bằng chứng | 0–4 ảnh tùy định hướng |
| Hành trình học tập | 4 bước hiện có | Duyệt đúng quy trình tư vấn, xếp lớp, bắt đầu học và theo dõi thực tế | Không bắt buộc |
| Chương trình nổi bật | Tối thiểu 3 khóa hoặc nhóm | Chọn mục muốn ghim, thứ tự, nhãn CTA | 1 thumbnail/mục nếu hiển thị khóa cụ thể |
| Chuyên gia nổi bật | 1 | Lấy từ hồ sơ chuyên gia đã duyệt | 1 chân dung |
| Thành quả học viên | Tối thiểu 1 để bỏ empty state; khuyến nghị 3–6 | Lấy từ case study đã duyệt | 1–3 ảnh/case |
| Cảm nhận phụ huynh | Tối thiểu 1; khuyến nghị 3–6 | Lấy từ phản hồi đã đồng ý công bố | Ảnh tùy phạm vi đồng ý |
| Nội dung nổi bật | Tối thiểu 1 bài + 1 tài liệu; khuyến nghị 3 mỗi loại | Chỉ định bản ghi nổi bật đã xuất bản | 1 thumbnail/bản ghi |

Liên quan: `ISSUE-007`, `ISSUE-008`, `ISSUE-010`, `ISSUE-012`, `ISSUE-013`, `ISSUE-014`.

## 6. Hồ sơ trung tâm và nội dung thương hiệu

### 6.1. Hồ sơ trung tâm

Tối thiểu 1 bộ hồ sơ chính thức, gồm:

- Tên và mô tả ngắn về trung tâm: 80–150 từ.
- Câu chuyện hình thành: 400–800 từ.
- Người sáng lập: họ tên, vai trò, tiểu sử ngắn và phạm vi thông tin được phép công bố.
- Các mốc phát triển: tối thiểu 3 mốc nếu có; mỗi mốc gồm ngày/năm, tiêu đề, mô tả và bằng chứng/ảnh liên quan.
- Cơ sở và môi trường học: địa chỉ, mô tả, tiện ích có thể công bố.
- Đội ngũ: chỉ cung cấp người sẽ xuất hiện trên website; mỗi người gồm họ tên, vai trò, giới thiệu ngắn và ảnh.
- Thành tựu/số liệu: chỉ cung cấp khi có nguồn kiểm chứng, thời điểm chốt số liệu và cách diễn đạt được duyệt.
- Ảnh khuyến nghị: 1 ảnh người sáng lập, 3–6 ảnh trung tâm/lớp học/đội ngũ.

### 6.2. Các tuyên bố cần duyệt bản cuối

| Nội dung | Số lượng hiện có cần duyệt | Kết quả bàn giao |
| --- | --- | --- |
| Tầm nhìn | 1 tuyên bố + 3 hướng | Giữ nguyên, chỉnh sửa hoặc thay thế toàn bộ |
| Sứ mệnh | 1 tuyên bố + 4 trách nhiệm | Bản chữ cuối đã duyệt |
| Giá trị cốt lõi | 4 giá trị | Tên và mô tả từng giá trị |
| Triết lý giáo dục | 1 tuyên bố + 3 trụ cột | Bản được khách hàng và người phụ trách chuyên môn duyệt |
| Phương pháp đào tạo | 1 bộ nếu muốn công bố | Nguyên tắc, cách tổ chức học, cách đánh giá; không suy diễn từ triết lý |

Liên quan: `ISSUE-016` đến `ISSUE-020`.

## 7. Dữ liệu chương trình và khóa học

### 7.1. Số lượng

- **Tối thiểu để gỡ blocker:** 1 khóa học đang được phép công bố.
- **Tối thiểu để website hữu ích:** toàn bộ khóa đang tuyển sinh tại thời điểm ra mắt.
- **Khuyến nghị nội dung:** ít nhất 1 khóa cho mỗi nhóm thực sự đang hoạt động; không cần tạo đủ bảy nhóm nếu trung tâm chưa mở lớp.

### 7.2. Mỗi khóa học là một bản ghi

| Trường | Bắt buộc | Định dạng/yêu cầu |
| --- | --- | --- |
| Tên khóa học | Có | Tên chính thức, duy nhất |
| Slug | Có | Chữ thường không dấu, duy nhất |
| Nhóm chương trình/danh mục | Có | Chọn từ taxonomy đã duyệt |
| Mô tả ngắn | Có | 40–80 từ, dùng trên card và SEO excerpt |
| Nội dung chi tiết | Có | 500–1.500 từ hoặc tài liệu nguồn đủ để biên tập |
| Đối tượng | Có | Độ tuổi/nhóm người học và điều kiện phù hợp |
| Trình độ đầu vào | Có | Ví dụ: chưa biết, sơ cấp; ghi “Không yêu cầu” nếu đúng |
| Mục tiêu học tập | Có | Khuyến nghị 3–6 mục tiêu có thể kiểm chứng |
| Nội dung/chương trình học | Có | Các học phần/chủ đề theo thứ tự; khuyến nghị 4–12 mục |
| Thời lượng | Có | Tổng tuần/tháng/buổi và số phút mỗi buổi nếu đã chốt |
| Hình thức học | Có | Online/offline/kết hợp; cá nhân/nhóm; địa điểm nếu offline |
| Lịch học/khai giảng | Nếu công bố | Ngày bắt đầu, thứ, khung giờ, múi giờ; hoặc ghi “Liên hệ” |
| Học phí | Có | Số VND + cách hiển thị, hoặc trạng thái `Liên hệ` |
| Chính sách liên quan | Nếu có | Học thử, bảo lưu, hoàn/hủy, ưu đãi và thời hạn áp dụng |
| Giảng viên/phụ trách | Nếu công bố | Liên kết hồ sơ đã được phép hiển thị |
| Ảnh đại diện | Có | 1 ảnh ngang `16:9`/`4:3`, cạnh dài tối thiểu 1600 px |
| Ảnh bổ sung | Khuyến nghị | 2–5 ảnh thật/lớp học cho trang chi tiết |
| Trạng thái | Có | `draft`, `published` hoặc `archived` |
| Nổi bật | Có | Có/Không |
| Ngày xuất bản | Khi published | `YYYY-MM-DD` |
| SEO | Có trước production | Meta title, meta description, ảnh chia sẻ; có thể duyệt từ bản biên tập |

Không công bố cam kết đầu ra, tỷ lệ đỗ, số học viên hoặc chứng nhận nếu không có căn cứ và phê duyệt. Liên quan: `ISSUE-009`.

## 8. Hồ sơ chuyên gia và dịch vụ tư vấn

### 8.1. Một hồ sơ chuyên gia

| Mục | Số lượng | Yêu cầu |
| --- | --- | --- |
| Thông tin định danh | 1 bộ | Họ tên, slug, chức danh hiện tại |
| Tiểu sử | 1 bản ngắn + 1 bản đầy đủ | 80–150 từ và 500–1.000 từ |
| Chuyên môn | Khuyến nghị 3–8 mục | Tên chuyên môn và mô tả nếu cần |
| Kinh nghiệm | Các mục được phép công bố | Số năm chỉ dùng khi đã xác nhận; có thể dùng timeline thay thế |
| Chứng chỉ | 0 hoặc tất cả chứng chỉ muốn công bố | Tên, đơn vị cấp, ngày cấp, tệp/link kiểm chứng; không bắt buộc nếu không có |
| Ảnh | Tối thiểu 1; khuyến nghị 3–5 | 1 chân dung chính + ảnh giảng dạy/tư vấn |
| Video giới thiệu | 0–1 | Link YouTube/Vimeo nếu có |

### 8.2. Dịch vụ và quy trình tư vấn

- Tên và mô tả từng chủ đề tư vấn; tối thiểu 1 dịch vụ nếu mở form.
- Đối tượng phù hợp, phạm vi tư vấn và nội dung không thuộc phạm vi tư vấn.
- Thời lượng, hình thức online/offline, địa điểm, phí hoặc trạng thái `Liên hệ`.
- Các khung giờ có thể chọn và lưu ý đây chỉ là yêu cầu lịch, chưa phải đặt lịch realtime.
- Người/đội ngũ nhận yêu cầu, thời gian dự kiến phản hồi và kênh xác nhận thủ công.
- Nội dung thông báo gửi thành công, chính sách đổi/hủy và lưu ý bảo mật thông tin.

Liên quan: `ISSUE-011`.

## 9. Thành quả học viên và cảm nhận phụ huynh

### 9.1. Case study thành quả

- Tối thiểu 1 case để bỏ empty state; khuyến nghị 3–6 case khi ra mắt.
- Mỗi case gồm: tiêu đề, bối cảnh ban đầu, khóa/chương trình đã học, thời gian học, mục tiêu, quá trình, kết quả thực tế, trích dẫn nếu có và ngày ghi nhận.
- Kết quả định lượng cần nêu nguồn/bằng chứng và điều kiện đo; không biến một trường hợp thành cam kết chung.
- Ảnh: 1–3 ảnh/case hoặc ảnh ẩn danh; ghi rõ được dùng tên thật, tên viết tắt hay ẩn danh.
- Có xác nhận đồng ý công bố của học viên/phụ huynh và người giám hộ nếu người học chưa thành niên.

### 9.2. Cảm nhận phụ huynh

- Tối thiểu 1 phản hồi; khuyến nghị 3–6 phản hồi.
- Mỗi phản hồi gồm: nguyên văn đã duyệt, tên hiển thị, vai trò/cách mô tả, chương trình liên quan, ngày ghi nhận và ảnh nếu được phép.
- Rating là tùy chọn; không tự quy đổi lời nhận xét thành số sao.
- Lưu bằng chứng đồng ý sử dụng nội dung, tên và ảnh.

Liên quan: `ISSUE-012`, `ISSUE-013`.

## 10. Blog và tài liệu miễn phí

### 10.1. Bài viết blog

- Tối thiểu kỹ thuật: 1 bài `published`.
- Khuyến nghị ra mắt: 6–10 bài, trong đó có ít nhất 3 bài về tiếng Trung; tỷ trọng nội dung tiếp tục theo định hướng 70/20/10.
- Khuyến nghị 2–5 danh mục thực sự cần dùng.

Mỗi bài gồm: tiêu đề, slug, tóm tắt 40–80 từ, nội dung đầy đủ, danh mục, tác giả, ngày xuất bản, trạng thái, có/không nổi bật, 1 thumbnail, alt ảnh, nguồn ảnh, meta title, meta description và ảnh Open Graph. Nội dung dài bàn giao bằng Docs/Word/Markdown, giữ rõ heading và link nguồn.

### 10.2. Tài liệu miễn phí

- Tối thiểu kỹ thuật: 1 tài liệu có link hợp lệ.
- Khuyến nghị ra mắt: 3–6 tài liệu.

Mỗi tài liệu gồm: tên, slug, mô tả, loại tài liệu, đối tượng, thumbnail, tệp PDF hoặc URL ngoài, trạng thái, ngày xuất bản, quyền phân phối và CTA liên quan. Nếu thu thập thông tin trước khi tải, cần xác nhận rõ trường dữ liệu và mục đích sử dụng; chức năng này chưa mặc định nằm trong phạm vi hiện tại.

Liên quan: `ISSUE-014`.

## 11. FAQ, tuyển dụng, liên hệ và pháp lý

| Trang/nhóm | Số lượng | Nội dung cần cung cấp |
| --- | --- | --- |
| FAQ | Tối thiểu 5; khuyến nghị 10–20 | Câu hỏi, câu trả lời, danh mục, thứ tự, trạng thái; nên phủ khóa học, học phí, học thử, lịch học, tư vấn, bảo lưu/hủy |
| Tuyển dụng | 1 trạng thái chung + mỗi vị trí 1 bản ghi | Có/không tuyển; tên vị trí, mô tả, yêu cầu, địa điểm/hình thức, hạn nhận, cách ứng tuyển; nếu chưa tuyển cần câu chữ empty state đã duyệt |
| Liên hệ | 1 bộ | Hotline, email, địa chỉ, giờ làm việc, Maps, mạng xã hội, thời gian phản hồi dự kiến, chủ đề form |
| Chính sách bảo mật | 1 bản được chủ sở hữu duyệt | Đơn vị thu thập, dữ liệu thu thập, mục đích, thời gian lưu, bên nhận dữ liệu, quyền người dùng, bảo mật, trẻ vị thành niên, cookie nếu có, liên hệ, ngày hiệu lực |
| Điều khoản sử dụng | 1 bản được chủ sở hữu duyệt | Phạm vi dịch vụ, trách nhiệm người dùng, sở hữu trí tuệ, giới hạn trách nhiệm, liên kết ngoài, thay đổi điều khoản, luật áp dụng, liên hệ, ngày hiệu lực |

Nội dung pháp lý nên được người có thẩm quyền hoặc tư vấn pháp lý rà soát; đội phát triển không tự xác nhận tính phù hợp pháp luật.

## 12. Form và quy trình vận hành

### 12.1. Quyết định cần khách hàng xác nhận

- Trường bắt buộc/tùy chọn cho: đăng ký khóa học, học thử, tư vấn và liên hệ.
- Checkbox đồng ý chính sách bảo mật và câu chữ xin phép liên hệ.
- Email/số điện thoại/bộ phận nhận thông báo cho từng form.
- Thời gian phản hồi dự kiến hiển thị cho người gửi.
- Người được quyền xem dữ liệu và thời gian lưu dữ liệu.
- Trạng thái nghiệp vụ và người chịu trách nhiệm cập nhật.
- Nội dung thông báo thành công/thất bại; kịch bản xử lý submit trùng.
- Nguồn lead cần theo dõi nếu có.

### 12.2. Dữ liệu form dự kiến

- Đăng ký học/học thử: họ tên, điện thoại, email, tuổi học viên, chương trình/khóa quan tâm, loại đăng ký, ghi chú.
- Tư vấn: họ tên, điện thoại, email, người cần tư vấn, tuổi, chủ đề, mục tiêu, khó khăn hiện tại, ngày/khung giờ mong muốn, hình thức.
- Liên hệ: họ tên, điện thoại, email, chủ đề, nội dung.

Form học thử hiện chưa nhận dữ liệu thật do chưa có Supabase và xử lý server. Liên quan: `ISSUE-005`, `ISSUE-015`.

## 13. SEO và tài sản chia sẻ

- Mỗi public route cần 1 meta title (khuyến nghị 50–60 ký tự), 1 meta description (khuyến nghị 120–160 ký tự), URL/slug, heading chính và ảnh chia sẻ.
- Ảnh Open Graph mặc định: tối thiểu 1 ảnh `1200 × 630 px`; bài viết/khóa học có thể dùng ảnh riêng.
- Cần xác nhận tên thương hiệu, domain chuẩn, khu vực phục vụ, mô tả doanh nghiệp và tài khoản mạng xã hội chính thức.
- Nếu có Google Business Profile/Search Console/Analytics, cung cấp quyền truy cập bằng tài khoản tổ chức; không gửi mật khẩu trong file nội dung.

## 14. Tài khoản và hạ tầng cần có trước production

| Hạng mục | Số lượng | Chủ sở hữu/đầu vào cần có |
| --- | --- | --- |
| Supabase project | 1 production | Tài khoản tổ chức, region, quyền quản trị; khóa bí mật chỉ cấu hình qua biến môi trường |
| Vercel project | 1 production | Tài khoản tổ chức và quyền deploy |
| GitHub repository | 1 | Quyền phù hợp cho deploy/CI |
| Tên miền và DNS | 1 domain chính | Tài khoản thuộc khách hàng, quyền cập nhật DNS |
| Admin ban đầu | Tối thiểu 1 | Họ tên, email, số điện thoại nếu cần; không ghi mật khẩu vào tài liệu |
| Email gửi/nhận thông báo | Tối thiểu 1 | Địa chỉ, người quản lý, cấu hình nhà cung cấp nếu triển khai email |
| Analytics/Search Console | Khuyến nghị 1 bộ | Tài khoản tổ chức và quyền truy cập |

## 15. Cấu trúc gói bàn giao đề xuất

```text
01-brand/
  logo/
  brand-copy.docx
02-contact-and-legal/
  contact.xlsx
  privacy-policy.docx
  terms.docx
03-about/
  about.docx
  milestones.xlsx
04-courses/
  courses.xlsx
  course-long-content/
05-expert/
  expert-profile.docx
  certificates/
06-content/
  posts.xlsx
  resources.xlsx
  article-files/
  resource-files/
07-social-proof/
  success-stories.xlsx
  testimonials.xlsx
  consent-records/
08-support/
  faq.xlsx
  careers.xlsx
09-images/
  hero/
  center/
  courses/
  expert/
  students-and-parents/
```

Không đưa mật khẩu, service role key, access token hoặc giấy tờ riêng tư chưa xử lý vào gói bàn giao này.

## 16. Checklist nghiệm thu nội dung trước khi đăng

- [ ] Nội dung có chủ sở hữu và người duyệt rõ ràng.
- [ ] Tên, số điện thoại, email, địa chỉ và URL đã được kiểm tra.
- [ ] Số liệu, thành tích, chứng chỉ và kết quả có căn cứ.
- [ ] Ảnh/tệp có quyền sử dụng và thông tin đồng ý công bố.
- [ ] Thông tin trẻ vị thành niên đã có xác nhận của người giám hộ khi cần.
- [ ] Không còn placeholder hoặc nội dung “đang cập nhật” tại các khu vực bắt buộc ra mắt.
- [ ] Khóa học, bài viết và tài liệu có trạng thái xuất bản hợp lệ.
- [ ] Nội dung pháp lý được người có thẩm quyền duyệt.
- [ ] Metadata và ảnh chia sẻ đã có cho các trang public.
- [ ] Form có người nhận, quy trình xử lý và thời gian phản hồi rõ ràng.
