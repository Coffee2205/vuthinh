# AGENTS.md — Hướng dẫn bắt buộc cho AI Agent

## 1. Mục tiêu chung

Dự án `vuthinh` là website cho một hệ sinh thái giáo dục gia đình, trong đó:

- 70% nội dung tập trung vào đào tạo tiếng Trung.
- 20% tập trung vào kỹ năng sống, tư duy và quản trị cảm xúc.
- 10% tập trung vào giá trị sống, hạnh phúc và phát triển nội tâm.

Giai đoạn 1 phải tạo ra một website hoàn chỉnh, đã deploy và có thể vận hành thực tế.

## 2. Nguyên tắc làm việc

Agent phải:

1. Đọc toàn bộ thư mục `docs/` và `tasks/` trước khi code.
2. Chỉ thực hiện đúng task hiện tại.
3. Không tự thêm chức năng ngoài phạm vi.
4. Không thay đổi stack kỹ thuật nếu chưa được yêu cầu.
5. Không xóa code đang hoạt động chỉ để viết lại theo cách khác.
6. Mỗi task hoàn thành phải:
   - Chạy được.
   - Responsive.
   - Không có lỗi TypeScript/ESLint nghiêm trọng.
   - Có trạng thái loading, empty và error nếu có dữ liệu động.
7. Dữ liệu mẫu phải tách khỏi component.
8. Component dùng lại từ hai nơi trở lên phải đưa vào `components/common` hoặc `components/ui`.
9. Không gọi Supabase hoặc API trực tiếp từ component trình bày.
10. Không sử dụng dữ liệu giả như số học viên, tỷ lệ hài lòng hoặc chứng chỉ nếu khách hàng chưa xác nhận.

## 3. Stack cố định Giai đoạn 1

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- Vercel
- Server Components mặc định
- Client Components chỉ khi cần state, event hoặc browser API

## 4. Thứ tự ưu tiên

1. Đúng nghiệp vụ.
2. Dễ sử dụng.
3. Responsive.
4. Dễ bảo trì.
5. Hiệu ứng và trang trí.

## 5. Phạm vi Giai đoạn 1

Bao gồm:

- Website công khai.
- Khóa học.
- Chuyên gia duy nhất.
- Blog và tài liệu miễn phí.
- Đăng ký học/học thử.
- Đăng ký tư vấn.
- Admin quản lý nội dung cơ bản.
- SEO cơ bản.
- Deploy và tên miền.

Không bao gồm:

- LMS.
- Thanh toán trực tuyến.
- Dashboard học viên/phụ huynh.
- Quiz và chấm điểm.
- AI.
- Roadmap học tập tự động.
- Đồng bộ lịch realtime.
- Marketplace nhiều chuyên gia.

## 6. Quy trình thực hiện task

Trước mỗi task, agent phải:

1. Đọc `docs/PRD.md`.
2. Đọc `docs/TECHNICAL_DESIGN.md`.
3. Đọc file task hiện tại.
4. Tóm tắt mục tiêu và phạm vi trước khi sửa code.

Sau mỗi task, agent phải cập nhật trong file task:

- Checklist đã hoàn thành.
- File đã tạo hoặc sửa.
- Quyết định kỹ thuật.
- Vấn đề còn tồn tại.
- Kết quả lint/build.

Không tự chuyển sang task tiếp theo nếu chưa được yêu cầu.

## 7. Quản lý trạng thái dự án

Trước mọi phiên làm việc, agent phải đọc theo thứ tự:

1. `project-log/CURRENT_STATUS.md`
2. `project-log/NEXT_STEPS.md`
3. `project-log/DECISIONS.md`
4. `project-log/ISSUES.md`
5. `docs/PRD.md`
6. `docs/TECHNICAL_DESIGN.md`
7. File task hiện tại trong `tasks/`

Agent không được dựa vào trí nhớ của phiên trước nếu trạng thái trong `project-log/` khác với trí nhớ đó.

Sau mỗi phiên làm việc hoặc sau khi hoàn thành một phần có thể kiểm tra được, agent phải:

1. Cập nhật `project-log/CURRENT_STATUS.md` theo trạng thái thực tế.
2. Cập nhật `project-log/NEXT_STEPS.md`, loại bỏ việc đã hoàn thành và ghi bước tiếp theo.
3. Ghi quyết định mới vào `project-log/DECISIONS.md` nếu có.
4. Ghi lỗi, dữ liệu còn thiếu hoặc giới hạn vào `project-log/ISSUES.md`.
5. Ghi thay đổi quan trọng vào `project-log/CHANGELOG.md`.
6. Cập nhật checklist và kết quả trong file task tương ứng.

Không được:

- Đánh dấu hoàn thành khi chưa kiểm tra.
- Xóa lịch sử quyết định chỉ vì đã đổi hướng; phải ghi quyết định mới và nêu quyết định nào bị thay thế.
- Xóa issue chưa được xử lý; chuyển trạng thái sang `Resolved` và ghi cách giải quyết.
- Tự chuyển sang task kế tiếp nếu người dùng chưa yêu cầu.
