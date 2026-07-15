# Quy tắc kiến trúc code

## Cấu trúc đề xuất

```text
src/
├── app/
├── components/
│   ├── common/
│   ├── layout/
│   ├── home/
│   ├── courses/
│   ├── blog/
│   ├── forms/
│   └── admin/
├── constants/
├── data/
├── lib/
│   ├── supabase/
│   ├── validations/
│   └── utils/
├── services/
├── types/
└── config/
```

## Quy tắc component

- Mỗi component chỉ nên có một trách nhiệm chính.
- Page không chứa quá nhiều markup; tách section.
- Không đặt toàn bộ dữ liệu mẫu trong component.
- Không tạo component dùng một lần nếu nó chỉ có vài dòng đơn giản.
- Server Component là mặc định.
- Chỉ thêm `"use client"` khi thật sự cần.

## Quy tắc dữ liệu

- Dữ liệu tĩnh đặt trong `src/data`.
- Kiểu dữ liệu đặt trong `src/types`.
- Truy cập Supabase qua `lib` hoặc `services`.
- Validation dùng schema chung.
- Không viết query lặp lại ở nhiều page.

## Quy tắc đặt tên

- Component: PascalCase.
- Function/variable: camelCase.
- Route/folder: kebab-case.
- Database table: snake_case.
- Boolean bắt đầu bằng `is`, `has`, `can`, `should`.

## Quy tắc task

Mỗi task phải:

1. Nêu mục tiêu.
2. Nêu file tạo/sửa.
3. Nêu tiêu chí hoàn thành.
4. Không làm thêm task kế tiếp.
5. Sau khi hoàn thành cập nhật checkbox.

## Chất lượng

Trước khi hoàn tất task:

```bash
npm run lint
npm run build
```

Nếu build chưa thể chạy vì thiếu biến môi trường, phải ghi rõ lý do và vẫn xử lý toàn bộ lỗi code có thể xử lý.
