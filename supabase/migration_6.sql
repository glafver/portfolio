-- ============================================================
-- Migration 6: add GitHub link to projects
-- Run this once in the Supabase SQL Editor.
-- ============================================================

alter table public.projects
add column if not exists github text;
