from flask import Flask, render_template, request, jsonify, session, redirect, url_for
from datetime import datetime
import json
import os
import time
import requests as http_requests
from apscheduler.schedulers.background import BackgroundScheduler

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

import config

try:
    from supabase import create_client
    SUPABASE_AVAILABLE = True
except ImportError:
    SUPABASE_AVAILABLE = False

# Try to import Google OAuth libraries, but don't fail if they're missing
try:
    from google.oauth2 import id_token
    from google.auth.transport import requests as google_requests
    from google_auth_oauthlib.flow import Flow
    GOOGLE_OAUTH_AVAILABLE = True
except ImportError:
    GOOGLE_OAUTH_AVAILABLE = False

app = Flask(__name__, static_folder='client', template_folder='templates')
app.secret_key = os.environ.get('SECRET_KEY', 'placely-secret-key-2026')

SUPABASE_URL = (
    os.environ.get('SUPABASE_URL', '').strip()
    or getattr(config, 'SUPABASE_URL', '').strip()
)

SUPABASE_SERVICE_ROLE_KEY = (
    os.environ.get('SUPABASE_SERVICE_ROLE_KEY', '').strip()
    or getattr(config, 'SUPABASE_SERVICE_ROLE_KEY', '').strip()
)

SUPABASE_FALLBACK_KEY = (
    os.environ.get('SUPABASE_KEY', '').strip()
    or os.environ.get('SUPABASE_SECRET_KEY', '').strip()
    or os.environ.get('SUPABASE_ANON_KEY', '').strip()
    or os.environ.get('SUPABASE_PUBLISHABLE_KEY', '').strip()
    or getattr(config, 'SUPABASE_KEY', '').strip()
)

SUPABASE_DB_KEY = SUPABASE_SERVICE_ROLE_KEY or SUPABASE_FALLBACK_KEY
SUPABASE_ENABLED = bool(SUPABASE_AVAILABLE and SUPABASE_URL and SUPABASE_DB_KEY)

supabase = None
if SUPABASE_ENABLED:
    try:
        supabase = create_client(SUPABASE_URL, SUPABASE_DB_KEY)
    except Exception as exc:
        print(f"Supabase initialization failed: {exc}")
        supabase = None

# Disable HTTPS requirement for local development only
if os.environ.get('RAILWAY_ENVIRONMENT') != 'production':
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

# Google OAuth Setup
GOOGLE_CLIENT_ID = getattr(config, 'GOOGLE_CLIENT_ID', 'YOUR_GOOGLE_CLIENT_ID_HERE')
GOOGLE_CLIENT_SECRET = getattr(config, 'GOOGLE_CLIENT_SECRET', 'YOUR_GOOGLE_CLIENT_SECRET_HERE')

# Check if Google OAuth is properly configured
GOOGLE_OAUTH_ENABLED = (
    GOOGLE_OAUTH_AVAILABLE and
    GOOGLE_CLIENT_ID != 'YOUR_GOOGLE_CLIENT_ID_HERE' and 
    GOOGLE_CLIENT_SECRET != 'YOUR_GOOGLE_CLIENT_SECRET_HERE'
)

# Determine base URL for OAuth redirect
BASE_URL = os.environ.get('RAILWAY_PUBLIC_DOMAIN', 'localhost:5000')
REDIRECT_URI = f"https://{BASE_URL}/callback" if 'RAILWAY_PUBLIC_DOMAIN' in os.environ else "http://localhost:5000/callback"

# Only create client_secrets if OAuth is available
if GOOGLE_OAUTH_ENABLED:
    client_secrets = {
        "web": {
            "client_id": GOOGLE_CLIENT_ID,
            "client_secret": GOOGLE_CLIENT_SECRET,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "redirect_uris": [REDIRECT_URI]
        }
    }
else:
    client_secrets = {}

# Data
students = []

recently_placed = [
    {"name": "Priya Sharma", "package": 18.5, "company": "Google", "position": "Software Engineer", "graduationYear": 2024, "date": "2026-01-25"},
    {"name": "Aarav Kumar", "package": 16.8, "company": "Microsoft", "position": "SDE-2", "graduationYear": 2024, "date": "2026-01-20"},
    {"name": "Sneha Reddy", "package": 15.2, "company": "Amazon", "position": "Associate Engineer", "graduationYear": 2025, "date": "2026-01-18"}
]

upcoming_companies = [
    {"name": "Microsoft", "visitDate": "Feb 5, 2026", "position": "Software Engineer", "salary": "20-24 LPA", "ctc": "22 LPA"},
    {"name": "ServiceNow", "visitDate": "Feb 7, 2026", "position": "Developer", "salary": "18-22 LPA", "ctc": "20 LPA"},
    {"name": "Autodesk", "visitDate": "Feb 9, 2026", "position": "Software Developer", "salary": "19-23 LPA", "ctc": "21 LPA"},
    {"name": "Amazon", "visitDate": "Feb 11, 2026", "position": "SDE I", "salary": "17-21 LPA", "ctc": "19 LPA"},
    {"name": "Commvault Cloud", "visitDate": "Feb 13, 2026", "position": "Engineer", "salary": "16-20 LPA", "ctc": "18 LPA"},
    {"name": "JustPay", "visitDate": "Feb 15, 2026", "position": "Backend Engineer", "salary": "12-16 LPA", "ctc": "14 LPA"},
    {"name": "Wells Fargo", "visitDate": "Feb 17, 2026", "position": "Technology Analyst", "salary": "15-18 LPA", "ctc": "16.5 LPA"},
    {"name": "Global Knowledge", "visitDate": "Feb 19, 2026", "position": "Associate", "salary": "8-10 LPA", "ctc": "9 LPA"},
    {"name": "ThoughtWorks", "visitDate": "Feb 21, 2026", "position": "Developer", "salary": "14-18 LPA", "ctc": "16 LPA"},
    {"name": "Akaike", "visitDate": "Feb 23, 2026", "position": "Software Engineer", "salary": "12-15 LPA", "ctc": "13.5 LPA"},
]

placed_students = [
    {"name": "Priya Sharma", "dept": "CSE", "package": 18.5, "company": "Google", "position": "Software Engineer", "graduationYear": 2024, "date": "2026-01-25", "codingProblems": 150, "internships": 1, "certifications": 4, "gradePoints": 8.3},
    {"name": "Aarav Kumar", "dept": "CSE", "package": 16.8, "company": "Microsoft", "position": "SDE-2", "graduationYear": 2024, "date": "2026-01-20", "codingProblems": 120, "internships": 2, "certifications": 3, "gradePoints": 8.7},
    {"name": "Sneha Reddy", "dept": "IT", "package": 15.2, "company": "Amazon", "position": "Associate Engineer", "graduationYear": 2025, "date": "2026-01-18", "codingProblems": 80, "internships": 1, "certifications": 2, "gradePoints": 9.1},
    {"name": "Rahul Singh", "dept": "ECE", "package": 14.5, "company": "Infosys", "position": "Systems Engineer", "graduationYear": 2024, "date": "2026-01-15", "codingProblems": 200, "internships": 0, "certifications": 1, "gradePoints": 7.9},
    {"name": "Vikram Patel", "dept": "ME", "package": 12.0, "company": "TCS", "position": "Digital Engineer", "graduationYear": 2025, "date": "2026-01-10", "codingProblems": 60, "internships": 2, "certifications": 2, "gradePoints": 8.9}
]

staff_credentials = {"email": "staff@college.edu", "password": "staff123"}

STUDENT_ALLOWED_FIELDS = {
    'name', 'email', 'leetcodeUsername', 'codingProblems', 'internships',
    'certifications', 'gradePoints', 'year', 'interest', 'dept'
}


def _db_to_student(row):
    return {
        'id': row.get('id'),
        'name': row.get('name'),
        'email': row.get('email'),
        'leetcodeUsername': row.get('leetcode_username') or '',
        'codingProblems': row.get('coding_problems', 0),
        'internships': row.get('internships', 0),
        'certifications': row.get('certifications', 0),
        'gradePoints': row.get('grade_points', 0),
        'year': row.get('year', 0),
        'interest': row.get('interest') or '',
        'dept': row.get('dept') or ''
    }


def _student_to_db(payload):
    mapped = {}
    field_map = {
        'name': 'name',
        'email': 'email',
        'leetcodeUsername': 'leetcode_username',
        'codingProblems': 'coding_problems',
        'internships': 'internships',
        'certifications': 'certifications',
        'gradePoints': 'grade_points',
        'year': 'year',
        'interest': 'interest',
        'dept': 'dept'
    }
    for key, value in payload.items():
        db_key = field_map.get(key)
        if db_key:
            mapped[db_key] = value
    return mapped


def get_students_data():
    if not supabase:
        return students
    try:
        response = supabase.table('students').select('*').order('id').execute()
        rows = response.data or []
        return [_db_to_student(row) for row in rows]
    except Exception as exc:
        print(f"Supabase get_students_data failed: {exc}")
        return students


def get_student_by_email(email):
    normalized_email = (email or '').lower()
    if not supabase:
        return next((s for s in students if s['email'].lower() == normalized_email), None)
    try:
        response = supabase.table('students').select('*').ilike('email', normalized_email).limit(1).execute()
        rows = response.data or []
        if not rows:
            return None
        return _db_to_student(rows[0])
    except Exception as exc:
        print(f"Supabase get_student_by_email failed: {exc}")
        return next((s for s in students if s['email'].lower() == normalized_email), None)


def update_student_data(student_id, payload):
    allowed_payload = {key: value for key, value in payload.items() if key in STUDENT_ALLOWED_FIELDS}
    if not allowed_payload:
        return None

    if not supabase:
        student = next((s for s in students if s['id'] == student_id), None)
        if not student:
            return None
        student.update(allowed_payload)
        return student

    db_payload = _student_to_db(allowed_payload)
    if not db_payload:
        return None

    try:
        response = supabase.table('students').update(db_payload).eq('id', student_id).execute()
        rows = response.data or []
        if not rows:
            return None
        return _db_to_student(rows[0])
    except Exception as exc:
        print(f"Supabase update_student_data failed: {exc}")
        return None

LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql/"
LEETCODE_TIMEOUT_SECONDS = 12
LEETCODE_BATCH_DELAY_SECONDS = 0.7

LEETCODE_PROFILE_QUERY = """
query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    username
    profile {
      ranking
    }
    submitStats: submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
                submissions
      }
      totalSubmissionNum {
        difficulty
        count
                submissions
      }
    }
  }
}
"""


def _difficulty_map(rows, field='count'):
    values = {}
    for row in rows or []:
        difficulty = row.get('difficulty')
        values[difficulty] = int(row.get(field, 0))
    return values


def _acceptance_rate(accepted, total):
    if not total:
        return 0.0
    return round((accepted / total) * 100, 2)


def fetch_leetcode_profile(username):
    payload = {
        'query': LEETCODE_PROFILE_QUERY,
        'variables': {'username': username}
    }
    headers = {'Content-Type': 'application/json'}

    try:
        response = http_requests.post(
            LEETCODE_GRAPHQL_URL,
            json=payload,
            headers=headers,
            timeout=LEETCODE_TIMEOUT_SECONDS
        )
        response.raise_for_status()
        response_json = response.json()
    except http_requests.RequestException as exc:
        return {
            'success': False,
            'username': username,
            'message': f'LeetCode request failed: {str(exc)}'
        }

    matched_user = (response_json.get('data') or {}).get('matchedUser')
    if not matched_user:
        return {
            'success': False,
            'username': username,
            'message': 'LeetCode user not found or profile is private'
        }

    stats = matched_user.get('submitStats') or {}
    accepted_by_difficulty = _difficulty_map(stats.get('acSubmissionNum'), 'count')
    accepted_submission_attempts_by_difficulty = _difficulty_map(stats.get('acSubmissionNum'), 'submissions')
    total_submission_attempts_by_difficulty = _difficulty_map(stats.get('totalSubmissionNum'), 'submissions')

    solved = {
        'all': accepted_by_difficulty.get('All', 0),
        'easy': accepted_by_difficulty.get('Easy', 0),
        'medium': accepted_by_difficulty.get('Medium', 0),
        'hard': accepted_by_difficulty.get('Hard', 0)
    }

    total_submissions = {
        'all': total_submission_attempts_by_difficulty.get('All', 0),
        'easy': total_submission_attempts_by_difficulty.get('Easy', 0),
        'medium': total_submission_attempts_by_difficulty.get('Medium', 0),
        'hard': total_submission_attempts_by_difficulty.get('Hard', 0)
    }

    acceptance_rates = {
        'all': _acceptance_rate(accepted_submission_attempts_by_difficulty.get('All', 0), total_submissions['all']),
        'easy': _acceptance_rate(accepted_submission_attempts_by_difficulty.get('Easy', 0), total_submissions['easy']),
        'medium': _acceptance_rate(accepted_submission_attempts_by_difficulty.get('Medium', 0), total_submissions['medium']),
        'hard': _acceptance_rate(accepted_submission_attempts_by_difficulty.get('Hard', 0), total_submissions['hard'])
    }

    return {
        'success': True,
        'username': matched_user.get('username', username),
        'ranking': (matched_user.get('profile') or {}).get('ranking'),
        'solved': solved,
        'totalSubmissions': total_submissions,
        'acceptanceRates': acceptance_rates
    }

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    login_type = data.get('type')
    email = data.get('email')
    password = data.get('password')
    
    if login_type == 'student':
        student = get_student_by_email(email)
        if student:
            session['user'] = student
            session['is_staff'] = False
            return jsonify({'success': True, 'user': student, 'is_staff': False})
        return jsonify({'success': False, 'message': 'Student email not found'})
    else:
        if email == staff_credentials['email'] and password == staff_credentials['password']:
            session['is_staff'] = True
            return jsonify({'success': True, 'is_staff': True})
        return jsonify({'success': False, 'message': 'Invalid staff credentials'})

@app.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({'success': True})

@app.route('/auth/google')
def google_login():
    """Initiate Google OAuth flow"""
    if not GOOGLE_OAUTH_ENABLED:
        return jsonify({'success': False, 'message': 'Google OAuth not configured'}), 400
    
    try:
        flow = Flow.from_client_config(
            client_secrets,
            scopes=['openid', 'https://www.googleapis.com/auth/userinfo.email', 
                    'https://www.googleapis.com/auth/userinfo.profile'],
            redirect_uri=url_for('callback', _external=True)
        )
        authorization_url, state = flow.authorization_url(
            access_type='offline',
            include_granted_scopes='true'
        )
        session['state'] = state
        return jsonify({'auth_url': authorization_url})
    except Exception as e:
        return jsonify({'success': False, 'message': f'OAuth error: {str(e)}'}), 400

@app.route('/callback')
def callback():
    """Handle Google OAuth callback"""
    if not GOOGLE_OAUTH_ENABLED:
        return redirect('/?login=error&msg=Google OAuth not configured')
    
    try:
        state = session.get('state')
        flow = Flow.from_client_config(
            client_secrets,
            scopes=['openid', 'https://www.googleapis.com/auth/userinfo.email',
                    'https://www.googleapis.com/auth/userinfo.profile'],
            state=state,
            redirect_uri=url_for('callback', _external=True)
        )
        
        # Fetch token using the authorization response
        flow.fetch_token(authorization_response=request.url)
        
        # Get user info from Google
        credentials = flow.credentials
        id_info = id_token.verify_oauth2_token(
            credentials.id_token,
            google_requests.Request(),
            GOOGLE_CLIENT_ID
        )
        
        email = id_info.get('email')
        name = id_info.get('name')
        picture = id_info.get('picture')
        
        # Check if student exists with this email
        student = get_student_by_email(email)
        
        if student:
            # Update student with Google profile info
            student['google_name'] = name
            student['google_picture'] = picture
            session['user'] = student
            session['is_staff'] = False
            session['google_authenticated'] = True
            return redirect('/?login=success')
        else:
            # Check if it's a college email domain
            if email.endswith('@college.edu'):
                return redirect('/?login=error&msg=Student not registered. Please contact admin.')
            else:
                return redirect('/?login=error&msg=Please use your college email.')
                
    except Exception as e:
        print(f"OAuth error: {str(e)}")
        return redirect('/?login=error&msg=Authentication failed. Please try again.')

@app.route('/api/check-session')
def check_session():
    """Check if user is logged in"""
    if 'user' in session:
        return jsonify({
            'logged_in': True,
            'user': session['user'],
            'is_staff': session.get('is_staff', False),
            'google_auth': session.get('google_authenticated', False)
        })
    return jsonify({'logged_in': False})

@app.route('/api/students')
def get_students():
    return jsonify(get_students_data())


@app.route('/api/leetcode/<string:username>')
def get_leetcode_profile(username):
    data = fetch_leetcode_profile(username)
    status_code = 200 if data.get('success') else 404
    return jsonify(data), status_code


@app.route('/api/leetcode/students')
def get_leetcode_profiles_for_students():
    students_data = get_students_data()
    usernames = []
    for student in students_data:
        username = student.get('leetcodeUsername')
        if username:
            usernames.append({
                'studentId': student['id'],
                'studentName': student['name'],
                'username': username
            })

    results = []
    for index, entry in enumerate(usernames):
        if index > 0:
            time.sleep(LEETCODE_BATCH_DELAY_SECONDS)

        profile = fetch_leetcode_profile(entry['username'])
        results.append({
            'studentId': entry['studentId'],
            'studentName': entry['studentName'],
            'leetcodeUsername': entry['username'],
            'profile': profile
        })

    return jsonify({
        'success': True,
        'count': len(results),
        'results': results
    })

@app.route('/api/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    data = request.json
    student = update_student_data(student_id, data)
    if student:
        return jsonify({'success': True, 'student': student})
    return jsonify({'success': False, 'message': 'Student not found'})

@app.route('/api/recently-placed')
def get_recently_placed():
    return jsonify(recently_placed)

@app.route('/api/upcoming-companies')
def get_upcoming_companies():
    return jsonify(upcoming_companies)

@app.route('/api/placed-students')
def get_placed_students():
    return jsonify(placed_students)

@app.route('/api/analytics/year/<int:year>')
def get_year_analytics(year):
    students_data = get_students_data()
    year_students = [s for s in students_data if s['year'] == year]
    criteria = ['Placed', 'Interested', 'Uninterested', 'Higher Studies']
    counts = {c: sum(1 for s in year_students if s['interest'] == c) for c in criteria}
    return jsonify({'year': year, 'data': counts})


def scheduled_fetch_leetcode_stats():
    """Fetch LeetCode stats for all students and update Supabase every day at 10 PM"""
    try:
        print(f"[{datetime.now()}] Starting scheduled LeetCode stats fetch...")
        students_data = get_students_data()
        
        updated_count = 0
        for student in students_data:
            username = student.get('leetcodeUsername')
            if not username:
                continue
            
            try:
                profile = fetch_leetcode_profile(username)
                if profile.get('success') and profile.get('solved'):
                    # Update student with coding problems solved
                    update_student_data(student['id'], {
                        'codingProblems': profile['solved']['all']
                    })
                    updated_count += 1
                    print(f"  ✓ Updated {student['name']}: {profile['solved']['all']} problems")
                    # Rate limiting delay
                    time.sleep(LEETCODE_BATCH_DELAY_SECONDS)
            except Exception as e:
                print(f"  ✗ Failed to update {student.get('name', 'Unknown')}: {str(e)}")
        
        print(f"[{datetime.now()}] Scheduled LeetCode fetch completed. Updated {updated_count} students.")
    except Exception as e:
        print(f"[{datetime.now()}] Scheduled LeetCode fetch failed: {str(e)}")


def init_scheduler():
    """Initialize the background scheduler"""
    scheduler = BackgroundScheduler()
    # Schedule the job to run every day at 10 PM (22:00)
    scheduler.add_job(func=scheduled_fetch_leetcode_stats, trigger="cron", hour=22, minute=0)
    scheduler.start()
    print("✓ Scheduler initialized: LeetCode stats will be fetched daily at 10 PM")


if __name__ == '__main__':
    # Use Railway's PORT environment variable, default to 5000 for local dev
    port = int(os.environ.get('PORT', 5000))
    # Initialize scheduler for daily LeetCode stats fetch
    init_scheduler()
    # Bind to 0.0.0.0 to allow external connections (required for Railway)
    app.run(host='0.0.0.0', port=port, debug=False)
