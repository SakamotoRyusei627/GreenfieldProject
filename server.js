const express = require("express");
const knex = require("./db/knex");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Content-Type");
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
  res.set("content-type", "application/json").status(200).send(allList);
});

app.post("/send/:id", async (req, res) => {
  const maxId = Number(req.params.id);
  console.log("サーバー", maxId);
  console.table(req.body);
  await knex("posted").insert({
    title: req.body.title,
    posted_date: req.body.postedDate,
    tag: req.body.tag,
    keyword: req.body.keyword,
    url: req.body.url,
    pict_url: req.body.pictureUrl,
  });

  const diffList = await knex
    .select({
      id: "id",
      title: "title",
      postedDate: "posted_date",
      tag: "tag",
      keyword: "keyword",
      url: "url",
      pictureUrl: "pict_url",
    })
    .from("posted")
    .where("id", ">", maxId);
  res.set("content-type", "application/json").status(200).send(diffList);
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} !`);
});
