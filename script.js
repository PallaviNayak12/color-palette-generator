const palette = document.getElementById('palette');
const message = document.getElementById('message');
const generateBtn = document.getElementById('generateBtn');

function randomColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, '0');
}

function generatePalette() {
  palette.innerHTML = '';
  message.textContent = '';
  for (let i = 0; i < 6; i++) {
    const color = randomColor();
    const box = document.createElement('div');
    box.className = 'color-box';
    box.style.background = color;
    box.textContent = color;
    box.addEventListener('click', () => copyColor(color));
    palette.appendChild(box);
  }
}

function copyColor(color) {
  navigator.clipboard.writeText(color).then(() => {
    message.textContent = `Copied: ${color}`;
    setTimeout(() => message.textContent = '', 1500);
  });
}

generateBtn.addEventListener('click', generatePalette);

// Generate an initial palette on page load
generatePalette();
