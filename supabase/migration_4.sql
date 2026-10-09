-- ============================================================
-- Migration 4: timeline (experience/education) + certificates
-- Run this once in the Supabase SQL Editor.
-- ============================================================

-- Timeline entries ----------------------------------------------------------
create table if not exists public.timeline (
  id uuid primary key default gen_random_uuid(),
  type text not null default 'work',
  title text not null,
  place text not null default '',
  period text not null default '',
  description text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.timeline enable row level security;

create policy "public read timeline"
  on public.timeline for select using (true);

create policy "admin insert timeline"
  on public.timeline for insert with check (auth.role() = 'authenticated');

create policy "admin update timeline"
  on public.timeline for update using (auth.role() = 'authenticated');

create policy "admin delete timeline"
  on public.timeline for delete using (auth.role() = 'authenticated');

-- Certificates --------------------------------------------------------------
create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  title text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.certificates enable row level security;

create policy "public read certificates"
  on public.certificates for select using (true);

create policy "admin insert certificates"
  on public.certificates for insert with check (auth.role() = 'authenticated');

create policy "admin update certificates"
  on public.certificates for update using (auth.role() = 'authenticated');

create policy "admin delete certificates"
  on public.certificates for delete using (auth.role() = 'authenticated');
