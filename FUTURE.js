document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    const themeSwitcher = document.getElementById('theme-switcher');

    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        themeSwitcher.value = 'light';
    } else {
        themeSwitcher.value = 'default';
    }

    themeSwitcher.addEventListener('change', function() {
        if (themeSwitcher.value === 'light') {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            localStorage.removeItem('theme');
        }
    });
});
