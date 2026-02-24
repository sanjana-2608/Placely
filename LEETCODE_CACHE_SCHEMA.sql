-- Add LeetCode cache columns to students table
ALTER TABLE public.students
ADD COLUMN IF NOT EXISTS leetcode_ranking BIGINT,
ADD COLUMN IF NOT EXISTS leetcode_solved_all INTEGER,
ADD COLUMN IF NOT EXISTS leetcode_solved_easy INTEGER,
ADD COLUMN IF NOT EXISTS leetcode_solved_medium INTEGER,
ADD COLUMN IF NOT EXISTS leetcode_solved_hard INTEGER,
ADD COLUMN IF NOT EXISTS leetcode_acceptance_all NUMERIC(5,2),
ADD COLUMN IF NOT EXISTS leetcode_acceptance_easy NUMERIC(5,2),
ADD COLUMN IF NOT EXISTS leetcode_acceptance_medium NUMERIC(5,2),
ADD COLUMN IF NOT EXISTS leetcode_acceptance_hard NUMERIC(5,2),
ADD COLUMN IF NOT EXISTS leetcode_last_synced_at TIMESTAMPTZ;

-- Helpful index for username lookup from API route
CREATE INDEX IF NOT EXISTS idx_students_leetcode_username
ON public.students (lower(leetcode_username));
