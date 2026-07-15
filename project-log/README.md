# Project Log — Vũ Thịnh

Thư mục này lưu trạng thái thực tế của dự án để người phát triển và AI agent có thể tiếp tục công việc mà không bị mất ngữ cảnh.

## Thứ tự đọc bắt buộc

Trước khi sửa code, agent phải đọc theo thứ tự:

1. `CURRENT_STATUS.md`
2. `NEXT_STEPS.md`
3. `DECISIONS.md`
4. `ISSUES.md`
5. `CHANGELOG.md`

Sau đó agent mới đọc PRD, tài liệu kỹ thuật và file task hiện tại.

## Quy tắc cập nhật

Sau mỗi phiên làm việc hoặc sau khi hoàn thành một phần có thể kiểm tra được, agent phải:

- Cập nhật trạng thái thực tế trong `CURRENT_STATUS.md`.
- Xóa việc đã hoàn thành khỏi `NEXT_STEPS.md` và thêm bước tiếp theo.
- Ghi quyết định mới vào `DECISIONS.md` nếu có.
- Ghi lỗi, giới hạn hoặc dữ liệu còn thiếu vào `ISSUES.md`.
- Ghi thay đổi quan trọng vào `CHANGELOG.md`.
- Cập nhật checklist trong file task tương ứng.

Không được ghi một chức năng là hoàn thành nếu chưa kiểm tra được hoặc chưa chạy được trong môi trường hiện tại.
