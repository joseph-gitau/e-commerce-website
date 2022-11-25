const validator = require('validator');
const jwt = require('jsonwebtoken');

var createError = require("http-errors");
var session = require("express-session");
var flash = require("express-flash");
var express = require("express");
var logger = require("morgan");
var path = require("path");
var bcrypt = require("bcrypt");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var db = require("./database");
var app = express();
var path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.static("public"));
/**
 * Add routes.
 */
app.use(require("./routes/index"));


app.use(flash());
app.get("/", function (req, res, next) {
  res.render("index", { title: "User Form" });
});
// home page
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/Home.html"));
});
//menu page
/* app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/Menu.html"));
}); */
// menu-item page
/* app.get("/menu-item", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/Menu-item.html"));
}); */
// about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/About.html"));
});
// login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/auth/Login.html"));
});
//profile page
app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/Profile.html"));
});
//register page
app.get("/register", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/home");
  } else {
    res.send(req.flash("testing flash"));
    res.sendFile(path.join(__dirname, "/public/auth/Register.html"));
  }
});
//welcome page requires user to be authenticated
app.get("/welcome", (req, res) => {
  if (req.session.loggedin) {
    const user = req.session.username;
    res.render("welcome", { user });
  } else {
    // res.send("Please login to view this page!");
    res.redirect("/login");
  }

});
/* app.get("/welcome", (req, res) => {
  // request.session.loggedin = true; 
  if (req.session.loggedin) {
    res.redirect("/Home");
    // store users data to a cookie
    res.cookie("username", req.session.name);
    // console .log the cookie
    console.log(req.cookies);
    res.send("Welcome back, " + req.session.email + "!");
  } else {
    res.redirect("/login");
    res.send("Please login to view this pagehghj!");
    
  }
  res.end();

}); */
//logout page
app.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/login");
    }
  });
});

// register user
app.post("/register", function (req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var password_raw = req.body.password;
  // hash password
  var password = bcrypt.hashSync(password_raw, 10);

  // check if email already exists
  var sql0 = "SELECT * FROM users WHERE email = '" + email + "'";
  db.query(sql0, function (err, data) {
    if (err) throw err;
    if (data.length > 0) {
      req.flash("error", "Email already exists");

      res.redirect("/register");
    } else {
      // insert into database
      var sql = "INSERT INTO users (name, email, password) VALUES (?,?,?)";
      db.query(sql, [name, email, password], function (err, data) {
        if (err) throw err;
        req.flash("success", "Registration successful");
        res.redirect("/login");
      });
    }
  });
});

// login user
// http://localhost:3000/auth
app.post("/login", function (request, response) {
  var email = request.body.email;
  var password = request.body.password;
  if (email && password) {
    // check if email exists
    var sql0 = "SELECT * FROM users WHERE email = '" + email + "'";
    db.query(sql0, function (err, data) {
      if (err) throw err;
      if (data.length > 0) {
        // check if password is correct
        if (bcrypt.compareSync(password, data[0].password)) {
          request.session.loggedin = true;
          request.session.email = email;
          request.session.username = data[0].name;
          response.redirect("/welcome");
        } else {
          request.flash("error", "Incorrect Password");
          response.redirect("/login");
        }
      } else {
        request.flash("error", "Incorrect Email");
        response.redirect("/login");
      }
    });
  } else {
    request.flash("error", "Please enter Email and Password");
    response.redirect("/login");
  }
});

app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});
app.listen(5555, function () {
  console.log("Node server is running on port : 5555");
});
module.exports = app;
