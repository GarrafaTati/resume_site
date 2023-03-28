import "./timeline.js";
import "../styles/index.scss";

const skillsContainer = document.querySelector(".skills");

function isScrolledIntoView(elem) {
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

  return isVisible;
}

window.addEventListener("scroll", function () {
  if (isScrolledIntoView(skillsContainer)) {
    skillsContainer.classList.add("inView");
  } else {
    skillsContainer.classList.remove("inView");
  }
});
