const descriptionBoxRegularInnerHTML = `
  <div class="name-box">
    <h3>Gabriela Brás</h3>
    <p class="divider"></p>
    <h3>ximbica</h3>
  </div>
  <div class="content">
    <h4>Estudante de moda na universidade de São Paulo, <b>maquiadora profissional</b>.</h4>
  </div>
`;

const descriptionBoxFixedInnerHTML = `
  <div>laskdjfldas</div>
`;

let descriptionBox = document.querySelector(".description-box");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio < 1) {
        descriptionBox.innerHTML = descriptionBoxFixedInnerHTML;
        descriptionBox.classList.add("fixed");
      } else {
        descriptionBox.innerHTML = descriptionBoxRegularInnerHTML;
        descriptionBox.classList.remove("fixed");
      }
    });
  },
  { threshold: 1 },
);

observer.observe(descriptionBox);
