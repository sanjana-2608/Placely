from dotenv import load_dotenv

load_dotenv()

from app import supabase

SQL_STATEMENTS = [
    """
    create table if not exists public.student_leetcode_profiles (
      register_no bigint primary key references public.students(register_no) on delete cascade,
      leetcode_username text,
      leetcode_ranking bigint,
      leetcode_solved_all integer default 0,
      leetcode_solved_easy integer default 0,
      leetcode_solved_medium integer default 0,
      leetcode_solved_hard integer default 0,
      leetcode_acceptance_all numeric,
      leetcode_acceptance_easy numeric,
      leetcode_acceptance_medium numeric,
      leetcode_acceptance_hard numeric,
      leetcode_last_synced_at timestamptz,
      updated_at timestamptz not null default now()
    );
    """,
    """
    create table if not exists public.student_academic_metrics (
      register_no bigint primary key references public.students(register_no) on delete cascade,
      internships integer default 0,
      certifications integer default 0,
      grade_points numeric,
      tenth_percentage numeric,
      twelfth_percentage numeric,
      diploma_percentage numeric,
      updated_at timestamptz not null default now()
    );
    """,
    """
    create table if not exists public.student_profile_preferences (
      register_no bigint primary key references public.students(register_no) on delete cascade,
      interest text,
      placement_status text,
      personal_mail text,
      college_mail text,
      contact_no text,
      address text,
      resume_link text,
      preferred_roles text,
      preferred_shift text,
      travel_priority text,
      achievements text,
      linkedin_headline text,
      updated_at timestamptz not null default now()
    );
    """,
    """
    insert into public.student_leetcode_profiles (
      register_no, leetcode_username, leetcode_ranking, leetcode_solved_all, leetcode_solved_easy,
      leetcode_solved_medium, leetcode_solved_hard, leetcode_acceptance_all, leetcode_acceptance_easy,
      leetcode_acceptance_medium, leetcode_acceptance_hard, leetcode_last_synced_at, updated_at
    )
    select register_no, leetcode_username, leetcode_ranking, leetcode_solved_all, leetcode_solved_easy,
           leetcode_solved_medium, leetcode_solved_hard, leetcode_acceptance_all, leetcode_acceptance_easy,
           leetcode_acceptance_medium, leetcode_acceptance_hard, leetcode_last_synced_at, now()
    from public.students
    on conflict (register_no) do update set
      leetcode_username = excluded.leetcode_username,
      leetcode_ranking = excluded.leetcode_ranking,
      leetcode_solved_all = excluded.leetcode_solved_all,
      leetcode_solved_easy = excluded.leetcode_solved_easy,
      leetcode_solved_medium = excluded.leetcode_solved_medium,
      leetcode_solved_hard = excluded.leetcode_solved_hard,
      leetcode_acceptance_all = excluded.leetcode_acceptance_all,
      leetcode_acceptance_easy = excluded.leetcode_acceptance_easy,
      leetcode_acceptance_medium = excluded.leetcode_acceptance_medium,
      leetcode_acceptance_hard = excluded.leetcode_acceptance_hard,
      leetcode_last_synced_at = excluded.leetcode_last_synced_at,
      updated_at = now();
    """,
    """
    insert into public.student_academic_metrics (
      register_no, internships, certifications, grade_points, tenth_percentage,
      twelfth_percentage, diploma_percentage, updated_at
    )
    select register_no, internships, certifications, grade_points, tenth_percentage,
           twelfth_percentage, diploma_percentage, now()
    from public.students
    on conflict (register_no) do update set
      internships = excluded.internships,
      certifications = excluded.certifications,
      grade_points = excluded.grade_points,
      tenth_percentage = excluded.tenth_percentage,
      twelfth_percentage = excluded.twelfth_percentage,
      diploma_percentage = excluded.diploma_percentage,
      updated_at = now();
    """,
    """
    insert into public.student_profile_preferences (
      register_no, interest, placement_status, personal_mail, college_mail, contact_no,
      address, resume_link, preferred_roles, preferred_shift, travel_priority,
      achievements, linkedin_headline, updated_at
    )
    select register_no, interest, placement_status, personal_mail, college_mail, contact_no,
           address, resume_link, preferred_roles, preferred_shift, travel_priority,
           achievements, linkedin_headline, now()
    from public.students
    on conflict (register_no) do update set
      interest = excluded.interest,
      placement_status = excluded.placement_status,
      personal_mail = excluded.personal_mail,
      college_mail = excluded.college_mail,
      contact_no = excluded.contact_no,
      address = excluded.address,
      resume_link = excluded.resume_link,
      preferred_roles = excluded.preferred_roles,
      preferred_shift = excluded.preferred_shift,
      travel_priority = excluded.travel_priority,
      achievements = excluded.achievements,
      linkedin_headline = excluded.linkedin_headline,
      updated_at = now();
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

print("table split migration complete")
