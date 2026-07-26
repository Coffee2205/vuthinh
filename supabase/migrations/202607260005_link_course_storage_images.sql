-- Lưu trực tiếp đường dẫn Supabase Storage vào courses.thumbnail_url.
-- Bucket: Public-Media
-- Không thêm cột alt vì schema courses hiện tại không có thumbnail_alt;
-- giao diện tạo alt text từ title của khóa học.

begin;

with image_mappings (slug, storage_path) as (
  values
    ('tieng-trung-thieu-nhi-co-ban', 'courses/Tieng_trung_thieu_nhi.png'),
    ('tieng-trung-giao-tiep-co-ban', 'courses/Tieng_trung_giao_tiep.png'),
    ('mat-goc-den-hsk-3', 'courses/Lo_trinh_mat_goc.png'),
    ('luyen-thi-hsk-4', 'courses/Luyen_thi_HSK4.png'),
    ('luyen-thi-hsk-5', 'courses/hsk5.jpg'),
    ('luyen-thi-hsk-6', 'courses/hsk6.jpg')
), valid_mappings as (
  select mapping.*
  from image_mappings as mapping
  inner join public.courses as course
    on course.slug = mapping.slug
  inner join storage.objects as storage_object
    on storage_object.bucket_id = 'Public-Media'
   and storage_object.name = mapping.storage_path
), updated_courses as (
  update public.courses as course
  set
    thumbnail_url = mapping.storage_path,
    updated_at = now()
  from valid_mappings as mapping
  where course.slug = mapping.slug
  returning course.id
)
select count(*) as updated_course_count
from updated_courses;

do $verify$
declare
  linked_count integer;
begin
  select count(*)
  into linked_count
  from public.courses
  inner join storage.objects as storage_object
    on storage_object.bucket_id = 'Public-Media'
   and storage_object.name = courses.thumbnail_url
  where courses.slug = any (array[
    'tieng-trung-thieu-nhi-co-ban',
    'tieng-trung-giao-tiep-co-ban',
    'mat-goc-den-hsk-3',
    'luyen-thi-hsk-4',
    'luyen-thi-hsk-5',
    'luyen-thi-hsk-6'
  ]);

  if linked_count <> 6 then
    raise exception 'Kỳ vọng 6 khóa học có ảnh Storage hợp lệ, nhưng tìm thấy %.', linked_count;
  end if;
end
$verify$;

commit;

-- Kiểm tra sau khi chạy:
-- select title, slug, thumbnail_url
-- from public.courses
-- order by display_order asc, title asc;
