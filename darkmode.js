document.getElementById('toggle-dark-mode').addEventListener('click', function () {
        const toggleButton = document.getElementById('toggle-dark-mode');
        document.body.classList.toggle('dark-mode');
        toggleButton.src = document.body.classList.contains('dark-mode') 
            ? 'media/light_mode.png' 
            : 'media/dark_mode.png';
    });
darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.src = document.body.classList.contains('dark-mode') 
                ? 'media/light_mode.png' 
                : 'media/dark_mode.png';

        if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
        } else {
                localStorage.setItem('darkMode', 'disabled');
        }
});


