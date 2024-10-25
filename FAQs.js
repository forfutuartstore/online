document.addEventListener('DOMContentLoaded', function() {
    // Update year in footer
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // FAQ toggle functionality
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('open');
        });
    });
});
