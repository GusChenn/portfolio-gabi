let descriptionBox = document.querySelector(".description-box");
let placeholder = document.querySelector("#placeholder");

let descriptionBoxFullContent = `
  <div class="name-box">
    <h3>Gabriela Brás</h3>
    <p class="divider"></p>
    <h3>ximbica</h3>
  </div>
  <div class="content">
    <h4>Estudante de moda na universidade de São Paulo, <b>maquiadora profissional</b>.</h4>
  </div>
`;

let descriptionBoxShortContent = `
  <div class="name-box">
    <h3>ximbica</h3>
  </div>
`;

let originalDescriptionBoxOffsetTop = descriptionBox.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY > originalDescriptionBoxOffsetTop) {
    descriptionBox.classList.add("sticky", "full-width");
    descriptionBox.innerHTML = descriptionBoxShortContent;
    placeholder.style.display = "block";
  } else {
    descriptionBox.classList.remove("sticky", "full-width");
    descriptionBox.innerHTML = descriptionBoxFullContent;
    placeholder.style.display = "none";
  }
});
