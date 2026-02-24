// Runtime data
let students = [];

const recentlyPlaced = [
  { name: "Priya Sharma", package: 18.5, company: "Google", position: "Software Engineer", graduationYear: 2024, date: "2026-01-25" },
  { name: "Aarav Kumar", package: 16.8, company: "Microsoft", position: "SDE-2", graduationYear: 2024, date: "2026-01-20" },
  { name: "Sneha Reddy", package: 15.2, company: "Amazon", position: "Associate Engineer", graduationYear: 2025, date: "2026-01-18" }
];

const upcomingCompanies = [
  { name: "Microsoft", visitDate: "Feb 5, 2026", position: "Software Engineer", salary: "20-24 LPA", ctc: "22 LPA" },
  { name: "ServiceNow", visitDate: "Feb 7, 2026", position: "Developer", salary: "18-22 LPA", ctc: "20 LPA" },
  { name: "Autodesk", visitDate: "Feb 9, 2026", position: "Software Developer", salary: "19-23 LPA", ctc: "21 LPA" },
  { name: "Amazon", visitDate: "Feb 11, 2026", position: "SDE I", salary: "17-21 LPA", ctc: "19 LPA" },
  { name: "Commvault Cloud", visitDate: "Feb 13, 2026", position: "Engineer", salary: "16-20 LPA", ctc: "18 LPA" },
  { name: "JustPay", visitDate: "Feb 15, 2026", position: "Backend Engineer", salary: "12-16 LPA", ctc: "14 LPA" },
  { name: "Wells Fargo", visitDate: "Feb 17, 2026", position: "Technology Analyst", salary: "15-18 LPA", ctc: "16.5 LPA" },
  { name: "Global Knowledge", visitDate: "Feb 19, 2026", position: "Associate", salary: "8-10 LPA", ctc: "9 LPA" },
  { name: "ThoughtWorks", visitDate: "Feb 21, 2026", position: "Developer", salary: "14-18 LPA", ctc: "16 LPA" },
  { name: "Akaike", visitDate: "Feb 23, 2026", position: "Software Engineer", salary: "12-15 LPA", ctc: "13.5 LPA" },
  { name: "Informatica", visitDate: "Feb 25, 2026", position: "Data Engineer", salary: "16-20 LPA", ctc: "18 LPA" },
  { name: "ShopUp", visitDate: "Feb 27, 2026", position: "Full Stack Developer", salary: "10-13 LPA", ctc: "11.5 LPA" },
  { name: "Cyware", visitDate: "Mar 1, 2026", position: "Security Engineer", salary: "15-19 LPA", ctc: "17 LPA" },
  { name: "Dell Technologies", visitDate: "Mar 3, 2026", position: "Senior Engineer", salary: "18-22 LPA", ctc: "20 LPA" },
  { name: "Quinbay", visitDate: "Mar 5, 2026", position: "Backend Developer", salary: "11-14 LPA", ctc: "12.5 LPA" },
  { name: "Sahaj", visitDate: "Mar 7, 2026", position: "Engineer", salary: "9-11 LPA", ctc: "10 LPA" },
  { name: "Casa Retail AI", visitDate: "Mar 9, 2026", position: "ML Engineer", salary: "13-16 LPA", ctc: "14.5 LPA" },
  { name: "Cooper", visitDate: "Mar 11, 2026", position: "Developer", salary: "10-12 LPA", ctc: "11 LPA" },
  { name: "nference", visitDate: "Mar 13, 2026", position: "AI Engineer", salary: "14-18 LPA", ctc: "16 LPA" },
  { name: "GUVI", visitDate: "Mar 15, 2026", position: "Content Engineer", salary: "7-9 LPA", ctc: "8 LPA" },
  { name: "Digital Back Office", visitDate: "Mar 17, 2026", position: "Process Associate", salary: "4-5 LPA", ctc: "4.5 LPA" },
  { name: "Light & Wonder", visitDate: "Mar 19, 2026", position: "Software Engineer", salary: "15-19 LPA", ctc: "17 LPA" },
  { name: "Presidio", visitDate: "Mar 21, 2026", position: "Systems Engineer", salary: "11-14 LPA", ctc: "12.5 LPA" },
  { name: "1CloudHub", visitDate: "Mar 23, 2026", position: "Cloud Engineer", salary: "13-17 LPA", ctc: "15 LPA" },
  { name: "FundsIndia", visitDate: "Mar 25, 2026", position: "Full Stack Developer", salary: "11-15 LPA", ctc: "13 LPA" },
  { name: "Persistent", visitDate: "Mar 27, 2026", position: "Software Developer", salary: "12-16 LPA", ctc: "14 LPA" },
  { name: "Mahindra Rise", visitDate: "Mar 29, 2026", position: "Engineer", salary: "10-13 LPA", ctc: "11.5 LPA" },
  { name: "Eunimart", visitDate: "Mar 31, 2026", position: "Backend Developer", salary: "10-12 LPA", ctc: "11 LPA" },
  { name: "TeleSoft", visitDate: "Apr 2, 2026", position: "Software Engineer", salary: "9-11 LPA", ctc: "10 LPA" },
  { name: "LINARC", visitDate: "Apr 4, 2026", position: "Developer", salary: "12-15 LPA", ctc: "13.5 LPA" }
];

const companyLogoDomains = {
  "Microsoft": "microsoft.com",
  "ServiceNow": "servicenow.com",
  "Autodesk": "autodesk.com",
  "Amazon": "amazon.com",
  "Commvault Cloud": "commvault.com",
  "JustPay": "justpay.to",
  "Wells Fargo": "wellsfargo.com",
  "Global Knowledge": "globalknowledge.com",
  "ThoughtWorks": "thoughtworks.com",
  "Akaike": "akaike.ai",
  "Informatica": "informatica.com",
  "ShopUp": "shopup.com",
  "Cyware": "cyware.com",
  "Dell Technologies": "dell.com",
  "Quinbay": "quinbay.com",
  "Sahaj": "sahaj.ai",
  "Casa Retail AI": "casa.ai",
  "Cooper": "cooper.com",
  "nference": "nference.ai",
  "GUVI": "guvi.in",
  "Digital Back Office": "digitalbackoffice.com",
  "Light & Wonder": "lightandwonder.com",
  "Presidio": "presidio.com",
  "1CloudHub": "1cloudhub.com",
  "FundsIndia": "fundsindia.com",
  "Persistent": "persistent.com",
  "Mahindra Rise": "mahindra.com",
  "Eunimart": "eunimart.com",
  "TeleSoft": "telesoft.com",
  "LINARC": "linarc.com"
};

const notifications = [ { msg: 'Welcome to Placely!', date: '2026-01-27' } ];

let currentUser = null;
let isStaff = false;
let currentLoginTab = 'student';

const sectionIds = ['login-section', 'home-section', 'dashboard-section', 'reports-section', 'profile-section', 'notifications-section', 'leaderboard-section'];

// Google Login Function
async function loginWithGoogle() {
  try {
    const response = await fetch('/auth/google');
    const data = await response.json();
    if (data.auth_url) {
      window.location.href = data.auth_url;
    }
  } catch (error) {
    console.error('Google login error:', error);
    alert('Failed to initiate Google login. Please try again.');
  }
}

async function connectLinkedIn() {
  try {
    const response = await fetch('/api/connect-linkedin');
    const data = await response.json();
    if (data.auth_url) {
      window.location.href = data.auth_url;
    } else {
      alert(data.message || 'Failed to initiate LinkedIn connection. Please try again.');
    }
  } catch (error) {
    console.error('LinkedIn connect error:', error);
    alert('Failed to connect LinkedIn. Please try again.');
  }
}

// Check for existing session on page load
async function checkSession() {
  try {
    const response = await fetch('/api/check-session');
    const data = await response.json();
    if (data.logged_in) {
      currentUser = data.user;
      isStaff = data.is_staff;
      await refreshStudentsData();
      initializeApp();
      showSection('home-section');
      renderHome();
    }
  } catch (error) {
    console.error('Session check error:', error);
  }
}

async function refreshStudentsData() {
  try {
    const response = await fetch('/api/students');
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    if (Array.isArray(data)) {
      students = data;
    }
  } catch (error) {
    console.error('Students fetch error:', error);
  }
}

// Check URL parameters for login status
function checkLoginStatus() {
  const urlParams = new URLSearchParams(window.location.search);
  const loginStatus = urlParams.get('login');
  const msg = urlParams.get('msg');
  
  if (loginStatus === 'success') {
    checkSession(); // Reload user session after successful Google login
    // Clean URL
    window.history.replaceState({}, document.title, '/');
  } else if (loginStatus === 'error') {
    alert(msg || 'Login failed. Please try again.');
    // Clean URL
    window.history.replaceState({}, document.title, '/');
  }
}

function showSection(sectionId) {
  sectionIds.forEach(id => { const el = document.getElementById(id); if (el) el.classList.remove('active'); });
  const el = document.getElementById(sectionId);
  if (el) el.classList.add('active');
  if (sectionId === 'home-section') renderHome();
  if (sectionId === 'dashboard-section') renderDashboard();
  if (sectionId === 'reports-section') renderReports();
  if (sectionId === 'profile-section') renderProfile();
  if (sectionId === 'notifications-section') renderNotifications();
  if (sectionId === 'leaderboard-section') renderLeaderboard();
}

function switchLoginTab(tab, triggerElement) {
  currentLoginTab = tab;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
  if (triggerElement) {
    triggerElement.classList.add('active');
  }
  document.getElementById(tab + '-login').classList.add('active');
}

async function loginUser(e) {
  e.preventDefault();
  const loginType = currentLoginTab === 'student' ? 'student' : 'staff';

  const email = document.getElementById(loginType === 'student' ? 'student-email' : 'staff-email').value.trim();
  const password = document.getElementById(loginType === 'student' ? 'student-password' : 'staff-password').value.trim();

  if (!email || !password) {
    alert('Please enter email and password.');
    return;
  }

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: loginType, email, password })
    });

    const data = await response.json();
    if (!response.ok || !data.success) {
      alert(data.message || 'Login failed');
      return;
    }

    isStaff = !!data.is_staff;
    currentUser = isStaff ? null : data.user;
    await refreshStudentsData();
    initializeApp();
    showSection('dashboard-section');
    renderDashboard();
  } catch (error) {
    console.error('Login error:', error);
    alert('Unable to login right now. Please try again.');
  }
}

function initializeApp() {
  const loginSection = document.getElementById('login-section');
  const navbar = document.getElementById('navbar');
  if (loginSection) loginSection.style.display = 'none';
  if (navbar) navbar.style.display = 'flex';
  renderSortButtons();
}

function logout() {
  fetch('/logout', { method: 'POST' }).catch(() => null);
  currentUser = null;
  isStaff = false;
  const navbar = document.getElementById('navbar');
  const loginSection = document.getElementById('login-section');
  if (navbar) navbar.style.display = 'none';
  if (loginSection) loginSection.style.display = 'block';

  const studentEmail = document.getElementById('student-email');
  const studentPassword = document.getElementById('student-password');
  const staffEmail = document.getElementById('staff-email');
  const staffPassword = document.getElementById('staff-password');
  if (studentEmail) studentEmail.value = '';
  if (studentPassword) studentPassword.value = '';
  if (staffEmail) staffEmail.value = '';
  if (staffPassword) staffPassword.value = '';

  sectionIds.forEach(id => { const el = document.getElementById(id); if (el) el.classList.remove('active'); });
  if (loginSection) {
    loginSection.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const logoutBtn = document.getElementById('logout-btn');
  const darkModeToggle = document.getElementById('darkmode-toggle');

  if (loginForm) {
    loginForm.addEventListener('submit', loginUser);
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) { e.preventDefault(); logout(); });
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function(e) { e.preventDefault(); toggleDarkMode(); });
  }

  if (localStorage.getItem('theme') === 'light') { document.body.classList.add('light-mode'); document.getElementById('darkmode-toggle').textContent = '☀️'; }

  if (!document.getElementById('login-section')) {
    initializeApp();
    showSection('home-section');
  }
  
  // Check for login callback or existing session
  refreshStudentsData();
  checkLoginStatus();
  checkSession();
});

// Dark/Light Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  document.getElementById('darkmode-toggle').textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
}

function renderBanner(container) {
  const topPlaced = recentlyPlaced[0]; // Highest package
  const bannerHtml = `
    <div class="banner-card">
      <div class="banner-content">
        <div class="banner-icon">🎉</div>
        <div class="banner-info">
          <h2 style="margin: 0 0 0.5rem 0;">Recently Placed - Highest Package!</h2>
          <div class="banner-student">
            <h3 style="margin: 0.5rem 0;">${topPlaced.name}</h3>
            <p style="margin: 0.3rem 0; font-size: 1.1rem;"><strong>Package: ₹${topPlaced.package} LPA</strong></p>
            <p style="margin: 0.3rem 0;"><strong>Company:</strong> ${topPlaced.company}</p>
            <p style="margin: 0.3rem 0;"><strong>Position:</strong> ${topPlaced.position}</p>
            <p style="margin: 0.3rem 0; font-size: 0.9rem; color: #999;">Placed on ${topPlaced.date}</p>
          </div>
        </div>
      </div>
    </div>
  `;
  container.innerHTML = bannerHtml;
}

function renderCompaniesList(container) {
  const companiesHtml = `
    <div class="companies-section">
      <h3 style="margin-top: 0;">Companies Coming Soon 📅</h3>
      <div class="companies-scroll">
        ${upcomingCompanies.map(company => `
          <div class="company-card">
            <div class="company-header">
              <h4 style="margin: 0 0 0.5rem 0;">${company.name}</h4>
              <span class="company-date">📍 ${company.visitDate}</span>
            </div>
            <p style="margin: 0.3rem 0;"><strong>Position:</strong> ${company.position}</p>
            <p style="margin: 0.3rem 0;"><strong>Salary Range:</strong> ${company.salary}</p>
            <p style="margin: 0.3rem 0;"><strong>CTC:</strong> ${company.ctc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  container.innerHTML = companiesHtml;
}

function renderHome() {
  const title = document.getElementById('home-title');
  const bannerContainer = document.getElementById('home-banner-container');
  const homeContent = document.getElementById('home-content');
  
  title.textContent = 'Home';
  renderBanner(bannerContainer);
  
  homeContent.innerHTML = `
    <h3 style="margin-top: 2rem; margin-bottom: 1.5rem;">Our Recruiting Partners</h3>
    <div id="companies-grid-container"></div>
  `;
  
  renderCompaniesGrid(document.getElementById('companies-grid-container'));
}

function renderCompaniesGrid(container) {
  const companiesGridHtml = `
    <div class="companies-grid-section">
      <h4 style="text-align: center; margin-bottom: 1.5rem; color: #FEC524;">IT Product Companies (AI, DS, ML, Cloud, Gaming, Cyber-security, Fintech)</h4>
      <div class="companies-grid">
        ${upcomingCompanies.map(company => {
          const logoUrl = getCompanyLogoUrl(company.name);
          const initials = getCompanyInitials(company.name);
          return `
          <div class="company-grid-card">
            <div class="company-logo-wrap">
              <img class="company-logo-img" src="${logoUrl}" alt="${company.name} logo" ${logoUrl ? '' : 'style="display:none;"'} onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="company-logo-placeholder" ${logoUrl ? 'style="display:none;"' : ''}>${initials}</div>
            </div>
            <p style="margin: 0.5rem 0 0.3rem 0; font-weight: bold; text-align: center;">${company.name}</p>
            <p style="margin: 0; font-size: 0.85rem; text-align: center; color: #999;">${company.position}</p>
          </div>
        `;
        }).join('')}
      </div>
    </div>
  `;
  container.innerHTML = companiesGridHtml;
}

function getCompanyLogoUrl(companyName) {
  const domain = companyLogoDomains[companyName];
  return domain ? `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(domain)}` : '';
}

function getCompanyInitials(companyName) {
  const parts = companyName.split(/[\s&-]+/).filter(Boolean);
  return parts.slice(0, 2).map(part => part.charAt(0).toUpperCase()).join('');
}

function getInterestCategory(interest) {
  const normalized = String(interest || '').trim().toLowerCase();
  if (normalized.includes('higher')) return 'Higher Studies';
  if (normalized.includes('entrepreneur')) return 'Entrepreneurship';
  if (normalized.includes('placed') || normalized.includes('placement') || normalized.includes('interested')) return 'Placements';
  return 'Placements';
}

function getInterestStateKey(category) {
  if (category === 'Higher Studies') return 'higher-studies';
  if (category === 'Entrepreneurship') return 'entrepreneurship';
  return 'placements';
}

function getPlacementPriority(interest) {
  const category = getInterestCategory(interest);
  if (category === 'Placements') return 0;
  if (category === 'Higher Studies') return 1;
  if (category === 'Entrepreneurship') return 2;
  return 3;
}

function getStudentPackage(student) {
  const placedRecord = recentlyPlaced.find((entry) => entry.name === student.name);
  return placedRecord ? Number(placedRecord.package || 0) : 0;
}

function getDefaultAnalyticsSortedStudents() {
  return [...students].sort((a, b) => {
    const placementPriorityDiff = getPlacementPriority(a.interest) - getPlacementPriority(b.interest);
    if (placementPriorityDiff !== 0) {
      return placementPriorityDiff;
    }

    const packageDiff = getStudentPackage(b) - getStudentPackage(a);
    if (packageDiff !== 0) {
      return packageDiff;
    }

    const codingDiff = Number(b.codingProblems || 0) - Number(a.codingProblems || 0);
    if (codingDiff !== 0) {
      return codingDiff;
    }

    return Number(b.gradePoints || 0) - Number(a.gradePoints || 0);
  });
}

function renderAnalyticsInsights(container) {
  const totalStudents = students.length;
  const placementsCount = students.filter(s => getInterestCategory(s.interest) === 'Placements').length;
  const higherStudiesCount = students.filter(s => getInterestCategory(s.interest) === 'Higher Studies').length;
  const entrepreneurshipCount = students.filter(s => getInterestCategory(s.interest) === 'Entrepreneurship').length;
  const avgCgpa = totalStudents ? (students.reduce((sum, s) => sum + Number(s.gradePoints || 0), 0) / totalStudents).toFixed(2) : '0.00';
  const avgCoding = totalStudents ? Math.round(students.reduce((sum, s) => sum + Number(s.codingProblems || 0), 0) / totalStudents) : 0;
  const maxPackage = recentlyPlaced.length ? Math.max(...recentlyPlaced.map(s => Number(s.package || 0))).toFixed(1) : '0.0';
  const placementRate = totalStudents ? ((placementsCount / totalStudents) * 100).toFixed(1) : '0.0';

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.9rem; margin-bottom: 1.25rem;">
      <div class="stat-card"><h4 style="margin:0; color:#4F7FFF; font-size:1.8rem;">${totalStudents}</h4><p style="margin:0.4rem 0 0 0; color:#999;">Total Students</p></div>
      <div class="stat-card"><h4 style="margin:0; color:#21C1B6; font-size:1.8rem;">${placementsCount}</h4><p style="margin:0.4rem 0 0 0; color:#999;">Placements Track</p></div>
      <div class="stat-card"><h4 style="margin:0; color:#9B6DFF; font-size:1.8rem;">${placementRate}%</h4><p style="margin:0.4rem 0 0 0; color:#999;">Placement Rate</p></div>
      <div class="stat-card"><h4 style="margin:0; color:#FEC524; font-size:1.8rem;">${higherStudiesCount}</h4><p style="margin:0.4rem 0 0 0; color:#999;">Higher Studies Track</p></div>
      <div class="stat-card"><h4 style="margin:0; color:#C77DFF; font-size:1.8rem;">${entrepreneurshipCount}</h4><p style="margin:0.4rem 0 0 0; color:#999;">Entrepreneurship Track</p></div>
      <div class="stat-card"><h4 style="margin:0; color:#FF6B6B; font-size:1.8rem;">${avgCoding}</h4><p style="margin:0.4rem 0 0 0; color:#999;">Avg Coding Problems</p></div>
      <div class="stat-card"><h4 style="margin:0; color:#FFD54F; font-size:1.8rem;">₹${maxPackage} LPA</h4><p style="margin:0.4rem 0 0 0; color:#999;">Top Package</p></div>
      <div class="stat-card"><h4 style="margin:0; color:#6BCBFF; font-size:1.8rem;">${avgCgpa}</h4><p style="margin:0.4rem 0 0 0; color:#999;">Average CGPA</p></div>
    </div>
  `;
}

function renderDashboard() {
  const dash = document.getElementById('dashboard-content');
  const title = document.getElementById('dashboard-title');
  const chartsContainer = document.getElementById('charts-container');
  const defaultSortedStudents = getDefaultAnalyticsSortedStudents();
  
  if (isStaff) {
    title.textContent = 'Analytics - Staff Dashboard';
    renderStaffAnalytics(chartsContainer);
    dash.innerHTML = `<div id="analytics-insights"></div><h3>Student Directory</h3><div id="staff-table"></div>`;
    renderAnalyticsInsights(document.getElementById('analytics-insights'));
    renderTable(defaultSortedStudents, true);
  } else {
    title.textContent = `Welcome, ${currentUser.name}`;
    renderStudentAnalytics(chartsContainer);
    dash.innerHTML = `<div id="analytics-insights"></div><h3>Your Ranking</h3><div id="student-table"></div>`;
    renderAnalyticsInsights(document.getElementById('analytics-insights'));
    renderTable(defaultSortedStudents, false, currentUser && currentUser.id);
  }
}

function renderStudentAnalytics(container) {
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(3, minmax(0, 1fr))';
  container.style.gap = '1rem';
  container.style.marginBottom = '2rem';

  container.innerHTML = `
    <div class="chart-card">
      <h3 style="text-align: center; margin-top: 0;">Interest Distribution</h3>
      <canvas id="chart-interest" class="chart-canvas"></canvas>
    </div>
    <div class="chart-card">
      <h3 style="text-align: center; margin-top: 0;">Placement Distribution</h3>
      <canvas id="chart-placement" class="chart-canvas"></canvas>
    </div>
    <div class="chart-card">
      <h3 style="text-align: center; margin-top: 0;">Student Distribution</h3>
      <canvas id="chart-student" class="chart-canvas"></canvas>
    </div>
    <div class="chart-card">
      <h3 style="text-align: center; margin-top: 0;">Department Distribution</h3>
      <canvas id="chart-dept" class="chart-canvas"></canvas>
    </div>
    <div class="chart-card">
      <h3 style="text-align: center; margin-top: 0;">Readiness Index</h3>
      <canvas id="chart-readiness" class="chart-canvas"></canvas>
    </div>
    <div class="chart-card">
      <h3 style="text-align: center; margin-top: 0;">Top Performers (Coding)</h3>
      <canvas id="chart-top-coders" class="chart-canvas"></canvas>
    </div>
  `;

  container.querySelectorAll('.chart-card').forEach((card) => {
    card.style.width = '100%';
    card.style.minWidth = '0';
  });
  
  setTimeout(() => {
    const interestCounts = {};
    students.forEach(s => {
      const category = getInterestCategory(s.interest);
      interestCounts[category] = (interestCounts[category] || 0) + 1;
    });
    
    new Chart(document.getElementById('chart-interest'), {
      type: 'pie',
      data: {
        labels: Object.keys(interestCounts),
        datasets: [{
          data: Object.values(interestCounts),
          backgroundColor: ['#4F7FFF', '#21C1B6', '#9B6DFF', '#FF6B6B'],
          borderColor: '#000',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#f5f5f5', font: { size: 12 } },
            position: 'bottom'
          }
        }
      }
    });

    const placementCounts = { Placements: 0, 'Non-Placement Tracks': 0 };
    students.forEach(s => {
      const category = getInterestCategory(s.interest);
      if (category === 'Placements') {
        placementCounts.Placements += 1;
      } else {
        placementCounts['Non-Placement Tracks'] += 1;
      }
    });

    new Chart(document.getElementById('chart-placement'), {
      type: 'pie',
      data: {
        labels: Object.keys(placementCounts),
        datasets: [{
          data: Object.values(placementCounts),
          backgroundColor: ['#21C1B6', '#FF6B6B'],
          borderColor: '#000',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#f5f5f5', font: { size: 12 } },
            position: 'bottom'
          }
        }
      }
    });
    
    const yearCounts = {};
    students.forEach(s => {
      const yr = 'Year ' + s.year;
      yearCounts[yr] = (yearCounts[yr] || 0) + 1;
    });
    
    new Chart(document.getElementById('chart-student'), {
      type: 'pie',
      data: {
        labels: Object.keys(yearCounts),
        datasets: [{
          data: Object.values(yearCounts),
          backgroundColor: ['#4F7FFF', '#21C1B6', '#9B6DFF', '#FF6B6B'],
          borderColor: '#000',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#f5f5f5', font: { size: 12 } },
            position: 'bottom'
          }
        }
      }
    });

    const deptCounts = {};
    students.forEach(s => {
      const dept = s.dept || 'Unknown';
      deptCounts[dept] = (deptCounts[dept] || 0) + 1;
    });

    new Chart(document.getElementById('chart-dept'), {
      type: 'bar',
      data: {
        labels: Object.keys(deptCounts),
        datasets: [{
          label: 'Students',
          data: Object.values(deptCounts),
          backgroundColor: '#4F7FFF',
          borderColor: '#1F4FD1',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { ticks: { color: '#f5f5f5' }, grid: { color: 'rgba(255,255,255,0.08)' } },
          y: { ticks: { color: '#f5f5f5' }, grid: { color: 'rgba(255,255,255,0.08)' }, beginAtZero: true }
        }
      }
    });

    const totalStudents = Math.max(students.length, 1);
    const avgCoding = students.reduce((sum, s) => sum + Number(s.codingProblems || 0), 0) / totalStudents;
    const avgInternships = students.reduce((sum, s) => sum + Number(s.internships || 0), 0) / totalStudents;
    const avgCerts = students.reduce((sum, s) => sum + Number(s.certifications || 0), 0) / totalStudents;
    const avgCgpa = students.reduce((sum, s) => sum + Number(s.gradePoints || 0), 0) / totalStudents;
    const intentRate = (students.filter(s => {
      const val = String(s.interest || '').trim().toLowerCase();
      return val === 'interested' || val === 'placed';
    }).length / totalStudents) * 100;

    new Chart(document.getElementById('chart-readiness'), {
      type: 'radar',
      data: {
        labels: ['Coding', 'Internships', 'Certifications', 'CGPA', 'Placement Intent'],
        datasets: [{
          label: 'Readiness Score',
          data: [
            Math.min((avgCoding / 300) * 100, 100),
            Math.min((avgInternships / 3) * 100, 100),
            Math.min((avgCerts / 5) * 100, 100),
            Math.min((avgCgpa / 10) * 100, 100),
            intentRate
          ],
          backgroundColor: 'rgba(33, 193, 182, 0.2)',
          borderColor: '#21C1B6',
          pointBackgroundColor: '#21C1B6',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#f5f5f5' } }
        },
        scales: {
          r: {
            angleLines: { color: 'rgba(255,255,255,0.15)' },
            grid: { color: 'rgba(255,255,255,0.15)' },
            pointLabels: { color: '#f5f5f5' },
            ticks: { color: '#f5f5f5', backdropColor: 'transparent' },
            min: 0,
            max: 100
          }
        }
      }
    });

    const topCoders = [...students]
      .sort((a, b) => Number(b.codingProblems || 0) - Number(a.codingProblems || 0))
      .slice(0, 5);

    new Chart(document.getElementById('chart-top-coders'), {
      type: 'bar',
      data: {
        labels: topCoders.map(s => s.name),
        datasets: [{
          label: 'Problems Solved',
          data: topCoders.map(s => Number(s.codingProblems || 0)),
          backgroundColor: '#FEC524',
          borderColor: '#E6A800',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { ticks: { color: '#f5f5f5' }, grid: { color: 'rgba(255,255,255,0.08)' } },
          y: { ticks: { color: '#f5f5f5' }, grid: { color: 'rgba(255,255,255,0.08)' }, beginAtZero: true }
        }
      }
    });
  }, 0);
}

function renderStaffAnalytics(container) {
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(2, minmax(0, 1fr))';
  container.style.gap = '1rem';
  container.style.marginBottom = '2rem';

  container.innerHTML = `
    <div class="chart-card">
      <h3 style="text-align: center; margin-top: 0;">Year 3 - Placement Status</h3>
      <canvas id="chart-year3" class="chart-canvas"></canvas>
    </div>
    <div class="chart-card">
      <h3 style="text-align: center; margin-top: 0;">Year 4 - Placement Status</h3>
      <canvas id="chart-year4" class="chart-canvas"></canvas>
    </div>
  `;

  container.querySelectorAll('.chart-card').forEach((card) => {
    card.style.width = '100%';
    card.style.minWidth = '0';
  });
  
  setTimeout(() => {
    const year3Students = students.filter(s => s.year === 3);
    const year4Students = students.filter(s => s.year === 4);
    
    const criteria = ['Placed', 'Interested', 'Uninterested', 'Higher Studies'];
    
    const countStudentsByCriteria = (data) => {
      const counts = {};
      criteria.forEach(c => counts[c] = 0);
      data.forEach(s => {
        const interest = s.interest;
        if (criteria.includes(interest)) {
          counts[interest]++;
        }
      });
      return counts;
    };
    
    const year3Counts = countStudentsByCriteria(year3Students);
    const year4Counts = countStudentsByCriteria(year4Students);
    
    new Chart(document.getElementById('chart-year3'), {
      type: 'pie',
      data: {
        labels: criteria,
        datasets: [{
          data: criteria.map(c => year3Counts[c]),
          backgroundColor: ['#4F7FFF', '#21C1B6', '#FF6B6B', '#9B6DFF'],
          borderColor: '#000',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#f5f5f5', font: { size: 12 } },
            position: 'bottom'
          }
        }
      }
    });
    
    new Chart(document.getElementById('chart-year4'), {
      type: 'pie',
      data: {
        labels: criteria,
        datasets: [{
          data: criteria.map(c => year4Counts[c]),
          backgroundColor: ['#4F7FFF', '#21C1B6', '#FF6B6B', '#9B6DFF'],
          borderColor: '#000',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#f5f5f5', font: { size: 12 } },
            position: 'bottom'
          }
        }
      }
    });
  }, 0);
}

function renderSortButtons() {
  const sortDiv = document.getElementById('sort-buttons');
  const sorts = [
    { key: 'codingProblems', label: 'Coding Problems' },
    { key: 'internships', label: 'Internships' },
    { key: 'certifications', label: 'Certifications' },
    { key: 'gradePoints', label: 'Grade Points' },
    { key: 'year', label: 'Year of Study' },
    { key: 'interest', label: 'Placement Interest' }
  ];
  
  sortDiv.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <label for="sort-dropdown" style="margin: 0; font-weight: bold; color: #FEC524;">Sort by:</label>
      <select id="sort-dropdown" onchange="sortBy(this.value)" style="width: 200px; padding: 0.6rem; background: #0a0a0a; color: #f5f5f5; border: 1px solid #FEC524; border-radius: 6px; cursor: pointer;">
        <option value="">-- Select --</option>
        ${sorts.map(s => `<option value="${s.key}">${s.label}</option>`).join('')}
      </select>
    </div>
  `;
}

function sortBy(key) {
  let sorted;
  if (key === 'interest') {
    sorted = [...students].sort((a, b) => a.interest.localeCompare(b.interest));
  } else {
    sorted = [...students].sort((a, b) => b[key] - a[key]);
  }
  renderTable(sorted, isStaff, currentUser && currentUser.id);
}

function renderTable(data, staffView, highlightId) {
  const tableHtml = `<table><thead><tr>
    <th>Name</th>
    <th>Dept</th>
    <th>Coding Problems</th>
    <th>Internships</th>
    <th>Certifications</th>
    <th>Grade Points</th>
    <th>Year</th>
    <th>Interest</th>
    ${staffView ? '<th>Action</th>' : ''}
  </tr></thead><tbody>
    ${data.map(s => `<tr${highlightId === s.id ? ' style="background:rgba(254, 197, 36, 0.15);border-left:3px solid #FEC524;"' : ''}>
      <td>${s.name}</td>
      <td>${s.dept}</td>
      <td><span id="val-problems-${s.id}">${s.codingProblems}</span>${staffView ? `<input type="number" id="input-problems-${s.id}" value="${s.codingProblems}" style="display:none;">` : ''}</td>
      <td><span id="val-internships-${s.id}">${s.internships}</span>${staffView ? `<input type="number" id="input-internships-${s.id}" value="${s.internships}" style="display:none;">` : ''}</td>
      <td><span id="val-certs-${s.id}">${s.certifications}</span>${staffView ? `<input type="number" id="input-certs-${s.id}" value="${s.certifications}" style="display:none;">` : ''}</td>
      <td><span id="val-grade-${s.id}">${s.gradePoints}</span>${staffView ? `<input type="number" step="0.1" id="input-grade-${s.id}" value="${s.gradePoints}" style="display:none;">` : ''}</td>
      <td><span id="val-year-${s.id}">${s.year}</span>${staffView ? `<input type="number" id="input-year-${s.id}" value="${s.year}" style="display:none;">` : ''}</td>
      <td><span id="val-interest-${s.id}">${s.interest}</span>${staffView ? `<input type="text" id="input-interest-${s.id}" value="${s.interest}" style="display:none;">` : ''}</td>
      ${staffView ? `<td><button class="btn" style="width: 80px; padding: 0.4rem 0.8rem; font-size: 0.85rem;" id="btn-${s.id}" onclick="toggleEdit(${s.id})">Edit</button><button class="btn" style="width: 80px; padding: 0.4rem 0.8rem; font-size: 0.85rem; display: none; background: #E6A800;" id="save-${s.id}" onclick="saveEdit(${s.id})">Save</button></td>` : ''}
    </tr>`).join('')}
  </tbody></table>`;
  if (staffView) {
    document.getElementById('staff-table').innerHTML = tableHtml;
  } else {
    document.getElementById('student-table').innerHTML = tableHtml;
  }
}

function toggleEdit(studentId) {
  const student = students.find(s => s.id === studentId);
  const editBtn = document.getElementById(`btn-${studentId}`);
  const saveBtn = document.getElementById(`save-${studentId}`);
  
  const fields = ['problems', 'internships', 'certs', 'grade', 'year', 'interest'];
  const isEditing = editBtn.style.display === 'none';
  
  fields.forEach(field => {
    const span = document.getElementById(`val-${field}-${studentId}`);
    const input = document.getElementById(`input-${field}-${studentId}`);
    if (!isEditing) {
      // Enter edit mode
      input.value = span.textContent;
      span.style.display = 'none';
      input.style.display = 'inline-block';
      input.style.background = '#0a0a0a';
      input.style.color = '#f5f5f5';
      input.style.border = '1px solid #FEC524';
      input.style.padding = '0.3rem 0.5rem';
      input.style.borderRadius = '4px';
      input.style.width = '70px';
      input.style.marginRight = '0.5rem';

      if (field === 'interest') {
        input.style.display = 'none';
        let select = document.getElementById(`select-interest-${studentId}`);
        if (!select) {
          select = document.createElement('select');
          select.id = `select-interest-${studentId}`;
          select.style.background = '#0a0a0a';
          select.style.color = '#f5f5f5';
          select.style.border = '1px solid #FEC524';
          select.style.padding = '0.3rem';
          select.style.borderRadius = '4px';
          ['Interested', 'Not interested', 'Going for Higher studies', 'Interested in becoming an entrepreneur'].forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt;
            select.appendChild(option);
          });
          span.parentNode.appendChild(select);
        }
        select.value = span.textContent;
        select.style.display = 'inline-block';
      }
      editBtn.style.display = 'none';
      saveBtn.style.display = 'inline-block';
    }
  });
}

function saveEdit(studentId) {
  const student = students.find(s => s.id === studentId);
  const editBtn = document.getElementById(`btn-${studentId}`);
  const saveBtn = document.getElementById(`save-${studentId}`);
  
  const problems = +document.getElementById(`input-problems-${studentId}`).value;
  const internships = +document.getElementById(`input-internships-${studentId}`).value;
  const certs = +document.getElementById(`input-certs-${studentId}`).value;
  const grade = +document.getElementById(`input-grade-${studentId}`).value;
  const year = +document.getElementById(`input-year-${studentId}`).value;
  const interest = document.getElementById(`select-interest-${studentId}`)?.value || document.getElementById(`input-interest-${studentId}`).value;
  
  if (grade < 0 || grade > 10 || year < 1 || year > 4) {
    alert('Invalid values. Grade: 0-10, Year: 1-4');
    return;
  }
  
  student.codingProblems = problems;
  student.internships = internships;
  student.certifications = certs;
  student.gradePoints = grade;
  student.year = year;
  student.interest = interest;
  
  const fields = ['problems', 'internships', 'certs', 'grade', 'year', 'interest'];
  fields.forEach(field => {
    const span = document.getElementById(`val-${field}-${studentId}`);
    const input = document.getElementById(`input-${field}-${studentId}`);
    const select = document.getElementById(`select-interest-${studentId}`);
    
    if (field === 'interest') {
      span.textContent = interest;
      if (select) select.style.display = 'none';
    } else {
      span.textContent = field === 'problems' ? problems : field === 'internships' ? internships : field === 'certs' ? certs : field === 'grade' ? grade : year;
    }
    span.style.display = 'inline';
    if (input) input.style.display = 'none';
  });
  
  editBtn.style.display = 'inline-block';
  saveBtn.style.display = 'none';
  alert('Student info updated successfully!');
}

function renderNotifications() {
  const notificationsContent = document.getElementById('notifications-content');
  const companiesContainer = document.getElementById('companies-container');
  
  renderCompaniesList(companiesContainer);
  
  notificationsContent.innerHTML = `
    <div style="margin-top: 2rem;">
      <h3>Recent Announcements</h3>
      <div class="notification-item">
        <p><strong>Placement Season 2026:</strong> Welcome to Placely! Track your placement journey with us.</p>
        <p style="color: #999; font-size: 0.9rem;">Jan 27, 2026</p>
      </div>
    </div>
  `;
}

function renderReports() {
  const reportsContent = document.getElementById('reports-chart');
  reportsContent.style.display = 'none';
  
  const reportsSection = document.getElementById('reports-section');
  let reportsDiv = document.getElementById('reports-content');
  if (!reportsDiv) {
    reportsDiv = document.createElement('div');
    reportsDiv.id = 'reports-content';
    reportsSection.appendChild(reportsDiv);
  }
  
  const placedStudents = [
    { name: "Priya Sharma", dept: "CSE", package: 18.5, company: "Google", position: "Software Engineer", graduationYear: 2024, date: "2026-01-25", codingProblems: 150, internships: 1, certifications: 4, gradePoints: 8.3 },
    { name: "Aarav Kumar", dept: "CSE", package: 16.8, company: "Microsoft", position: "SDE-2", graduationYear: 2024, date: "2026-01-20", codingProblems: 120, internships: 2, certifications: 3, gradePoints: 8.7 },
    { name: "Sneha Reddy", dept: "IT", package: 15.2, company: "Amazon", position: "Associate Engineer", graduationYear: 2025, date: "2026-01-18", codingProblems: 80, internships: 1, certifications: 2, gradePoints: 9.1 },
    { name: "Rahul Singh", dept: "ECE", package: 14.5, company: "Infosys", position: "Systems Engineer", graduationYear: 2024, date: "2026-01-15", codingProblems: 200, internships: 0, certifications: 1, gradePoints: 7.9 },
    { name: "Vikram Patel", dept: "ME", package: 12.0, company: "TCS", position: "Digital Engineer", graduationYear: 2025, date: "2026-01-10", codingProblems: 60, internships: 2, certifications: 2, gradePoints: 8.9 }
  ];
  
  reportsDiv.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <h3>Placement Statistics 2026</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
        <div class="stat-card">
          <h4 style="margin: 0; color: #4F7FFF; font-size: 2rem;">${placedStudents.length}</h4>
          <p style="margin: 0.5rem 0 0 0; color: #999;">Students Placed</p>
        </div>
        <div class="stat-card">
          <h4 style="margin: 0; color: #21C1B6; font-size: 2rem;">₹${Math.max(...placedStudents.map(s => s.package))} LPA</h4>
          <p style="margin: 0.5rem 0 0 0; color: #999;">Highest Package</p>
        </div>
        <div class="stat-card">
          <h4 style="margin: 0; color: #9B6DFF; font-size: 2rem;">₹${(placedStudents.reduce((sum, s) => sum + s.package, 0) / placedStudents.length).toFixed(1)} LPA</h4>
          <p style="margin: 0.5rem 0 0 0; color: #999;">Average Package</p>
        </div>
      </div>
    </div>
    
    <h3>Placed Students Details</h3>
    <div style="overflow-x: auto;">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Dept</th>
            <th>Company</th>
            <th>Position</th>
            <th>Package (LPA)</th>
            <th>Placement Date</th>
            <th>Coding Problems</th>
            <th>Internships</th>
            <th>Certifications</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          ${placedStudents.map(student => `
            <tr>
              <td><strong>${student.name}</strong></td>
              <td>${student.dept}</td>
              <td>${student.company}</td>
              <td>${student.position}</td>
              <td style="color: #21C1B6; font-weight: bold;">₹${student.package}</td>
              <td>${student.date}</td>
              <td>${student.codingProblems}</td>
              <td>${student.internships}</td>
              <td>${student.certifications}</td>
              <td>${student.gradePoints}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderProfile() {
  const profileContent = document.getElementById('profile-content');

  if (!isStaff && currentUser) {
    // Student profile view - show complete data (auto-updated daily at 10 PM)
    profileContent.innerHTML = `
      <div class="card" style="padding: 1.5rem; margin-bottom: 1.5rem;">
        <h3 style="margin-top: 0; margin-bottom: 1.5rem;">Student Profile</h3>
        <p style="color: #FEC524; font-size: 0.9rem; margin-bottom: 1rem;">📊 LeetCode stats are automatically updated daily at 10 PM</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div>
            <h4 style="margin: 0 0 1rem 0; color: #FEC524;">Personal Information</h4>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div><strong>Name:</strong> <span style="color: #999;">${currentUser.name || 'N/A'}</span></div>
              <div><strong>Email:</strong> <span style="color: #999;">${currentUser.email || 'N/A'}</span></div>
              <div><strong>Department:</strong> <span style="color: #999;">${currentUser.dept || 'N/A'}</span></div>
              <div><strong>Year:</strong> <span style="color: #999;">${currentUser.year || 'N/A'}</span></div>
              <div><strong>Student ID:</strong> <span style="color: #999;">${currentUser.id || 'N/A'}</span></div>
            </div>
          </div>
          <div>
            <h4 style="margin: 0 0 1rem 0; color: #FEC524;">Academic & Skills</h4>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div><strong>CGPA:</strong> <span style="color: #999;">${currentUser.gradePoints || 'N/A'}</span></div>
              <div><strong>Coding Problems Solved:</strong> <span style="color: #999;">${currentUser.codingProblems || 0}</span></div>
              <div><strong>Internships:</strong> <span style="color: #999;">${currentUser.internships || 0}</span></div>
              <div><strong>Certifications:</strong> <span style="color: #999;">${currentUser.certifications || 0}</span></div>
              <div><strong>LeetCode Username:</strong> <span style="color: #999;">${currentUser.leetcodeUsername || 'Not set'}</span></div>
            </div>
          </div>
          <div>
            <h4 style="margin: 0 0 1rem 0; color: #FEC524;">Placement Status</h4>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div><strong>Current Interest:</strong> <span id="profile-interest-value" style="color: #999;">${getInterestCategory(currentUser.interest)}</span></div>
              <div>
                <label style="display:block; margin-bottom:0.35rem;"><strong>Interest Track:</strong></label>
                <div
                  id="profile-interest-switch"
                  class="profile-interest-switch"
                  data-state="${getInterestStateKey(getInterestCategory(currentUser.interest))}"
                >
                  <div class="profile-interest-labels">
                    ${['Placements', 'Higher Studies', 'Entrepreneurship'].map(option => `
                      <label class="profile-interest-option ${getInterestCategory(currentUser.interest) === option ? 'active' : ''}">
                        <input
                          type="radio"
                          name="profile-interest-radio"
                          value="${option}"
                          disabled
                          ${getInterestCategory(currentUser.interest) === option ? 'checked' : ''}
                        >
                        <span>${option}</span>
                      </label>
                    `).join('')}
                  </div>
                  <div class="profile-interest-track">
                    <div class="profile-interest-thumb"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 style="margin: 0 0 1rem 0; color: #FEC524;">LinkedIn Profile</h4>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              ${currentUser.linkedinName ? `
                <div>
                  <strong>✓ Connected</strong>
                  <p style="color: #999; margin: 0.5rem 0 0 0;">Name: ${currentUser.linkedinName}</p>
                  ${currentUser.linkedinUrl ? `<p style="color: #999; margin: 0;"><a href="${currentUser.linkedinUrl}" target="_blank" style="color: #FEC524;">View Profile →</a></p>` : ''}
                  ${currentUser.linkedinPhotoUrl ? `<img src="${currentUser.linkedinPhotoUrl}" alt="LinkedIn" style="width: 60px; height: 60px; border-radius: 50%; margin-top: 0.5rem;">` : ''}
                </div>
                <button class="btn" onclick="connectLinkedIn()" style="margin-top: 0.5rem; background: #0A66C2; width: 100%;">Update LinkedIn</button>
              ` : `
                <p style="color: #999; margin: 0 0 1rem 0;">Not connected. Connect your LinkedIn to display your profile in the college directory.</p>
                <button class="btn" onclick="connectLinkedIn()" style="width: 100%;">
                  <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: inline; margin-right: 0.5rem; vertical-align: middle;">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.25-.129.599-.129.949v5.437h-3.554s.043-8.811 0-9.726h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.382 3.704 4.356v5.59zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.952-1.71 1.182 0 1.915.759 1.915 1.71 0 .951-.733 1.71-1.952 1.71zm1.581 11.597H3.715V9.581h3.203v10.871zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" fill="white"/>
                  </svg>
                  Connect LinkedIn
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
      <div id="leetcode-stats-container"></div>
    `;
    
    // Auto-fetch LeetCode stats if username is set
    if (currentUser.leetcodeUsername) {
      fetchAndDisplayLeetCodeStats(currentUser.leetcodeUsername);
    }
  } else if (isStaff) {
    // Staff view - LeetCode batch functionality
    profileContent.innerHTML = `
      <div class="card" style="padding: 1.25rem; margin-bottom: 1.25rem;">
        <h3 style="margin-top: 0;">Manual LeetCode Stats Update (Staff Only)</h3>
        <p style="margin: 0.5rem 0 1rem 0; color: #999;">Note: Stats are automatically updated daily at 10 PM. Use these tools to fetch manually.</p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
          <button class="btn" id="leetcode-batch-btn" type="button">Fetch All Students Now</button>
        </div>
      </div>
      <div id="leetcode-result"></div>
    `;
    
    const batchBtn = document.getElementById('leetcode-batch-btn');
    if (batchBtn) {
      batchBtn.addEventListener('click', fetchAllStudentsLeetCodeStats);
    }
  } else {
    profileContent.innerHTML = `<p>Please log in to view your profile.</p>`;
    return;
  }
}

async function fetchAndDisplayLeetCodeStats(username) {
  const container = document.getElementById('leetcode-stats-container');
  if (!container) return;
  
  container.innerHTML = '<div class="card" style="padding: 1rem;"><p>Loading LeetCode stats...</p></div>';

  try {
    const response = await fetch(`/api/leetcode/${encodeURIComponent(username)}`);
    const data = await response.json();

    if (!response.ok || !data.success) {
      container.innerHTML = `<div class="card" style="padding: 1rem;"><p style="margin: 0; color: #ff6b6b;">⚠️ Unable to fetch LeetCode stats: ${data.message || 'Unknown error'}</p></div>`;
      return;
    }

    container.innerHTML = renderLeetCodeStatsCard(data);
  } catch (error) {
    console.error('LeetCode fetch error:', error);
    container.innerHTML = '<div class="card" style="padding: 1rem;"><p style="margin: 0; color: #ff6b6b;">⚠️ Network error while fetching LeetCode stats.</p></div>';
  }
}

async function fetchLeetCodeProfileStats() {
  const usernameInput = document.getElementById('leetcode-username');
  const result = document.getElementById('leetcode-result');
  const username = usernameInput.value.trim();

  if (!username) {
    alert('Enter a LeetCode username first.');
    return;
  }

  result.innerHTML = '<p>Loading LeetCode profile...</p>';

  try {
    const response = await fetch(`/api/leetcode/${encodeURIComponent(username)}`);
    const data = await response.json();

    if (!response.ok || !data.success) {
      result.innerHTML = `<div class="card" style="padding: 1rem;"><p style="margin: 0; color: #ff6b6b;">${data.message || 'Failed to fetch LeetCode stats.'}</p></div>`;
      return;
    }

    result.innerHTML = renderLeetCodeStatsCard(data);
  } catch (error) {
    console.error('LeetCode fetch error:', error);
    result.innerHTML = '<div class="card" style="padding: 1rem;"><p style="margin: 0; color: #ff6b6b;">Network error while fetching LeetCode stats.</p></div>';
  }
}

async function fetchAllStudentsLeetCodeStats() {
  const result = document.getElementById('leetcode-result');
  result.innerHTML = '<p>Loading LeetCode stats for all students (rate-limited)...</p>';

  try {
    const response = await fetch('/api/leetcode/students');
    const data = await response.json();

    if (!response.ok || !data.success) {
      result.innerHTML = `<div class="card" style="padding: 1rem;"><p style="margin: 0; color: #ff6b6b;">${data.message || 'Failed to fetch batch LeetCode stats.'}</p></div>`;
      return;
    }

    const cards = data.results.map(item => {
      if (!item.profile || !item.profile.success) {
        return `
          <div class="card" style="padding: 1rem; margin-bottom: 0.75rem;">
            <h4 style="margin: 0 0 0.5rem 0;">${item.studentName} (${item.leetcodeUsername})</h4>
            <p style="margin: 0; color: #ff6b6b;">${item.profile?.message || 'Unable to fetch profile.'}</p>
          </div>
        `;
      }

      const statsCard = renderLeetCodeStatsCard(item.profile);
      return `
        <div style="margin-bottom: 0.75rem;">
          <h4 style="margin: 0 0 0.5rem 0;">${item.studentName}</h4>
          ${statsCard}
        </div>
      `;
    }).join('');

    result.innerHTML = cards;
  } catch (error) {
    console.error('LeetCode batch fetch error:', error);
    result.innerHTML = '<div class="card" style="padding: 1rem;"><p style="margin: 0; color: #ff6b6b;">Network error while fetching batch LeetCode stats.</p></div>';
  }
}

function renderLeetCodeStatsCard(data) {
  return `
    <div class="card" style="padding: 1rem;">
      <h4 style="margin: 0 0 0.75rem 0;">@${data.username}</h4>
      <p style="margin: 0 0 0.75rem 0;"><strong>Ranking:</strong> ${data.ranking ?? 'N/A'}</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem;">
        <div class="stat-card"><h4 style="margin: 0;">${data.solved.all}</h4><p style="margin: 0.25rem 0 0 0;">Solved (All)</p></div>
        <div class="stat-card"><h4 style="margin: 0;">${data.solved.easy}</h4><p style="margin: 0.25rem 0 0 0;">Easy</p></div>
        <div class="stat-card"><h4 style="margin: 0;">${data.solved.medium}</h4><p style="margin: 0.25rem 0 0 0;">Medium</p></div>
        <div class="stat-card"><h4 style="margin: 0;">${data.solved.hard}</h4><p style="margin: 0.25rem 0 0 0;">Hard</p></div>
      </div>
      <div style="margin-top: 0.9rem;">
        <p style="margin: 0.2rem 0;"><strong>Acceptance Rate:</strong> ${data.acceptanceRates.all}%</p>
        <p style="margin: 0.2rem 0; color: #999;">Easy: ${data.acceptanceRates.easy}% | Medium: ${data.acceptanceRates.medium}% | Hard: ${data.acceptanceRates.hard}%</p>
      </div>
    </div>
  `;
}

function renderLeaderboard() {
  // Placeholder for leaderboard rendering
}