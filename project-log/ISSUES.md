# Vấn đề và giới hạn đang tồn tại

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

**Trạng thái:** Planned

**Mô tả:** Database, Auth và Storage sẽ được tạo trong Task 07, không thực hiện sớm hơn.

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

---

## Trạng thái Programs Section

- Không còn blocker kỹ thuật cho Programs Section.
- Lint, build và runtime route `/` đều đạt.
- CTA `/programs` chưa có route đích vì thuộc Task 03.
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
