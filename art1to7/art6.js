document.addEventListener('DOMContentLoaded', function() {
    // Update the year in footer
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

});
