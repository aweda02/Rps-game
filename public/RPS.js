
const sparks = document.querySelector('.sparks');
const startButton = document.querySelector('.start-button');
const intro = document.querySelector('.intro');
const gameContainer = document.querySelector('.game-container');
const settingsIcon = document.querySelector('.settingsIcon');
const settings = document.querySelector('.settings');
const musicBtn = document.querySelector('.music');
const onBtn = document.querySelector('.ON');
const offBtn = document.querySelector('.OFF');
const timeSettingBtn = document.querySelector('.time-setting');
const timeOnBtn = document.querySelector('.time-on');
const timeOffBtn = document.querySelector('.time-off');
const lvlBtn = document.querySelector('.lvl');
const easyBtn = document.querySelector('.easy');
const hardBtn = document.querySelector('.hard');
const timeDisplay = document.querySelector('.time');

// State variables
let musicOn = true;
let timeOn = true;
let levelEasy = true;

// Create sparks
for (let i = 0; i < 24; i++) {
  const s = document.createElement('span');
  s.style.setProperty('--r', `${Math.random() * 360}deg`);
  s.style.animationDelay = `${Math.random() * 2}s`;
  sparks.appendChild(s);
}
// music 
let music = new Audio("/src/Music.mp3");
music.loop = true;
// Start game
startButton.addEventListener("click", () => {
  intro.classList.add("close-intro");
  music.play();
  setTimeout(() => {
    gameContainer.classList.add("enter-game");
  }, 300);

});

// Settings toggle
settingsIcon.addEventListener("click", () => {
  settingsIcon.classList.toggle("rotating");
  setTimeout(() => {
    settings.classList.toggle("openSettings");
  }, 300);
});

// Music controls
musicBtn.addEventListener("click", () => {
  onBtn.classList.toggle("active");
  offBtn.classList.toggle("active");
  
  // Set initial selection based on state
  if (musicOn) {
    onBtn.classList.add("selected");
  } else {
    offBtn.classList.add("selected");
  }
});

onBtn.addEventListener("click", () => {
  onBtn.classList.add("selected");
  offBtn.classList.remove("selected");
  musicOn = true;
  music.play();
});

offBtn.addEventListener("click", () => {
  offBtn.classList.add("selected");
  onBtn.classList.remove("selected");
  musicOn = false;
  music.pause();
});

// Time controls
timeSettingBtn.addEventListener("click", () => {
  timeOnBtn.classList.toggle("active");
  timeOffBtn.classList.toggle("active");
  
  // Set initial selection based on state
  if (timeOn) {
    timeOnBtn.classList.add("selected");
  } else {
    timeOffBtn.classList.add("selected");
  }
});

timeOnBtn.addEventListener("click", () => {
  timeOnBtn.classList.add("selected");
  timeOffBtn.classList.remove("selected");
  timeDisplay.style.display = "block";
  timeOn = true;
});

timeOffBtn.addEventListener("click", () => {
  timeOffBtn.classList.add("selected");
  timeOnBtn.classList.remove("selected");
  timeDisplay.style.display = "none";
  timeOn = false;
});

// Level controls
lvlBtn.addEventListener("click", () => {
  easyBtn.classList.toggle("active");
  hardBtn.classList.toggle("active");
  
  // Set initial selection based on state
  if (levelEasy) {
    easyBtn.classList.add("selected");
  } else {
    hardBtn.classList.add("selected");
  }
});

easyBtn.addEventListener("click", () => {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  levelEasy = true;
});

hardBtn.addEventListener("click", () => {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  levelEasy = false;
});

// Time display
function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  timeDisplay.textContent = `${hours}:${mins}:${secs}`;
}

setInterval(updateTime, 1000);
updateTime();