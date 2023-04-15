const express = require("express");
const app = express();

app.use(express.json()); //need this to access request body

app.get("/movies", function (req, res) {

})
const PORT = 9090;
app.listen (PORT, function() {
    console.log("server is listening on port 9090...");
})