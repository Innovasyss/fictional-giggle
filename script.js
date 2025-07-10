function checkName() {
  const name = document.getElementById('nameInput').value.trim().toLowerCase();
  if (name === 'tenjeen') {
    nextStep('step2');
  } else {
    alert("Oops! Thats not your name lier");
  }
}

function nextStep(id) {
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function startFight() {
  nextStep('fight');
  const fightText = document.getElementById('fightText');
  const punch = document.getElementById('punch');
  const lines = [
    "John Cena enters the ring!",
    "Tenjeen stares him down...",
    "Cena throws a punch!",
    "Tenjeen dodges swiftly!",
    "Mood Slam!!! Cena is stunned!"
  ];
  let i = 0;
  const interval = setInterval(() => {
    fightText.innerHTML += `<p>${lines[i]}</p>`;
    if (lines[i].toLowerCase().includes("punch") || lines[i].toLowerCase().includes("slam")) {
      punch.play();
    }
    i++;
    if (i >= lines.length) {
      clearInterval(interval);
      setTimeout(() => nextStep('winnerAsk'), 2000);
    }
  }, 1500);
}

function startCountdown() {
  nextStep('countdownSection');
  const ding = document.getElementById('ding');
  const cd = document.getElementById('countdown');
  let count = 3;
  const interval = setInterval(() => {
    cd.innerText = count + '...';
    ding.play();
    count--;
    if (count < 0) {
      clearInterval(interval);
      startEntrance();
    }
  }, 1000);
}

function startEntrance() {
  nextStep('cenaEntrance');
  const lines = document.querySelectorAll('.text-line');
  document.getElementById('music').play();
  lines.forEach((line, i) => {
    setTimeout(() => line.classList.add('show'), i * 1300);
  });
  setTimeout(() => {
    document.getElementById('message').style.display = 'block';
    document.getElementById('statCard').style.display = 'block';
  }, lines.length * 1300 + 1500);
}
