---
title: Placely Technology Stack & Architecture
paginate: true
---

# Placely
## Technology Stack & How Everything Connects

Prepared for project presentation

---

# 1) Project Overview

Placely is a web-based placement management platform with:

- Student tracking (coding, internships, certifications)
- Staff analytics and reporting
- OAuth-based identity integrations
- LeetCode stats sync pipeline
- Supabase-backed persistence (with local fallback)

---

# 2) Core Technology Stack

## Backend
- Python 3
- Flask
- Werkzeug ProxyFix
- Gunicorn

## Frontend
- HTML (Jinja template rendering)
- CSS3 (custom styling)
- Vanilla JavaScript
- Chart.js (analytics visualization)

---

# 3) Data & Infra Stack

## Data
- Supabase Python client
- Supabase Postgres (students table)

## Integrations
- Google OAuth (`google-auth`, `google-auth-oauthlib`)
- LinkedIn OAuth / OpenID Connect
- LeetCode GraphQL API
- `requests` for outbound API calls

## Runtime Utilities
- APScheduler (daily sync jobs)
- python-dotenv (environment config loading)
- Railway + Nixpacks (deployment)

---

# 4) Backend Architecture (Flask)

Main server responsibilities:

- Serves main page (`/`) and static assets
- Exposes JSON APIs (`/api/students`, `/api/analytics`, `/api/leetcode/...`)
- Handles login/session lifecycle
- Runs OAuth callback handlers (Google + LinkedIn)
- Coordinates DB reads/writes via Supabase
- Executes scheduled LeetCode sync at 10 PM

---

# 5) Frontend Architecture

## Rendering + Interaction
- `templates/index.html`: shell for app
- `client/js/main.js`: section rendering, fetch calls, Chart.js setup
- `client/css/main.css`: theme, layout, chart visuals

## Runtime behavior
- Browser loads page from Flask
- JS calls backend APIs
- Responses are rendered into cards/tables/charts

---

# 6) Database Flow (Supabase)

Supabase is used for the `students` data path:

- Read list for dashboards and analytics
- Read single student for login matching
- Update student profile/metrics
- Store LinkedIn profile fields
- Store cached LeetCode stats

Fallback mode:

- If Supabase is unavailable, app uses in-memory demo data

---

# 7) Authentication Flow (Google + LinkedIn)

## Google OAuth
1. Frontend calls `/auth/google`
2. Flask creates OAuth URL and redirects
3. Google callback hits `/callback`
4. Flask validates token, checks user, sets session

## LinkedIn OAuth
1. Frontend calls `/api/connect-linkedin`
2. Flask generates state + auth URL
3. LinkedIn callback hits `/linkedin-callback`
4. Flask exchanges token, fetches profile, updates DB + session

---

# 8) Analytics & Chart Layer

Chart.js is used for:

- Doughnut charts (distribution analytics)
- Bar/radar charts (performance insights)
- Interactive tooltips and dynamic datasets

Data source chain:

- UI action -> JS fetch -> Flask API -> Supabase/derived aggregates -> Chart.js render

---

# 9) LeetCode Sync Pipeline

Two modes:

- On-demand sync endpoint: `/api/sync-leetcode`
- Scheduled daily sync via APScheduler (10 PM)

Pipeline steps:

1. Fetch student LeetCode usernames
2. Call LeetCode GraphQL endpoint
3. Parse solved counts, ranking, acceptance rates
4. Save normalized fields in student records
5. UI consumes cached values from backend APIs

---

# 10) Deployment Architecture (Railway)

Deployment pieces:

- Build: Nixpacks
- Runtime: Gunicorn (`app:app`)
- Reverse proxy: Railway edge
- Proxy handling: Flask + ProxyFix

Why ProxyFix matters:

- Preserves correct scheme/host behind proxy
- Required for secure redirects and cookie behavior in OAuth flows

---

# 11) End-to-End Connection Map

## Full request lifecycle

1. User opens app URL
2. Flask serves HTML + static CSS/JS
3. JS requests API data from Flask
4. Flask fetches from Supabase (or fallback memory)
5. JSON returned to browser
6. UI renders tables/cards/charts
7. OAuth/LeetCode integrations update DB
8. Updated data appears in analytics and profile views

---

# 12) Environment & Secrets

Configured via `.env`, Railway variables, and/or `config.py`:

- `SECRET_KEY`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` (or accepted fallback keys)
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
- `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET`, `LINKEDIN_REDIRECT_URI`
- `RAILWAY_PUBLIC_DOMAIN`

---

# 13) Why This Stack Works Well

- Flask keeps backend simple and fast to iterate
- Supabase gives managed Postgres with easy Python integration
- Vanilla JS + Chart.js keeps frontend lightweight
- OAuth integrations improve identity and profile enrichment
- APScheduler enables automated data freshness
- Railway + Gunicorn provides straightforward cloud deployment

---

# 14) Summary

Placely is connected as a layered system:

- **Presentation**: HTML/CSS/JS + Chart.js
- **Application**: Flask routes, business logic, sessions
- **Data**: Supabase/Postgres with fallback mode
- **Integrations**: Google, LinkedIn, LeetCode
- **Operations**: Scheduler + Railway deployment

This design supports both demo-friendly local runs and production-ready cloud operation.
