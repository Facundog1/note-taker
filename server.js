const express = require('express')
const PORT = process.env.PORT ?? 3001;
const app = express();
const fs = require('fs');
const routes = require('./routes');

app.use(express.static('public'));
app.use(routes)

// middleware for parsing url and json data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => {
    console.log(`Application is running @ http://localhost:${PORT}`);
});