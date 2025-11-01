// Running app from here
import app from "./app.js";

app.get("/", (req, res) => {
res.render("TheGate")
});
// app.post("soo we continue here")

var port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
