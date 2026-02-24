# Supabase Schema Update for LinkedIn Integration

## New Columns to Add to `students` Table

Run these SQL commands in Supabase to add LinkedIn fields:

```sql
-- Add LinkedIn profile fields to students table
ALTER TABLE public.students
ADD COLUMN linkedin_name TEXT DEFAULT '',
ADD COLUMN linkedin_photo_url TEXT DEFAULT '',
ADD COLUMN linkedin_url TEXT DEFAULT '';

-- Add comments for clarity
COMMENT ON COLUMN public.students.linkedin_name IS 'Student name from LinkedIn profile';
COMMENT ON COLUMN public.students.linkedin_photo_url IS 'URL of student profile photo from LinkedIn';
COMMENT ON COLUMN public.students.linkedin_url IS 'Direct URL to student LinkedIn profile';
```

## Steps to Apply Schema Update

1. Go to your Supabase project: https://app.supabase.com/
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy and paste the SQL command above
5. Click "Run" button
6. Verify the columns were added successfully by going to "Table Editor" and checking the `students` table

## Verification

After running the migration, verify like this:

```sql
-- Check that columns exist
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'students' 
AND column_name LIKE 'linkedin%';
```

You should see three new columns:
- `linkedin_name` (text)
- `linkedin_photo_url` (text)
- `linkedin_url` (text)

## Notes

- All fields are optional (initially empty)
- Fields will be populated when a student connects their LinkedIn account
- On reconnection, fields are updated with latest LinkedIn data
- Data is never deleted, only updated
