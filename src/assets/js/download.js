const btnWrapper = document.querySelector(".btn-circle-download");
const btn = document.querySelector(".btn__icon");

btnWrapper.addEventListener("click", function () {
  btn.classList.add("load");
  setTimeout(function () {
    btn.classList.add("done");
  }, 1000);
  setTimeout(function () {
    btn.classList.remove("load", "done");
  }, 5000);
});
