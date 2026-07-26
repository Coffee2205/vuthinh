-- Lưu trực tiếp đường dẫn Supabase Storage vào blog_posts.
-- Bucket: Public-Media
-- Các giá trị cover_image_url bên dưới là object path tương đối trong bucket.

begin;

with image_mappings (slug, storage_path, image_alt) as (
  values
    ('hsk-la-gi-va-nen-bat-dau-tu-cap-do-nao', 'post/HSK_la_gi.jpg', 'Minh họa các cấp độ HSK dành cho người mới học tiếng Trung'),
    ('lo-trinh-hoc-tieng-trung-cho-nguoi-mat-goc', 'post/Lo_trinh_hoc_mat_goc.png', 'Lộ trình học tiếng Trung dành cho người mất gốc'),
    ('cach-tao-thoi-quen-hoc-tieng-trung-moi-ngay', 'post/Tao_thoi_quen.jpg', 'Minh họa thói quen học tiếng Trung mỗi ngày'),
    ('hoc-tu-vung-tieng-trung-de-nho-lau', 'post/Tu_vung_tieng_trung.jpg', 'Minh họa phương pháp học từ vựng tiếng Trung hiệu quả'),
    ('hoc-tieng-trung-mo-rong-co-hoi-nghe-nghiep-nhu-the-nao', 'post/tieng-trung-mo-rong-cong-viec.jpg', 'Người đi làm sử dụng tiếng Trung để mở rộng cơ hội nghề nghiệp'),
    ('7-loi-ich-cua-viec-hoc-tieng-trung-doi-voi-sinh-vien', 'post/loi-ich-tieng-tung-voi-sinh-vien.jpg', 'Sinh viên học tiếng Trung để phát triển kiến thức và kỹ năng'),
    ('vi-sao-nguoi-di-lam-nen-hoc-tieng-trung', 'post/vi-sao-len-hoc-tieng-trung.jpg', 'Người đi làm học tiếng Trung phục vụ công việc'),
    ('hoc-tieng-trung-giup-tiep-can-van-hoa-sau-hon', 'post/van_hoa_trung_hoa.png', 'Văn hóa Trung Hoa được khám phá thông qua việc học tiếng Trung'),
    ('tieng-trung-giup-ich-gi-khi-di-du-lich', 'post/tieng_trung_khi_du_lich.webp', 'Du khách sử dụng tiếng Trung trong chuyến đi'),
    ('hoc-chu-han-co-the-ren-su-tap-trung-ra-sao', 'post/hoc_chu_han.webp', 'Người học luyện viết chữ Hán và khả năng tập trung'),
    ('loi-ich-cua-viec-hoc-tieng-trung-tu-som-cho-tre', 'post/hoc_tieng_trung_tu_be.jpg', 'Trẻ em làm quen với tiếng Trung từ sớm'),
    ('hoc-tieng-trung-giup-mo-rong-nguon-tai-lieu-nhu-the-nao', 'post/Mo_rong_nguon_tai_lieu.jpg', 'Người học tiếp cận thêm tài liệu bằng tiếng Trung'),
    ('tieng-trung-va-loi-ich-trong-kinh-doanh-thuong-mai', 'post/Tieng_trung_trong_thuong_mai.png', 'Tiếng Trung được sử dụng trong kinh doanh và thương mại'),
    ('hoc-tieng-trung-co-giup-hoc-them-ngon-ngu-khac-khong', 'post/hoc-tieng-trung-giup-hoc-ngon-ngu-khac.webp', 'Người học sử dụng kinh nghiệm tiếng Trung để tiếp cận ngôn ngữ khác'),
    ('hoc-tieng-trung-ren-tu-duy-he-thong-qua-bo-thu-va-cau-tao-chu', 'post/bo-thu.webp', 'Các bộ thủ và cấu tạo chữ Hán giúp rèn tư duy hệ thống'),
    ('tieng-trung-giup-ket-noi-voi-nhieu-cong-dong-hon', 'post/da-ngon-ngu.jpg', 'Tiếng Trung giúp kết nối với cộng đồng đa ngôn ngữ'),
    ('hoc-tieng-trung-giup-tang-su-tu-tin-trong-giao-tiep', 'post/tang-tu-tin.jpg', 'Người học tự tin hơn khi giao tiếp bằng tiếng Trung'),
    ('loi-ich-cua-tieng-trung-voi-nganh-du-lich-va-dich-vu', 'post/du-lich-va-dich-vu.webp', 'Tiếng Trung được ứng dụng trong ngành du lịch và dịch vụ'),
    ('hoc-tieng-trung-de-hieu-ro-hon-ve-am-thuc-va-doi-song', 'post/am-thuc-va-loi-song.jpg', 'Ẩm thực và đời sống được khám phá qua tiếng Trung'),
    ('tieng-trung-ho-tro-muc-tieu-du-hoc-nhu-the-nao', 'post/ho-tro-du-hoc.jpg', 'Tiếng Trung hỗ trợ người học chuẩn bị mục tiêu du học'),
    ('hoc-tieng-trung-tao-thoi-quen-hoc-tap-ben-vung', 'post/tao-thoi-quen-hoc.jpg', 'Người học xây dựng thói quen học tiếng Trung bền vững'),
    ('tieng-trung-giup-nang-cao-kha-nang-lang-nghe', 'post/ho-tro-nghe.jpg', 'Luyện nghe tiếng Trung giúp nâng cao khả năng lắng nghe'),
    ('hoc-tieng-trung-giup-hieu-cong-nghe-va-san-pham-tu-nguon-goc', 'post/hieu-nguon-goc.webp', 'Tiếng Trung giúp tìm hiểu công nghệ và sản phẩm từ nguồn gốc'),
    ('vi-sao-hoc-tieng-trung-la-mot-khoan-dau-tu-dai-han', 'post/dau-tu-dai-han.webp', 'Học tiếng Trung là một khoản đầu tư kiến thức dài hạn')
), valid_mappings as (
  select mapping.*
  from image_mappings as mapping
  inner join public.blog_posts as post
    on post.slug = mapping.slug
  inner join storage.objects as storage_object
    on storage_object.bucket_id = 'Public-Media'
   and storage_object.name = mapping.storage_path
), updated_posts as (
update public.blog_posts as post
set
  cover_image_url = mapping.storage_path,
  cover_image_alt = mapping.image_alt,
  updated_at = now()
from valid_mappings as mapping
where post.slug = mapping.slug
returning post.id
)
select count(*) as updated_post_count
from updated_posts;

do $verify$
declare
  linked_count integer;
begin
  select count(*)
  into linked_count
  from public.blog_posts
  inner join storage.objects as storage_object
    on storage_object.bucket_id = 'Public-Media'
   and storage_object.name = blog_posts.cover_image_url
  where blog_posts.cover_image_url like 'post/%'
    and blog_posts.cover_image_alt is not null;

  if linked_count < 24 then
    raise exception 'Kỳ vọng ít nhất 24 bài có ảnh Storage, nhưng chỉ tìm thấy %.', linked_count;
  end if;
end
$verify$;

commit;

-- Kiểm tra sau khi chạy:
-- select title, slug, cover_image_url, cover_image_alt
-- from public.blog_posts
-- order by display_order asc;
