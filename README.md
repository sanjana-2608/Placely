# Placely - College Placement Cell Management System

A web-based platform for managing college placement activities, built with Flask (Python) and modern web technologies.

## Features

- **Student Portal**: Track placement progress, coding problems, internships, and certifications
- **Staff Dashboard**: Manage student data, view analytics, and track placements
- **Analytics**: Visual charts showing placement statistics by year and interest
- **Reports**: Comprehensive placement reports with detailed student information
- **Company Management**: Track upcoming companies and placement opportunities
- **LeetCode Integration**: Fetch solved counts, acceptance rates, and ranking via LeetCode GraphQL
- **Supabase Database (Phase 1)**: Students data can now be loaded/updated from Supabase
- **Dark/Light Mode**: Toggle between dark and light themes

## Tech Stack

- **Backend**: Python Flask
- **Frontend**: HTML5, CSS3, JavaScript
- **Charts**: Chart.js
- **Styling**: Custom CSS with gradient themes

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sanjana-2608/Placely.git
cd Placely
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
- Windows: `venv\Scripts\activate`
- Mac/Linux: `source venv/bin/activate`

4. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Application

1. Start the Flask server:
```bash
python app.py
```

2. Open your browser and navigate to:
```
http://localhost:5000
```

## Supabase Setup

For database integration setup, see:

- [SUPABASE_SETUP.md](SUPABASE_SETUP.md)

## Project Structure

```
Placely/
├── app.py                 # Flask application with routes and data
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # Main HTML template
├── client/
│   ├── css/
│   │   └── main.css      # Styling
│   ├── js/
│   │   └── main.js       # Client-side JavaScript
│   └── image_*.png       # Logo and assets
└── README.md
```

## Features Overview

### For Students
- View personal dashboard with rankings
- Track coding problems, internships, certifications
- See upcoming company visits
- View recently placed students

### For Staff
- Manage all student data
- View comprehensive analytics
- Generate placement reports
- Sort and filter student information
- Edit student profiles

### Analytics
- Year-wise placement distribution (3rd & 4th year)
- Placement status breakdown (Placements, Higher Studies, Entrepreneurship)
- Interactive pie charts
- Sorting options by multiple criteria

### LeetCode Stats API
- `GET /api/leetcode/<username>`: Returns cached LeetCode stats from database for a specific username
- `GET /api/leetcode/students`: Returns cached LeetCode stats for all students with configured usernames
- `POST /api/sync-leetcode`: Updates DB from LeetCode GraphQL (at most once per day per student)

## Color Themes

- **Dark Mode**: Gold (#FEC524) and Black theme
- **Light Mode**: Purple (#9c27b0) and Lavender theme

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

MIT License - feel free to use this project for educational purposes.

## Author

Pavithran (sanjana-2608)
