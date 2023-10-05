const router = require('express').Router();
const path = require('path')
const fs = require("fs");
const util = require("util");

router.get('/', (req, res) => {
    const readFromFile = util.promisify(fs.readFile)
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});