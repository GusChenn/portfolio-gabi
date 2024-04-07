import { addStarAnimations } from "./stars";

// let descriptionBox = document.querySelector(".description-box");
// let placeholder = document.querySelector("#placeholder");
//
// let descriptionBoxFullContent = `
//   <div class="name-box full">
//     <h3>Gabriela Brás</h3>
//     <p class="divider"></p>
//     <h4>Maquiadora profissional</h4>
//   </div>
//   <div class="content">
//     <h5>Estudante de moda na universidade de São Paulo, <b>maquiadora profissional</b>.</h5>
//   </div>
// `;
//
// let descriptionBoxShortContent = `
//   <div class="name-box short">
//     <h3 class="mx-16">Gabriela Brás</h3>
//     <a class="contact-button mx-16" href="#hero">
//       <h6>entrar em contato</h6>
//     </a>
//   </div>
// `;
//
// let originalDescriptionBoxOffsetTop = descriptionBox.offsetTop;
//
// window.addEventListener("scroll", () => {
//   if (window.scrollY > originalDescriptionBoxOffsetTop) {
//     descriptionBox.classList.add("sticky", "full-width");
//     descriptionBox.innerHTML = descriptionBoxShortContent;
//     placeholder.style.display = "block";
//
//     let contactButton = document.querySelector(".contact-button");
//     contactButton.addEventListener("click", () => addStarAnimations());
//   } else {
//     descriptionBox.classList.remove("sticky", "full-width");
//     descriptionBox.innerHTML = descriptionBoxFullContent;
//     placeholder.style.display = "none";
//   }
// });
