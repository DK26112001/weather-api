app.get("*", (req, res) => {
    res.render("404error",{
        errorMsg: 'Oops! page not found'
    });
});