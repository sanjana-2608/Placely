import os

# Google OAuth Configuration
# To get these credentials:
# 1. Go to https://console.cloud.google.com/
# 2. Create a new project or select existing one
# 3. Enable Google+ API
# 4. Go to Credentials > Create Credentials > OAuth 2.0 Client ID
# 5. Set Authorized redirect URIs to: http://localhost:5000/callback
# 6. Copy Client ID and Client Secret below

GOOGLE_CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID', 'YOUR_GOOGLE_CLIENT_ID_HERE')
GOOGLE_CLIENT_SECRET = os.environ.get('GOOGLE_CLIENT_SECRET', 'YOUR_GOOGLE_CLIENT_SECRET_HERE')

# LinkedIn OAuth Configuration
# To get these credentials:
# 1. Go to https://www.linkedin.com/developers/apps
# 2. Create a new app (require LinkedIn Page)
# 3. Go to Auth tab, copy Client ID and Client Secret
# 4. Add Authorized redirect URIs: http://localhost:5000/callback
# 5. Request access to "Sign In with LinkedIn" product
# 6. Copy Client ID and Client Secret below

LINKEDIN_CLIENT_ID = os.environ.get('LINKEDIN_CLIENT_ID', 'YOUR_LINKEDIN_CLIENT_ID_HERE')
LINKEDIN_CLIENT_SECRET = os.environ.get('LINKEDIN_CLIENT_SECRET', 'YOUR_LINKEDIN_CLIENT_SECRET_HERE')

