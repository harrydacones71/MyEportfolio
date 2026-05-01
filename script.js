const contactForm = document.getElementById('contactForm');
const messageEl = document.getElementById('msg');
const themeToggle = document.getElementById('themeToggle');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        messageEl.textContent = 'Opening your email client to send the message...';
    });
}

function setTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('light-theme', !isDark);
    localStorage.setItem('site-theme', theme);
    
    if (themeToggle) {
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('site-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('site-theme') || 'dark';
    setTheme(savedTheme);

    document.querySelectorAll('.bar div').forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.getAttribute('data-width');
        }, index * 300);
    });
});