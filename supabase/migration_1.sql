-- ============================================================
-- Migration 1: files bucket + social links + CV
-- Run this once in the Supabase SQL Editor.
-- ============================================================

-- Storage bucket for general files (CV, etc.)
insert into storage.buckets (id, name, public)
values ('files', 'files', true)
on conflict (id) do nothing;

create policy "public read files"
  on storage.objects for select using (bucket_id = 'files');

create policy "admin upload files"
  on storage.objects for insert
  with check (bucket_id = 'files' and auth.role() = 'authenticated');

create policy "admin update files"
  on storage.objects for update
  using (bucket_id = 'files' and auth.role() = 'authenticated');

create policy "admin delete files"
  on storage.objects for delete
  using (bucket_id = 'files' and auth.role() = 'authenticated');

-- Seed social links + CV path
insert into public.site_content (key, value) values
  ('social.linkedin', 'https://www.linkedin.com/in/glafver/'),
  ('social.facebook', 'https://www.facebook.com/glafver'),
  ('social.github', 'https://github.com/glafver'),
  ('social.instagram', 'https://www.instagram.com/glafver/'),
  ('cv.url', '/assets/Glafira_Veretennikova_fullstack_CV.pdf')
on conflict (key) do nothing;
