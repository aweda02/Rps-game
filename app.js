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
    qst: qsts[getRandomQst].q
    });
});


app.post("/submit", (req, res)=>{
    const useranswer = req.body.useranswer.trim().toLowerCase();
    if(useranswer == qsts[getRandomQst].a.trim().toLocaleLowerCase()){
        res.send("<h1>Next step</h1>");
    } else{
        res.send("<h1>Go back to the home page</h1>");
    }
});







export default app;