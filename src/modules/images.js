const images = import.meta.glob("/public/images/*");
const gallery = document.getElementById("gallery");

const makeGalleryBox = (imagePath) => {
  const galleryEntry = `
    <div class="gallery-box">
      <img src="${imagePath}" alt="gallery image" />
    </div>
  `;

  gallery.innerHTML += galleryEntry;
};

for (const imagePath in images) {
  makeGalleryBox(imagePath);
}
