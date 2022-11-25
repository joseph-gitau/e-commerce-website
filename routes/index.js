var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var db = require("../database");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// menu page
router.get("/menu", (req, res) => {
  // res.render('menu', { title: 'Menu' });
  let menus;
  db.query("SELECT * FROM menu", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      menus = results;
      // console.log(menu);
      res.render("menu", { title: "menu", menus: results });
    }
  });
});

// menu-item page
router.get("/menu-item/:item", (req, res) => {
  let item = req.params.item;
  let menu;
  db.query("SELECT type FROM menu WHERE id = ?", [item], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      // select * from menu where name = results[0].name
      db.query(
        "SELECT * FROM menu WHERE type = ?",
        [results[0].type],
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            menu = results;
            // console.log(menu);
            res.render("menu-item", { title: "menu-item", menu: results });
          }
        }
      );
    }
  });
});

module.exports = router;
