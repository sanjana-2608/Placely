// theme-engine.js - Global color and layout theming

function initGlobalThemeEngine() {
    // Determine where to inject the OLD / NEW UI toggle
    const isMainPage = !!document.getElementById('navbar');
    const isAdminPage = !!document.getElementById('admin-sidebar');

    let targetContainer = null;
    let insertionContext = '';

    if (isMainPage) {
        targetContainer = document.querySelector('#navbar ul');
        insertionContext = 'student-nav';
    } else if (isAdminPage) {
        targetContainer = document.querySelector('.topbar-right');
        insertionContext = 'admin-topbar';
    }

    if (!targetContainer) return;

    const toggleButton = document.createElement('button');
    toggleButton.id = 'ui-version-toggle';
    toggleButton.type = 'button';
    toggleButton.className = 'ui-version-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle between old and new Placely UI');

    if (insertionContext === 'student-nav') {
        const li = document.createElement('li');
        li.id = 'ui-version-toggle-container';
        li.appendChild(toggleButton);

        const darkModeLi = document.getElementById('darkmode-toggle')?.parentElement;
        if (darkModeLi && darkModeLi.parentElement === targetContainer) {
            targetContainer.insertBefore(li, darkModeLi);
        } else {
            targetContainer.appendChild(li);
        }
    } else if (insertionContext === 'admin-topbar') {
        const wrapper = document.createElement('div');
        wrapper.id = 'ui-version-toggle-wrapper';
        wrapper.style.display = 'flex';
        wrapper.style.alignItems = 'center';
        wrapper.style.marginRight = '0.5rem';
        wrapper.appendChild(toggleButton);
        targetContainer.insertBefore(wrapper, targetContainer.firstChild);
    }

    ensureUiToggleBaseStyles();

    // Initialize state from localStorage
    const saved = localStorage.getItem('placelyUiVersion') === 'new' ? 'new' : 'old';
    applyUiVersion(saved);
    updateUiToggleLabel(toggleButton);

    toggleButton.addEventListener('click', () => {
        const current = document.body.classList.contains('ui-new') ? 'new' : 'old';
        const next = current === 'new' ? 'old' : 'new';
        applyUiVersion(next);
        updateUiToggleLabel(toggleButton);
    });
}

function ensureUiToggleBaseStyles() {
    let styleEl = document.getElementById('ui-version-toggle-style');
    if (styleEl) return;

    styleEl = document.createElement('style');
    styleEl.id = 'ui-version-toggle-style';
    styleEl.innerHTML = `
      .ui-version-toggle {
        padding: 0.35rem 0.7rem;
        border-radius: 999px;
        border: 1px solid rgba(148, 163, 184, 0.6);
        background: rgba(15, 23, 42, 0.9);
        color: #e5e7eb;
        font-size: 0.78rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        cursor: pointer;
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.35);
        transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease, transform 0.12s ease, box-shadow 0.18s ease;
      }
      .ui-version-toggle:hover {
        background: rgba(30, 64, 175, 0.95);
        border-color: rgba(129, 140, 248, 0.9);
        box-shadow: 0 14px 35px rgba(30, 64, 175, 0.55);
        transform: translateY(-1px);
      }
      .ui-version-toggle span.ui-badge {
        font-size: 0.65rem;
        padding: 0.1rem 0.45rem;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.9);
        border: 1px solid rgba(148, 163, 184, 0.6);
        text-transform: uppercase;
      }
      body.ui-new {
        background: radial-gradient(circle at top left, #111827 0%, #020617 28%, #020617 60%, #000000 100%);
        color: #e5e7eb;
      }
      body.ui-new #navbar {
        backdrop-filter: blur(18px);
        background: radial-gradient(circle at top left, rgba(15,23,42,0.98), rgba(15,23,42,0.95));
        border-bottom: 1px solid rgba(51, 65, 85, 0.85);
        box-shadow: 0 18px 45px rgba(15, 23, 42, 0.9);
      }
      body.ui-new #navbar .logo span {
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        font-size: 0.82rem;
      }
      body.ui-new #navbar ul li a {
        font-size: 0.82rem;
        text-transform: none;
        font-weight: 600;
        color: #9ca3af;
      }
      body.ui-new #navbar ul li a.nav-active {
        color: #e5e7eb;
        background: linear-gradient(135deg, rgba(129, 140, 248, 0.22), rgba(56, 189, 248, 0.2));
        box-shadow: 0 10px 30px rgba(37, 99, 235, 0.65);
        border-radius: 999px;
      }
      body.ui-new .container {
        max-width: 1120px;
        margin: 2.75rem auto 3rem auto;
        padding: 0 1.25rem 3rem 1.25rem;
      }
      body.ui-new section {
        scroll-margin-top: 4.5rem;
      }
      body.ui-new #home-banner-container {
        margin-bottom: 2.25rem !important;
      }
      body.ui-new .home-stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 1.1rem;
      }
      body.ui-new .home-stat-card {
        position: relative;
        padding: 1.1rem 1.2rem;
        border-radius: 1rem;
        background: radial-gradient(circle at top left, rgba(15,118,240,0.32), rgba(15,23,42,0.98));
        border: 1px solid rgba(37, 99, 235, 0.55);
        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.95);
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        overflow: hidden;
      }
      body.ui-new .home-stat-card::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top right, rgba(56,189,248,0.30), transparent 55%);
        opacity: 0.7;
        pointer-events: none;
      }
      body.ui-new .home-stat-icon {
        font-size: 1.4rem;
        z-index: 1;
      }
      body.ui-new .home-stat-value {
        font-size: 1.9rem;
        font-weight: 800;
        letter-spacing: 0.02em;
        z-index: 1;
      }
      body.ui-new .home-stat-label {
        font-size: 0.82rem;
        color: #a5b4fc;
        z-index: 1;
      }
      body.ui-new .home-post-card {
        display: grid;
        grid-template-columns: minmax(0, 1.3fr) minmax(0, 2fr);
        gap: 1.4rem;
        padding: 1.35rem 1.5rem;
        border-radius: 1.3rem;
        background: radial-gradient(circle at top left, rgba(15,23,42,0.95), rgba(15,23,42,0.98));
        border: 1px solid rgba(55, 65, 81, 0.95);
        box-shadow: 0 20px 60px rgba(15, 23, 42, 0.95);
        align-items: stretch;
      }
      body.ui-new .home-post-image {
        width: 100%;
        border-radius: 1rem;
        object-fit: cover;
        max-height: 260px;
      }
      body.ui-new .home-post-content h3 {
        font-size: 1.1rem;
        margin-bottom: 0.6rem;
      }
      body.ui-new .home-post-content p {
        font-size: 0.9rem;
        color: #d1d5db;
      }
      body.ui-new .home-post-tags {
        margin-top: 0.8rem !important;
        font-size: 0.8rem !important;
        color: #a5b4fc !important;
      }
      body.ui-new .companies-grid-section h4 {
        color: #a5b4fc !important;
      }
      body.ui-new .companies-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1rem;
      }
      body.ui-new .company-grid-card {
        padding: 0.9rem 0.7rem;
        border-radius: 0.9rem;
        background: rgba(15,23,42,0.95);
        border: 1px solid rgba(55,65,81,0.85);
        box-shadow: 0 10px 30px rgba(15,23,42,0.9);
      }
      body.ui-new .company-logo-wrap {
        width: 42px;
        height: 42px;
        border-radius: 1rem;
      }
      @media (max-width: 768px) {
        body.ui-new .home-post-card {
          grid-template-columns: minmax(0,1fr);
        }
        body.ui-new .container {
          margin-top: 2.1rem;
          padding-inline: 1rem;
        }
      }
    `;
    document.head.appendChild(styleEl);
}

function updateUiToggleLabel(button) {
    if (!button) return;
    const isNew = document.body.classList.contains('ui-new');
    const modeLabel = isNew ? 'New' : 'Old';
    const icon = isNew ? '✨' : '⌛';
    button.innerHTML = `${icon} UI <span class="ui-badge">${modeLabel}</span>`;
}

function applyUiVersion(version) {
    const isNew = version === 'new';
    localStorage.setItem('placelyUiVersion', isNew ? 'new' : 'old');
    document.body.classList.toggle('ui-new', isNew);
    document.body.classList.toggle('ui-old', !isNew);
}

// Ensure the code runs after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalThemeEngine);
} else {
    initGlobalThemeEngine();
}
