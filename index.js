// Running app from here
import app from "./app.js";
import bodyParser from "body-parser";
// app.use(bodyParser.urlencoded({ extended: true }));
 express.urlencoded({extended : true});


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

let gameAuthorized = false; // declare globally so routes can see it
let firstname = "";
let lastname = "";

function generateRandomQuest(req, res, next) {
  firstname = req.body.["firstname"];
  lastname = req.body.["lastname"];
  const userAnswer = req.body.["useranswer"]?.trim().toLowerCase(); // handle missing input safely

  const randomQuest = ["What is the full meaning of HTTP", "What colour code is 000"];
  const quest = randomQuest[Math.floor(Math.random() * randomQuest.length)];

  const answers = ["hyper text transfer protocol", "white", "npm"];

  // check if user's answer is in the array
  if (answers.includes(userAnswer)) {
    gameAuthorized = true;
  } else {
    gameAuthorized = false;
  }

  next(); // continue to next middleware
}

app.use(generateRandomQuest);

app.get("/", (req, res) => {
  res.render("TheGate");
});

app.post("/submit", (req, res) => {
  if (gameAuthorized) {
    res.send(`You are welcome ${firstname} ${lastname}`);
  } else {
    res.send("Access denied ❌ Wrong answer!");
  }
});






var port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
