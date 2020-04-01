var db = require("./models")

module.exports = function (app) {

  // get route -> index
  app.get("/", function (req, res) {
    res.redirect("/burgers")
  });

  app.get("/burgers", function (req, res) {
    //FIXME:
    db.Burger.findAll({})
      .then(function (dbBurger) {
        res.render(dbBurger)
      })
  })

  // post route -> back to index


  // put route -> back to index

}