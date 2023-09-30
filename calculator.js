const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})

// const express = require('express');
// const app = express();
// const port = 3000; // You can use a different port if 3000 is in use

// // Middleware to parse form data
// app.use(express.urlencoded({ extended: true }));

// // Serve static files (your HTML)
// app.use(express.static('public'));

// // Handle form submission
// app.post('/', (req, res) => {
//   const num1 = parseInt(req.body.num1);
//   const num2 = parseInt(req.body.num2);
//   const result = num1 + num2;
//   res.send(`Result: ${result}`);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });