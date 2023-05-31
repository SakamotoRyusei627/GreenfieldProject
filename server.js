const express = require("express");
const knex = require("./db/knex");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // res.header("Access-Control-Allow-Methods", "*");
  // res.header("Access-Control-Request-Headers", "*");
  // res.header("Access-Control-Request-Method", "*");
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

// const textContent = JSON.stringify({
//   title: "title",
//   postedDate: 1685513284,
//   tag: "tag",
//   keyword: "keyword",
//   url: "url",
//   pictureUrl: "pict_url",
// });

// const textContent2 = JSON.stringify({
//   title: "title",
//   postedDate: 1685513284,
//   tag: "tag",
//   keyword: "keyword",
//   url: "url",
//   pictureUrl: "pict_url",
// });

// const options = { method: "POST", body: textContent };
// options.headers = new Headers({ "Content-Type": "application/json" });

// fetch(path, options).then((response) => {
//   response.text().then((textValue) => {
//     console.log(textValue);
//   });
// });

// https://localhost:8000/
// http://localhost:8000/
