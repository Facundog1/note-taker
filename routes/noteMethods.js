const router = require("express").Router();
const { readFromFile, readAndAppend, writeToFile, deleteNote } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");
const path = require("path");

router.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/", (req, res) => {
  console.log(req.body)
  const { title, text } = req.body;
  const newNote = {
    title,
    text,
    id: uuid(),
  };
  readAndAppend(newNote, "./db/db.json");
  return res.json(newNote);
});

module.exports = router;