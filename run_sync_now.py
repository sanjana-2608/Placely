import os
os.environ['FLASK_APP'] = 'app'
os.environ['FLASK_ENV'] = 'development'

from app import app, scheduled_fetch_leetcode_stats
with app.app_context():
    print("\n[SYNC STARTING]...\n")
    scheduled_fetch_leetcode_stats()
    print("\n[SYNC COMPLETE]\n")
