-- ============================================================
-- Migration 5: tech stack logos
-- Run this once in the Supabase SQL Editor.
-- ============================================================

create table if not exists public.tech_logos (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.tech_logos enable row level security;

create policy "public read tech_logos"
  on public.tech_logos for select using (true);

create policy "admin insert tech_logos"
  on public.tech_logos for insert with check (auth.role() = 'authenticated');

create policy "admin update tech_logos"
  on public.tech_logos for update using (auth.role() = 'authenticated');

create policy "admin delete tech_logos"
  on public.tech_logos for delete using (auth.role() = 'authenticated');
