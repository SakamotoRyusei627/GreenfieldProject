const express = require("express");
const knex = require("./db/knex");
const app = express();
const PORT = 8000;

/*
  下の一行によって、受信されるリクエストボディに 'application/json'というContent-Type headerがあるときにJSONをパースするミドルウェアが追加される。
  このミドルウェアが使われるときは、JSON.parseやJSON.stringifyをしなくてもよい。
*/
app.use(express.json());
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

app.get("/list", async (req, res) => {
  // const allList = await knex.select("*").from("posted");
  const allList = await knex
    .select({
      id: "id",
      title: "title",
      postedDate: "posted_date",
      tag: "tag",
      keyword: "keyword",
      url: "url",
      pictureUrl: "pict_url",
    })
    .from("posted");
  // console.log(test);
  res.set("content-type", "application/json").status(200).send(allList);
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} !`);
});

// ※knex/server.js から持ってきた部分
// // Customer routes
// app.get("/customers", customerController.index);
// app.get("/customers/view/:id", validateId, customerController.view);
// app.get("/customers/edit/:id", validateId, customerController.edit);
// app.get("/customers/new", customerController.new);
// app.post("/customers/save", customerController.save);
