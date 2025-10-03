const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const speedDisplay = document.getElementById('clicker__speed');

let clickCount = 0;
let isBig = false;
let lastClickTime = null;

cookie.onclick = () => {
  clickCount++;
  counter.textContent = clickCount;

  // Вычисление скорости клика
  const currentTime = new Date();
  if (lastClickTime !== null) {
    const timeDiff = (currentTime - lastClickTime) / 1000; // в секундах
    const clickSpeed = (1 / timeDiff).toFixed(2);
    speedDisplay.textContent = clickSpeed;
  }
  lastClickTime = currentTime;

  // Анимация размера печеньки
  if (isBig) {
    cookie.width = 200;
  } else {
    cookie.width = 220;
  }

  isBig = !isBig;
};
