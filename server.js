const express = require("express");
const app = express();
const PORT = 8000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.get("/", (req, res) => res.send("Give me request!!!"));

app.get("/test", (req, res) => {
  const result = JSON.stringify({ firstName: "Sakamoto" });
  res.set("content-type", "application/json").status(200).send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} !`);
});
