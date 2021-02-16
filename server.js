const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();


app.get("/", (_, res) => res.send('welcome to my heroku deployment'));
app.get("/json", (_, res) => res.json({
    code: 200,
    message: "Welcome to my heroku deployment"
}));

app.listen(process.env.PORT, (req, res) => console.log(`Server running on port ${process.env.PORT}`));

