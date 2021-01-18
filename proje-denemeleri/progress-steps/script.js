const previousButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const myProgress = document.getElementById("progress");
const myCircle = document.getElementsByClassName("circle");

var currentActive = 0;


nextButton.addEventListener("click", function () {
  currentActive++;
  myCircle[currentActive].classList.add("active");
  previousButton.disabled = false;

  myProgress.style.width = currentActive * 33.33 + "%";

  if (currentActive == 3) {
    nextButton.disabled = true;
    previousButton.disabled = false;
  }
});
previousButton.addEventListener("click", function () {
  myCircle[currentActive].classList.remove("active");
  currentActive--;
  myProgress.style.width = currentActive * 33.33 + "%";
  nextButton.disabled = false;
  if (currentActive == 0) {
    nextButton.disabled = false;
    previousButton.disabled = true;
  }
});