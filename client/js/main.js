// Runtime data
let students = [];

const recentlyPlaced = [
  { name: "Priya Sharma", package: 18.5, company: "Google", position: "Software Engineer", graduationYear: 2024, date: "2026-01-25" },
  { name: "Aarav Kumar", package: 16.8, company: "Microsoft", position: "SDE-2", graduationYear: 2024, date: "2026-01-20" },
  { name: "Sneha Reddy", package: 15.2, company: "Amazon", position: "Associate Engineer", graduationYear: 2025, date: "2026-01-18" }
];

const staffPlacedStudents = [
  { name: "Priya Sharma", dept: "CSE", package: 18.5, company: "Google", position: "Software Engineer", graduationYear: 2024, date: "2026-01-25", codingProblems: 150, internships: 1, certifications: 4, gradePoints: 8.3, achievements: "SIH Finalist" },
  { name: "Aarav Kumar", dept: "CSE", package: 16.8, company: "Microsoft", position: "SDE-2", graduationYear: 2024, date: "2026-01-20", codingProblems: 120, internships: 2, certifications: 3, gradePoints: 8.7, achievements: "Hackathon Winner" },
  { name: "Sneha Reddy", dept: "IT", package: 15.2, company: "Amazon", position: "Associate Engineer", graduationYear: 2025, date: "2026-01-18", codingProblems: 80, internships: 1, certifications: 2, gradePoints: 9.1, achievements: "Open Source Contributor" },
  { name: "Rahul Singh", dept: "ECE", package: 14.5, company: "Infosys", position: "Systems Engineer", graduationYear: 2024, date: "2026-01-15", codingProblems: 200, internships: 0, certifications: 1, gradePoints: 7.9, achievements: "NPTEL Topper" },
  { name: "Vikram Patel", dept: "ME", package: 12.0, company: "TCS", position: "Digital Engineer", graduationYear: 2025, date: "2026-01-10", codingProblems: 60, internships: 2, certifications: 2, gradePoints: 8.9, achievements: "Tech Club Lead" }
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
let dashboardFilteredStudents = [];
let analyticsProfileFilteredIds = [];
let analyticsProfileCurrentIndex = -1;
let currentDashboardSortKey = 'codingProblems';
const dashboardMetricOrder = [
  'codingProblems',
  'year',
  'internships',
  'certifications',
  'gradePoints',
  'tenthPercentage',
  'twelfthPercentage',
  'diplomaPercentage',
  'placementStatus',
  'interest',
  'rollNo',
  'registerNo',
  'section',
  'gender',
  'residencyType',
  'personalMail',
  'collegeMail',
  'contactNo',
  'address',
  'resumeLink',
  'preferredRoles',
  'preferredShift',
  'travelPriority',
  'achievements'
];
const dashboardMetricLabels = {
  codingProblems: 'Coding Problems',
  internships: 'Internships',
  certifications: 'Certifications',
  gradePoints: 'CGPA',
  tenthPercentage: '10th %',
  twelfthPercentage: '12th %',
  diplomaPercentage: 'Diploma %',
  placementStatus: 'Placed/Yet to be Placed',
  year: 'Year',
  interest: 'Interest',
  rollNo: 'Roll No',
  registerNo: 'Register No',
  section: 'Section',
  gender: 'Gender',
  residencyType: 'Dayscholar/Hostel',
  personalMail: 'Personal Mail',
  collegeMail: 'Clg Mail',
  contactNo: 'Contact No',
  address: 'Address',
  resumeLink: 'Resume Link',
  preferredRoles: 'Gender Specific Roles',
  preferredShift: 'Shift Priority',
  travelPriority: 'Travel Priority',
  achievements: 'Achievements'
};
let dashboardVisibleMetrics = new Set(dashboardMetricOrder);

function getYearNumber(value) {
  const numericValue = Number(value);
  if (Number.isInteger(numericValue) && numericValue >= 1 && numericValue <= 4) {
    return numericValue;
  }

  const normalized = String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
  const map = {
    '1': 1,
    'first': 1,
    'first year': 1,
    '2': 2,
    'second': 2,
    'second year': 2,
    '3': 3,
    'third': 3,
    'third year': 3,
    '4': 4,
    'fourth': 4,
    'fourth year': 4
  };

  return map[normalized] || 0;
}

function getYearLabel(value) {
  const yearNumber = getYearNumber(value);
  if (yearNumber === 1) return 'First';
  if (yearNumber === 2) return 'Second';
  if (yearNumber === 3) return 'Third';
  if (yearNumber === 4) return 'Fourth';
  return String(value || 'N/A');
}

function isStaffDemoMode() {
  return isStaff && !document.getElementById('login-section');
}

function updateRoleBasedNav() {
  const analyticsLink = document.querySelector("#navbar a[onclick*='showSection(\"dashboard-section\")'], #navbar a[onclick*=\"showSection('dashboard-section')\"]");
  if (analyticsLink && analyticsLink.parentElement) {
    analyticsLink.parentElement.style.display = isStaff ? '' : 'none';
  }
}

function isLoginUiDisabled() {
  return !document.getElementById('login-section');
}

function applyDemoViewMode(mode) {
  const normalized = mode === 'student' ? 'student' : 'staff';
  isStaff = normalized === 'staff';
  if (isStaff) {
    currentUser = null;
  } else if (!currentUser && Array.isArray(students) && students.length) {
    currentUser = students[0];
  }
  return normalized;
}

function ensureDemoModeToggle() {
  const navList = document.querySelector('#navbar ul');
  if (!navList || !isLoginUiDisabled()) {
    return;
  }

  let container = document.getElementById('demo-mode-toggle-container');
  if (!container) {
    container = document.createElement('li');
    container.id = 'demo-mode-toggle-container';
    container.innerHTML = `
      <label class="demo-mode-toggle-label" for="demo-mode-toggle">Mode</label>
      <select id="demo-mode-toggle" class="demo-mode-toggle-select" aria-label="Select view mode">
        <option value="staff">Staff</option>
        <option value="student">Student</option>
      </select>
    `;

    const darkModeLi = document.getElementById('darkmode-toggle')?.parentElement;
    if (darkModeLi && darkModeLi.parentElement === navList) {
      navList.insertBefore(container, darkModeLi);
    } else {
      navList.appendChild(container);
    }

    const modeSelect = document.getElementById('demo-mode-toggle');
    if (modeSelect) {
      modeSelect.addEventListener('change', () => {
        const selectedMode = applyDemoViewMode(modeSelect.value);
        localStorage.setItem('demoViewMode', selectedMode);
        updateRoleBasedNav();
        showSection(isStaff ? 'dashboard-section' : 'home-section');
      });
    }
  }

  const modeSelect = document.getElementById('demo-mode-toggle');
  if (modeSelect) {
    modeSelect.value = isStaff ? 'staff' : 'student';
  }
}

function initializeDemoModeIfNeeded() {
  if (!isLoginUiDisabled()) {
    return false;
  }

  const savedMode = localStorage.getItem('demoViewMode');
  const resolvedMode = applyDemoViewMode(savedMode === 'student' ? 'student' : 'staff');
  localStorage.setItem('demoViewMode', resolvedMode);
  initializeApp();
  ensureDemoModeToggle();
  showSection('dashboard-section');
  return true;
}

const sectionIds = ['login-section', 'home-section', 'dashboard-section', 'profile-section', 'notifications-section', 'leaderboard-section'];

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
    console.log("Calling /api/connect-linkedin...");
    const response = await fetch('/api/connect-linkedin');
    console.log("Response status:", response.status);
    console.log("Response ok:", response.ok);
    
    const data = await response.json();
    console.log("Response data:", data);
    
    if (!response.ok) {
      alert(`Error: ${data.message || 'Failed to authenticate. Please log in and try again.'}`);
      return;
    }
    
    if (data.auth_url) {
      console.log("Redirecting to LinkedIn...");
      window.open(data.auth_url, '_blank', 'noopener,noreferrer');
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
      if (currentUser && !isStaff) {
        const matchedStudent = students.find((student) =>
          (currentUser.id && student.id === currentUser.id) ||
          (currentUser.email && student.email === currentUser.email)
        );
        if (matchedStudent) {
          currentUser = { ...currentUser, ...matchedStudent };
        }
      }
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
  if (sectionId === 'dashboard-section' && !isStaff) {
    sectionId = 'home-section';
  }
  sectionIds.forEach(id => { const el = document.getElementById(id); if (el) el.classList.remove('active'); });
  const el = document.getElementById(sectionId);
  if (el) el.classList.add('active');
  if (sectionId === 'home-section') renderHome();
  if (sectionId === 'dashboard-section') renderDashboard();
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
  updateRoleBasedNav();
}

function logout() {
  fetch('/logout', { method: 'POST' }).catch(() => null);
  currentUser = null;
  isStaff = false;
  const navbar = document.getElementById('navbar');
  const loginSection = document.getElementById('login-section');
  if (loginSection) {
    if (navbar) navbar.style.display = 'none';
    loginSection.style.display = 'block';
  } else {
    if (navbar) navbar.style.display = 'flex';
  }
  updateRoleBasedNav();

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
  } else {
    showSection('home-section');
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

  const demoModeEnabled = initializeDemoModeIfNeeded();
  
  // Check for login callback or existing session
  refreshStudentsData().then(() => {
    if (demoModeEnabled) {
      applyDemoViewMode(localStorage.getItem('demoViewMode') === 'student' ? 'student' : 'staff');
      ensureDemoModeToggle();
      renderDashboard();
    }
  });

  if (!demoModeEnabled) {
    checkLoginStatus();
    checkSession();
  }
});

// Dark/Light Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  document.getElementById('darkmode-toggle').textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';

  const activeSectionId = document.querySelector('section.active')?.id;
  if (activeSectionId === 'dashboard-section') renderDashboard();
  if (activeSectionId === 'profile-section') renderProfile();
  if (activeSectionId === 'notifications-section') renderNotifications();
  if (activeSectionId === 'home-section') renderHome();
  if (activeSectionId === 'leaderboard-section') renderLeaderboard();
}

function getChartThemeColors() {
  const isLightMode = document.body.classList.contains('light-mode');
  return {
    axisTickColor: isLightMode ? '#334155' : '#f5f5f5',
    axisGridColor: isLightMode ? 'rgba(30, 58, 138, 0.18)' : 'rgba(255,255,255,0.08)',
    radarGridColor: isLightMode ? 'rgba(30, 58, 138, 0.26)' : 'rgba(255,255,255,0.15)',
    radarPointLabelColor: isLightMode ? '#1e293b' : '#f5f5f5',
    legendColor: isLightMode ? '#334155' : '#f5f5f5',
    radarTickBackdrop: isLightMode ? 'rgba(255,255,255,0.75)' : 'transparent'
  };
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
          <div class="company-card company-card--interactive" data-company="${company.name}" role="button" tabindex="0" aria-label="View details for ${company.name}">
            <div class="company-header">
              <h4 style="margin: 0 0 0.5rem 0;">${company.name}</h4>
              <span class="company-date">📍 ${company.visitDate}</span>
            </div>
            <p style="margin: 0.3rem 0;"><strong>Position:</strong> ${company.position}</p>
            <p style="margin: 0.3rem 0;"><strong>Salary Range:</strong> ${company.salary}</p>
            <p style="margin: 0.3rem 0;"><strong>CTC:</strong> ${company.ctc}</p>
            <p style="margin: 0.55rem 0 0 0; color: #FEC524; font-size: 0.85rem;">Tap to view application details →</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  container.innerHTML = companiesHtml;

  container.querySelectorAll('.company-card--interactive').forEach((card) => {
    const openDetails = () => openCompanyDetailsModal(card.dataset.company || '');
    card.addEventListener('click', openDetails);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDetails();
      }
    });
  });
}

function renderHome() {
  const title = document.getElementById('home-title');
  const bannerContainer = document.getElementById('home-banner-container');
  const homeContent = document.getElementById('home-content');
  
  title.textContent = '';
  bannerContainer.innerHTML = '';
  
  homeContent.innerHTML = `
    <article class="home-post-card">
      <img
        class="home-post-image"
        src="https://media.licdn.com/dms/image/v2/D5622AQGAluiG297vnA/feedshare-shrink_800/B56ZyUo72FKYAk-/0/1772020285115?e=1773878400&v=beta&t=2VKK-icCkRHDvhtBwqmWHMx7h4p96B4WTeBDKtqrQpA"
        alt="FOSSEE Internship announcement"
      >
      <div class="home-post-content">
        <h3>🔥 FOSSEE Interns Continue the Legacy at Sri Eshwar!</h3>
        <p>Sharukhesh S (II Year – IT) and Poojitha S K (II Year – CSBS) are selected for the Semester-Long FOSSEE Internship 2026 at IIT Bombay.</p>
        <p>This milestone strengthens Sri Eshwar’s growing FOSSEE footprint and highlights the campus culture of innovation, research, and academic excellence.</p>
        <p class="home-post-tags">FOSSEEAtSECE • SriEshwar • SECEPride • IITBombay • FOSSEEInternship</p>
      </div>
    </article>
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

function getTopPercentile(sortedList, studentRecord) {
  if (!sortedList.length || !studentRecord) return 'N/A';

  const index = sortedList.findIndex((entry) => {
    if (studentRecord.id != null && entry.id != null) {
      return Number(entry.id) === Number(studentRecord.id);
    }
    return String(entry.email || '').toLowerCase() === String(studentRecord.email || '').toLowerCase();
  });

  if (index < 0) return 'N/A';

  const rank = index + 1;
  const percentile = (rank / sortedList.length) * 100;
  return percentile.toFixed(1);
}

function getDynamicScoreMeta(studentsData) {
  return {
    maxCodingProblems: Math.max(...studentsData.map((student) => Number(student.codingProblems || 0)), 0),
    maxOfficialCertificates: Math.max(...studentsData.map((student) => Number(student.certifications || 0)), 0),
    maxInternships: Math.max(...studentsData.map((student) => Number(student.internships || 0)), 0)
  };
}

function getDynamicPlacementScore(student, scoreMeta) {
  const clampUnit = (value) => Math.max(0, Math.min(1, Number(value) || 0));
  const cgpa = Number(student.gradePoints || 0);
  const codingProblems = Number(student.codingProblems || 0);
  const officialCertificates = Number(student.certifications || 0);
  const internships = Number(student.internships || 0);

  const cgpaComponent = clampUnit(cgpa / 10) * 30;
  const codingComponent = scoreMeta.maxCodingProblems > 0 ? clampUnit(codingProblems / scoreMeta.maxCodingProblems) * 30 : 0;
  const certificatesComponent = scoreMeta.maxOfficialCertificates > 0 ? clampUnit(officialCertificates / scoreMeta.maxOfficialCertificates) * 15 : 0;
  const internshipsComponent = scoreMeta.maxInternships > 0 ? clampUnit(internships / scoreMeta.maxInternships) * 25 : 0;

  return cgpaComponent + codingComponent + certificatesComponent + internshipsComponent;
}

function formatVisitDateOffset(visitDate, daysOffset) {
  const parsedDate = new Date(visitDate);
  if (Number.isNaN(parsedDate.getTime())) return 'TBA';
  parsedDate.setDate(parsedDate.getDate() + daysOffset);
  return parsedDate.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

function getCompanyDetailInfo(company) {
  const detailsMap = {
    'Microsoft': { minCgpa: '7.5', eligibleYears: 'Final Year', allowedBacklogs: 'No active backlogs', process: 'Online Assessment, 2 Technical Interviews, HR', keySkills: 'DSA, OOPS, DBMS, System Design', location: 'Bangalore / Hyderabad', applyUrl: 'https://careers.microsoft.com/' },
    'Amazon': { minCgpa: '7.0', eligibleYears: 'Final Year', allowedBacklogs: 'No active backlogs', process: 'OA (Coding), Technical Interview Loop, HR', keySkills: 'DSA, OS, DBMS, CS Fundamentals', location: 'Chennai / Bangalore', applyUrl: 'https://www.amazon.jobs/' },
    'ServiceNow': { minCgpa: '7.0', eligibleYears: 'Final Year', allowedBacklogs: 'Max 1 historical backlog', process: 'OA, 2 Technical Interviews, Managerial', keySkills: 'JavaScript, DSA, SQL, Web Basics', location: 'Hyderabad', applyUrl: 'https://careers.servicenow.com/' },
    'Wells Fargo': { minCgpa: '7.0', eligibleYears: 'Final Year', allowedBacklogs: 'No active backlogs', process: 'Aptitude + Coding, Technical, HR', keySkills: 'Java/Python, SQL, Problem Solving', location: 'Bangalore / Chennai', applyUrl: 'https://www.wellsfargo.com/about/careers/' }
  };

  const specific = detailsMap[company.name] || {};
  const domain = companyLogoDomains[company.name];
  const defaultApplyUrl = domain
    ? `https://www.google.com/search?q=${encodeURIComponent(`${company.name} careers`)}`
    : `https://www.google.com/search?q=${encodeURIComponent(`${company.name} jobs`)}`;
  return {
    applicationClose: specific.applicationClose || formatVisitDateOffset(company.visitDate, -2),
    testDate: specific.testDate || formatVisitDateOffset(company.visitDate, -1),
    minCgpa: specific.minCgpa || '6.5',
    eligibleYears: specific.eligibleYears || 'Final Year',
    allowedBacklogs: specific.allowedBacklogs || 'No active backlogs preferred',
    process: specific.process || 'Aptitude/Coding Round, Technical Round(s), HR',
    keySkills: specific.keySkills || 'Problem Solving, CS Fundamentals, Communication',
    location: specific.location || 'As per business requirement',
    stipendInternship: specific.stipendInternship || 'May include internship-to-PPO track',
    documents: specific.documents || 'Updated Resume, Govt ID, Academic Mark Sheets',
    applyUrl: specific.applyUrl || defaultApplyUrl
  };
}

function ensureCompanyDetailsModal() {
  let modalOverlay = document.getElementById('company-details-modal');
  if (modalOverlay) {
    return modalOverlay;
  }

  const modalMarkup = `
    <div id="company-details-modal" class="company-modal-overlay" aria-hidden="true">
      <div class="company-modal-card" role="dialog" aria-modal="true" aria-label="Company details">
        <button type="button" class="company-modal-close" id="company-modal-close" aria-label="Close company details">×</button>
        <div id="company-modal-content"></div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalMarkup);

  modalOverlay = document.getElementById('company-details-modal');
  const closeBtn = document.getElementById('company-modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCompanyDetailsModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (event) => {
      if (event.target === modalOverlay) {
        closeCompanyDetailsModal();
      }
    });
  }

  if (!document.body.dataset.companyModalEscBound) {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeCompanyDetailsModal();
      }
    });
    document.body.dataset.companyModalEscBound = '1';
  }

  return modalOverlay;
}

function openCompanyDetailsModal(companyName) {
  const company = upcomingCompanies.find((entry) => entry.name === companyName);
  if (!company) return;

  const modalOverlay = ensureCompanyDetailsModal();
  const content = document.getElementById('company-modal-content');
  if (!modalOverlay || !content) return;

  const detailInfo = getCompanyDetailInfo(company);
  const logoUrl = getCompanyLogoUrl(company.name);
  const initials = getCompanyInitials(company.name);

  content.innerHTML = `
    <div class="company-modal-header">
      <div class="company-modal-logo-wrap">
        <img class="company-modal-logo" src="${logoUrl}" alt="${company.name} logo" ${logoUrl ? '' : 'style="display:none;"'} onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="company-modal-logo-fallback" ${logoUrl ? 'style="display:none;"' : ''}>${initials}</div>
      </div>
      <div>
        <h3 style="margin: 0 0 0.2rem 0;">${company.name}</h3>
        <p style="margin: 0; color: #999;">${company.position} • Visit: ${company.visitDate}</p>
      </div>
    </div>

    <div class="company-modal-grid">
      <div><strong>Application Closes:</strong> ${detailInfo.applicationClose}</div>
      <div><strong>Assessment Date:</strong> ${detailInfo.testDate}</div>
      <div><strong>Salary Range:</strong> ${company.salary}</div>
      <div><strong>CTC:</strong> ${company.ctc}</div>
      <div><strong>Minimum CGPA:</strong> ${detailInfo.minCgpa}</div>
      <div><strong>Eligible Batch:</strong> ${detailInfo.eligibleYears}</div>
      <div><strong>Backlog Policy:</strong> ${detailInfo.allowedBacklogs}</div>
    </div>

    <div class="company-modal-section">
      <h4>Selection Process</h4>
      <p>${detailInfo.process}</p>
    </div>

    <div class="company-modal-section">
      <h4>Preferred Skills</h4>
      <p>${detailInfo.keySkills}</p>
    </div>

    <div class="company-modal-section">
      <h4>Required Documents</h4>
      <p>${detailInfo.documents}</p>
    </div>

    <div class="company-modal-note">Tip: Keep your resume, coding profile, and latest semester marks ready before applying.</div>

    <div class="company-modal-actions">
      <a class="company-apply-btn" href="${detailInfo.applyUrl}" target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>
  `;

  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCompanyDetailsModal() {
  const modalOverlay = document.getElementById('company-details-modal');
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function getInterestCategory(interest) {
  const normalized = String(interest || '').trim().toLowerCase();
  if (normalized.includes('higher')) return 'Higher Studies';
  if (normalized.includes('entrepreneur')) return 'Entrepreneurship';
  if (normalized.includes('placed') || normalized.includes('placement') || normalized.includes('interested')) return 'Placements';
  return 'Placements';
}

function getPlacementStatusLabel(student) {
  const explicit = String(student?.placementStatus || '').trim().toLowerCase();
  if (explicit) {
    if (explicit.includes('placed')) return 'Placed';
    if (explicit.includes('yet')) return 'Yet to be Placed';
  }

  const interestRaw = String(student?.interest || '').trim().toLowerCase();
  if (interestRaw === 'placed') {
    return 'Placed';
  }
  return 'Yet to be Placed';
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
  if (container) {
    container.innerHTML = '';
  }
}

let analyticsStudentDistributionChart = null;
let analyticsDeptBarChart = null;
let analyticsPlacementBarChart = null;

function getYearDistributionBuckets() {
  const map = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0]
  ]);

  students.forEach((student) => {
    const year = getYearNumber(student.year);
    if (map.has(year)) {
      map.set(year, map.get(year) + 1);
    }
  });

  return {
    labels: ['First', 'Second', 'Third', 'Fourth'],
    values: [map.get(1), map.get(2), map.get(3), map.get(4)]
  };
}

function renderAnalyticsRightPanel(selectedYear) {
  const heading = document.getElementById('analytics-selected-heading');
  const yearData = getYearDistributionBuckets();

  const selectedStudents = Number.isInteger(selectedYear)
    ? students.filter((student) => getYearNumber(student.year) === selectedYear)
    : [...students];

  const selectedLabel = Number.isInteger(selectedYear)
    ? yearData.labels[selectedYear - 1]
    : 'All Years';

  if (heading) {
    heading.textContent = `${selectedLabel} Insights`;
  }

  const deptCounts = {};
  selectedStudents.forEach((student) => {
    const dept = String(student.dept || 'Unknown').trim() || 'Unknown';
    deptCounts[dept] = (deptCounts[dept] || 0) + 1;
  });

  const interestCounts = { Placements: 0, 'Higher Studies': 0, Entrepreneurship: 0 };
  selectedStudents.forEach((student) => {
    const category = getInterestCategory(student.interest);
    if (interestCounts[category] !== undefined) {
      interestCounts[category] += 1;
    }
  });

  const deptLabels = Object.keys(deptCounts);
  const deptValues = Object.values(deptCounts);
  const deptColors = ['#D9FBE8', '#9EE6C2', '#63CF9D', '#2CB777', '#15965F', '#0E754A', '#085638'];

  const placementLabels = Object.keys(interestCounts);
  const placementValues = Object.values(interestCounts);
  const placementColors = ['#9EE6C2', '#2CB777', '#0E754A'];

  if (analyticsDeptBarChart) {
    analyticsDeptBarChart.destroy();
  }
  if (analyticsPlacementBarChart) {
    analyticsPlacementBarChart.destroy();
  }

  const deptCanvas = document.getElementById('analytics-dept-bar');
  const placementCanvas = document.getElementById('analytics-placement-bar');
  if (!deptCanvas || !placementCanvas) {
    return;
  }

  const chartTheme = getChartThemeColors();

  analyticsDeptBarChart = new Chart(deptCanvas, {
    type: 'bar',
    data: {
      labels: ['Department Count'],
      datasets: deptLabels.map((dept, index) => ({
        label: dept,
        data: [deptValues[index]],
        backgroundColor: deptColors[index % deptColors.length],
        borderWidth: 0,
        barThickness: 24,
        stack: 'dept'
      }))
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { color: chartTheme.legendColor } },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${context.raw}`;
            }
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          beginAtZero: true,
          ticks: { color: chartTheme.axisTickColor, precision: 0 },
          grid: { color: chartTheme.axisGridColor }
        },
        y: {
          stacked: true,
          ticks: { color: chartTheme.axisTickColor },
          grid: { display: false }
        }
      }
    }
  });

  analyticsPlacementBarChart = new Chart(placementCanvas, {
    type: 'bar',
    data: {
      labels: ['Placement Distribution'],
      datasets: placementLabels.map((label, index) => ({
        label,
        data: [placementValues[index]],
        backgroundColor: placementColors[index % placementColors.length],
        borderWidth: 0,
        barThickness: 24,
        stack: 'placement'
      }))
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { color: chartTheme.legendColor } },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${context.raw}`;
            }
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          beginAtZero: true,
          ticks: { color: chartTheme.axisTickColor, precision: 0 },
          grid: { color: chartTheme.axisGridColor }
        },
        y: {
          stacked: true,
          ticks: { color: chartTheme.axisTickColor },
          grid: { display: false }
        }
      }
    }
  });
}

function renderUnifiedAnalytics(container) {
  container.style.display = 'block';
  container.style.marginBottom = '2rem';
  container.innerHTML = `
    <div class="analytics-single-layout">
      <div class="chart-card analytics-single-donut-card">
        <h3 style="text-align: center; margin-top: 0;">Student Distribution</h3>
        <div class="analytics-single-donut-wrap">
          <canvas id="analytics-student-distribution" class="analytics-single-donut-canvas"></canvas>
        </div>
      </div>
      <div class="chart-card analytics-single-right-card">
        <h4 id="analytics-selected-heading" style="margin: 0 0 0.6rem 0;">All Years Insights</h4>
        <div class="analytics-horizontal-block">
          <h5 style="margin: 0 0 0.45rem 0;">Department Distribution</h5>
          <div class="analytics-bar-canvas-wrap"><canvas id="analytics-dept-bar"></canvas></div>
        </div>
        <div class="analytics-horizontal-block" style="margin-top: 0.85rem;">
          <h5 style="margin: 0 0 0.45rem 0;">Placement Distribution</h5>
          <div class="analytics-bar-canvas-wrap"><canvas id="analytics-placement-bar"></canvas></div>
        </div>
      </div>
    </div>
  `;

  const canvas = document.getElementById('analytics-student-distribution');
  if (!canvas) {
    return;
  }

  const yearData = getYearDistributionBuckets();
  let selectedIndex = null;
  const colors = ['#D9FBE8', '#7FDDB2', '#2CB777', '#0E754A'];

  if (analyticsStudentDistributionChart) {
    analyticsStudentDistributionChart.destroy();
  }

  const centerTextPlugin = {
    id: 'analyticsCenterText',
    afterDraw(chart) {
      const dataset = chart.data.datasets[0] || { data: [] };
      const total = dataset.data.reduce((sum, value) => sum + Number(value || 0), 0);
      const value = selectedIndex === null ? total : Number(dataset.data[selectedIndex] || 0);
      const label = selectedIndex === null ? 'Total Students' : chart.data.labels[selectedIndex];

      const { ctx, chartArea } = chart;
      if (!chartArea) {
        return;
      }
      const x = (chartArea.left + chartArea.right) / 2;
      const y = (chartArea.top + chartArea.bottom) / 2;

      ctx.save();
      ctx.textAlign = 'center';
      ctx.fillStyle = document.body.classList.contains('light-mode') ? '#1e293b' : '#f5f5f5';
      ctx.font = '700 26px Segoe UI';
      ctx.fillText(String(value), x, y - 4);
      ctx.font = '500 12px Segoe UI';
      ctx.fillStyle = document.body.classList.contains('light-mode') ? '#475569' : '#9ca3af';
      ctx.fillText(label, x, y + 18);
      ctx.restore();
    }
  };

  analyticsStudentDistributionChart = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: yearData.labels,
      datasets: [{
        data: yearData.values,
        backgroundColor: colors,
        borderWidth: 0,
        hoverOffset(context) {
          return context.dataIndex === selectedIndex ? 18 : 0;
        },
        offset(context) {
          return context.dataIndex === selectedIndex ? 18 : 0;
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'nearest',
        intersect: true
      },
      cutout: '48%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(context) {
              const allValues = context.dataset.data || [];
              const total = allValues.reduce((sum, value) => sum + Number(value || 0), 0);
              const value = Number(context.raw || 0);
              const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
              return `${context.label}: ${value} (${percentage}%)`;
            }
          }
        }
      },
      onClick(event, elements, chart) {
        const clickedElements = chart.getElementsAtEventForMode(
          event,
          'nearest',
          { intersect: true },
          true
        );

        if (!clickedElements.length) {
          selectedIndex = null;
          chart.update();
          renderAnalyticsRightPanel(null);
          return;
        }
        const index = clickedElements[0].index;
        selectedIndex = selectedIndex === index ? null : index;
        chart.update();
        renderAnalyticsRightPanel(selectedIndex === null ? null : (selectedIndex + 1));
      }
    },
    plugins: [centerTextPlugin]
  });

  renderAnalyticsRightPanel(null);
}

function renderDashboard() {
  const dash = document.getElementById('dashboard-content');
  const title = document.getElementById('dashboard-title');
  const chartsContainer = document.getElementById('charts-container');
  const topSortContainer = document.getElementById('sort-buttons');
  const defaultSortedStudents = getDefaultAnalyticsSortedStudents();
  if (topSortContainer) {
    topSortContainer.innerHTML = '';
  }
  
  if (isStaff) {
    title.textContent = '';
    renderUnifiedAnalytics(chartsContainer);
    dash.innerHTML = `<div id="analytics-insights"></div><div id="dashboard-filter-controls"></div><div id="staff-table"></div>`;
    renderAnalyticsInsights(document.getElementById('analytics-insights'));
    initializeDashboardFilters(true);
    dashboardFilteredStudents = [...defaultSortedStudents];
    renderTable(defaultSortedStudents, true);
  } else {
    title.textContent = '';
    if (chartsContainer) {
      chartsContainer.innerHTML = '';
    }
    if (dash) {
      dash.innerHTML = '';
    }
  }
}

function buildAnalyticsPieCard(chartId, title) {
  return `
    <div class="chart-card analytics-pie-card">
      <h3 style="text-align: center; margin-top: 0;">${title}</h3>
      <div class="analytics-pie-layout">
        <div class="analytics-pie-zone">
          <div class="analytics-pie-wrap">
          <canvas id="${chartId}" class="chart-canvas analytics-pie-canvas"></canvas>
          </div>
          <div class="analytics-pie-legend" id="${chartId}-legend"></div>
        </div>
      </div>
    </div>
  `;
}

function renderStyledAnalyticsPieChart({ chartId, labels, values, colors }) {
  const canvas = document.getElementById(chartId);
  const legend = document.getElementById(`${chartId}-legend`);
  if (!canvas || !legend) {
    return;
  }

  const total = values.reduce((sum, value) => sum + Number(value || 0), 0);

  const centerCoord = 160;
  const surroundingRadius = 140;
  const itemCount = Math.max(labels.length, 1);
  legend.innerHTML = labels.map((label, index) => {
    const value = Number(values[index] || 0);
    const percent = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
    const color = colors[index % colors.length];
    const angleDeg = (-90 + (360 / itemCount) * index);
    const angle = (angleDeg * Math.PI) / 180;
    const x = centerCoord + surroundingRadius * Math.cos(angle);
    const y = centerCoord + surroundingRadius * Math.sin(angle);

    return `
      <div class="analytics-pie-legend-item" data-index="${index}" style="left: ${x}px; top: ${y}px;">
        <span class="analytics-pie-legend-color" style="background-color: ${color};"></span>
        <span>${label} ${percent}%</span>
      </div>
    `;
  }).join('');

  const chart = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: colors,
        borderWidth: 0,
        hoverOffset: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '50%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label(context) {
              const label = context.label || '';
              const value = Number(context.raw || 0);
              const allValues = context.chart.data.datasets[0].data || [];
              const total = allValues.reduce((sum, item) => sum + Number(item || 0), 0);
              const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

function renderStudentAnalytics(container) {
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(3, minmax(0, 1fr))';
  container.style.gap = '1rem';
  container.style.marginBottom = '2rem';

  container.innerHTML = `
    ${buildAnalyticsPieCard('chart-interest', 'Interest Distribution')}
    ${buildAnalyticsPieCard('chart-placement', 'Placement Distribution')}
    ${buildAnalyticsPieCard('chart-student', 'Student Distribution')}
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
    const chartTheme = getChartThemeColors();

    const interestCounts = {};
    students.forEach(s => {
      const category = getInterestCategory(s.interest);
      interestCounts[category] = (interestCounts[category] || 0) + 1;
    });
    
    renderStyledAnalyticsPieChart({
      chartId: 'chart-interest',
      labels: Object.keys(interestCounts),
      values: Object.values(interestCounts),
      colors: ['#00E5FF', '#FF6B00', '#7C4DFF', '#AEEA00']
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

    renderStyledAnalyticsPieChart({
      chartId: 'chart-placement',
      labels: Object.keys(placementCounts),
      values: Object.values(placementCounts),
      colors: ['#00E5FF', '#FF3D71']
    });
    
    const yearCounts = {};
    students.forEach(s => {
      const yr = getYearLabel(s.year);
      yearCounts[yr] = (yearCounts[yr] || 0) + 1;
    });
    
    renderStyledAnalyticsPieChart({
      chartId: 'chart-student',
      labels: Object.keys(yearCounts),
      values: Object.values(yearCounts),
      colors: ['#00E5FF', '#FF6B00', '#7C4DFF', '#AEEA00', '#FFD600']
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
          x: { ticks: { color: chartTheme.axisTickColor }, grid: { color: chartTheme.axisGridColor } },
          y: { ticks: { color: chartTheme.axisTickColor }, grid: { color: chartTheme.axisGridColor }, beginAtZero: true }
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
          legend: { labels: { color: chartTheme.legendColor } }
        },
        scales: {
          r: {
            angleLines: { color: chartTheme.radarGridColor },
            grid: { color: chartTheme.radarGridColor },
            pointLabels: { color: chartTheme.radarPointLabelColor },
            ticks: { color: chartTheme.axisTickColor, backdropColor: chartTheme.radarTickBackdrop },
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
      type: 'line',
      data: {
        labels: topCoders.map(s => s.name),
        datasets: [{
          label: 'Problems Solved',
          data: topCoders.map(s => Number(s.codingProblems || 0)),
          backgroundColor: 'rgba(254, 197, 36, 0.22)',
          borderColor: '#E6A800',
          borderWidth: 2,
          tension: 0.28,
          fill: true,
          pointRadius: 4,
          pointHoverRadius: 5,
          pointBackgroundColor: '#FEC524'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { ticks: { color: chartTheme.axisTickColor }, grid: { color: chartTheme.axisGridColor } },
          y: { ticks: { color: chartTheme.axisTickColor }, grid: { color: chartTheme.axisGridColor }, beginAtZero: true }
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
    ${buildAnalyticsPieCard('chart-year3', 'Year 3 - Placement Status')}
    ${buildAnalyticsPieCard('chart-year4', 'Year 4 - Placement Status')}
  `;

  container.querySelectorAll('.chart-card').forEach((card) => {
    card.style.width = '100%';
    card.style.minWidth = '0';
  });
  
  setTimeout(() => {
    const year3Students = students.filter(s => getYearNumber(s.year) === 3);
    const year4Students = students.filter(s => getYearNumber(s.year) === 4);
    
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
    
    renderStyledAnalyticsPieChart({
      chartId: 'chart-year3',
      labels: criteria,
      values: criteria.map(c => year3Counts[c]),
      colors: ['#00E5FF', '#FF6B00', '#7C4DFF', '#AEEA00']
    });
    
    renderStyledAnalyticsPieChart({
      chartId: 'chart-year4',
      labels: criteria,
      values: criteria.map(c => year4Counts[c]),
      colors: ['#00E5FF', '#FF6B00', '#7C4DFF', '#AEEA00']
    });
  }, 0);
}

function initializeDashboardFilters(staffView, highlightId = null) {
  const container = document.getElementById('dashboard-filter-controls');
  if (!container) {
    return;
  }

  const source = Array.isArray(students) ? [...students] : [];
  const years = [...new Set(source.map((student) => getYearNumber(student.year)).filter(Boolean))].sort((a, b) => a - b);
  const departments = [...new Set(source.map((student) => String(student.dept || '').trim()).filter(Boolean))].sort();
  const interests = [...new Set(source.map((student) => getInterestCategory(student.interest)).filter(Boolean))].sort();
  const placementStatuses = ['Placed', 'Yet to be Placed'];

  const getRange = (values, fallbackMin, fallbackMax) => {
    const numericValues = values
      .map((value) => Number(value))
      .filter((value) => Number.isFinite(value));
    if (!numericValues.length) {
      return { min: fallbackMin, max: fallbackMax };
    }
    return {
      min: Math.floor(Math.min(...numericValues)),
      max: Math.ceil(Math.max(...numericValues))
    };
  };

  const codingRange = getRange(source.map((student) => student.codingProblems), 0, 1000);
  const cgpaRange = getRange(source.map((student) => student.gradePoints), 0, 10);
  const tenthRange = getRange(source.map((student) => student.tenthPercentage), 0, 100);
  const twelfthRange = getRange(source.map((student) => student.twelfthPercentage), 0, 100);

  const makeCheckboxes = (name, items, formatter = (item) => item) => items.map((item) => `
    <label class="dashboard-filter-check">
      <input type="checkbox" name="${name}" value="${item}" checked>
      <span>${formatter(item)}</span>
    </label>
  `).join('');

  const makeMetricCheckboxes = () => dashboardMetricOrder.map((key) => `
    <label class="dashboard-filter-check">
      <input type="checkbox" name="dashboard-visible-metric" value="${key}" ${dashboardVisibleMetrics.has(key) ? 'checked' : ''}>
      <span>${dashboardMetricLabels[key]}</span>
    </label>
  `).join('');

  const formatYearLabel = (year) => getYearLabel(year);

  container.innerHTML = `
    <div class="dashboard-filter-toolbar">
      <button type="button" id="dashboard-filter-toggle" class="dashboard-filter-btn">Filters</button>
      <div class="dashboard-export-actions">
        <button type="button" id="dashboard-export-csv" class="dashboard-export-btn">Export CSV</button>
        <button type="button" id="dashboard-export-excel" class="dashboard-export-btn">Export Excel</button>
      </div>
    </div>
    <div id="dashboard-filter-panel" class="dashboard-filter-panel" style="display:none;">
      <div class="dashboard-filter-dialog">
        <div class="dashboard-filter-dialog-header">
          <h3>Filter Students</h3>
          <div class="dashboard-filter-header-sort">
            <div class="dashboard-filter-header-sort-row">
              <label for="dashboard-sort-key">Sort by</label>
              <select id="dashboard-sort-key">
                <option value="codingProblems">Coding Problems</option>
                <option value="gradePoints">CGPA</option>
                <option value="tenthPercentage">10th %</option>
                <option value="twelfthPercentage">12th %</option>
                <option value="internships">Internships</option>
                <option value="certifications">Certifications</option>
                <option value="year">Year</option>
                <option value="interest">Interest</option>
                <option value="name">Name</option>
              </select>
            </div>
            <div class="dashboard-filter-header-sort-row">
              <label for="dashboard-sort-dir">Direction</label>
              <select id="dashboard-sort-dir">
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </div>
          </div>
          <button type="button" id="dashboard-filter-close" class="dashboard-filter-close" aria-label="Close filters">×</button>
        </div>
      <div class="dashboard-filter-grid">
        <div class="dashboard-filter-group dashboard-filter-group--year">
          <h4>Year</h4>
          <div class="dashboard-filter-list">
            ${makeCheckboxes('dashboard-year', years, formatYearLabel)}
          </div>
        </div>

        <div class="dashboard-filter-group dashboard-filter-group--departments">
          <h4>Departments</h4>
          <div class="dashboard-filter-list dashboard-filter-list--departments">
            ${makeCheckboxes('dashboard-dept', departments)}
          </div>
        </div>

        <div class="dashboard-filter-group dashboard-filter-group--interest">
          <h4>Placement Interest</h4>
          <div class="dashboard-filter-list dashboard-filter-list--interest">
            ${makeCheckboxes('dashboard-interest', interests)}
          </div>
        </div>

        <div class="dashboard-filter-group dashboard-filter-group--placement-status">
          <h4>Placement Status</h4>
          <div class="dashboard-filter-list dashboard-filter-list--placement-status">
            ${makeCheckboxes('dashboard-placement-status', placementStatuses, (status) => status === 'Placed' ? 'Placed Students' : 'Yet to be Placed Students')}
          </div>
        </div>
      </div>

      <div class="dashboard-metric-grid">
        <div class="dashboard-filter-group dashboard-filter-group--coding dashboard-filter-group--inline-range">
          <h4>Coding Problems</h4>
          <div class="dashboard-range-wrap">
            <div class="dashboard-number-range">
              <label for="coding-min">Min</label>
              <input type="number" id="coding-min" min="${codingRange.min}" max="${codingRange.max}" value="${codingRange.min}">
            </div>
            <div class="dashboard-number-range">
              <label for="coding-max">Max</label>
              <input type="number" id="coding-max" min="${codingRange.min}" max="${codingRange.max}" value="${codingRange.max}">
            </div>
          </div>
        </div>

        <div class="dashboard-filter-group dashboard-filter-group--cgpa dashboard-filter-group--inline-range">
          <h4>CGPA</h4>
          <div class="dashboard-range-wrap">
            <div class="dashboard-number-range">
              <label for="cgpa-min">Min</label>
              <input type="number" id="cgpa-min" min="${cgpaRange.min}" max="${cgpaRange.max}" step="0.1" value="${cgpaRange.min}">
            </div>
            <div class="dashboard-number-range">
              <label for="cgpa-max">Max</label>
              <input type="number" id="cgpa-max" min="${cgpaRange.min}" max="${cgpaRange.max}" step="0.1" value="${cgpaRange.max}">
            </div>
          </div>
        </div>

        <div class="dashboard-filter-group dashboard-filter-group--tenth dashboard-filter-group--inline-range">
          <h4>10th %</h4>
          <div class="dashboard-range-wrap">
            <div class="dashboard-number-range">
              <label for="tenth-min">Min</label>
              <input type="number" id="tenth-min" min="${tenthRange.min}" max="${tenthRange.max}" step="0.1" value="${tenthRange.min}">
            </div>
            <div class="dashboard-number-range">
              <label for="tenth-max">Max</label>
              <input type="number" id="tenth-max" min="${tenthRange.min}" max="${tenthRange.max}" step="0.1" value="${tenthRange.max}">
            </div>
          </div>
        </div>

        <div class="dashboard-filter-group dashboard-filter-group--twelfth dashboard-filter-group--inline-range">
          <h4>12th %</h4>
          <div class="dashboard-range-wrap">
            <div class="dashboard-number-range">
              <label for="twelfth-min">Min</label>
              <input type="number" id="twelfth-min" min="${twelfthRange.min}" max="${twelfthRange.max}" step="0.1" value="${twelfthRange.min}">
            </div>
            <div class="dashboard-number-range">
              <label for="twelfth-max">Max</label>
              <input type="number" id="twelfth-max" min="${twelfthRange.min}" max="${twelfthRange.max}" step="0.1" value="${twelfthRange.max}">
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard-filter-group dashboard-filter-group--metric-visibility">
        <h4>Visible Metrics</h4>
        <div class="dashboard-filter-list dashboard-filter-list--metric-visibility">
          ${makeMetricCheckboxes()}
        </div>
      </div>
      <div class="dashboard-filter-actions">
        <button type="button" id="dashboard-filter-apply" class="dashboard-filter-action-btn">Apply</button>
        <button type="button" id="dashboard-filter-reset" class="dashboard-filter-action-btn dashboard-filter-action-btn--ghost">Reset</button>
      </div>
      </div>
    </div>
  `;

  const panel = document.getElementById('dashboard-filter-panel');
  const toggleBtn = document.getElementById('dashboard-filter-toggle');
  const closeBtn = document.getElementById('dashboard-filter-close');
  const dialog = panel ? panel.querySelector('.dashboard-filter-dialog') : null;
  const applyBtn = document.getElementById('dashboard-filter-apply');
  const resetBtn = document.getElementById('dashboard-filter-reset');
  const exportCsvBtn = document.getElementById('dashboard-export-csv');
  const exportExcelBtn = document.getElementById('dashboard-export-excel');

  const closePanel = () => {
    if (panel) {
      panel.style.display = 'none';
    }
  };

  if (toggleBtn && panel) {
    toggleBtn.addEventListener('click', () => {
      panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closePanel);
  }

  if (panel) {
    panel.addEventListener('click', (event) => {
      if (event.target === panel) {
        closePanel();
      }
    });
  }

  if (dialog) {
    dialog.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      applyDashboardFilters(staffView, highlightId);
      closePanel();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => initializeDashboardFilters(staffView, highlightId));
  }

  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', exportFilteredDataAsCsv);
  }

  if (exportExcelBtn) {
    exportExcelBtn.addEventListener('click', exportFilteredDataAsExcel);
  }
}

function applyDashboardFilters(staffView, highlightId = null) {
  const getCheckedValues = (name, asNumber = false) => Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
    .map((input) => (asNumber ? Number(input.value) : input.value));

  const selectedYears = getCheckedValues('dashboard-year', true);
  const selectedDepts = getCheckedValues('dashboard-dept');
  const selectedInterests = getCheckedValues('dashboard-interest');
  const selectedPlacementStatuses = getCheckedValues('dashboard-placement-status');
  const selectedVisibleMetrics = getCheckedValues('dashboard-visible-metric');

  const codingMin = Number(document.getElementById('coding-min')?.value || 0);
  const codingMax = Number(document.getElementById('coding-max')?.value || Number.MAX_SAFE_INTEGER);
  const cgpaMin = Number(document.getElementById('cgpa-min')?.value || 0);
  const cgpaMax = Number(document.getElementById('cgpa-max')?.value || 10);
  const tenthMin = Number(document.getElementById('tenth-min')?.value || 0);
  const tenthMax = Number(document.getElementById('tenth-max')?.value || 100);
  const twelfthMin = Number(document.getElementById('twelfth-min')?.value || 0);
  const twelfthMax = Number(document.getElementById('twelfth-max')?.value || 100);
  const sortKey = document.getElementById('dashboard-sort-key')?.value || 'codingProblems';
  const sortDir = document.getElementById('dashboard-sort-dir')?.value || 'desc';

  dashboardVisibleMetrics = new Set(selectedVisibleMetrics);

  const inRange = (value, min, max) => value >= min && value <= max;
  const toNumberOrNull = (value) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : null;
  };

  let filtered = [...students].filter((student) => {
    const year = getYearNumber(student.year);
    const coding = Number(student.codingProblems || 0);
    const cgpa = Number(student.gradePoints || 0);
    const tenth = toNumberOrNull(student.tenthPercentage);
    const twelfth = toNumberOrNull(student.twelfthPercentage);

    const yearOk = selectedYears.length ? selectedYears.includes(year) : true;
    const deptOk = selectedDepts.length ? selectedDepts.includes(String(student.dept || '')) : true;
    const interestOk = selectedInterests.length ? selectedInterests.includes(getInterestCategory(student.interest)) : true;
    const codingOk = inRange(coding, Math.min(codingMin, codingMax), Math.max(codingMin, codingMax));
    const cgpaOk = inRange(cgpa, Math.min(cgpaMin, cgpaMax), Math.max(cgpaMin, cgpaMax));
    const tenthOk = tenth === null ? true : inRange(tenth, Math.min(tenthMin, tenthMax), Math.max(tenthMin, tenthMax));
    const twelfthOk = twelfth === null ? true : inRange(twelfth, Math.min(twelfthMin, twelfthMax), Math.max(twelfthMin, twelfthMax));
    const statusLabel = getPlacementStatusLabel(student);
    const placementStatusOk = selectedPlacementStatuses.length ? selectedPlacementStatuses.includes(statusLabel) : true;

    return yearOk && deptOk && interestOk && codingOk && cgpaOk && tenthOk && twelfthOk && placementStatusOk;
  });

  const numericSortKeys = new Set(['codingProblems', 'gradePoints', 'tenthPercentage', 'twelfthPercentage', 'internships', 'certifications', 'year']);
  filtered.sort((a, b) => {
    let compare = 0;
    if (numericSortKeys.has(sortKey)) {
      if (sortKey === 'year') {
        compare = getYearNumber(a.year) - getYearNumber(b.year);
      } else {
        compare = Number(a[sortKey] || 0) - Number(b[sortKey] || 0);
      }
    } else {
      compare = String(a[sortKey] || '').localeCompare(String(b[sortKey] || ''));
    }
    return sortDir === 'asc' ? compare : -compare;
  });

  dashboardFilteredStudents = filtered;
  currentDashboardSortKey = sortKey;
  renderTable(filtered, staffView, highlightId, sortKey);
}

function downloadBlob(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function getStudentById(studentId) {
  return students.find((student) => String(student.id) === String(studentId));
}

function ensureAnalyticsProfileModal() {
  let modalOverlay = document.getElementById('analytics-profile-modal');
  if (modalOverlay) {
    return modalOverlay;
  }

  const modalMarkup = `
    <div id="analytics-profile-modal" class="company-modal-overlay" aria-hidden="true">
      <div class="company-modal-card analytics-profile-card" role="dialog" aria-modal="true" aria-label="Student profile">
        <button type="button" class="company-modal-close" id="analytics-profile-close" aria-label="Close profile">×</button>
        <div class="analytics-profile-nav">
          <button type="button" id="analytics-profile-prev" class="analytics-profile-nav-btn" aria-label="Previous profile">←</button>
          <div id="analytics-profile-counter" class="analytics-profile-counter"></div>
          <button type="button" id="analytics-profile-next" class="analytics-profile-nav-btn" aria-label="Next profile">→</button>
        </div>
        <div id="analytics-profile-content"></div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalMarkup);

  modalOverlay = document.getElementById('analytics-profile-modal');
  const closeBtn = document.getElementById('analytics-profile-close');
  const prevBtn = document.getElementById('analytics-profile-prev');
  const nextBtn = document.getElementById('analytics-profile-next');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeAnalyticsProfileModal);
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => navigateAnalyticsProfile(-1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => navigateAnalyticsProfile(1));
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (event) => {
      if (event.target === modalOverlay) {
        closeAnalyticsProfileModal();
      }
    });
  }

  if (!document.body.dataset.analyticsProfileModalKeysBound) {
    document.addEventListener('keydown', (event) => {
      const activeModal = document.getElementById('analytics-profile-modal');
      const isActive = !!(activeModal && activeModal.classList.contains('active'));
      if (!isActive) {
        return;
      }

      if (event.key === 'Escape') {
        closeAnalyticsProfileModal();
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        navigateAnalyticsProfile(-1);
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        navigateAnalyticsProfile(1);
      }
    });
    document.body.dataset.analyticsProfileModalKeysBound = '1';
  }

  return modalOverlay;
}

function renderAnalyticsProfileContent(student) {
  const profileContainer = document.getElementById('analytics-profile-content');
  if (!profileContainer) {
    return;
  }

  if (!student) {
    profileContainer.innerHTML = '<p style="margin: 0; color: #999;">Unable to load profile details.</p>';
    return;
  }

  profileContainer.innerHTML = `
    <div class="company-modal-header" style="margin-bottom: 0.75rem;">
      <div>
        <h3 style="margin: 0 0 0.15rem 0;">${student.name || 'N/A'}</h3>
        <p style="margin: 0; color: #999;">${student.dept || 'N/A'} • ${getYearLabel(student.year)}</p>
      </div>
    </div>
    <div class="analytics-profile-grid">
      <div><strong>Roll No:</strong> ${student.rollNo || 'N/A'}</div>
      <div><strong>Register No:</strong> ${student.registerNo || 'N/A'}</div>
      <div><strong>Section:</strong> ${student.section || 'N/A'}</div>
      <div><strong>CGPA:</strong> ${student.gradePoints ?? 'N/A'}</div>
      <div><strong>Coding Problems:</strong> ${student.codingProblems ?? 0}</div>
      <div><strong>Internships:</strong> ${student.internships ?? 0}</div>
      <div><strong>Certifications:</strong> ${student.certifications ?? 0}</div>
      <div><strong>10th %:</strong> ${student.tenthPercentage ?? 'N/A'}</div>
      <div><strong>12th %:</strong> ${student.twelfthPercentage ?? 'N/A'}</div>
      <div><strong>Interest:</strong> ${student.interest || 'N/A'}</div>
      <div style="grid-column: 1 / -1;"><strong>Email:</strong> ${student.email || 'N/A'}</div>
    </div>
  `;
}

function updateAnalyticsProfileModal() {
  const total = analyticsProfileFilteredIds.length;
  const counter = document.getElementById('analytics-profile-counter');
  if (!total || analyticsProfileCurrentIndex < 0) {
    if (counter) {
      counter.textContent = '0 / 0';
    }
    renderAnalyticsProfileContent(null);
    return;
  }

  const normalizedIndex = ((analyticsProfileCurrentIndex % total) + total) % total;
  analyticsProfileCurrentIndex = normalizedIndex;
  const studentId = analyticsProfileFilteredIds[normalizedIndex];
  const student = getStudentById(studentId);
  if (counter) {
    counter.textContent = `${normalizedIndex + 1} / ${total}`;
  }
  renderAnalyticsProfileContent(student);
}

function openAnalyticsProfileModal(studentId) {
  const modalOverlay = ensureAnalyticsProfileModal();
  if (!modalOverlay) {
    return;
  }

  if (!analyticsProfileFilteredIds.length) {
    analyticsProfileFilteredIds = (dashboardFilteredStudents || []).map((student) => String(student.id)).filter(Boolean);
  }

  analyticsProfileCurrentIndex = analyticsProfileFilteredIds.indexOf(String(studentId));
  if (analyticsProfileCurrentIndex < 0) {
    analyticsProfileCurrentIndex = 0;
  }

  updateAnalyticsProfileModal();
  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function navigateAnalyticsProfile(step) {
  if (!analyticsProfileFilteredIds.length) {
    return;
  }
  analyticsProfileCurrentIndex += step;
  updateAnalyticsProfileModal();
}

function closeAnalyticsProfileModal() {
  const modalOverlay = document.getElementById('analytics-profile-modal');
  if (!modalOverlay) {
    return;
  }
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function bindAnalyticsProfileNameClicks() {
  document.querySelectorAll('.analytics-name-btn').forEach((button) => {
    button.addEventListener('click', () => {
      openAnalyticsProfileModal(button.dataset.studentId);
    });
  });
}

function getFilteredExportRows() {
  const metricValueMap = {
    codingProblems: (student) => student.codingProblems || 0,
    internships: (student) => student.internships || 0,
    certifications: (student) => student.certifications || 0,
    gradePoints: (student) => student.gradePoints || '',
    tenthPercentage: (student) => student.tenthPercentage ?? '',
    twelfthPercentage: (student) => student.twelfthPercentage ?? '',
    diplomaPercentage: (student) => student.diplomaPercentage ?? '',
    placementStatus: (student) => getPlacementStatusLabel(student),
    year: (student) => getYearLabel(student.year),
    interest: (student) => student.interest || '',
    rollNo: (student) => student.rollNo || '',
    registerNo: (student) => student.registerNo || '',
    section: (student) => student.section || '',
    gender: (student) => student.gender || '',
    residencyType: (student) => student.residencyType || '',
    personalMail: (student) => student.personalMail || '',
    collegeMail: (student) => student.collegeMail || student.email || '',
    contactNo: (student) => student.contactNo || '',
    address: (student) => student.address || '',
    resumeLink: (student) => student.resumeLink || '',
    preferredRoles: (student) => student.preferredRoles || '',
    preferredShift: (student) => student.preferredShift || '',
    travelPriority: (student) => student.travelPriority || '',
    achievements: (student) => student.achievements || ''
  };

  const visibleMetricKeys = dashboardMetricOrder.filter((key) => dashboardVisibleMetrics.has(key));
  return (dashboardFilteredStudents && dashboardFilteredStudents.length ? dashboardFilteredStudents : students).map((student) => {
    const row = {
      Name: student.name || '',
      Department: student.dept || ''
    };

    visibleMetricKeys.forEach((key) => {
      row[dashboardMetricLabels[key]] = metricValueMap[key](student);
    });

    return row;
  });
}

function exportFilteredDataAsCsv() {
  const rows = getFilteredExportRows();
  const headers = Object.keys(rows[0] || {});
  const escapeCsv = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;
  const csv = [headers.join(','), ...rows.map((row) => headers.map((header) => escapeCsv(row[header])).join(','))].join('\n');
  downloadBlob(csv, 'filtered_students.csv', 'text/csv;charset=utf-8;');
}

function exportFilteredDataAsExcel() {
  const rows = getFilteredExportRows();
  const headers = Object.keys(rows[0] || {});
  const tableHeader = headers.map((header) => `<th>${header}</th>`).join('');
  const tableRows = rows.map((row) => `<tr>${headers.map((header) => `<td>${row[header] ?? ''}</td>`).join('')}</tr>`).join('');
  const html = `<table><thead><tr>${tableHeader}</tr></thead><tbody>${tableRows}</tbody></table>`;
  downloadBlob(html, 'filtered_students.xls', 'application/vnd.ms-excel;charset=utf-8;');
}

function renderTable(data, staffView, highlightId, sortKey = currentDashboardSortKey) {
  const columnDefs = {
    codingProblems: {
      header: 'Coding Problems',
      cell: (s) => `<span id="val-problems-${s.id}">${s.codingProblems}</span>${staffView ? `<input type="number" id="input-problems-${s.id}" value="${s.codingProblems}" style="display:none;">` : ''}`
    },
    internships: {
      header: 'Internships',
      cell: (s) => `<span id="val-internships-${s.id}">${s.internships}</span>${staffView ? `<input type="number" id="input-internships-${s.id}" value="${s.internships}" style="display:none;">` : ''}`
    },
    certifications: {
      header: 'Certifications',
      cell: (s) => `<span id="val-certs-${s.id}">${s.certifications}</span>${staffView ? `<input type="number" id="input-certs-${s.id}" value="${s.certifications}" style="display:none;">` : ''}`
    },
    gradePoints: {
      header: 'Grade Points',
      cell: (s) => `<span id="val-grade-${s.id}">${s.gradePoints}</span>${staffView ? `<input type="number" step="0.1" id="input-grade-${s.id}" value="${s.gradePoints}" style="display:none;">` : ''}`
    },
    tenthPercentage: {
      header: '10th %',
      cell: (s) => `${s.tenthPercentage ?? 'N/A'}`
    },
    twelfthPercentage: {
      header: '12th %',
      cell: (s) => `${s.twelfthPercentage ?? 'N/A'}`
    },
    diplomaPercentage: {
      header: 'Diploma %',
      cell: (s) => `${s.diplomaPercentage ?? 'N/A'}`
    },
    placementStatus: {
      header: 'Placed/Yet to be Placed',
      cell: (s) => `${getPlacementStatusLabel(s)}`
    },
    year: {
      header: 'Year',
      cell: (s) => `<span id="val-year-${s.id}">${getYearLabel(s.year)}</span>${staffView ? `<input type="number" id="input-year-${s.id}" min="1" max="4" value="${getYearNumber(s.year) || ''}" style="display:none;">` : ''}`
    },
    interest: {
      header: 'Interest',
      cell: (s) => `<span id="val-interest-${s.id}">${s.interest}</span>${staffView ? `<input type="text" id="input-interest-${s.id}" value="${s.interest}" style="display:none;">` : ''}`
    },
    rollNo: {
      header: 'Roll No',
      cell: (s) => `${s.rollNo || 'N/A'}`
    },
    registerNo: {
      header: 'Register No',
      cell: (s) => `${s.registerNo || 'N/A'}`
    },
    section: {
      header: 'Section',
      cell: (s) => `${s.section || 'N/A'}`
    },
    gender: {
      header: 'Gender',
      cell: (s) => `${s.gender || 'N/A'}`
    },
    residencyType: {
      header: 'Dayscholar/Hostel',
      cell: (s) => `${s.residencyType || 'N/A'}`
    },
    personalMail: {
      header: 'Personal Mail',
      cell: (s) => `${s.personalMail || 'N/A'}`
    },
    collegeMail: {
      header: 'Clg Mail',
      cell: (s) => `${s.collegeMail || s.email || 'N/A'}`
    },
    contactNo: {
      header: 'Contact No',
      cell: (s) => `${s.contactNo || 'N/A'}`
    },
    address: {
      header: 'Address',
      cell: (s) => `${s.address || 'N/A'}`
    },
    resumeLink: {
      header: 'Resume Link',
      cell: (s) => s.resumeLink ? `<a href="${s.resumeLink}" target="_blank" rel="noopener noreferrer">Resume</a>` : 'N/A'
    },
    preferredRoles: {
      header: 'Gender Specific Roles',
      cell: (s) => `${s.preferredRoles || 'N/A'}`
    },
    preferredShift: {
      header: 'Shift Priority',
      cell: (s) => `${s.preferredShift || 'N/A'}`
    },
    travelPriority: {
      header: 'Travel Priority',
      cell: (s) => `${s.travelPriority || 'N/A'}`
    },
    achievements: {
      header: 'Achievements',
      cell: (s) => `${s.achievements || 'N/A'}`
    }
  };

  const baseOrder = [...dashboardMetricOrder];
  const visibleColumns = baseOrder.filter((key) => dashboardVisibleMetrics.has(key));
  const orderedColumns = [...visibleColumns];
  const yearIndex = orderedColumns.indexOf('year');
  if (yearIndex > 0) {
    orderedColumns.splice(yearIndex, 1);
    orderedColumns.unshift('year');
  }

  const tableHtml = `<table><thead><tr>
    <th>Name</th>
    <th>Dept</th>
    ${orderedColumns.map((key) => `<th>${columnDefs[key].header}</th>`).join('')}
    ${staffView ? '<th>Action</th>' : ''}
  </tr></thead><tbody>
    ${data.map(s => `<tr${!staffView && highlightId === s.id ? ' style="background:rgba(254, 197, 36, 0.15);border-left:3px solid #FEC524;"' : ''}>
      <td>${staffView ? `<button type="button" class="analytics-name-btn" data-student-id="${s.id}">${s.name}</button>` : s.name}</td>
      <td>${s.dept}</td>
      ${orderedColumns.map((key) => `<td>${columnDefs[key].cell(s)}</td>`).join('')}
      ${staffView ? `<td><button class="btn" style="width: 80px; padding: 0.4rem 0.8rem; font-size: 0.85rem;" id="btn-${s.id}" onclick="toggleEdit(${s.id})">Edit</button><button class="btn" style="width: 80px; padding: 0.4rem 0.8rem; font-size: 0.85rem; display: none; background: #E6A800;" id="save-${s.id}" onclick="saveEdit(${s.id})">Save</button></td>` : ''}
    </tr>`).join('')}
  </tbody></table>`;
  if (staffView) {
    document.getElementById('staff-table').innerHTML = tableHtml;
    analyticsProfileFilteredIds = (Array.isArray(data) ? data : []).map((student) => String(student.id)).filter(Boolean);
    bindAnalyticsProfileNameClicks();

    const modalOverlay = document.getElementById('analytics-profile-modal');
    if (modalOverlay && modalOverlay.classList.contains('active')) {
      const currentStudentId = analyticsProfileFilteredIds[analyticsProfileCurrentIndex];
      if (!currentStudentId && analyticsProfileFilteredIds.length) {
        analyticsProfileCurrentIndex = 0;
      } else if (currentStudentId) {
        analyticsProfileCurrentIndex = analyticsProfileFilteredIds.indexOf(currentStudentId);
      }
      if (analyticsProfileFilteredIds.length) {
        updateAnalyticsProfileModal();
      } else {
        closeAnalyticsProfileModal();
      }
    }
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
      input.value = field === 'year' ? String(getYearNumber(student.year) || '') : span.textContent;
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
      span.textContent = field === 'problems' ? problems : field === 'internships' ? internships : field === 'certs' ? certs : field === 'grade' ? grade : getYearLabel(year);
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

function renderProfile() {
  const profileContent = document.getElementById('profile-content');

  if (!isStaff && currentUser) {
    const interestCategory = getInterestCategory(currentUser.interest);
    const displayName = currentUser.name || 'N/A';
    const displayPhoto = currentUser.linkedinPhotoUrl || '';
    const displayHeadline = currentUser.linkedinHeadline || `${currentUser.dept || 'Student'} • Year ${currentUser.year || 'N/A'}`;
    const twelfthPercentage = currentUser.twelfthPercentage ?? 'N/A';
    const tenthPercentage = currentUser.tenthPercentage ?? 'N/A';
    const studentsData = Array.isArray(students) ? [...students] : [];
    const cgpaRanked = [...studentsData].sort((a, b) => Number(b.gradePoints || 0) - Number(a.gradePoints || 0));
    const codingRanked = [...studentsData].sort((a, b) => Number(b.codingProblems || 0) - Number(a.codingProblems || 0));
    const scoreMeta = getDynamicScoreMeta(studentsData);
    const overallRanked = [...studentsData].sort((a, b) => getDynamicPlacementScore(b, scoreMeta) - getDynamicPlacementScore(a, scoreMeta));
    const cgpaTopPercent = getTopPercentile(cgpaRanked, currentUser);
    const codingTopPercent = getTopPercentile(codingRanked, currentUser);
    const overallTopPercent = getTopPercentile(overallRanked, currentUser);

    // Student profile view - 3 box top row with LeetCode in second column
    profileContent.innerHTML = `
      <div class="profile-summary-grid" style="margin-bottom: 1rem;">
        <div class="card profile-summary-card profile-summary-card--identity">
          <div class="profile-summary-header" style="flex-direction: column; align-items: center; text-align: center; gap: 1rem;">
            ${displayPhoto
              ? `<img src="${displayPhoto}" alt="${displayName}" class="profile-avatar-medium" style="width: 120px; height: 120px; border-radius: 50%;">`
              : `<div class="profile-avatar-fallback profile-avatar-medium" style="width: 120px; height: 120px;">${(displayName || 'S').charAt(0).toUpperCase()}</div>`}
            <div class="profile-identity-block" style="width: 100%;">
              <h3 style="margin-bottom: 0.25rem;">${displayName}</h3>
              <p style="margin: 0; font-size: 0.9rem; color: #999;">${currentUser.dept || 'Student'} • Year ${currentUser.year || 'N/A'}</p>
            </div>
          </div>
          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #333;">
            <p class="profile-meta" style="margin-bottom: 0.75rem;">${currentUser.email || 'N/A'}</p>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div
                id="profile-interest-switch"
                class="profile-interest-switch"
                data-state="${getInterestStateKey(interestCategory)}"
              >
                <div class="profile-interest-labels">
                  ${['Placements', 'Higher Studies', 'Entrepreneurship'].map(option => `
                    <label class="profile-interest-option ${interestCategory === option ? 'active' : ''}">
                      <input
                        type="radio"
                        name="profile-interest-radio"
                        value="${option}"
                        disabled
                        ${interestCategory === option ? 'checked' : ''}
                      >
                      <span>${option}</span>
                    </label>
                  `).join('')}
                </div>
                <div class="profile-interest-track">
                  <div class="profile-interest-thumb"></div>
                </div>
              </div>
              <button class="btn profile-linkedin-btn" onclick="connectLinkedIn()" type="button">
                ${currentUser.linkedinName ? 'Update LinkedIn' : 'Connect LinkedIn'}
              </button>
            </div>
          </div>
        </div>

        <div class="card profile-summary-card profile-summary-card--leetcode">
          <div class="profile-leetcode-header" style="display: flex; justify-content: space-between; align-items: center; gap: 1rem;">
            <h4 class="profile-box-title" style="margin-bottom: 0;">LeetCode</h4>
            <div style="text-align: right; font-size: 0.85rem;">
              <div style="color: #999;">@${currentUser.leetcodeUsername || 'Not set'}</div>
              <div style="color: #666; font-size: 0.8rem;">
                Rank ${currentUser.leetcodeRanking ? '#' + currentUser.leetcodeRanking.toLocaleString() : 'N/A'}
              </div>
            </div>
          </div>
          <div id="leetcode-stats-container"></div>
        </div>

        <div class="card profile-summary-card profile-summary-card--academics">
          <h4 class="profile-box-title">Academics</h4>
          <div class="profile-academics-list">
            <div><strong>CGPA:</strong> <span>${currentUser.gradePoints || 'N/A'}</span></div>
            <div><strong>12th %:</strong> <span>${twelfthPercentage}</span></div>
            <div><strong>10th %:</strong> <span>${tenthPercentage}</span></div>
            <div><strong>Diploma %:</strong> <span>${currentUser.diplomaPercentage ?? 'N/A'}</span></div>
            <div><strong>Register No:</strong> <span>${currentUser.registerNo || 'N/A'}</span></div>
            <div><strong>Section:</strong> <span>${currentUser.section || 'N/A'}</span></div>
            <div><strong>Gender:</strong> <span>${currentUser.gender || 'N/A'}</span></div>
          </div>
        </div>
      </div>

      <div class="card profile-percentile-card" style="margin-bottom: 1rem;">
        <h4 class="profile-box-title" style="margin-bottom: 0.75rem;">Company Preferences & Achievements</h4>
        <div class="profile-percentile-list">
          <div class="profile-percentile-item"><strong>Gender Specific Roles:</strong> ${currentUser.preferredRoles || 'N/A'}</div>
          <div class="profile-percentile-item"><strong>Shift Priority:</strong> ${currentUser.preferredShift || 'N/A'}</div>
          <div class="profile-percentile-item"><strong>Travel Priority:</strong> ${currentUser.travelPriority || 'N/A'}</div>
          <div class="profile-percentile-item"><strong>Achievements:</strong> ${currentUser.achievements || 'N/A'}</div>
        </div>
      </div>

      <div class="card profile-percentile-card">
        <h4 class="profile-box-title" style="margin-bottom: 0.75rem;">Your Performance Insights</h4>
        <div class="profile-percentile-list">
          <div class="profile-percentile-item">You are in the <strong>Top ${cgpaTopPercent}%</strong> in CGPA.</div>
          <div class="profile-percentile-item">You are in the <strong>Top ${codingTopPercent}%</strong> in Coding Problems.</div>
          <div class="profile-percentile-item">Overall, you are in the <strong>Top ${overallTopPercent}%</strong> in Placement Readiness Score.</div>
        </div>
      </div>
    `;
    
    // Auto-fetch LeetCode stats if username is set
    if (currentUser.leetcodeUsername) {
      fetchAndDisplayLeetCodeStats(currentUser.leetcodeUsername);
    } else {
      const leetcodeContainer = document.getElementById('leetcode-stats-container');
      if (leetcodeContainer) {
        leetcodeContainer.innerHTML = '<p style="margin: 0.5rem 0 0 0; color: #999;">LeetCode username not set.</p>';
      }
    }
  } else if (isStaff) {
    const adminRows = (Array.isArray(students) ? students : []).map((student) => `
      <tr>
        <td>${student.name || 'N/A'}</td>
        <td>${student.rollNo || 'N/A'}</td>
        <td>${student.registerNo || 'N/A'}</td>
        <td>${student.dept || 'N/A'}</td>
        <td>${student.section || 'N/A'}</td>
        <td>${student.gender || 'N/A'}</td>
        <td>${student.residencyType || 'N/A'}</td>
        <td>${student.tenthPercentage ?? 'N/A'}</td>
        <td>${student.twelfthPercentage ?? 'N/A'}</td>
        <td>${student.diplomaPercentage ?? 'N/A'}</td>
        <td>${student.gradePoints ?? 'N/A'}</td>
        <td>${student.personalMail || 'N/A'}</td>
        <td>${student.collegeMail || student.email || 'N/A'}</td>
        <td>${student.contactNo || 'N/A'}</td>
        <td>${student.address || 'N/A'}</td>
        <td>${student.resumeLink ? `<a href="${student.resumeLink}" target="_blank" rel="noopener noreferrer">Resume</a>` : 'N/A'}</td>
        <td>${student.preferredRoles || 'N/A'}</td>
        <td>${student.preferredShift || 'N/A'}</td>
        <td>${student.travelPriority || 'N/A'}</td>
        <td>${student.achievements || 'N/A'}</td>
      </tr>
    `).join('');

    profileContent.innerHTML = `
      <div class="card" style="padding: 1.25rem; margin-bottom: 1.25rem;">
        <h3 style="margin-top: 0;">Manual LeetCode Stats Update (Staff Only)</h3>
        <p style="margin: 0.5rem 0 1rem 0; color: #999;">Note: Stats are automatically updated daily at 10 PM. Use this button to fetch and cache stats immediately.</p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
          <button class="btn" id="leetcode-sync-btn" type="button">Sync LeetCode Stats Now</button>
        </div>
      </div>
      <div class="card" style="padding: 1.25rem; margin-bottom: 1.25rem;">
        <h3 style="margin-top: 0; margin-bottom: 0.9rem;">Admin Data (Minimal Single Page)</h3>
        <div style="overflow-x: auto;">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Register No</th>
                <th>Dept</th>
                <th>Section</th>
                <th>Gender</th>
                <th>Dayscholar/Hostel</th>
                <th>10th %</th>
                <th>12th %</th>
                <th>Diploma %</th>
                <th>CGPA</th>
                <th>Personal Mail</th>
                <th>Clg Mail</th>
                <th>Contact No</th>
                <th>Address</th>
                <th>Resume Link</th>
                <th>Gender Specific Roles</th>
                <th>Shift Priority</th>
                <th>Travel Priority</th>
                <th>Achievements</th>
              </tr>
            </thead>
            <tbody>
              ${adminRows || '<tr><td colspan="20" style="text-align:center; color:#999;">No student data found</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
      <div id="leetcode-result"></div>
    `;
    
    const syncBtn = document.getElementById('leetcode-sync-btn');
    if (syncBtn) {
      syncBtn.addEventListener('click', triggerLeetCodeSync);
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
  const easySolved = Number(data.solved?.easy || 0);
  const mediumSolved = Number(data.solved?.medium || 0);
  const hardSolved = Number(data.solved?.hard || 0);
  const totalSolved = Math.max(Number(data.solved?.all || (easySolved + mediumSolved + hardSolved)), 0);

  const totalQuestions = Math.max(Number(data.totalQuestions?.all || 3851), 1);
  const defaultDifficultyTotal = totalQuestions / 3;
  const easyTotal = Math.max(Number(data.totalQuestions?.easy || defaultDifficultyTotal), 1);
  const mediumTotal = Math.max(Number(data.totalQuestions?.medium || defaultDifficultyTotal), 1);
  const hardTotal = Math.max(Number(data.totalQuestions?.hard || defaultDifficultyTotal), 1);

  const easyProgress = Math.max(0, Math.min(easySolved / easyTotal, 1));
  const mediumProgress = Math.max(0, Math.min(mediumSolved / mediumTotal, 1));
  const hardProgress = Math.max(0, Math.min(hardSolved / hardTotal, 1));

  const polar = (cx, cy, r, angleDeg) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: cx + (r * Math.cos(rad)),
      y: cy + (r * Math.sin(rad))
    };
  };

  const arcPath = (cx, cy, r, startDeg, endDeg) => {
    const start = polar(cx, cy, r, startDeg);
    const end = polar(cx, cy, r, endDeg);
    const largeArcFlag = endDeg - startDeg <= 180 ? 0 : 1;
    return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
  };

  const segments = [
    { key: 'easy', color: '#22d3ee', start: 210, end: 310, progress: easyProgress },
    { key: 'medium', color: '#fbbf24', start: 330, end: 430, progress: mediumProgress },
    { key: 'hard', color: '#ef4444', start: 90, end: 190, progress: hardProgress }
  ];

  const trackPaths = segments.map((segment) => `<path d="${arcPath(100, 100, 74, segment.start, segment.end)}" class="leetcode-radial-track" />`).join('');
  const fillPaths = segments.map((segment) => {
    const span = segment.end - segment.start;
    const fillEnd = segment.start + (span * segment.progress);
    return `<path d="${arcPath(100, 100, 74, segment.start, fillEnd)}" class="leetcode-radial-fill leetcode-radial-fill--${segment.key}" style="stroke:${segment.color};" />`;
  }).join('');

  return `
    <div class="leetcode-pie-card">
      <div class="leetcode-radial-wrap">
        <svg class="leetcode-radial-svg" viewBox="0 0 200 200" role="img" aria-label="LeetCode radial progress">
          ${trackPaths}
          ${fillPaths}
        </svg>
        <div class="leetcode-radial-center">
          <div class="leetcode-radial-total">${totalSolved}<span>/${totalQuestions}</span></div>
          <div class="leetcode-radial-label">Questions Solved</div>
        </div>
      </div>
      <div class="leetcode-radial-legend">
        <span class="easy">Easy <strong>${easySolved}/${Math.round(easyTotal)}</strong></span>
        <span class="medium">Medium <strong>${mediumSolved}/${Math.round(mediumTotal)}</strong></span>
        <span class="hard">Hard <strong>${hardSolved}/${Math.round(hardTotal)}</strong></span>
      </div>
    </div>
  `;
}

async function triggerLeetCodeSync() {
  const resultDiv = document.getElementById('leetcode-result');
  const btn = document.getElementById('leetcode-sync-btn');
  
  if (!btn) return;
  
  btn.disabled = true;
  btn.textContent = 'Syncing...';
  resultDiv.innerHTML = '<p style="color: #999;">Fetching LeetCode stats for all students (this may take a few minutes)...</p>';
  
  try {
    const response = await fetch('/api/sync-leetcode', { method: 'POST' });
    const data = await response.json();
    
    if (data.success) {
      resultDiv.innerHTML = '<div class="card" style="padding: 1rem; border-left: 4px solid #51cf66;"><p style="margin: 0; color: #51cf66;">[OK] ' + data.message + '</p><p style="margin: 0.5rem 0 0 0; color: #999; font-size: 0.9rem;">Stats are now cached and will display in student profiles.</p></div>';
    } else {
      resultDiv.innerHTML = '<div class="card" style="padding: 1rem; border-left: 4px solid #ff6b6b;"><p style="margin: 0; color: #ff6b6b;">[ERROR] ' + (data.message || 'Sync failed') + '</p></div>';
    }
  } catch (error) {
    resultDiv.innerHTML = '<div class="card" style="padding: 1rem; border-left: 4px solid #ff6b6b;"><p style="margin: 0; color: #ff6b6b;">[ERROR] Network error: ' + error.message + '</p></div>';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Sync LeetCode Stats Now';
  }
}

function renderLeaderboard() {
  const leaderboardContent = document.getElementById('leaderboard-content');
  if (!leaderboardContent) {
    return;
  }

  const studentsData = Array.isArray(students) ? [...students] : [];
  if (!studentsData.length) {
    leaderboardContent.innerHTML = '<p style="color:#999;">No student data available for leaderboard.</p>';
    return;
  }

  const codingRank = [...studentsData]
    .sort((a, b) => Number(b.codingProblems || 0) - Number(a.codingProblems || 0));

  const cgpaRank = [...studentsData]
    .sort((a, b) => Number(b.gradePoints || 0) - Number(a.gradePoints || 0));

  const maxCodingProblems = Math.max(...studentsData.map((student) => Number(student.codingProblems || 0)), 0);
  const maxOfficialCertificates = Math.max(...studentsData.map((student) => Number(student.certifications || 0)), 0);
  const maxInternships = Math.max(...studentsData.map((student) => Number(student.internships || 0)), 0);

  const clampUnit = (value) => Math.max(0, Math.min(1, Number(value) || 0));

  const getDynamicScore = (student) => {
    const cgpa = Number(student.gradePoints || 0);
    const codingProblems = Number(student.codingProblems || 0);
    const officialCertificates = Number(student.certifications || 0);
    const internships = Number(student.internships || 0);

    const cgpaComponent = clampUnit(cgpa / 10) * 30;
    const codingComponent = maxCodingProblems > 0 ? clampUnit(codingProblems / maxCodingProblems) * 30 : 0;
    const certificatesComponent = maxOfficialCertificates > 0 ? clampUnit(officialCertificates / maxOfficialCertificates) * 15 : 0;
    const internshipsComponent = maxInternships > 0 ? clampUnit(internships / maxInternships) * 25 : 0;

    return cgpaComponent + codingComponent + certificatesComponent + internshipsComponent;
  };

  const dynamicRank = [...studentsData]
    .sort((a, b) => getDynamicScore(b) - getDynamicScore(a));

  const renderRows = (list, valueFn) => list.map((student, index) => {
    const isCurrentUser = !isStaff && currentUser && student.id === currentUser.id;
    return `
      <tr${isCurrentUser ? ' style="background: rgba(254, 197, 36, 0.15); border-left: 3px solid #FEC524;"' : ''}>
        <td>${index + 1}</td>
        <td>${student.name || 'N/A'}</td>
        <td>${student.dept || 'N/A'}</td>
        <td>${valueFn(student)}</td>
      </tr>
    `;
  }).join('');

  leaderboardContent.innerHTML = `
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1rem;">
      <div class="card" style="padding: 1.1rem;">
        <h3 style="margin-top:0; margin-bottom:0.9rem; text-align:center;">Coding Problems Leaderboard</h3>
        <table>
          <thead>
            <tr>
              <th style="width:70px;">Rank</th>
              <th>Name</th>
              <th style="width:100px;">Dept</th>
              <th style="width:140px;">Problems</th>
            </tr>
          </thead>
          <tbody>
            ${renderRows(codingRank, (student) => Number(student.codingProblems || 0))}
          </tbody>
        </table>
      </div>

      <div class="card" style="padding: 1.1rem;">
        <h3 style="margin-top:0; margin-bottom:0.9rem; text-align:center;">CGPA Leaderboard</h3>
        <table>
          <thead>
            <tr>
              <th style="width:70px;">Rank</th>
              <th>Name</th>
              <th style="width:100px;">Dept</th>
              <th style="width:140px;">CGPA</th>
            </tr>
          </thead>
          <tbody>
            ${renderRows(cgpaRank, (student) => Number(student.gradePoints || 0).toFixed(2))}
          </tbody>
        </table>
      </div>

      <div class="card" style="padding: 1.1rem;">
        <h3 style="margin-top:0; margin-bottom:0.9rem; text-align:center;">Dynamic Score Leaderboard</h3>
        <table>
          <thead>
            <tr>
              <th style="width:70px;">Rank</th>
              <th>Name</th>
              <th style="width:100px;">Dept</th>
              <th style="width:140px;">Score / 100</th>
            </tr>
          </thead>
          <tbody>
            ${renderRows(dynamicRank, (student) => getDynamicScore(student).toFixed(2))}
          </tbody>
        </table>
      </div>
    </div>
  `;
}