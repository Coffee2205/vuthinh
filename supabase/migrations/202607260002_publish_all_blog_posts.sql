-- Công khai toàn bộ bài viết Blog hiện có.
-- Lưu ý: migration này chủ động chuyển cả draft/archived sang published.

begin;

with ordered_posts as (
  select
    id,
    row_number() over (
      order by display_order asc nulls last, created_at asc, id asc
    ) as row_number
  from public.blog_posts
)
update public.blog_posts as post
set
  status = 'published',
  published_at = case
    when post.published_at is null or post.published_at > now()
      then now() - ((ordered_posts.row_number - 1) * interval '1 second')
    else post.published_at
  end,
  updated_at = now()
from ordered_posts
where post.id = ordered_posts.id
  and (
    post.status is distinct from 'published'
    or post.published_at is null
    or post.published_at > now()
  );

do $verify$
declare
  hidden_count integer;
begin
  select count(*)
  into hidden_count
  from public.blog_posts
  where status is distinct from 'published'
     or published_at is null
     or published_at > now();

  if hidden_count <> 0 then
    raise exception 'Vẫn còn % bài viết chưa thể hiển thị public.', hidden_count;
  end if;
end
$verify$;

commit;

-- Kiểm tra sau khi chạy:
-- select id, title, slug, status, published_at
-- from public.blog_posts
-- order by published_at desc, display_order asc;
