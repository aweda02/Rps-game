import express from "express";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); 
app.set("view engine", "ejs");

//question : 
const qsts = [
  { q: "I’m round, I shine at night, and I disappear in the morning. What am I?", a: "Moon" },
  { q: "I have hands but can’t clap. What am I?", a: "Clock" },
  { q: "You open me every day, but I never close. What am I?", a: "Eyes" },
  { q: "I’m full of keys but can’t open a door. What am I?", a: "Keyboard" },
  { q: "I come down but never go up. What am I?", a: "Rain" },
  { q: "I’m black when you buy me, red when you use me, and gray when you throw me away. What am I?", a: "Charcoal" },
  { q: "I’m always running, but I never move. What am I?", a: "Time" },
  { q: "The more you take, the more you leave behind. What am I?", a: "Footsteps" },
  { q: "I’m tall when I’m young and short when I’m old. What am I?", a: "Candle" },
  { q: "I can fly without wings. What am I?", a: "Cloud" },
  { q: "I’m cold, I fall from the sky, and I melt when I touch the ground. What am I?", a: "Snow" },
  { q: "I’m always in front of you but you can’t see me. What am I?", a: "Future" },
  { q: "I get sharper the more you use me. What am I?", a: "Mind" },
  { q: "I’m something you can catch but can’t throw. What am I?", a: "Cold" },
  { q: "I have a face but no eyes. What am I?", a: "Clock" },
  { q: "You can hear me, but I have no mouth. What am I?", a: "Echo" },
  { q: "You can break me without touching me. What am I?", a: "Promise" },
  { q: "I follow you everywhere but disappear in the dark. What am I?", a: "Shadow" },
  { q: "I get wetter the more I dry. What am I?", a: "Towel" },
  { q: "I’m always hungry but never eat. What am I?", a: "Fire" }
];

let getRandomQst = 0;

//handling routes 
app.get("/", (req, res) => {
    getRandomQst = Math.floor(Math.random() * qsts.length); // here to get the index of the qst
    res.render("TheGate.ejs", {
    qst: qsts[getRandomQst].q, 
    isWrong: 0
    });
});
const computerScore = "";
        const playerScore = "";

app.post("/submit", (req, res)=>{
    const useranswer = req.body.useranswer.trim().toLowerCase();
    const playername = req.body.playername.trim().toLowerCase();
    computerScore = 10;
    playerScore = 10;
    if(useranswer == qsts[getRandomQst].a.trim().toLocaleLowerCase()){
        res.render("TheGame.ejs"
, { 
    computerScore:computerScore,
    playerScore: playerScore ,
     playername:playername
  } );
    } else{
        res.render("TheGate.ejs", {qst: qsts[getRandomQst].q ,isWrong: 1});
    }
});

//game functionality
var playermoves = document.querySelectorAll(".playermove")

// Random move function
const getRandomMove = () => {
  const moves = ['rock', 'paper', 'scissors', 'bomb', 'shield'];
  return moves[Math.floor(Math.random() * moves.length)];
};

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

// Decide winner
function decideWinner(player, computer) {
  if (player === computer){
    
  } return "tie";

  const winRules = {
    rock: ['scissors', 'shield'],
    paper: ['rock', 'bomb'],
    scissors: ['paper', 'shield'],
    bomb: ['rock', 'paper', 'scissors'],
    shield: ['bomb']
  };

  const playerBeats = winRules[player];

  if (!playerBeats) return "lose";

  if (playerBeats.includes(computer)) return "win";

  return "lose";
}


app.post("/thegame", (req, res) => {
  const player = req.body.useranswer.trim().toLowerCase();
  const computer = getRandomMove();

  const result = decideWinner(player, computer); 

  // Choose the funny message
  let message;
  if (result === "win") message = funnyMessages.win();
  computerScore--
  else if (result === "lose") message = funnyMessages.lose();
  playerScore--
  else message = funnyMessages.tie();

  // Render EJS page with result
  res.render("TheGame.ejs", {
    funnyMessage: message
  });
});
 







export default app;