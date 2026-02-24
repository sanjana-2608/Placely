import os
os.environ['FLASK_APP'] = 'app'
os.environ['FLASK_ENV'] = 'development'

from app import app
with app.app_context():
    from app import get_students_data
    students = get_students_data()
    
    print("\n===== STUDENTS WITH LEETCODE USERNAMES =====\n")
    count_with_username = 0
    for student in students:
        username = student.get('leetcodeUsername')
        if username:
            count_with_username += 1
            cached = all([
                student.get('leetcodeSolvedAll'),
                student.get('leetcodeSolvedEasy'),
                student.get('leetcodeSolvedMedium'),
                student.get('leetcodeSolvedHard'),
            ])
            status = "[CACHED]" if cached else "[PENDING]"
            print(f"{status} | {student['name']:30} | {username:20}")
    
    if count_with_username == 0:
        print("  [NO USERNAMES] No students have LeetCode usernames configured")
    else:
        print(f"\n  Total with usernames: {count_with_username}")
