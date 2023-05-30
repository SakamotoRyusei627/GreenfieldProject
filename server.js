const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => res.send("Give me request!!!"));

app.get("/test", (req, res) => {
  const result = JSON.stringify({ name: "Sakamoto" });
  res.set("content-type", "application/json").status(200).send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} !`);
});
