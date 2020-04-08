//function for home click
function homeClick() {
  $(".home-link").on("click", function () {
    history.go(0);
  });
}

//functions for projects click
function clickProjects() {
  $("#project-button").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $("#nav-project-button").css({
      "border-bottom": "3px solid white",
      "font-size": "16px",
      "font-family": "Montserrat, sans-serif",
    });
    $("#nav-learn-more").css({
      "border-bottom": "none",
      "font-size": "12px",
      "font-family": "Hind, sans-serif",
    });
    $("#home-link").css({
      "border-bottom": "none",
      "font-size": "12px",
      "font-family": "Hind, sans-serif",
    });
    $(".bloc-projects").css("display", "block");
    $(".main-page").css("display", "none");
    $(".about-me").css("display", "none");
  });
}

function navClickProjects() {
  $("#nav-project-button").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $("#nav-project-button").css({
      "border-bottom": "3px solid white",
      "font-size": "16px",
      "font-family": "Montserrat, sans-serif",
    });
    $("#nav-learn-more").css({
      "border-bottom": "none",
      "font-size": "12px",
      "font-family": "Hind, sans-serif",
    });
    $("#home-link").css({
      "border-bottom": "none",
      "font-size": "12px",
      "font-family": "Hind, sans-serif",
    });
    $(".bloc-projects").css("display", "block");
    $(".main-page").css("display", "none");
    $(".about-me").css("display", "none");
  });
}

//functions for learn more click
function clickLearnMore() {
  $("#learn-more").on("click", function () {
    $("#nav-learn-more").css({
      "border-bottom": "3px solid white",
      "font-size": "16px",
      "font-family": "Montserrat, sans-serif",
    });
    $("#nav-project-button").css({
      "border-bottom": "none",
      "font-size": "12px",
      "font-family": "Hind, sans-serif",
    });
    $("#home-link").css({
      "border-bottom": "none",
      "font-size": "12px",
      "font-family": "Hind, sans-serif",
    });
    $(".main-page").css("display", "none");
    $(".bloc-projects").css("display", "none");
    $(".about-me").css("display", "block");
  });
}

function navClickLearnMore() {
  $("#nav-learn-more").on("click", function () {
    $("#nav-learn-more").css({
      "border-bottom": "3px solid white",
      "font-size": "16px",
      "font-family": "Montserrat, sans-serif",
    });
    $("#nav-project-button").css({
      "border-bottom": "none",
      "font-size": "12px",
      "font-family": "Hind, sans-serif",
    });
    $("#home-link").css({
      "border-bottom": "none",
      "font-size": "12px",
      "font-family": "Hind, sans-serif",
    });
    $(".main-page").css("display", "none");
    $(".bloc-projects").css("display", "none");
    $(".about-me").css("display", "block");
  });
}

//run all portfolio functions
function createPortfolio() {
  clickProjects();
  navClickProjects();
  clickLearnMore();
  navClickLearnMore();
  homeClick();
}

$(createPortfolio);
