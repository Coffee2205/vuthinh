# Vấn đề và giới hạn đang tồn tại

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
