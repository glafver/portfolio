-- ============================================================
-- Migration 3: add a screencast video to projects
-- Run this once in the Supabase SQL Editor.
-- ============================================================

alter table public.projects
add column if not exists video text;
