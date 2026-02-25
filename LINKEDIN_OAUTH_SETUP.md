# LinkedIn OAuth Setup Instructions

## Step 1: Create LinkedIn App

1. Go to [LinkedIn Developers Console](https://www.linkedin.com/developers/apps)
2. Click on "Create app" or "My apps"
3. Fill in the form:
   - **App name:** Placely
   - **LinkedIn Page:** Select or create a page for your app
   - **App logo:** Upload a logo
   - **Legal agreement:** Accept the terms and click "Create app"

## Step 2: Get Your Credentials

1. Once the app is created, go to the "Auth" tab
2. In the "Application credentials" section, you'll find:
   - **Client ID**
   - **Client secret**
3. Copy these values and save them

## Step 3: Configure Authorized Redirect URLs

1. In the "Auth" tab, scroll to "Authorized redirect URLs for your app"
2. Click "Add redirect URL" and add:
   - `http://localhost:5000/linkedin-callback` (for local development)
   - `https://<your-railway-domain>/linkedin-callback` (for production)
3. Click "Update"

## Step 4: Request Access to Sign In with LinkedIn

1. Go to the "Products" tab
2. Find "Sign In with LinkedIn" and click "Request access"
3. You may need to wait for approval (usually a few minutes for development)

## Step 5: Configure Credentials in Your App

1. Open `config.py` in your project
2. Add LinkedIn credentials:
   ```python
   LINKEDIN_CLIENT_ID = 'your-actual-client-id-here'
   LINKEDIN_CLIENT_SECRET = 'your-actual-client-secret-here'
   ```

## Step 6: Set Environment Variables (for Production)

If deploying to Railway or similar platform:
```
LINKEDIN_CLIENT_ID=your-client-id
LINKEDIN_CLIENT_SECRET=your-client-secret
LINKEDIN_REDIRECT_URI=https://<your-railway-domain>/linkedin-callback
```

For local development, you can set:
```
LINKEDIN_REDIRECT_URI=http://localhost:5000/linkedin-callback
```

## API Scopes Used

- `openid` - OpenID Connect
- `profile` - Access to profile data (name, photo, URL)
- `email` - Access to email address

## Data Retrieved from LinkedIn

- Name (from profile)
- Profile photo URL
- LinkedIn profile URL
- Email address

## Notes

- LinkedIn requires HTTPS in production (not required for localhost)
- Access token expires after 60 minutes
- We store the profile data in database on first login and update on re-login
- No refresh token is stored; student must re-authenticate to update LinkedIn data
