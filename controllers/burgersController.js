var express = require("express")

var router = express.Router()
var burger = require("../models/burger.js")

// get route -> index
router.get("/", function (req, res) {
    res.redirect("/burgers")
})

router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        var dataObj = {
          burger_data: data
        }
        console.log(dataObj)
        res.render("index", dataObj)
    })
})

// post route -> back to index

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function(data){
        res.redirect("/")
    })
})

// put route -> back to index



module.exports = router