
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
const playerName = document.querySelector('.player-name');

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
let winMusic = new Audio("/src/Win.mp3")
let loseMusic = new Audio("/src/Lose.mp3")
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
  timeDisplay.textContent = `${hours}:${mins}:${secs  < 10 ? "0" + secs : secs}`;
}

setInterval(updateTime, 1000);
updateTime();

// Game logic
var playerChioce = document.querySelectorAll(".player-chioce")
var domcomputerScore = document.querySelector(".computer-score")
var domplayerScore = document.querySelector(".player-score")
var playerEmoji = document.querySelector(".playeremoji")
var computerEmoji = document.querySelector(".computeremoji")
var gameStatusContainer = document.querySelector(".game-status-container")
var gameStatus = document.querySelector(".game-status")
var domfunnymessages = document.querySelector(".funny-messages")
var domgamewinner = document.querySelector(".game-winner")

var bombcountdown = 2;
var shieldcountdown = 3;
var computerScore = 10;
var playerScore = 10;
let timeout;

    // game message
function gameMessages(fm,dm) {
setTimeout(() => {
  gameStatusContainer.style.display = "flex"
  gameStatus.style.display = "flex";

 timeout = setTimeout(() => {
    gameStatus.style.display = "none";
    gameStatusContainer.style.display = "none";
  }, 2000);
},300);
allMessages(fm,dm)
}
function allMessages(gfm,gdm){
  domgamewinner.textContent = gdm
  domfunnymessages.textContent = gfm
}

// Funny messages
const funnyMessages = {
  win: () => {
    const messages = [
      "You crushed it! 💪🏽",
      "Computer is crying in binary 😭",
      "Victory dance time! 💃"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  },
  lose: () => {
    const messages = [
      "Defeated! The machine reigns supreme 🤖",
      "Better luck next round 😅",
      "Ouch! That one hurt 🥲"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  },
  tie: () => {
    const messages = [
      "It’s a draw — balance in the universe 🌍",
      "Nobody wins, nobody loses 😐",
      "Try again — destiny awaits!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }
};




// Random move function
const getRandomMove = () => {
  const moves = ['rock', 'paper', 'scissors', 'bomb', 'shield'];
  var computerpick = ["🪨 ","✋", "✌️","💣 "," 🛡️ " ]
  var random = Math.floor(Math.random() * moves.length)
  computerEmoji.textContent = computerpick[random];
  return moves[random];
};

// player pick
var dombomb =  document.querySelector('.bomb');
var domshield =  document.querySelector('.shield');
var dombombcount =  document.querySelector('.bomb-count');
var domshieldcount =  document.querySelector('.shield-count');



dombombcount.textContent = bombcountdown;
domshieldcount.textContent = shieldcountdown
playerChioce.forEach((item) => {
  item.addEventListener("click",(e)=>{
    var id = e.currentTarget
    var playerpickid = id.dataset.id.toLowerCase();
    
    if (playerpickid === "bomb"){
      bombcountdown--
    dombombcount.textContent = bombcountdown;
      if(bombcountdown === 0){
        dombomb.style.display = "none"
      }
    }
    if (playerpickid === "shield"){
      shieldcountdown--
    domshieldcount.textContent = shieldcountdown;
      if(shieldcountdown === 0){
        domshield.style.display = "none"
      } 
    }
    
   playerEmoji.textContent = id.textContent.slice(0,1);
   ["🪨 ","✋", "✌️","💣 "," 🛡️ " ]
   if(playerpickid === "shield"){
     playerEmoji.textContent = " 🛡️ "
   }
   if(playerpickid === "bomb"){
     playerEmoji.textContent = "💣 "
   }
   
    
    var computerChioce = getRandomMove()
    decideWinner(playerpickid,computerChioce)
  })
})

// game logic to decide winner


domplayerScore.textContent = playerScore;
domcomputerScore.textContent = computerScore;

function decideWinner(player, computer) {

  if (player === computer) {
    var wfm = funnyMessages.tie()
    var wdm = 'it tie'
    gameMessages(wfm,wdm)
   // alert("tie");
    return;
  }

  const winRules = {
    rock: ['scissors', 'shield'],
    paper: ['rock', 'bomb'],
    scissors: ['paper', 'shield'],
    bomb: ['rock', 'paper', 'scissors'],
    shield: ['bomb']
  };

  const playerBeats = winRules[player];
  const computerBeats = winRules[computer];

  if (playerBeats.includes(computer)) {
    var wfm = funnyMessages.win()
    var wdm = `${playerName.textContent} won this round`
    //alert("you won this round");
    gameMessages(wfm,wdm)
    computerScore--;
    domcomputerScore.textContent = computerScore;
    if (computerScore <= 0) {
      var wdm = `!${playerName.textContent} has finally won the game! `
    var  wfm = 'GAME OVER !!!'
      gameMessages(wfm,wdm)
      winMusic.play()
      winMusic.loop = false
      restartGame()
    }
    
    
  } 
  else if (computerBeats.includes(player)) {
    var wfm = funnyMessages.lose()
    var wdm = 'computer😈 won this round'
    //alert("you lose this round");
    gameMessages(wfm,wdm)
    playerScore--;
    domplayerScore.textContent = playerScore;
    if (playerScore <= 0) {
   var   wdm = '!computer has finally won the game! '
    var  wfm = 'GAME OVER !!!'
    gameMessages(wfm,wdm)
    loseMusic.play()
    loseMusic.loop = false
     restartGame()
    }
    
  } 
  else {
    var wfm = funnyMessages.tie()
    var wdm = 'no winner for this matchup'
    gameMessages(wfm,wdm)
    //alert("no winner for this matchup");
  }
}
 var restart = document.getElementById("restart-game");
 
function restartGame(){
  
  music.pause();
  setTimeout(() => {
    gameStatusContainer.style.display = "flex";
    gameStatus.style.display = "flex";
  }, 2301);
  gameStatus.style.border = "3px solid #00ffff"
  gameStatus.style.boxShadow= "0 0 25px rgba(0, 255, 255, 0.3);"
  restart.style.display = "block"

  restart.addEventListener("click",()=>{
    computerScore = 10;
  playerScore = 10;
  shieldcountdown = 3;
  bombcountdown = 2 ;
  domplayerScore.textContent = playerScore;
  domcomputerScore.textContent = computerScore;
  domshieldcount.textContent = shieldcountdown;
  domshield.style.display = "inline-block"
  dombomb.style.display = "inline-block"
  dombombcount.textContent = bombcountdown;
  gameStatusContainer.style.display = "none"
  restart.style.display = "none"
  gameStatus.style.border = "3px solid #ffff00"
  gameStatus.style.boxShadow= "0 0 25px rgba(255, 255, 0, 0.3);"
winMusic.pause()
    loseMusic.pause()
    music.play();
  })
  
}

function resetGame() {
    computerScore = 10;
  playerScore = 10;
  shieldcountdown = 3;
  bombcountdown = 2 ;
  domplayerScore.textContent = playerScore;
  domcomputerScore.textContent = computerScore;
  domshieldcount.textContent = shieldcountdown;
  domshield.style.display = "inline-block"
  dombomb.style.display = "inline-block"
  dombombcount.textContent = bombcountdown;
    music.play();
    winMusic.pause()
    loseMusic.pause()
}

function closeInstructions() {
      document.querySelector(".instruction-container").classList.toggle("hidden");
    }

