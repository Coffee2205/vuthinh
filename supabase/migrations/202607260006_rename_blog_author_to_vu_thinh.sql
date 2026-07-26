-- Đổi tên tác giả trung tâm từ Huỳnh Anh Ngữ thành Vũ Thịnh.
-- Blog không lưu tên tác giả trên từng bài; 24 bài liên kết qua
-- blog_posts.author_expert_id -> experts.id nên thay đổi này áp dụng đồng loạt.

begin;

do $validate$
declare
  matching_expert_count integer;
begin
  select count(*)
  into matching_expert_count
  from public.experts
  where full_name in ('Huỳnh Anh Ngữ', 'Vũ Thịnh');

  if matching_expert_count = 0 then
    raise exception 'Không tìm thấy tác giả Huỳnh Anh Ngữ hoặc Vũ Thịnh.';
  end if;
end
$validate$;

update public.experts
set
  full_name = 'Vũ Thịnh',
  updated_at = now()
where full_name = 'Huỳnh Anh Ngữ';

do $verify$
declare
  old_name_count integer;
  linked_post_count integer;
begin
  select count(*)
  into old_name_count
  from public.experts
  where full_name = 'Huỳnh Anh Ngữ';

  select count(*)
  into linked_post_count
  from public.blog_posts as post
  inner join public.experts as author
    on author.id = post.author_expert_id
  where author.full_name = 'Vũ Thịnh';

  if old_name_count <> 0 then
    raise exception 'Vẫn còn % tác giả mang tên Huỳnh Anh Ngữ.', old_name_count;
  end if;

  if linked_post_count = 0 then
    raise exception 'Không có bài viết nào liên kết với tác giả Vũ Thịnh.';
  end if;
end
$verify$;

commit;

-- Kiểm tra sau khi chạy:
-- select author.full_name, count(post.id) as post_count
-- from public.experts as author
-- left join public.blog_posts as post on post.author_expert_id = author.id
-- where author.full_name = 'Vũ Thịnh'
-- group by author.id, author.full_name;
