const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 8000;

// Define paths for Express config
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

// Setup static directory to serve
app.use(express.static(static_path));

app.get("", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather", {
        title: "Weather Section",
        content: "Welcome to Weather section"
    });
});

app.get("*", (req, res) => {
      res.send("Oops page not found")
});

app.listen(port, () => {
    console.log(`Listening to the port no. ${port}`);
});
