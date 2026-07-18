# Thiết kế kỹ thuật — Giai đoạn 1

## 1. Stack

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Supabase PostgreSQL.
- Supabase Auth.
- Supabase Storage.
- Zod để validation.
- Vercel để deploy.
- GitHub để quản lý source và CI/CD.

## 2. Kiến trúc

Giai đoạn 1 dùng một ứng dụng Next.js full-stack:

```text
Browser
  ↓
Next.js public/admin pages
  ↓
Server Components / Server Actions / Route Handlers
  ↓
Services
  ↓
Supabase Database / Auth / Storage
```

Không tách NestJS ở Giai đoạn 1.

## 3. Quy tắc dữ liệu

- Page không tự viết query lặp lại.
- Query và nghiệp vụ đặt trong `services/` hoặc `lib/`.
- Mọi dữ liệu form phải validation lại ở server.
- Không để service role key ở client.
- Public không được đọc dữ liệu đăng ký.
- Admin route phải kiểm tra session và role ở server.

## 4. Bảng dữ liệu chính

### profiles

- id UUID PK, tham chiếu `auth.users.id`.
- full_name.
- avatar_url.
- phone.
- role.
- status.
- created_at.
- updated_at.

### program_categories

- id UUID PK.
- name.
- slug UNIQUE.
- description.
- image_url.
- display_order.
- is_active.
- timestamps.

### course_categories

- id UUID PK.
- program_category_id FK.
- name.
- slug UNIQUE.
- description.
- is_active.
- timestamps.

### courses

- id UUID PK.
- category_id FK.
- title.
- slug UNIQUE.
- short_description.
- description.
- thumbnail_url.
- target_audience.
- level.
- duration_text.
- study_format.
- price nullable.
- price_display.
- curriculum JSONB.
- status.
- is_featured.
- published_at.
- created_by FK.
- timestamps.

> Cấu trúc trên đã được Task 03 thay thế chi tiết hơn: `level_label/from/to`, số buổi, phút mỗi buổi, sĩ số, giá gốc/giá hiện tại, discount, thứ tự và các bảng con chuẩn hóa. Không còn dùng `target_audience` hay `curriculum JSONB` trong bảng `courses`.

### course_audiences / course_roadmap_stages / course_curriculum_items / course_outcomes

- Mỗi nội dung là một bản ghi có `course_id`, `display_order` và timestamps.
- Bảng con xóa cascade theo course; public chỉ đọc khi course cha đã published.

### Truy cập catalog khóa học

```text
Page (Server Component) → course.service → Supabase server client
```

- Schema catalog hiện được quản lý trực tiếp trên Supabase project; repository không giữ bản SQL cũ không còn sử dụng.
- Thiếu biến môi trường hoặc lỗi Supabase phải đi vào error boundary; không fallback sang dữ liệu hard-code.
- Biến môi trường công khai chỉ gồm URL và anon key; không dùng service-role key trong web app public.

### course_registrations

- id UUID PK.
- course_id nullable FK.
- full_name.
- phone.
- email.
- student_age nullable.
- interested_program.
- registration_type.
- note.
- status.
- admin_note.
- source.
- timestamps.

### experts

- id UUID PK.
- profile_id nullable FK.
- full_name.
- slug UNIQUE.
- title.
- biography.
- specializations TEXT[].
- experience_years.
- avatar_url.
- introduction_video_url.
- consultation_description.
- is_active.
- timestamps.

### expert_certificates

- id UUID PK.
- expert_id FK.
- name.
- issuer.
- issue_date.
- certificate_url.
- display_order.
- created_at.

### consultation_requests

- id UUID PK.
- expert_id FK.
- full_name.
- phone.
- email.
- student_name nullable.
- student_age nullable.
- consultation_subject.
- learning_goal.
- current_difficulty.
- preferred_date.
- preferred_time_slot.
- consultation_format.
- status.
- admin_note.
- timestamps.

### Expert và consultation triển khai ở Task 04

```text
/expert, /consultation → expert.service → Supabase server client
ConsultationForm → Server Action → Zod → consultation.service → consultation_requests
```

- Bảng đang dùng: `experts`, `expert_qualifications`, `expert_specializations`, `consultation_services`, `consultation_service_benefits`, `expert_faqs`, `consultation_requests`.
- Client không query/insert Supabase trực tiếp; Server Action kiểm tra lại expert và service active.
- Public insert bị giới hạn theo cột và RLS privacy policy; public không được select request.

### post_categories

- id UUID PK.
- name.
- slug UNIQUE.
- description.
- is_active.
- timestamps.

### posts

- id UUID PK.
- category_id FK.
- author_id FK.
- title.
- slug UNIQUE.
- excerpt.
- content.
- thumbnail_url.
- status.
- is_featured.
- published_at.
- timestamps.

### Blog triển khai ở Task 05

```text
/blog, /blog/[slug] → blog.service → Supabase server client
```

- Dùng các bảng `blog_categories`, `blog_tags`, `blog_posts` và các bảng nối course/service/relation đã được quản lý ngoài source.
- Trang danh sách không lấy cột `content`; chỉ đọc bài published có ngày hợp lệ và lọc category qua URL.
- Nội dung Markdown render bằng `react-markdown` và `remark-gfm`; không đưa HTML Markdown trực tiếp vào DOM.
- Quan hệ chi tiết được tách thành query service để lỗi/quan hệ database không lan vào component trình bày.

### resources

- id UUID PK.
- title.
- slug UNIQUE.
- description.
- thumbnail_url.
- resource_type.
- file_url.
- external_url.
- status.
- published_at.
- timestamps.

### Truy cập tài liệu ở Task 05

```text
/resources → resource.service → Supabase server client
```

- Chỉ đọc tài liệu `published` có ngày xuất bản hợp lệ; ưu tiên nổi bật, mới nhất và thứ tự hiển thị.
- Route render động để lỗi/cấu hình database đi vào error boundary thay vì làm hỏng production build.
- UI chỉ tạo link cho URL HTTP/HTTPS; không upload hoặc phục vụ video lớn từ ứng dụng Next.js.
- `/resources/[slug]` đọc chi tiết và khóa học liên quan qua service; slug sai dùng `notFound()`.
- Download public đi qua Server Action → kiểm tra resource published/public → insert `resource_download_events` → redirect URL hợp lệ.
- `registration_required` không trả link trực tiếp; form thu thông tin chỉ bổ sung khi có yêu cầu trường dữ liệu và quy trình riêng.

### testimonials

- id UUID PK.
- customer_name.
- customer_role.
- content.
- avatar_url.
- rating nullable.
- status.
- display_order.
- created_at.

### faqs

- id UUID PK.
- question.
- answer.
- category nullable.
- display_order.
- is_active.
- timestamps.

### contact_requests

- id UUID PK.
- full_name.
- phone.
- email.
- subject.
- message.
- status.
- admin_note.
- timestamps.

## 5. Trạng thái chuẩn

### Nội dung

- draft.
- published.
- archived.

### Đăng ký khóa học

- new.
- contacted.
- enrolled.
- cancelled.

### Tư vấn

- new.
- contacted.
- confirmed.
- completed.
- cancelled.

## 6. Cấu trúc thư mục

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

## 7. Definition of Done kỹ thuật

- Responsive.
- Validation ở client và server khi phù hợp.
- Có loading, empty và error state.
- Không lộ secret.
- Route admin được bảo vệ.
- `npm run lint` đạt.
- `npm run build` đạt.
