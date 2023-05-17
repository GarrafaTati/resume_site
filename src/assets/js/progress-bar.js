import isScrolledIntoView from "./scrolled-into_view.js";

const skillsContainer = document.querySelector(".skills");

window.addEventListener("scroll", function () {
  if (isScrolledIntoView(skillsContainer)) {
    skillsContainer.classList.add("inView");
  } else {
    skillsContainer.classList.remove("inView");
  }
});

const langContainer = document.querySelector(".lang__container");
const circlePt = document.querySelector(".svg_circle--pt");
const circleFr = document.querySelector(".svg_circle--fr");
const circleEn = document.querySelector(".svg_circle--en");

window.addEventListener("scroll", function () {
  if (isScrolledIntoView(langContainer)) {
    circlePt.style.strokeDashoffset = 0;
    circleFr.style.strokeDashoffset = 22;
    circleEn.style.strokeDashoffset = 44;
  } else {
    circlePt.style.strokeDashoffset = 440;
    circleFr.style.strokeDashoffset = 440;
    circleEn.style.strokeDashoffset = 440;
  }
});
