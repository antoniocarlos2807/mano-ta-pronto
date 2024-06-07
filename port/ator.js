const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const itemWidth = document.querySelector('.carousel-item').offsetWidth;
const numItems = document.querySelectorAll('.carousel-item').length;
let position = 0;

function moveLeft() {
  position = Math.min(position + itemWidth, 0);
  carousel.style.transform = `translateX(${position}px)`;
  updateButtonState();
}

function moveRight() {
  const maxPosition = -(numItems - Math.floor(carousel.parentElement.offsetWidth / itemWidth)) * itemWidth;
  position = Math.max(position - itemWidth, maxPosition);
  carousel.style.transform = `translateX(${position}px)`;
  updateButtonState();
}

function updateButtonState() {
  prevBtn.disabled = position === 0;
  nextBtn.disabled = position <= -(numItems - Math.floor(carousel.parentElement.offsetWidth / itemWidth)) * itemWidth;
}

prevBtn.addEventListener('click', moveLeft);
nextBtn.addEventListener('click', moveRight);

prevBtn.disabled = true;
updateButtonState();
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
