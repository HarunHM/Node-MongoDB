const express = require("express");

const app = express();

const port  = 8000;


app.get("/index", (request, response) => {
    response.send('Hello World served by ExpressJS');
});

app.listen(port, "localhost");