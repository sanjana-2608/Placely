-- Placely Supabase RLS lockdown
-- Run in Supabase SQL Editor (project: Placely, schema: public)
-- This script restricts table access to service_role only.

begin;

do $$
declare
  target_table text;
  existing_policy record;
  target_tables text[] := array[
    'students',
    'student_academic_metrics',
    'student_leetcode_profiles',
    'student_profile_preferences',
    'linkedin',
    'copilot_sql_audit'
  ];
begin
  foreach target_table in array target_tables
  loop
    if to_regclass(format('public.%I', target_table)) is null then
      continue;
    end if;

    for existing_policy in
      select policyname
      from pg_policies
      where schemaname = 'public' and tablename = target_table
    loop
      execute format('drop policy if exists %I on public.%I', existing_policy.policyname, target_table);
    end loop;

    execute format('alter table public.%I enable row level security', target_table);
    execute format('alter table public.%I force row level security', target_table);

    execute format('revoke all on table public.%I from anon', target_table);
    execute format('revoke all on table public.%I from authenticated', target_table);

    execute format('grant select, insert, update, delete on table public.%I to service_role', target_table);

    execute format(
      'create policy %I on public.%I for all to service_role using (true) with check (true)',
      target_table || '_service_role_all',
      target_table
    );
  end loop;
end
$$;

commit;

-- Optional verification:
-- select schemaname, tablename, policyname, roles, cmd
-- from pg_policies
-- where schemaname = 'public'
--   and tablename in (
--     'students', 'student_academic_metrics', 'student_leetcode_profiles',
--     'student_profile_preferences', 'linkedin', 'copilot_sql_audit'
--   )
-- order by tablename, policyname;
