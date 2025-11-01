// Running app from here
import express from "express";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); 
app.set("view engine", "ejs");

//question : 
const qsts = [
  { q: "What is 2 + 2?", a: "4" },
  { q: "What is the capital of France?", a: "Paris" },
  { q: "What color do you get by mixing red and blue?", a: "Purple" },
  { q: "How many days are in a leap year?", a: "366" },
  { q: "What is 10 / 2?", a: "5" },
  { q: "What is the largest planet in our solar system?", a: "Jupiter" },
  { q: "What is the square root of 64?", a: "8" },
  { q: "How many continents are there?", a: "7" },
  { q: "What is 5 * 6?", a: "30" },
  { q: "What is the boiling point of water in °C?", a: "100" },
  { q: "Who wrote 'Romeo and Juliet'?", a: "Shakespeare" },
  { q: "What is the smallest prime number?", a: "2" },
  { q: "What is 12 - 5?", a: "7" },
  { q: "What gas do humans exhale?", a: "Carbon dioxide" },
  { q: "How many hours in a day?", a: "24" },
  { q: "What is 9 + 10?", a: "19" },
  { q: "What is the freezing point of water in °C?", a: "0" },
  { q: "Who painted the Mona Lisa?", a: "Leonardo da Vinci" },
  { q: "What is 7 * 8?", a: "56" },
  { q: "What is the chemical symbol for gold?", a: "Au" }
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

// import bodyParser from "body-parser";
// // app.use(bodyParser.urlencoded({ extended: true }));
//  express.urlencoded({extended : true});


// function generateRandomquest(req, res, next) {
//   const firstname = req.body["firstname"];
//   const lastname = req.body["lastname"];
// const useranswer = req.body["useranswer"]
 
//   var randomquest = ["What The Full Meaning Of HTTP", "What colour code is 000"]
//   var quest = randomquest[Math.floor(Math.random() * randomquest.length)];
//   var answers = ["hyper text tranfer protocol","white", "npm"]
//   gameautorized = false;
  
//   if (answer.includes(useranswer.trim)){
//     gameautorized = true ;
//   }
  
//   next();
// }

// app.use(generateRandomquest);

// app.get("/", (req, res) => {
// res.render("TheGate")
// });

// app.post("/submit", (req, res) =>{

//   if (gameautorized){
//     app.get("/", (req, res) => {
// res.send(`you are welcome ${firstname + lastname}`)
// }) }

// })

// let gameAuthorized = false; // declare globally so routes can see it
// let firstname = "";
// let lastname = "";

// function generateRandomQuest(req, res, next) {
//   firstname = req.body.["firstname"];
//   lastname = req.body.["lastname"];
//   const userAnswer = req.body.["useranswer"]?.trim().toLowerCase(); // handle missing input safely

//   const randomQuest = ["What is the full meaning of HTTP", "What colour code is 000"];
//   const quest = randomQuest[Math.floor(Math.random() * randomQuest.length)];

//   const answers = ["hyper text transfer protocol", "white", "npm"];

//   // check if user's answer is in the array
//   if (answers.includes(userAnswer)) {
//     gameAuthorized = true;
//   } else {
//     gameAuthorized = false;
//   }

//   next(); // continue to next middleware
// }

// app.use(generateRandomQuest);

// app.get("/", (req, res) => {
//   res.render("TheGate");
// });

// app.post("/submit", (req, res) => {
//   if (gameAuthorized) {
//     res.send(`You are welcome ${firstname} ${lastname}`);
//   } else {
//     res.send("Access denied ❌ Wrong answer!");
//   }
// });