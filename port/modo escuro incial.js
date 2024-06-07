const darkModeButton = document.getElementById('darkModeButton');
const lightModeButton = document.getElementById('lightModeButton');

darkModeButton.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    darkModeButton.style.display = 'none';
    lightModeButton.style.display = 'inline-block';
});

lightModeButton.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    lightModeButton.style.display = 'none';
    darkModeButton.style.display = 'inline-block';
});

document.getElementById('email').addEventListener('invalid', (event) => {
    event.preventDefault();
    event.target.setCustomValidity('Por favor, preencha este campo.');
});
