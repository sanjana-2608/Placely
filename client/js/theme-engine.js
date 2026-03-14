// theme-engine.js - Global color and layout theming

function initGlobalThemeEngine() {
    // Determine where to inject dropdowns
    const isMainPage = !!document.getElementById('navbar');
    const isAdminPage = !!document.getElementById('admin-sidebar');
    
    let targetContainer = null;
    let insertionMethod = '';

    if (isMainPage) {
        // Find existing list in navbar to insert
        targetContainer = document.querySelector('nav ul');
        insertionMethod = 'nav-list';
    } else if (isAdminPage) {
        // Insert in topbar-right
        targetContainer = document.querySelector('.topbar-right');
        insertionMethod = 'admin-topbar';
    }

    if (!targetContainer) return;

    // Dropdown HTML
    const colorDropdown = document.createElement('select');
    colorDropdown.id = 'global-color-theme';
    colorDropdown.setAttribute('aria-label', 'Color Theme');
    colorDropdown.innerHTML = `
        <option value="default">Color: Default</option>
        <option value="ocean">Ocean</option>
        <option value="forest">Forest</option>
        <option value="sunset">Sunset</option>
        <option value="cyberpunk">Cyberpunk</option>
        <option value="dracula">Dracula</option>
        <option value="rose">Rose</option>
        <option value="emerald">Emerald</option>
        <option value="sapphire">Sapphire</option>
        <option value="amethyst">Amethyst</option>
        <option value="crimson">Crimson</option>
    `;

    const layoutDropdown = document.createElement('select');
    layoutDropdown.id = 'global-layout-theme';
    layoutDropdown.setAttribute('aria-label', 'Layout Theme');
    layoutDropdown.innerHTML = `
        <option value="default">Layout: Default</option>
        <option value="rounded">Rounded</option>
        <option value="compact">Compact</option>
        <option value="spacious">Spacious</option>
        <option value="brutalism">Brutalism</option>
        <option value="neomorph">Neomorphic</option>
    `;

    // Apply basic styles for the dropdowns
    [colorDropdown, layoutDropdown].forEach(select => {
        select.style.padding = '0.3rem 0.5rem';
        select.style.borderRadius = '6px';
        select.style.background = '#222';
        select.style.color = '#fff';
        select.style.border = '1px solid #444';
        select.style.cursor = 'pointer';
        select.style.fontSize = '0.85rem';
    });

    if (insertionMethod === 'nav-list') {
        const colorLi = document.createElement('li');
        colorLi.appendChild(colorDropdown);
        const layoutLi = document.createElement('li');
        layoutLi.appendChild(layoutDropdown);
        
        const darkModeLi = document.getElementById('darkmode-toggle')?.parentElement;
        if (darkModeLi) {
            targetContainer.insertBefore(colorLi, darkModeLi);
            targetContainer.insertBefore(layoutLi, darkModeLi);
        } else {
            targetContainer.appendChild(colorLi);
            targetContainer.appendChild(layoutLi);
        }
    } else if (insertionMethod === 'admin-topbar') {
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.gap = '0.5rem';
        wrapper.style.marginRight = '1rem';
        wrapper.appendChild(colorDropdown);
        wrapper.appendChild(layoutDropdown);
        
        // Insert before global search or at start
        targetContainer.insertBefore(wrapper, targetContainer.firstChild);
    }

    // Event Listeners
    colorDropdown.addEventListener('change', (e) => applyGlobalColorTheme(e.target.value));
    layoutDropdown.addEventListener('change', (e) => applyGlobalLayoutTheme(e.target.value));

    // Initialize from localStorage
    const savedColor = localStorage.getItem('placelyColor') || 'default';
    const savedLayout = localStorage.getItem('placelyLayout') || 'default';
    
    colorDropdown.value = savedColor;
    layoutDropdown.value = savedLayout;
    
    applyGlobalColorTheme(savedColor);
    applyGlobalLayoutTheme(savedLayout);
}

function applyGlobalColorTheme(themeName) {
    localStorage.setItem('placelyColor', themeName);
    
    const colorMap = {
        'default': '0deg',
        'ocean': '170deg',
        'forest': '80deg',
        'sunset': '-40deg',
        'cyberpunk': '125deg',
        'dracula': '250deg',
        'rose': '300deg',
        'emerald': '110deg',
        'sapphire': '185deg',
        'amethyst': '270deg',
        'crimson': '-20deg'
    };
    
    const deg = colorMap[themeName] || '0deg';
    
    let styleEl = document.getElementById('theme-color-style');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'theme-color-style';
        document.head.appendChild(styleEl);
    }
    
    if (themeName === 'default') {
        styleEl.innerHTML = '';
    } else {
        styleEl.innerHTML = `
            html, body, .admin-sidebar, .admin-topbar {
                filter: hue-rotate(${deg}) !important;
            }
            img, .profile-pic, canvas {
                filter: hue-rotate(-${deg}) !important;
            }
            /* Exclude layout selects themselves to prevent weird looking UI */
            #global-color-theme, #global-layout-theme {
                filter: hue-rotate(-${deg}) !important;
            }
        `;
    }
}

function applyGlobalLayoutTheme(themeName) {
    localStorage.setItem('placelyLayout', themeName);
    
    // Remove existing
    document.body.classList.remove(
        'theme-layout-rounded', 
        'theme-layout-compact', 
        'theme-layout-spacious', 
        'theme-layout-brutalism',
        'theme-layout-neomorph'
    );
    
    if (themeName !== 'default') {
        document.body.classList.add('theme-layout-' + themeName);
    }
}

// Ensure the code runs after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalThemeEngine);
} else {
    initGlobalThemeEngine();
}
