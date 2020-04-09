//render projects
function renderProjects() {
  STORE.map((project) => {
    $(".projects").append(`<div class="project-container">
                <div class="img-container">
                  <img
                    id="app"
                    src="${project.img_src}"
                    alt="project screenshot"
                  />
                </div>
                <div class="project-desc">
                  <h3>${project.project_title}</h3>
                  <ul class="tech-icons">
                  ${project.project_tech
                    .map((icon) => `<li><i class="${icon}"></i><li>`)
                    .join("")}
                    <li class='tech-txt'>${project.project_tech_txt_1}</li>
                    <li class='tech-txt'>${project.project_tech_txt_2}</li>
                  </ul>
                  <p>
                    ${project.project_description}
                  </p>
                  <div class="project-buttons">
                    <a
                      href="${project.reop_link}"
                      target="_blank"
                      class="button"
                      >Code</a
                    >
                    <a
                      href="${project.live_link}"
                      target="_blank"
                      class="button"
                      >Live</a
                    >
                  </div>
                </div>
              </div>`);
  });
  $("li:empty").remove();
}

//fade in projects
$(window).scroll(function () {
  var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  $(".project-container").each(function () {
    var objectBottom = $(this).offset().top + $(this).outerHeight();

    if (objectBottom - 500 < windowBottom) {
      if ($(this).css("opacity") == 0) {
        $(this).fadeTo(500, 1);
      }
    } else {
      if ($(this).css("opacity") == 1) {
        $(this).fadeTo(500, 0);
      }
    }
  });
});

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
      "font-size": "2.0vmax",
      "font-family": "Montserrat, sans-serif",
    });
    $("#nav-learn-more").css({
      "border-bottom": "none",
      "font-family": "Hind, sans-serif",
    });
    $("#home-link").css({
      "border-bottom": "none",
      "font-family": "Hind, sans-serif",
    });
    $(".bloc-projects").fadeIn(1000);
    $(".main-page").css("display", "none");
    $(".about-me").css("display", "none");
  });
}

function navClickProjects() {
  $("#nav-project-button").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $("#nav-project-button").css({
      "border-bottom": "3px solid white",
      "font-size": "2vmax",
      "font-family": "Montserrat, sans-serif",
    });
    $("#nav-learn-more").css({
      "border-bottom": "none",
      "font-family": "Hind, sans-serif",
    });
    $("#home-link").css({
      "border-bottom": "none",
      "font-family": "Hind, sans-serif",
    });
    $(".bloc-projects").fadeIn(1000);
    $(".main-page").css("display", "none");
    $(".about-me").css("display", "none");
  });
}

//functions for learn more click
function clickLearnMore() {
  $("#learn-more").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $("#nav-learn-more").css({
      "border-bottom": "3px solid white",
      "font-size": "2vmax",
      "font-family": "Montserrat, sans-serif",
    });
    $("#nav-project-button").css({
      "border-bottom": "none",
      "font-family": "Hind, sans-serif",
    });
    $("#home-link").css({
      "border-bottom": "none",
      "font-family": "Hind, sans-serif",
    });
    $(".main-page").css("display", "none");
    $(".bloc-projects").css("display", "none");
    $(".about-me").fadeIn(1000);
  });
}

function navClickLearnMore() {
  $("#nav-learn-more").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $("#nav-learn-more").css({
      "border-bottom": "3px solid white",
      "font-size": "2vmax",
      "font-family": "Montserrat, sans-serif",
    });
    $("#nav-project-button").css({
      "border-bottom": "none",
      "font-family": "Hind, sans-serif",
    });
    $("#home-link").css({
      "border-bottom": "none",
      "font-family": "Hind, sans-serif",
    });
    $(".main-page").css("display", "none");
    $(".bloc-projects").css("display", "none");
    $(".about-me").fadeIn(1000);
  });
}

//run all portfolio functions
function createPortfolio() {
  renderProjects();
  clickProjects();
  navClickProjects();
  clickLearnMore();
  navClickLearnMore();
  homeClick();
}

$(createPortfolio);
