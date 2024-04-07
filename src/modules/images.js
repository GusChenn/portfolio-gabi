const images = import.meta.glob("/public/images/*");
const gallery = document.getElementById("gallery");

const makeGalleryBox = (imagePath) => {
  const galleryEntry = `
    <div class="gallery-box">
      <img class="gallery-box-img" src="${imagePath}" alt="foto de maquiagem feita pela Gabriela" />
    </div>
  `;

  gallery.innerHTML += galleryEntry;
};

for (const imagePath in images) {
  makeGalleryBox(imagePath);
}

const galleryBoxImages = document.querySelectorAll(".gallery-box-img");

galleryBoxImages.forEach((galleryBoxImage) => {
  galleryBoxImage.addEventListener("click", () => {
    const galleryBoxImageHeight = galleryBoxImage.style.height;

    galleryBoxImageHeight === "800px"
      ? (galleryBoxImage.style.height = "500px")
      : (galleryBoxImage.style.height = "800px");
  });
});
