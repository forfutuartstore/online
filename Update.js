document.addEventListener('DOMContentLoaded', function() {
    // Update year in footer
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Static updates for demonstration purposes
    const updates = [
        { title: "New Feature Released", content: "We have just launched a new feature that improves user experience. Check it out!" },
        { title: "Maintenance Scheduled", content: "We will be performing scheduled maintenance on August 30th. The site may be temporarily unavailable." },
        { title: "Security Update", content: "A new security update has been applied to enhance the protection of your data." }
    ];

    const updatesContainer = document.getElementById('updates-container');

    updates.forEach(update => {
        const updateDiv = document.createElement('div');
        updateDiv.classList.add('update');
        updateDiv.innerHTML = `<h2>${update.title}</h2><p>${update.content}</p>`;
        updatesContainer.appendChild(updateDiv);
    });
});
