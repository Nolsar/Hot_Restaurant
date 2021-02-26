// Dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const  htmlRoutes= require("./routes/htmlRoutes");

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Routes
app.use(htmlRoutes)
app.use(apiRoutes)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  