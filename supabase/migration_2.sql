-- ============================================================
-- Migration 2: hide/show projects without deleting
-- Run this once in the Supabase SQL Editor.
-- ============================================================

alter table public.projects
add column if not exists visible boolean not null default true;
