const express = require("express");
const app = express();

const { Client } = require("pg");

//db config
const client = new Client({
  user: "postgres",
  host: "",
  database: "ecommerce",
  password: "123456",
  port: 5432,
});

client.connect();

app.get("/", (req, res) => {
  res.send("Helo World!");
});

app.get("/users", async (req, res) => {
  try {
    const response = await client.query("SELECT * FROM users");
    console.log(response.rows);
    res.json(response);
  } catch (error) {
    console.log("get users error", error);
    res.status(500).json({ error });
  }
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

app.listen(3000, () => console.log("Started"));
