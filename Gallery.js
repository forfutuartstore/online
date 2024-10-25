document.addEventListener('DOMContentLoaded', function() {
    // Update year in footer
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Theme switcher functionality
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    themeSwitcher.addEventListener('click', function() {
        // Toggle the 'light-theme' class on the body element
        body.classList.toggle('light-theme');
    });
});
