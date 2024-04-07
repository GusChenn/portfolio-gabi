const classes = [
  "star-left-up",
  "star-right-up",
  "star-center-up",
  "star-left-down",
  "star-right-down",
  "star-center-down",
];

export let addStarAnimations = () => {
  let stars = document.querySelectorAll(".star");

  stars.forEach((star, idx) => {
    star.classList.add(classes[idx]);
    star.addEventListener("animationend", () =>
      star.classList.remove(classes[idx]),
    );
  });
};
