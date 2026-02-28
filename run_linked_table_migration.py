from dotenv import load_dotenv

load_dotenv()

from app import supabase

SQL_STATEMENTS = [
    """
    create table if not exists public.linked (
      register_no text primary key,
      name text,
      dept text,
      year integer,
      linkedin_username text,
      linkedin_profile_url text,
      updated_at timestamptz default now(),
      created_at timestamptz default now()
    );
    """,
    """
    alter table public.linked
      add column if not exists name text,
      add column if not exists dept text,
      add column if not exists year integer,
      add column if not exists linkedin_username text,
      add column if not exists linkedin_profile_url text,
      add column if not exists updated_at timestamptz default now(),
      add column if not exists created_at timestamptz default now();
    """,
    """
    update public.linked l
    set
      name = s.name,
      dept = s.dept,
      year = case when coalesce(s.year::text, '') ~ '^[0-9]+$' then s.year::integer else null end
    from public.students s
    where s.register_no::text = l.register_no;
    """,
    """
    insert into public.linked (register_no, name, dept, year, linkedin_username, linkedin_profile_url, updated_at, created_at)
    select
      s.register_no,
      s.name,
      s.dept,
      case when coalesce(s.year::text, '') ~ '^[0-9]+$' then s.year::integer else null end as year,
      coalesce(pp.profile_name, '') as linkedin_username,
      coalesce(pp.profile_url, '') as linkedin_profile_url,
      now(),
      now()
    from public.students s
    left join public.student_profile_preferences pp on pp.register_no::text = s.register_no::text
    on conflict (register_no)
    do update set
      name = excluded.name,
      dept = excluded.dept,
      year = excluded.year,
      linkedin_username = case
        when coalesce(excluded.linkedin_username, '') <> '' then excluded.linkedin_username
        else linked.linkedin_username
      end,
      linkedin_profile_url = case
        when coalesce(excluded.linkedin_profile_url, '') <> '' then excluded.linkedin_profile_url
        else linked.linkedin_profile_url
      end,
      updated_at = now();
    """,
    """
    alter table public.student_profile_preferences
      drop column if exists profile_name,
      drop column if exists profile_url,
      drop column if exists linkedin_profile_url,
      drop column if exists linkedin_username;
    """,
    """
    alter table public.students
      drop column if exists linkedin_name,
      drop column if exists linkedin_url,
      drop column if exists linkedin_profile_url;
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

print("linked table migration complete")
