import "./style.css";

let descriptionBox = document.querySelector(".description-box");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio < 1) {
        descriptionBox.classList.add("fixed");
      } else {
        descriptionBox.classList.remove("fixed");
      }
    });
  },
  { threshold: 1 },
);

observer.observe(descriptionBox);
