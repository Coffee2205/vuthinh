-- Task 03: public course catalog. Apply with the Supabase CLI or SQL editor.
create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin new.updated_at = now(); return new; end;
$$;

create table public.program_categories (
  id uuid primary key default gen_random_uuid(),
  name varchar(160) not null,
  slug varchar(180) not null unique,
  short_description text not null,
  description text not null,
  image_url text,
  target_audience text,
  display_order integer not null default 0 check (display_order >= 0),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.course_categories (
  id uuid primary key default gen_random_uuid(),
  program_category_id uuid not null references public.program_categories(id) on delete restrict,
  name varchar(160) not null,
  slug varchar(180) not null unique,
  description text,
  display_order integer not null default 0 check (display_order >= 0),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.course_categories(id) on delete restrict,
  title varchar(220) not null,
  slug varchar(240) not null unique,
  short_description text not null,
  description text not null,
  thumbnail_url text,
  level_label varchar(120) not null,
  level_from varchar(120),
  level_to varchar(120),
  session_count integer not null check (session_count > 0),
  session_duration_minutes integer check (session_duration_minutes > 0),
  duration_text varchar(160),
  class_size_text varchar(160),
  study_format varchar(20) not null check (study_format in ('online','offline','hybrid')),
  original_price numeric(14,2) check (original_price >= 0),
  price numeric(14,2) check (price >= 0),
  price_display varchar(120),
  currency varchar(8) not null default 'VND',
  discount_percent integer check (discount_percent between 0 and 100),
  textbook_summary text,
  expected_outcomes_summary text,
  status varchar(20) not null default 'draft' check (status in ('draft','published','archived')),
  is_featured boolean not null default false,
  published_at timestamptz,
  display_order integer not null default 0 check (display_order >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint courses_discount_price check (original_price is null or price is null or original_price >= price),
  constraint courses_published_at check (status <> 'published' or published_at is not null)
);

create table public.course_audiences (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  content text not null,
  display_order integer not null default 0 check (display_order >= 0),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.course_roadmap_stages (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title varchar(200) not null, description text not null, objective text,
  session_count integer check (session_count > 0), display_order integer not null default 0 check (display_order >= 0),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.course_curriculum_items (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title varchar(200) not null, description text, material_type varchar(80), note text,
  display_order integer not null default 0 check (display_order >= 0),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.course_outcomes (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  content text not null, display_order integer not null default 0 check (display_order >= 0),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create index course_categories_program_idx on public.course_categories(program_category_id);
create index courses_category_idx on public.courses(category_id);
create index courses_status_idx on public.courses(status);
create index courses_published_order_idx on public.courses(status, display_order, published_at desc);
create index course_audiences_course_idx on public.course_audiences(course_id, display_order);
create index course_roadmap_course_idx on public.course_roadmap_stages(course_id, display_order);
create index course_curriculum_course_idx on public.course_curriculum_items(course_id, display_order);
create index course_outcomes_course_idx on public.course_outcomes(course_id, display_order);

create trigger set_program_categories_updated_at before update on public.program_categories for each row execute function public.set_updated_at();
create trigger set_course_categories_updated_at before update on public.course_categories for each row execute function public.set_updated_at();
create trigger set_courses_updated_at before update on public.courses for each row execute function public.set_updated_at();
create trigger set_course_audiences_updated_at before update on public.course_audiences for each row execute function public.set_updated_at();
create trigger set_course_roadmap_updated_at before update on public.course_roadmap_stages for each row execute function public.set_updated_at();
create trigger set_course_curriculum_updated_at before update on public.course_curriculum_items for each row execute function public.set_updated_at();
create trigger set_course_outcomes_updated_at before update on public.course_outcomes for each row execute function public.set_updated_at();

alter table public.program_categories enable row level security;
alter table public.course_categories enable row level security;
alter table public.courses enable row level security;
alter table public.course_audiences enable row level security;
alter table public.course_roadmap_stages enable row level security;
alter table public.course_curriculum_items enable row level security;
alter table public.course_outcomes enable row level security;

create policy "Public reads active programs" on public.program_categories for select to anon, authenticated using (is_active);
create policy "Public reads active course categories" on public.course_categories for select to anon, authenticated using (is_active and exists (select 1 from public.program_categories p where p.id = program_category_id and p.is_active));
create policy "Public reads published courses" on public.courses for select to anon, authenticated using (status = 'published' and published_at <= now() and exists (select 1 from public.course_categories c join public.program_categories p on p.id = c.program_category_id where c.id = category_id and c.is_active and p.is_active));
create policy "Public reads audiences of published courses" on public.course_audiences for select to anon, authenticated using (exists (select 1 from public.courses c where c.id = course_id and c.status = 'published' and c.published_at <= now()));
create policy "Public reads roadmap of published courses" on public.course_roadmap_stages for select to anon, authenticated using (exists (select 1 from public.courses c where c.id = course_id and c.status = 'published' and c.published_at <= now()));
create policy "Public reads curriculum of published courses" on public.course_curriculum_items for select to anon, authenticated using (exists (select 1 from public.courses c where c.id = course_id and c.status = 'published' and c.published_at <= now()));
create policy "Public reads outcomes of published courses" on public.course_outcomes for select to anon, authenticated using (exists (select 1 from public.courses c where c.id = course_id and c.status = 'published' and c.published_at <= now()));

grant usage on schema public to anon, authenticated;
grant select on public.program_categories, public.course_categories, public.courses, public.course_audiences, public.course_roadmap_stages, public.course_curriculum_items, public.course_outcomes to anon, authenticated;
revoke insert, update, delete on public.program_categories, public.course_categories, public.courses, public.course_audiences, public.course_roadmap_stages, public.course_curriculum_items, public.course_outcomes from anon, authenticated;
