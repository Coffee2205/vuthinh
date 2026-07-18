-- Fix detected during Task 04: public form could not insert consultation requests.
-- This migration grants only the form columns; status/admin fields remain database-controlled.
begin;

grant insert (
  expert_id,
  service_id,
  full_name,
  phone,
  email,
  consulting_for,
  student_age,
  current_level,
  learning_goal,
  target_date_text,
  available_study_time,
  current_difficulty,
  preferred_date,
  preferred_time_slot,
  consultation_format,
  note,
  privacy_accepted
) on public.consultation_requests to anon, authenticated;

drop policy if exists "Public creates consultation requests" on public.consultation_requests;
create policy "Public creates consultation requests"
on public.consultation_requests
for insert
to anon, authenticated
with check (
  privacy_accepted is true
);

commit;
