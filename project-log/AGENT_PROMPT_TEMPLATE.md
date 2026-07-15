# Prompt mẫu cho phiên làm việc với agent

```text
Bạn đang tiếp tục phát triển project Next.js `vuthinh`.

Trước khi làm bất kỳ thay đổi nào, hãy đọc theo đúng thứ tự:

1. AGENTS.md
2. project-log/CURRENT_STATUS.md
3. project-log/NEXT_STEPS.md
4. project-log/DECISIONS.md
5. project-log/ISSUES.md
6. docs/PRD.md
7. docs/TECHNICAL_DESIGN.md
8. docs/DESIGN_RULES.md
9. docs/ARCHITECTURE_RULES.md
10. [ĐƯỜNG DẪN FILE TASK HIỆN TẠI]

Nhiệm vụ của phiên này:
[MÔ TẢ MỘT NHIỆM VỤ NHỎ, CỤ THỂ]

Phạm vi được phép:
- [HẠNG MỤC ĐƯỢC LÀM 1]
- [HẠNG MỤC ĐƯỢC LÀM 2]

Không được:
- Làm trước task tiếp theo.
- Tự thêm chức năng ngoài PRD.
- Đổi stack hoặc cài thư viện mới nếu chưa giải thích và được chấp nhận.
- Sửa file không liên quan.
- Dùng dữ liệu hoặc thành tích giả.

Trước khi code:
1. Tóm tắt trạng thái hiện tại.
2. Nêu mục tiêu và Definition of Done của phiên này.
3. Liệt kê file dự kiến tạo/sửa.
4. Nêu kế hoạch thực hiện ngắn gọn.

Sau khi code:
1. Chạy các kiểm tra phù hợp, tối thiểu là `npm run lint` và `npm run build` khi môi trường cho phép.
2. Liệt kê file đã tạo/sửa và thay đổi chính.
3. Báo rõ lỗi hoặc giới hạn còn lại.
4. Cập nhật file task hiện tại.
5. Cập nhật toàn bộ file liên quan trong `project-log/`.
6. Không tự chuyển sang nhiệm vụ khác.
```

## Ví dụ cho phiên tiếp theo

```text
Bạn đang tiếp tục phát triển project Next.js `vuthinh`.

Hãy đọc AGENTS.md, toàn bộ thư mục project-log, docs/PRD.md,
docs/TECHNICAL_DESIGN.md, docs/DESIGN_RULES.md,
docs/ARCHITECTURE_RULES.md và tasks/00-SETUP.md.

Nhiệm vụ phiên này: hoàn tất kiểm tra Task 00.

Chỉ được:
- Cài dependencies.
- Chạy project local.
- Kiểm tra Header, Footer và mobile menu.
- Chạy lint/build.
- Sửa lỗi trực tiếp liên quan đến Task 00.

Không được làm Hero hoàn chỉnh, Supabase, database, admin hoặc các task tiếp theo.

Trước khi sửa code, hãy tóm tắt trạng thái, file dự kiến sửa và kế hoạch.
Sau khi hoàn thành, cập nhật task và toàn bộ project-log theo trạng thái thực tế.
```
