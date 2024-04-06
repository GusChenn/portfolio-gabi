let descriptionBox = document.querySelector(".description-box");
let originalDescriptionBoxOffsetTop = descriptionBox.offsetTop;

window.addEventListener("scroll", () => {
  window.scrollY > originalDescriptionBoxOffsetTop
    ? descriptionBox.classList.add("sticky")
    : descriptionBox.classList.remove("sticky");
});
