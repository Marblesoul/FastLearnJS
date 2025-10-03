const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let dead = 0;
let lost = 0;

const resetGame = () => {
  dead = 0;
  lost = 0;
  deadCounter.textContent = dead;
  lostCounter.textContent = lost;
};

const checkGameStatus = () => {
  if (dead === 10) {
    alert('Вы победили!');
    resetGame();
  } else if (lost === 5) {
    alert('Вы проиграли!');
    resetGame();
  }
};

const handleHoleClick = (hole) => {
  if (hole.classList.contains('hole_has-mole')) {
    dead++;
    deadCounter.textContent = dead;
  } else {
    lost++;
    lostCounter.textContent = lost;
  }
  checkGameStatus();
};

for (let i = 1; i <= 9; i++) {
  const hole = document.getElementById(`hole${i}`);
  hole.onclick = () => handleHoleClick(hole);
}
