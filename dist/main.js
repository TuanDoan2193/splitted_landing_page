const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
const contentLeft = document.querySelector(".content-left");
const contentRight = document.querySelector(".content-right");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
  contentLeft.classList.add("change");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
  contentLeft.classList.remove("change");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
  contentRight.classList.add("change");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
  contentRight.classList.remove("change");
});
