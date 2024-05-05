const contactButton = document.querySelector(".contact-button");
const linksSection = document.querySelector(".links-container");

const highlightLinks = (element) => {
  element.style.backgroundColor = "var(--color-secondary)";
  setTimeout(() => {
    element.style.backgroundColor = "transparent";
  }, 500);
};

ScrollReveal().reveal(".links-container", {
  duration: 1000,
  origin: "bottom",
  distance: "50px",
  scale: 0.5,
  reset: true,
  afterReveal: highlightLinks,
});

contactButton.addEventListener("click", (event) => {
  event.preventDefault();

  linksSection.scrollIntoView({ block: "center", behavior: "smooth" });
});
