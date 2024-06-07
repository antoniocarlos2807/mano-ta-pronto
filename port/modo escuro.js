document.getElementById('modeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('light-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = '☀️';
    } else {
        this.textContent = '🌙';
    }
});