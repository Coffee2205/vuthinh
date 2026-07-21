Bạn đang tiếp tục phát triển project Next.js `vuthinh`.

Mục tiêu của phiên làm việc là thực hiện đúng các task đã được định nghĩa trong thư mục `tasks/`, theo thứ tự và theo trạng thái thực tế của project.

Trước khi làm bất kỳ thay đổi nào, hãy đọc theo đúng thứ tự:

1. `AGENTS.md`
2. `project-log/README.md`
3. `project-log/CURRENT_STATUS.md`
4. `project-log/NEXT_STEPS.md`
5. `project-log/DECISIONS.md`
6. `project-log/ISSUES.md`
7. `docs/PRD.md`
8. `docs/PROJECT_VISION.md`
9. `docs/SITE_MAP.md`
10. `docs/USER_FLOWS.md`
11. `docs/FUNCTIONAL_RULES.md`
12. `docs/DESIGN_RULES.md`
13. `docs/ARCHITECTURE_RULES.md`
14. `docs/TECHNICAL_DESIGN.md`
15. `tasks/README.md`
16. Các file task trong thư mục `tasks/`

## Cách xác định task hiện tại

Hãy kiểm tra:

* Task nào đã được đánh dấu hoàn thành.
* Task nào đang thực hiện.
* Task nào là task chưa hoàn thành đầu tiên theo thứ tự trong `tasks/README.md`.
* Trạng thái source code có khớp với project log và checklist hay không.

Chỉ chọn **một task chưa hoàn thành đầu tiên** để thực hiện trong phiên này.

Không được tự thực hiện nhiều task trong cùng một phiên.

## Trước khi code

Hãy báo cáo:

1. Trạng thái hiện tại của project.
2. Task đã hoàn thành gần nhất.
3. Task được chọn cho phiên này.
4. Mục tiêu của task.
5. Các phần nằm trong phạm vi.
6. Các phần không được làm.
7. File dự kiến tạo hoặc sửa.
8. Kế hoạch thực hiện thành các bước nhỏ.
9. Tiêu chí hoàn thành.

Nếu checklist và source code không khớp nhau, hãy ưu tiên kiểm tra source code thực tế và ghi nhận sự khác biệt vào `project-log/ISSUES.md`.

## Trong quá trình thực hiện

Phải tuân thủ các quy tắc sau:

* Chỉ thực hiện task hiện tại.
* Không làm trước task kế tiếp.
* Không tự thêm chức năng ngoài PRD.
* Không đổi stack kỹ thuật.
* Không cài thư viện mới nếu chưa thật sự cần.
* Nếu cần cài thư viện, phải giải thích rõ mục đích trước.
* Không sửa file không liên quan.
* Không xóa code đang hoạt động chỉ để viết lại.
* Không sử dụng dữ liệu, thành tích, chứng chỉ hoặc phản hồi giả.
* Server Component là mặc định.
* Chỉ dùng Client Component khi cần state, event hoặc browser API.
* Component dùng lại phải được tách hợp lý.
* Dữ liệu mẫu phải tách khỏi component.
* Không kết nối database nếu task hiện tại chưa yêu cầu.
* Không tự xử lý vấn đề ngoài phạm vi; hãy ghi vào `project-log/ISSUES.md`.

Nếu task quá lớn, hãy chia thành các phần nhỏ theo checklist của chính task đó, nhưng vẫn phải hoàn thành trong phạm vi task hiện tại.

## Sau khi code

Thực hiện theo đúng thứ tự:

### 1. Kiểm tra thay đổi

Chạy:

```bash
git status
git diff --stat
git diff
```

Kiểm tra:

* Không có file bí mật.
* Không có `.env`.
* Không có API key.
* Không có file thừa.
* Không có thay đổi ngoài phạm vi.

### 2. Kiểm tra chất lượng

Chạy:

```bash
npm run lint
npm run build
```

Nếu có test phù hợp thì chạy thêm test.

Nếu lint hoặc build lỗi:

* Chỉ sửa lỗi thuộc phạm vi task hiện tại.
* Nếu lỗi nằm ngoài phạm vi, ghi rõ vào `project-log/ISSUES.md`.
* Không được báo thành công nếu build chưa thành công.
* Không được tự đánh dấu task hoàn thành nếu còn lỗi nghiêm trọng.

### 3. Kiểm tra thủ công

Kiểm tra các phần phù hợp với task:

* Desktop.
* Tablet.
* Mobile.
* Responsive.
* Links.
* Loading state.
* Empty state.
* Error state.
* Accessibility cơ bản.
* Console trình duyệt.
* Terminal.

### 4. Cập nhật file task

Cập nhật file task hiện tại:

* Đánh dấu `[x]` cho phần đã hoàn thành thực tế.
* Không đánh dấu những phần chưa kiểm tra.
* Ghi các file đã tạo.
* Ghi các file đã sửa.
* Ghi quyết định kỹ thuật.
* Ghi kết quả lint.
* Ghi kết quả build.
* Ghi lỗi hoặc giới hạn.
* Ghi commit nếu có.

### 5. Cập nhật project log

Cập nhật đầy đủ:

#### `project-log/CURRENT_STATUS.md`

* Task vừa thực hiện.
* Trạng thái hoàn thành.
* Thành quả hiện tại.
* Trạng thái lint/build.
* Phần chưa hoàn thành.

#### `project-log/NEXT_STEPS.md`

* Task tiếp theo theo `tasks/README.md`.
* Việc nhỏ đầu tiên cần thực hiện trong task tiếp theo.
* Không ghi rằng task tiếp theo đã bắt đầu.

#### `project-log/DECISIONS.md`

Chỉ bổ sung nếu có quyết định kỹ thuật mới đã được áp dụng.

#### `project-log/ISSUES.md`

* Ghi lỗi chưa giải quyết.
* Ghi nội dung hoặc dữ liệu còn thiếu.
* Đánh dấu vấn đề đã giải quyết nếu phù hợp.
* Không xóa lịch sử vấn đề quan trọng.

#### `project-log/CHANGELOG.md`

Thêm thay đổi theo ngày hiện tại với các nhóm phù hợp:

* Added
* Changed
* Fixed
* Verified
* Known issues

### 6. Commit và push

Chỉ commit khi:

* Task hoặc phần task có trạng thái rõ ràng.
* Không có lỗi nghiêm trọng chưa ghi nhận.
* Task và project log đã được cập nhật.
* Không có dữ liệu bí mật.

Dùng Conventional Commits:

```text
feat: ...
fix: ...
docs: ...
refactor: ...
style: ...
chore: ...
```

Thực hiện:

```bash
git add .
git commit -m "<commit message phù hợp>"
git push origin dev
```

Lưu ý:

* Bạn sẽ push lên nhánh `dev`.
* Không tự merge branch, việc merge sẽ được thực hiện thủ công sau.

Không được:

* Dùng `git push --force`.
* Sửa lịch sử Git.
* Tự merge branch.
* Reset commit cũ.
* Push file bí mật.
* Chuyển sang task tiếp theo sau khi push.

Nếu không thể push:

* Vẫn commit local nếu có thể.
* Ghi lỗi vào `project-log/ISSUES.md`.
* Báo rõ nguyên nhân.

## Điều kiện hoàn thành phiên

Phiên làm việc kết thúc ngay sau khi:

* Một task đã hoàn thành và được cập nhật đầy đủ; hoặc
* Đã hoàn thành phần hợp lý của task nhưng gặp blocker được ghi nhận rõ.

Không tự chuyển sang task tiếp theo.

## Báo cáo cuối phiên

Hãy báo cáo theo mẫu:

### Task thực hiện

* Tên task:
* Trạng thái: Hoàn thành / Chưa hoàn thành / Bị chặn

### Kết quả

* Nội dung đã làm:
* Tiêu chí đã đạt:

### File thay đổi

* File đã tạo:
* File đã sửa:
* File đã xóa:

### Kiểm tra

* Lint:
* Build:
* Test thủ công:
* Responsive:
* Accessibility:

### Git

* Branch: dev
* Commit message:
* Commit hash:
* Push status:

### Project log

* CURRENT_STATUS:
* NEXT_STEPS:
* DECISIONS:
* ISSUES:
* CHANGELOG:

### Vấn đề còn lại

* Các lỗi:
* Dữ liệu còn thiếu:
* Blocker:

### Task tiếp theo

Chỉ nêu tên task tiếp theo và bước nhỏ đầu tiên cần làm, chưa thực hiện.
