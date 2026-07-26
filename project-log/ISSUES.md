# Vấn đề và giới hạn đang tồn tại

## Migration hồ sơ giảng viên chưa áp dụng production — 2026-07-23

- Trạng thái: Open.
- Publishable key chịu RLS và trả 0 row khi thử cập nhật đúng record `vu-thinh`; không dùng key đặc quyền hoặc thay policy.
- Migration đã tạo; source service đang chiếu dữ liệu xác nhận để UI/build không hiển thị hồ sơ cũ. Cần áp dụng migration bằng quyền quản trị và đối chiếu production.

## Cập nhật tinh gọn trang chủ — 2026-07-22

- Không phát sinh issue mới; lint và build đều đạt sau khi gỡ bốn section khỏi `/`.

## ISSUE-040 — Migration và mutation media production chưa được xác minh

**Trạng thái:** Open — Chặn xác nhận hoàn thành upload admin

Source/migration media đã test helper, lint, build và public runtime, nhưng phiên này không có quyền quản trị database hoặc admin session để áp dụng migration và chạy upload/replace/remove thật. Cần áp dụng migration mới, sau đó QA có thể hoàn tác cho bốn editor và xác minh anonymous insert/update/delete bị từ chối. Expert có `avatar_url` và public display đã hỗ trợ path, nhưng project không có admin expert nên không tạo route mới ngoài phạm vi.

## ISSUE-039 — Chưa có danh sách object media ngoài Blog

**Trạng thái:** Open — Không chặn build

Bucket `Public-Media` không cho publishable key liệt kê object. Bốn object trong `post` và bốn object khóa học đã được chủ sở hữu cung cấp và xác minh, nhưng chưa có tên file cho chuyên gia, tài liệu và câu chuyện nên chưa thể ánh xạ an toàn mà không đoán dữ liệu.

## ISSUE-035 — Chưa có tài khoản admin có thể kiểm tra

**Trạng thái:** Open — blocker xác minh Auth/RLS/mutation

Publishable key trả `[]` cho `user_profiles` và không thể liệt kê Auth users. Chủ dự án cần tự tạo/xác nhận Auth user và profile admin; không hard-code UUID.

## ISSUE-036 — Quan hệ nội dung admin chưa hoàn tất

**Trạng thái:** Open

Editor mới whitelist cột chính. Collection quan hệ của khóa học, blog và tài liệu chưa có UI mutation đã kiểm tra; không đánh dấu CRUD hoàn thành.

## ISSUE-037 — Storage và automated admin test chưa có

**Trạng thái:** Open

Tài nguyên chỉ hỗ trợ URL. Chưa có automated test và chưa test đủ responsive/keyboard/CRUD với admin session.

## ISSUE-038 — Project log cũ không khớp source

**Trạng thái:** Open

Một số phần cũ vẫn mô tả Task 03/blocker Supabase, trong khi source/git đã có Task 06 và form học thử. Lịch sử cũ được giữ nguyên.

## ISSUE-025 — Public chưa thể insert yêu cầu tư vấn

**Trạng thái:** Resolved — 2026-07-18

**Mô tả:** Publishable key đọc được toàn bộ dữ liệu chuyên gia nhưng POST rỗng an toàn tới `consultation_requests` trả HTTP 401, xác nhận thiếu grant hoặc RLS insert policy.

**Ảnh hưởng:** Form có thể hiển thị và validation nhưng chưa thể lưu request thật hoặc xác nhận success flow.

**Cách giải quyết:** Đã áp migration tối thiểu; privacy=false/rỗng bị RLS chặn, privacy=true đi qua RLS, request hợp lệ trả HTTP 201. Public select vẫn không thấy request.

---

## ISSUE-026 — Nội dung chuyên gia/tư vấn còn thiếu

**Trạng thái:** Open

**Còn thiếu:** Ảnh chân dung thật; số năm/nội dung kinh nghiệm; xác nhận có tư vấn bằng tiếng Trung; địa điểm offline; chính sách đổi/hủy lịch; số buổi và thời hạn cụ thể cho gói định kỳ; review thật; phương thức thanh toán.

**Ảnh hưởng:** Không chặn chức năng form. UI không tự suy diễn hoặc hiển thị các thông tin này.

---

## ISSUE-027 — Request QA Task 04 cần admin xóa

**Trạng thái:** Open

**Mô tả:** Bản ghi `Codex QA Task 04`, note `TEST_ONLY_TASK04_20260718`, được tạo để xác nhận insert/RLS HTTP 201.

**Cần làm:** Admin đối chiếu `status = new` trong Dashboard rồi xóa bản ghi QA.

---

## ISSUE-021 — Supabase catalog chưa được áp dụng thực tế

**Trạng thái:** Resolved — 2026-07-18

**Mô tả:** Migration, seed, client và service đã có nhưng chưa có URL/anon key hoặc quyền truy cập project Supabase để áp dụng và kiểm tra.

**Ảnh hưởng:** Local dùng fallback demo có ghi nhãn. Chưa thể tuyên bố database production hoạt động.

**Cách giải quyết:** Project đã có schema/seed từ SQL Editor; `.env.local` đã cấu hình. REST public, production build, `/courses` và một slug hợp lệ đều chạy thành công bằng dữ liệu Supabase.

---

## ISSUE-024 — Schema Supabase đang chạy khác migration trong repo

**Trạng thái:** Resolved — 2026-07-18

**Mô tả:** Database hiện được tạo từ `01_schema.sql`/`02_seed.sql` trong Downloads (3 program, 4 course). Migration trong repo mô tả biến thể 7 program và constraints chặt hơn, nhưng chưa được áp trên project này.

**Ảnh hưởng:** App hiện tương thích và chạy đúng, nhưng không nên áp chồng migration repo lên database đã có mà chưa lập migration đối chiếu.

**Cách giải quyết:** Đã xóa migration/seed cũ khỏi repo để không còn nguy cơ áp chồng nhầm. Khi thay đổi schema trong tương lai phải tạo baseline/migration mới từ database thực tế.

---

## ISSUE-022 — Dữ liệu catalog hiện là demo

**Trạng thái:** Open

**Mô tả:** Bốn course, giá, thời lượng, lộ trình và giáo trình hiện có trong Supabase chỉ phục vụ phát triển theo chỉ đạo Task 03.

**Ảnh hưởng:** Không được dùng làm nội dung production hoặc cam kết đầu ra.

**Cần từ khách hàng:** Dữ liệu khóa học và ảnh đã duyệt theo `docs/CONTENT_REQUIREMENTS.md`.

---

## ISSUE-023 — Dependency audit có 2 cảnh báo moderate

**Trạng thái:** Open

**Mô tả:** Sau khi cài `@supabase/supabase-js`, npm audit báo 2 lỗ hổng mức moderate trong dependency tree.

**Ảnh hưởng:** Không làm lint/build thất bại. Chưa chạy `npm audit fix --force` vì có thể gây breaking change ngoài phạm vi.

---

## ISSUE-001 — Dependencies chưa được cài

**Trạng thái:** Resolved — 2026-07-15

**Mô tả ban đầu:** Project chưa có thư mục `node_modules`, do đó chưa thể xác nhận lint và production build.

**Cách giải quyết:** Dependencies hiện đã có; `npm.cmd run lint` và `npm.cmd run build` đều chạy thành công ngày 2026-07-15.

**Kết quả:** Không còn là blocker.

---

## ISSUE-002 — Chưa có logo chính thức

**Trạng thái:** Open

**Mô tả:** Header và Footer đang sử dụng logo chữ `VT` tạm thời.

**Ảnh hưởng:** Không chặn phát triển giao diện.

**Cần từ khách hàng:** Logo SVG/PNG chất lượng cao hoặc xác nhận sử dụng logo chữ.

---

## ISSUE-003 — Chưa có nội dung và hình ảnh thật

**Trạng thái:** Open

**Mô tả:** Chưa có đầy đủ nội dung trung tâm, khóa học, ảnh chuyên gia, ảnh lớp học, phản hồi phụ huynh và thành quả học viên.

**Ảnh hưởng:** Có thể phát triển layout bằng placeholder trung tính, nhưng chưa thể hoàn thiện nội dung production.

**Quy tắc:** Không tự tạo số liệu, chứng chỉ hoặc testimonial giả.

---

## ISSUE-004 — Chưa có thông tin liên hệ chính thức

**Trạng thái:** Open

**Cần cung cấp:**

- Hotline.
- Email.
- Địa chỉ.
- Facebook.
- Zalo.
- Google Maps.

---

## ISSUE-005 — Chưa tạo Supabase project

**Trạng thái:** Partially resolved — 2026-07-18

**Mô tả:** Schema/client catalog đã được tạo sớm trong Task 03; project Supabase, Auth, Storage và việc áp migration thực tế vẫn chưa có.

**Theo dõi tiếp:** Kết nối catalog thực tế tại `ISSUE-021`; Auth/Storage và schema form còn lại thuộc Task 07.

---

## ISSUE-006 — Tên miền chưa được xác nhận

**Trạng thái:** Open

**Mô tả:** Tên project là `vuthinh`, nhưng tên miền `.com` chính thức chưa được chốt hoặc mua.

**Cần làm:** Kiểm tra tên miền còn trống và đăng ký bằng tài khoản của khách hàng trước deploy production.

---

## Trạng thái Task 00

- Không còn blocker kỹ thuật cho Task 00.
- Lint và production build hiện không có lỗi.
- Build lần đầu cần kết nối mạng để `next/font` tải Be Vietnam Pro từ Google Fonts.
- Các link tới route của task sau chưa hoạt động cho đến khi các route tương ứng được triển khai; đây không phải lỗi thuộc Task 00.

---

## ISSUE-007 — Hero chưa có ảnh thật

**Trạng thái:** Open

**Mô tả:** Hero hiện dùng visual card trung tính vì chưa có ảnh giáo viên, học viên hoặc hoạt động học tập đã được khách hàng cung cấp và xác nhận.

**Ảnh hưởng:** Không chặn hoàn thành cấu trúc Hero; cần thay thế hoặc bổ sung ảnh thật trước khi hoàn thiện nội dung production.

**Cần từ khách hàng:** Ảnh ngang chất lượng cao phù hợp Hero và quyền sử dụng ảnh.

---

## Trạng thái Hero Section

- Không còn blocker kỹ thuật cho Hero Section.
- Các CTA dẫn tới `/trial-registration` và `/programs`; hai route này chưa được triển khai trong task hiện tại.
- Chưa có kiểm tra trực quan bằng browser automation hoặc thiết bị thật; responsive đã được rà theo source và breakpoint.

---

## ISSUE-008 — Nội dung Trust Section chưa được khách hàng duyệt

**Trạng thái:** Open

**Mô tả:** Bốn nguyên tắc trong Trust Section được biên soạn từ PRD và định vị dự án, chưa phải nội dung thương hiệu đã được khách hàng duyệt bản cuối.

**Ảnh hưởng:** Không chặn phát triển layout; cần rà soát câu chữ trước production.

---

## Trạng thái Trust Section

- Không còn blocker kỹ thuật cho Trust Section.
- Lint, build và runtime route `/` đều đạt.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật; responsive đã được rà theo source và breakpoint.

---

## ISSUE-009 — Nội dung chương trình chi tiết chưa được cung cấp

**Trạng thái:** Open

**Mô tả:** Programs Section hiện chỉ có các nhóm đã xác định trong tài liệu; chưa có tên khóa học, mô tả chi tiết, học phí, thời lượng hoặc lịch học được khách hàng xác nhận.

**Ảnh hưởng:** Không chặn section giới thiệu nhóm chương trình; chưa thể hiển thị khóa học cụ thể trên trang chủ hoặc route chương trình.

**Cần từ khách hàng:** Danh sách khóa học và thông tin nghiệp vụ theo `docs/FUNCTIONAL_RULES.md`.

### Trạng thái blocker Danh sách khóa học — 2026-07-15

- Đã kiểm tra toàn bộ source và tài liệu: không có bản ghi khóa học thật, chỉ có nhóm chương trình và schema dự kiến.
- Phần Danh sách khóa học của Task 03 không thể hoàn thành trung thực khi thiếu tên, slug, nhóm, mô tả, đối tượng, mục tiêu, nội dung, thời lượng, hình thức, học phí/trạng thái Liên hệ và trạng thái xuất bản.
- Không tạo route `/courses` với dữ liệu giả và không làm trước mục Empty state.
- Lint/build hiện tại đạt; đây là blocker dữ liệu nghiệp vụ, không phải blocker kỹ thuật.

### Xác nhận lại blocker — 2026-07-17

- Đã đối chiếu lại source, checklist và toàn bộ tài liệu theo quy trình tiếp tục dự án; vẫn không có bản ghi khóa học thật hoặc nội dung mới được phép công bố.
- Danh sách trường, số lượng và định dạng bàn giao đã được tổng hợp tại `docs/CONTENT_REQUIREMENTS.md`.
- `ISSUE-009` tiếp tục ở trạng thái Open; không tạo `/courses`, dữ liệu giả hoặc làm trước mục Empty state.

### Cập nhật Task 03 — 2026-07-18

- Yêu cầu mới cho phép seed/demo để triển khai và kiểm tra module; `/courses` đã hoàn thành về kỹ thuật.
- `ISSUE-009` vẫn Open ở góc độ nội dung production: dữ liệu demo trong Supabase không thay thế dữ liệu khách hàng duyệt.

### Trạng thái Danh sách nhóm chương trình

- Route `/programs` đã hiển thị đủ bảy nhóm bằng dữ liệu tĩnh; không còn blocker kỹ thuật cho phần danh sách nhóm.
- Dữ liệu khóa học chi tiết vẫn thiếu và tiếp tục được theo dõi trong `ISSUE-009` cho các phần sau của Task 03.

### Trạng thái Bộ lọc danh mục cơ bản

- Không còn blocker kỹ thuật cho bộ lọc bảy nhóm; lint, build, runtime và trạng thái HTML ban đầu đều đạt.
- Chưa kiểm tra thao tác click trực quan bằng browser automation hoặc thiết bị thật.

---

## Trạng thái Programs Section

- Không còn blocker kỹ thuật cho Programs Section.
- Lint, build và runtime route `/` đều đạt.
- CTA `/programs` hiện đã có route đích hoạt động.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật; responsive đã được rà theo source và breakpoint.

---

## ISSUE-010 — Nội dung hành trình chưa được khách hàng duyệt

**Trạng thái:** Open

**Mô tả:** Bốn bước được biên soạn từ user flow và phạm vi Giai đoạn 1, chưa phải quy trình vận hành đã được khách hàng duyệt bản cuối.

**Ảnh hưởng:** Không chặn layout; cần xác nhận câu chữ trước production.

---

## Trạng thái Learning Journey

- Không còn blocker kỹ thuật; lint, build và runtime đều đạt.
- Chưa kiểm tra trực quan bằng browser automation hoặc thiết bị thật.

---

## ISSUE-011 — Chưa có hồ sơ chuyên gia thật

**Trạng thái:** Open

**Mô tả:** Thiếu tên, chức danh, ảnh, tiểu sử, kinh nghiệm, chuyên môn và chứng chỉ đã xác nhận.

**Ảnh hưởng:** Expert Section hiện hiển thị trạng thái chờ nội dung; không chặn kỹ thuật.

### Cập nhật Task 04 — 2026-07-17

- Đã tạo route `/expert` với empty state minh bạch và danh sách thông tin cần khách hàng xác nhận.
- Hồ sơ một chuyên gia vẫn chưa thể hoàn thành production; không có tên, ảnh, tiểu sử, kinh nghiệm, chuyên môn hoặc chứng chỉ giả được thêm vào.

## Trạng thái Expert Section

- Lint, build và runtime đạt; chưa kiểm tra trực quan trên thiết bị thật.
- `/expert` và `/consultation` chưa được triển khai.

---

## ISSUE-012 — Chưa có thành quả học viên được xác nhận

**Trạng thái:** Open

**Mô tả:** Thiếu case study, hình ảnh và kết quả có sự đồng ý công bố.

**Ảnh hưởng:** Section dùng empty state; lint/build đạt, không có blocker kỹ thuật.

---

## ISSUE-013 — Chưa có cảm nhận phụ huynh được xác nhận

**Trạng thái:** Open

**Mô tả:** Chưa có nội dung phản hồi, tên, hình ảnh và sự đồng ý công bố từ phụ huynh.

**Ảnh hưởng:** Section dùng empty state minh bạch; không còn blocker kỹ thuật cho phần Cảm nhận phụ huynh.

**Cần từ khách hàng:** Phản hồi nguyên văn đã duyệt, thông tin được phép hiển thị và xác nhận quyền sử dụng hình ảnh nếu có.

---

## ISSUE-014 — Chưa có bài viết và tài liệu được xuất bản

**Trạng thái:** Open

**Mô tả:** Chưa có bài viết hoặc tài liệu đáp ứng đủ tiêu đề, nội dung, metadata, trạng thái xuất bản, link hợp lệ và quyền sử dụng hình ảnh/tệp.

**Ảnh hưởng:** Section trang chủ dùng empty state; `/blog` và `/resources` chưa được triển khai vì thuộc Task 05. Không còn blocker kỹ thuật cho section Bài viết/tài liệu nổi bật.

**Cần từ khách hàng:** Nội dung bài viết, thông tin tác giả, ảnh được phép sử dụng và tệp/link tài liệu đã xác nhận.

### Cập nhật Task 05 — 2026-07-17

- Đã tạo route `/blog` với empty state minh bạch và danh sách dữ liệu cần xác nhận cho taxonomy.
- Danh mục Blog vẫn chưa thể hoàn thành production; không có taxonomy hoặc bài viết giả được thêm vào.

---

## ISSUE-015 — Form học thử chưa kết nối xử lý dữ liệu

**Trạng thái:** Planned — Task 07

**Mô tả:** Giao diện form đã có nhưng đang bị khóa vì chưa có Supabase, validation server, chống submit lặp hoặc phản hồi thành công/thất bại.

**Ảnh hưởng:** Chưa thể nhận đăng ký thật. Không còn blocker kỹ thuật cho phần giao diện form của Task 01, nhưng đây là blocker vận hành trước production.

**Cách xử lý dự kiến:** Kích hoạt form và kết nối bảng `course_registrations` trong Task 07 sau khi có schema, biến môi trường và RLS phù hợp.

---

## Trạng thái CTA cuối trang và Task 01

- Không còn blocker kỹ thuật cho CTA cuối trang.
- Toàn bộ checklist giao diện Task 01 đã hoàn thành; lint, build và runtime đạt.
- CTA dẫn tới form preview đang khóa; giới hạn vận hành tiếp tục được theo dõi tại `ISSUE-015`.

---

## ISSUE-016 — Chưa có hồ sơ giới thiệu trung tâm chính thức

**Trạng thái:** Open

**Mô tả:** Chưa có lịch sử hình thành, thông tin người sáng lập/đội ngũ, cơ sở, mốc phát triển hoặc thành tựu được khách hàng xác nhận.

**Ảnh hưởng:** Phần Giới thiệu trung tâm chỉ dùng định vị đã có và ghi chú trạng thái chờ; không còn blocker kỹ thuật cho phần mở đầu `/about`.

**Cần từ khách hàng:** Hồ sơ giới thiệu chính thức, các mốc lịch sử có thể công bố và hình ảnh kèm quyền sử dụng.

### Trạng thái Câu chuyện hình thành

- Section đã có empty state; không còn blocker kỹ thuật cho layout.
- Dữ liệu production vẫn bị chặn bởi cùng nội dung còn thiếu của `ISSUE-016`.

---

## ISSUE-017 — Câu chữ Tầm nhìn chưa được khách hàng duyệt

**Trạng thái:** Open

**Mô tả:** Tầm nhìn hiện được biên soạn từ định vị trong Project Vision, chưa phải tuyên bố thương hiệu được khách hàng phê duyệt bản cuối.

**Ảnh hưởng:** Không chặn kỹ thuật hoặc layout; cần duyệt câu chữ trước production.

**Cần từ khách hàng:** Xác nhận hoặc chỉnh sửa tuyên bố Tầm nhìn và ba hướng định vị đi kèm.

---

## ISSUE-018 — Câu chữ Sứ mệnh chưa được khách hàng duyệt

**Trạng thái:** Open

**Mô tả:** Sứ mệnh hiện được biên soạn từ vai trò trong PRD và Project Vision, chưa phải tuyên bố thương hiệu được phê duyệt bản cuối.

**Ảnh hưởng:** Không chặn kỹ thuật hoặc layout; cần duyệt câu chữ trước production.

**Cần từ khách hàng:** Xác nhận hoặc chỉnh sửa tuyên bố Sứ mệnh và bốn trách nhiệm đi kèm.

---

## ISSUE-019 — Câu chữ Giá trị cốt lõi chưa được khách hàng duyệt

**Trạng thái:** Open

**Mô tả:** Bốn giá trị Rõ ràng, Lắng nghe, Phát triển toàn diện và Trung thực được tổng hợp từ các nguyên tắc trong tài liệu dự án, chưa phải bộ giá trị thương hiệu được khách hàng phê duyệt bản cuối.

**Ảnh hưởng:** Không chặn kỹ thuật hoặc layout; cần duyệt câu chữ trước production.

**Cần từ khách hàng:** Xác nhận, điều chỉnh hoặc thay thế tên cùng mô tả của từng giá trị cốt lõi.

---

## ISSUE-020 — Câu chữ Triết lý giáo dục chưa được duyệt chuyên môn

**Trạng thái:** Open

**Mô tả:** Triết lý hiện được diễn giải từ thông điệp “Nuôi dưỡng trí tuệ – ngôn ngữ – nhân cách”, chưa phải tuyên bố giáo dục được khách hàng và đội ngũ chuyên môn phê duyệt bản cuối.

**Ảnh hưởng:** Không chặn kỹ thuật hoặc layout; cần duyệt nội dung trước production và không nên suy diễn thành phương pháp giảng dạy cụ thể.

**Cần từ khách hàng:** Xác nhận hoặc chỉnh sửa tuyên bố chung cùng nội dung của ba trụ cột Trí tuệ, Ngôn ngữ và Nhân cách.

---

## Trạng thái CTA Trang Giới thiệu và Task 02

- Không còn blocker kỹ thuật cho CTA hoặc giao diện Task 02; lint, build, runtime và liên kết nguồn/đích đều đạt.
- CTA dẫn tới form preview đang khóa; giới hạn vận hành tiếp tục được theo dõi tại `ISSUE-015`.
- Route `/consultation` chưa được triển khai vì thuộc Task 04; không tạo link tới route này trong Task 02.
- Các nội dung thương hiệu cần duyệt tiếp tục được theo dõi tại `ISSUE-016` đến `ISSUE-020`.
## ISSUE-028 — Schema Blog chưa được expose trong Supabase project hiện tại

**Trạng thái:** Open — REST public trả HTTP 404 cho cả bảy bảng blog, nên chưa đọc được 4 bài mẫu hoặc xác minh relation/RLS runtime. Cần xác minh schema/seed ở đúng project, reload schema cache và public select policy.

## ISSUE-029 — Nội dung và tài sản Blog chưa sẵn sàng cho production

**Trạng thái:** Open — Blog chưa có cover/OG image thật; nội dung mẫu cần chuyên gia kiểm duyệt, thông tin HSK cần rà lại khi quy chế thay đổi; chưa có admin editor và quy trình duyệt bài.

## ISSUE-030 — Thiếu schema và dữ liệu kinh nghiệm chuyên gia

**Trạng thái:** Open — Blocker hoàn thành Task 04

Public query expert `vu-thinh` ngày 2026-07-18 xác nhận không có `experience_years`, `experience` hoặc nội dung tương đương. Cần khách hàng cung cấp nội dung đã duyệt và quyết định cấu trúc lưu trữ trước khi triển khai; không dùng dữ liệu suy đoán.
## ISSUE-031 — Bảng resources chưa tồn tại trong Supabase

**Trạng thái:** Open — Blocker runtime Task 05

REST public trả HTTP 404 và PostgREST báo không tìm thấy `public.resources` trong schema cache. Code `/resources` và production build đạt, nhưng cần schema/RLS cùng ít nhất một tài liệu có quyền phân phối để kiểm tra danh sách và link thật.

### Cập nhật hoàn thiện Resources

- Yêu cầu phiên cho biết bốn bảng đã tồn tại, nhưng public REST của project trong `.env.local` vẫn trả HTTP 404 cho cả `resource_categories`, `resources`, `resource_courses` và `resource_download_events`.
- Chưa thể xác minh tên cột thực tế, nested course relation, public select policy hoặc public insert download event; issue tiếp tục Open.
## ISSUE-032 — Chín bảng Support chưa được expose trong Supabase project hiện tại

**Trạng thái:** Open — Blocker Task 06

Public REST trả HTTP 404 cho `success_stories`, `faq_categories`, `faqs`, `job_posts`, `job_applications`, `contact_messages`, `trial_registrations`, `course_registrations` và `site_settings`. Không có DDL local để xác minh cột bắt buộc/RLS, nên chưa thể triển khai hoặc test insert form an toàn. Cần kiểm tra đúng project URL và reload schema cache; không tạo lại schema trong source.

**Cập nhật:** Resolved ngày 2026-07-18 — các bảng đã được PostgREST expose; FAQ/site settings đọc được và form RLS đã kiểm tra.

## ISSUE-034 — Dữ liệu production và kiểm thử còn thiếu cho Task 06

**Trạng thái:** Open

Chưa có success story consent-confirmed hoặc job published nên chưa test UI dữ liệu/job application hợp lệ. Contact settings đang null; CV private Storage chưa triển khai; privacy/terms cần phê duyệt pháp lý. Ba bản ghi QA Task 06 cần admin xóa.
## ISSUE-033 — Task 07 không thể hoàn tất types/forms/RLS với schema hiện tại

**Trạng thái:** Open — Blocker Task 07

Source chỉ có consultation form; contact/trial/course/job/resource registration chưa được triển khai. Các bảng tương ứng trả HTTP 404 và Supabase OpenAPI schema yêu cầu secret API key, nên không thể sinh database types hoặc test RLS đầy đủ chỉ bằng publishable key. Phần đã xác minh: public chỉ thấy course published/expert active, không đọc consultation submissions và không thể gửi cột `status`.
## Cập nhật ISSUE-015 — Resolved 2026-07-18

Form học thử trang chủ đã kết nối `trial_registrations` qua Zod/Server Action/service, có pending/error/success; RLS insert/private select đã kiểm tra.

## ISSUE-035 — Task 09 còn thiếu kiểm tra production có quyền

**Trạng thái:** Resolved — 2026-07-20

Source QA đã lint/build đạt và domain HTTPS hoạt động, nhưng chưa có browser QA thật cho desktop/tablet/mobile, chưa có submission production được phép để đối chiếu, chưa có admin session để test role/mutation và chưa bàn giao quyền các dịch vụ. Source sitemap/robots/404/metadata mới chưa push/redeploy; production ngày 2026-07-20 vẫn trả 404 cho sitemap và robots.

**Cập nhật 2026-07-20:** Đã có và xác minh admin session production; phần role/login/route read không còn là blocker. Mutation admin và form production vẫn chưa kiểm tra.

**Giải quyết:** Đã push/redeploy, kiểm tra ba viewport bằng browser, crawl 23 URL sitemap, kiểm tra form validation/submission production và xóa bản ghi QA. Tài liệu bàn giao đã được thêm; Task 09 hoàn thành.

## ISSUE-036 — Admin CRUD chưa có Delete và chưa xác minh mutation

**Trạng thái:** Open — Blocker hoàn thành Task 08

Admin production đã đăng nhập và đọc được toàn bộ route/bảng bắt buộc. Tuy nhiên editor mới có insert/update, chưa có Delete hoặc quy ước archive đầy đủ; quan hệ nhiều dòng chưa quản lý và chưa chạy mutation QA thực tế cho năm module nội dung cùng ba loại request.

## ISSUE-037 — Thiếu dữ liệu thật để xác minh toàn bộ structured data

**Trạng thái:** Open — Không chặn build

`Article` JSON-LD đã triển khai từ type/service blog nhưng database hiện không có bài published trong sitemap để kiểm tra runtime. Logo và OG image thương hiệu chính thức cũng chưa có; không tạo tài sản giả. Cần kiểm tra lại khi chủ sở hữu publish bài và cung cấp asset chính thức.

**Cập nhật 2026-07-20:** Phần logo/OG image đã được giải quyết bằng ba asset chính thức do chủ sở hữu cung cấp. Issue vẫn Open chỉ vì chưa có bài blog published để xác minh `Article` JSON-LD runtime.

Không có issue source mới từ thay đổi favicon; trình duyệt có thể cần xóa cache sau lần deploy đầu tiên.

## Cập nhật ISSUE-037 — Resolved 2026-07-20

Database hiện có bài blog published và `Article` đã được kiểm tra runtime cùng `BreadcrumbList`. Logo/OG image chính thức cũng đã tích hợp. Không còn blocker structured data đã nêu trong ISSUE-037.

## ISSUE-038 — Google Search Console cần xác minh sau deploy

**Trạng thái:** Open — vận hành SEO

Source, sitemap và robots đã sẵn sàng nhưng cần chủ sở hữu thêm/xác minh property domain, gửi sitemap và theo dõi index/rich results sau khi commit được Vercel triển khai.

Favicon source đã đạt yêu cầu kỹ thuật; Google không bảo đảm hiển thị và có thể mất vài ngày đến vài tuần sau khi crawl lại trang chủ.

## Cập nhật dữ liệu ảnh chuyên gia — 2026-07-21

Ảnh chuyên gia thật đã được cung cấp và tích hợp vào trang chủ cùng `/expert`; phần thiếu ảnh chuyên gia không còn là giới hạn. ISSUE về nội dung Kinh nghiệm của Task 04 vẫn Open vì ảnh không cung cấp dữ liệu số năm/timeline kinh nghiệm.

## Cập nhật ảnh khóa học HSK 5 và HSK 6 — 2026-07-21

Hai object `courses/hsk5.jpg` và `courses/hsk6.jpg` đã được xác minh public HTTP 200 và ánh xạ với hai khóa published tương ứng. Không còn issue thiếu ảnh cho 6 khóa học hiện có; production cần deploy source mới để nhận mapping.

## Cập nhật ảnh nền đầu trang public — 2026-07-21

Không có issue source mới; lint/build đạt. Cần QA trực quan sau deploy trên các route đại diện và hai viewport để xác nhận mức overlay/crop phù hợp với nội dung production dài/ngắn khác nhau.

## Gỡ Programs và Resources public — 2026-07-21

Không có issue source mới. Các URL cũ sẽ chủ động trả 404 sau deploy; dữ liệu Resources vẫn tồn tại và admin vẫn quản lý được nhưng không có trang xem công khai cho đến khi có quyết định mới.
# Cập nhật nội dung Blog — 2026-07-26

- Bộ 20 bài đã được chuẩn bị dưới dạng migration nhưng chưa được duyệt chuyên môn hoặc áp dụng production.
- 20 bài chưa có ảnh bìa được xác nhận quyền sử dụng; giao diện sẽ dùng placeholder hiện có nếu migration được chạy nguyên trạng.
- Cập nhật: 9/20 bài mới đã có ảnh Storage và được ánh xạ; 11 bài còn lại vẫn dùng placeholder.
- Không có issue source mới từ phân trang Blog; cần QA production sau deploy với tổng bài và chính sách RLS tại thời điểm thực tế.
- Public Supabase vẫn chỉ trả 13 bài cho đến khi migration công khai toàn bộ Blog được chạy bằng quyền database phù hợp.
- Vấn đề thiếu ảnh cho 11 bài Blog còn lại đã được giải quyết bằng các object mới trong `Public-Media/post`.
