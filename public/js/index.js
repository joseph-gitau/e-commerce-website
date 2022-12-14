// include files
$(function () {
  $("#includedContent").load("/partials/header.html");
  $("#includedFooter").load("/partials/footer.html");
});
// set icon for website

var link =
  document.querySelector("link[rel*='icon']") || document.createElement("link");
link.type = "image/x-icon";
link.rel = "shortcut icon";
link.href = "/resources/icons/apple-icon.png";
document.getElementsByTagName("head")[0].appendChild(link);

// check if user is logged in by session, show logout button and hide login button
if (session.loggedin) {
  res.redirect("/Home");
  // store users data to a cookie
  res.cookie("username", req.session.name);
  // console .log the cookie
  console.log(req.cookies);
  res.send("Welcome back, " + req.session.email + "!");
} else {
  res.redirect("/login");
  res.send("Please login to view this page!");
}


// document.ready jquery
$(document).ready(function () {
  // turn of autocomplete for all input fields
  $("input").attr("autocomplete", "off");
  // validate the form
  $("#registration-forms").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
      confirmPassword: {
        required: true,
        minlength: 5,
        equalTo: "#password",
      },
      terms: "required",
    },
    messages: {
      name: {
        required: "<span class='danger'>Please enter your name</span>",
        minlength:
          "<span class='danger'>Your name must consist of at least 2 characters</span>",
      },
      email: {
        required: "<span class='danger'>Please enter your email</span>",
        email: "<span class='danger'>Please enter a valid email address</span>",
      },
      password: {
        required: "<span class='danger'>Please enter your password</span>",
        minlength:
          "<span class='danger'>Your password must consist of at least 5 characters</span>",
      },
      confirmPassword: {
        required: "<span class='danger'>Please enter your password</span>",
        minlength:
          "<span class='danger'>Your password must consist of at least 5 characters</span>",
        equalTo:
          "<span class='danger'>Please enter the same password as above</span>",
      },
      terms: "<span class='danger'>Please accept our terms</span>",
    },
    // check if the password and confirm password are the same
    /* submitHandler: function (form) {
      window.location.href = "../auth/login.html";
    }, */
    /* submitHandler: function (form) {
      $(form).ajaxSubmit({
        type: "POST",
        data: $(form).serialize(),
        url: "register.html",
        success: function () {
          // prompt the user that the form was submitted
          $("#registration-form :input").attr("disabled", "disabled");
          $("#registration-form").fadeTo("slow", 1, function () {
            $(this).find(":input").attr("disabled", "disabled");
            $(this).find("label").css("cursor", "default");
            $("#success").fadeIn();
            $(".modal").modal("hide");
            // clear the form
            $("#registration-form").trigger("reset");
          });
        },
        error: function () {
          $("#registration-form").fadeTo("slow", 1, function () {
            $("#error").fadeIn();
          });
        },
      });
    }, */
  });
  // validate the login form
  $("#login-forms").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      email: {
        required: "<span class='danger'>Please enter your email</span>",
        email: "<span class='danger'>Please enter a valid email address</span>",
      },
      password: {
        required: "<span class='danger'>Please enter your password</span>",
        minlength:
          "<span class='danger'>Your password must consist of at least 5 characters</span>",
      },
    },
    //if validation is successful, prevent the form from submitting
    /* submitHandler: function (form) {
      // take the user to welcome.html
      window.location.href = "../welcome.html";
    }, */
    /* submitHandler: function (form) {
        $(form).ajaxSubmit({
          type: "POST",
          data: $(form).serialize(),
          url: "login.html",
          success: function () {
            // prompt the user that the form was submitted
            $("#login-form :input").attr("disabled", "disabled");
            $("#login-form").fadeTo("slow", 1, function () {
              $(this).find(":input").attr("disabled", "disabled");
              $(this).find("label").css("cursor", "default");
              $("#success").fadeIn();
              $(".modal").modal("hide");
              // clear the form
              $("#login-form").trigger("reset");
            });
          },
          error: function () {
            $("#login-form").fadeTo("slow", 1, function () {
              $("#error").fadeIn();
            });
          },
        });
      }, */
  });
  //if validation is successful, prevent the form from submitting
 /*  if ($("#registration-forms").valid()) {
    return false;
  }
  if ($("#login-forms").valid()) {
    return false;
  } */
});
