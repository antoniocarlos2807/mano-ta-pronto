const container = document.getElementById('container');
const modeButton = document.getElementById('modeButton');

function toggleMode() {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        modeButton.textContent = '🌙'; // Lua
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        modeButton.textContent = '☀️'; // Sol
    }
}

modeButton.addEventListener('click', toggleMode);
