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
