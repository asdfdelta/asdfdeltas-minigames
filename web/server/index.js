const express = require('express');
const db = require('../db/connection').initDb();

const PORT = process.env.PORT || 4000;
const app = express();
const state = {app};

app.use(express.static('./build'));

require('./lib/routes.js')(state);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});