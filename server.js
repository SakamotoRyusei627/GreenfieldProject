const express = require("express");
const app = express();
const PORT = 8000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get("/", (req, res) => res.send("Give me request!!!"));

app.get("/test", (req, res) => {
  const result = JSON.stringify({
    id: 1,
    title: "string",
    posted_date: "number",
    tag: "string",
    keyword: "string",
    url: "string",
    pict_url: "string",
  });
  res.set("content-type", "application/json").status(200).send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} !`);
});
