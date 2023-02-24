import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const makeGalleryMarkup = (galleryItem) => {
  const { preview, original, description } = galleryItem;
  return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/>
    </a>
    </div>`;
};
const gallery = document.querySelector(".gallery");
const makeGallery = galleryItems.map(makeGalleryMarkup).join("");

gallery.insertAdjacentHTML("afterbegin", makeGallery);
console.log(makeGallery);

gallery.addEventListener("click", showModal);

function showModal(event) {
  event.preventDefault();
  document.addEventListener("keydown", pressEscape);

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageSize = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src=${imageSize} />`, {
    onClose: () => {
      document.removeEventListener("keydown", pressEscape);
    },
  });

  instance.show();

  function pressEscape(event) {
    if (event.code === "Escape") {
      console.log(event.code);
      instance.close();
    }
  }
}
