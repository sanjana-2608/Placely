import os
os.environ['FLASK_APP'] = 'app'
os.environ['FLASK_ENV'] = 'development'

from app import app, get_students_data, update_student_data, fetch_leetcode_profile, supabase
from datetime import datetime

with app.app_context():
    # Get all students
    students = get_students_data()
    
    # Find the student with ID 722825243141
    target_student = next((s for s in students if str(s.get('id')) == '722825243141'), None)
    
    if not target_student:
        print("[ERROR] Student with ID 722825243141 not found")
        exit(1)
    
    username = target_student.get('leetcodeUsername')
    print(f"\n[FETCH] Student: {target_student['name']}")
    print(f"[FETCH] Username: {username}")
    print(f"[FETCH] ID: {target_student.get('id')}")
    
    if not username:
        print("[ERROR] No LeetCode username set for this student")
        exit(1)
    
    # Fetch LeetCode profile
    print(f"\n[FETCHING] Calling LeetCode API for '{username}'...\n")
    profile = fetch_leetcode_profile(username)
    
    print(f"\n[RESPONSE]:")
    print(f"  Success: {profile.get('success')}")
    print(f"  Message: {profile.get('message')}")
    
    if profile.get('success'):
        print(f"\n[DATA]")
        print(f"  Ranking: {profile.get('ranking')}")
        print(f"  Solved:")
        print(f"    All: {profile['solved']['all']}")
        print(f"    Easy: {profile['solved']['easy']}")
        print(f"    Medium: {profile['solved']['medium']}")
        print(f"    Hard: {profile['solved']['hard']}")
        print(f"  Acceptance Rates:")
        print(f"    All: {profile['acceptanceRates']['all']}%")
        print(f"    Easy: {profile['acceptanceRates']['easy']}%")
        print(f"    Medium: {profile['acceptanceRates']['medium']}%")
        print(f"    Hard: {profile['acceptanceRates']['hard']}%")
        
        # Update database
        print(f"\n[UPDATING] Storing in database...")
        update_payload = {
            'leetcodeRanking': profile.get('ranking'),
            'leetcodeSolvedAll': profile['solved'].get('all', 0),
            'leetcodeSolvedEasy': profile['solved'].get('easy', 0),
            'leetcodeSolvedMedium': profile['solved'].get('medium', 0),
            'leetcodeSolvedHard': profile['solved'].get('hard', 0),
            'leetcodeAcceptanceAll': profile['acceptanceRates'].get('all', 0),
            'leetcodeAcceptanceEasy': profile['acceptanceRates'].get('easy', 0),
            'leetcodeAcceptanceMedium': profile['acceptanceRates'].get('medium', 0),
            'leetcodeAcceptanceHard': profile['acceptanceRates'].get('hard', 0),
            'leetcodeLastSyncedAt': datetime.utcnow().isoformat()
        }
        
        result = update_student_data(target_student['id'], update_payload)
        if result:
            print(f"[SUCCESS] Data saved to database!")
        else:
            print(f"[FAILED] Could not update database")
    else:
        print(f"\n[FAILED] {profile.get('message')}")
        exit(1)

print("\n[DONE]\n")
