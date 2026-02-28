from dotenv import load_dotenv

load_dotenv()

from app import supabase

sqls = [
    "alter table public.student_leetcode_profiles alter column year type text using year::text;",
    "alter table public.student_academic_metrics alter column year type text using year::text;",
    "alter table public.student_profile_preferences alter column year type text using year::text;",
    "update public.student_leetcode_profiles lp set year = s.year::text from public.students s where s.register_no = lp.register_no;",
    "update public.student_academic_metrics am set year = s.year::text from public.students s where s.register_no = am.register_no;",
    "update public.student_profile_preferences pp set year = s.year::text from public.students s where s.register_no = pp.register_no;",
]

for index, sql in enumerate(sqls, start=1):
    try:
        supabase.rpc("exec_sql", {"sql": sql}).execute()
    except Exception as exc:
        message = str(exc)
        if "Executed" in message or "'success': True" in message:
            pass
        else:
            raise
    print(f"step {index} ok")
