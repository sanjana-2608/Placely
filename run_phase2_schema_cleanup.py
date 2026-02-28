from dotenv import load_dotenv

load_dotenv()

from app import supabase

SQL_STATEMENTS = [
    """
    alter table public.student_leetcode_profiles
      add column if not exists name text,
      add column if not exists dept text,
      add column if not exists year integer;
    """,
    """
    alter table public.student_academic_metrics
      add column if not exists name text,
      add column if not exists dept text,
      add column if not exists year integer;
    """,
    """
    alter table public.student_profile_preferences
      add column if not exists name text,
      add column if not exists dept text,
      add column if not exists year integer,
      add column if not exists profile_name text,
      add column if not exists profile_url text;
    """,
    """
    alter table public.student_profile_preferences
      drop column if exists linkedin_headline;
    """,
    """
    update public.student_leetcode_profiles lp
    set
      name = s.name,
      dept = s.dept,
      year = case when coalesce(s.year::text, '') ~ '^[0-9]+$' then s.year::integer else null end
    from public.students s
    where s.register_no = lp.register_no;
    """,
    """
    update public.student_academic_metrics am
    set
      name = s.name,
      dept = s.dept,
      year = case when coalesce(s.year::text, '') ~ '^[0-9]+$' then s.year::integer else null end
    from public.students s
    where s.register_no = am.register_no;
    """,
    """
    update public.student_profile_preferences pp
    set
      name = s.name,
      dept = s.dept,
      year = case when coalesce(s.year::text, '') ~ '^[0-9]+$' then s.year::integer else null end,
      profile_name = coalesce(pp.profile_name, s.linkedin_name),
      profile_url = coalesce(pp.profile_url, s.linkedin_url)
    from public.students s
    where s.register_no = pp.register_no;
    """,
    """
    alter table public.students
      drop column if exists leetcode_username,
      drop column if exists leetcode_ranking,
      drop column if exists leetcode_solved_all,
      drop column if exists leetcode_solved_easy,
      drop column if exists leetcode_solved_medium,
      drop column if exists leetcode_solved_hard,
      drop column if exists leetcode_acceptance_all,
      drop column if exists leetcode_acceptance_easy,
      drop column if exists leetcode_acceptance_medium,
      drop column if exists leetcode_acceptance_hard,
      drop column if exists leetcode_last_synced_at,
      drop column if exists internships,
      drop column if exists certifications,
      drop column if exists grade_points,
      drop column if exists tenth_percentage,
      drop column if exists twelfth_percentage,
      drop column if exists diploma_percentage,
      drop column if exists interest,
      drop column if exists placement_status,
      drop column if exists personal_mail,
      drop column if exists college_mail,
      drop column if exists contact_no,
      drop column if exists address,
      drop column if exists resume_link,
      drop column if exists preferred_roles,
      drop column if exists preferred_shift,
      drop column if exists travel_priority,
      drop column if exists achievements,
      drop column if exists linkedin_name,
      drop column if exists linkedin_url,
      drop column if exists linkedin_headline;
    """,
]


def run_exec_sql(sql: str) -> None:
    try:
        supabase.rpc("exec_sql", {"sql": sql}).execute()
    except Exception as exc:
        message = str(exc)
        if "Executed" in message or "'success': True" in message:
            return
        raise


for index, statement in enumerate(SQL_STATEMENTS, start=1):
    run_exec_sql(statement)
    print(f"step {index} ok")

print("phase2 schema cleanup complete")
