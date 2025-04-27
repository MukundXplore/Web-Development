document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    const toggleButton = document.getElementById('toggle-dark-mode');
    document.body.classList.toggle('dark-mode');
    toggleButton.src = document.body.classList.contains('dark-mode') 
        ? '/Project/media/light_mode.png' 
        : '/Project/media/dark_mode.png';
});
