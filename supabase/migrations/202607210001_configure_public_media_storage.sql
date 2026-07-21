-- Public media remains readable by everyone. Mutations require the existing
-- active admin profile and are restricted to approved entity folders.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'Public-Media',
  'Public-Media',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

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
  and (storage.foldername(name))[1] = any (array['courses', 'posts', 'resources', 'experts', 'testimonials'])
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
  and (storage.foldername(name))[1] = any (array['courses', 'posts', 'resources', 'experts', 'testimonials'])
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
