const imagePaths = Object.values(
  import.meta.glob("/assets/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    as: "url",
  }),
);
const gallery = document.getElementById("gallery");

console.log(imagePaths);

const makeGalleryBox = (imagePath) => {
  const galleryEntry = `
    <div class="gallery-box">
      <img class="gallery-box-img" src="${imagePath}" alt="foto de maquiagem feita pela Gabriela" />
    </div>
  `;

  gallery.innerHTML += galleryEntry;
};

imagePaths.forEach((imagePath) => makeGalleryBox(imagePath));

const galleryBoxImages = document.querySelectorAll(".gallery-box-img");

galleryBoxImages.forEach((galleryBoxImage) => {
  galleryBoxImage.addEventListener("click", () => {
    const galleryBoxImageHeight = galleryBoxImage.style.height;

    galleryBoxImageHeight === "800px"
      ? (galleryBoxImage.style.height = "500px")
      : (galleryBoxImage.style.height = "800px");
  });
});
