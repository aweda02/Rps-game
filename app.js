import express from "express";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

//
// app.get("/", (req, res) => {
//     res.status(201).json({
//         message: "Testing step"
//     });
// });

export default app;
