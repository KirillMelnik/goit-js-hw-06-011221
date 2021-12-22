function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElem = document.querySelector('body');
const colorName = document.querySelector('p .color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
});