    document.addEventListener('DOMContentLoaded', () => {
        const darkModeToggle = document.getElementById('darkmode');
        const body = document.body;
        const savedDarkMode = localStorage.getItem('darkmode') === 'true';
        darkModeToggle.checked = savedDarkMode;
        if (savedDarkMode) {
            body.classList.add('dark-mode');
        }
        darkModeToggle.addEventListener('change', () => {
            const isDarkMode = darkModeToggle.checked;
            localStorage.setItem('darkmode', isDarkMode);
            if (isDarkMode) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
        });
    });