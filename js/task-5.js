function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const background = document.querySelector('body');
const button = document.querySelector('.change-color');
const colorText = document.querySelector('.color')

button.addEventListener('click', handleClick);

function handleClick() {
  const newColor = getRandomHexColor();
  background.style.backgroundColor = newColor;
  colorText.textContent = newColor;
}