-- Cho phép admin upload ảnh bài viết vào đúng thư mục đang dùng: post/{record-id}/...
-- Giữ public read cho toàn bộ bucket Public-Media.

drop policy if exists "Public can read Public-Media" on storage.objects;
create policy "Public can read Public-Media"
on storage.objects for select
to public
using (bucket_id = 'Public-Media');

drop policy if exists "Active admins can insert Public-Media" on storage.objects;
create policy "Active admins can insert Public-Media"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'Public-Media'
  and (storage.foldername(name))[1] = any (array['courses', 'post', 'resources', 'experts', 'testimonials'])
  and (storage.foldername(name))[2] is not null
  and exists (
    select 1 from public.user_profiles
    where id = auth.uid() and role = 'admin' and is_active is true
  )
);

drop policy if exists "Active admins can update Public-Media" on storage.objects;
create policy "Active admins can update Public-Media"
on storage.objects for update
to authenticated
using (
  bucket_id = 'Public-Media'
  and exists (
    select 1 from public.user_profiles
    where id = auth.uid() and role = 'admin' and is_active is true
  )
)
with check (
  bucket_id = 'Public-Media'
  and (storage.foldername(name))[1] = any (array['courses', 'post', 'resources', 'experts', 'testimonials'])
  and (storage.foldername(name))[2] is not null
  and exists (
    select 1 from public.user_profiles
    where id = auth.uid() and role = 'admin' and is_active is true
  )
);

drop policy if exists "Active admins can delete Public-Media" on storage.objects;
create policy "Active admins can delete Public-Media"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'Public-Media'
  and exists (
    select 1 from public.user_profiles
    where id = auth.uid() and role = 'admin' and is_active is true
  )
);
