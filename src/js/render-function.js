import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/ball-pulse.css';

const catCard = document.querySelector("#cat-card");
const loader = document.querySelector("#loader");

const lightbox = new SimpleLightbox(".gallery-item", {
  captionsData: "data-caption",
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images.map(
    ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <a href="${largeImageURL}" class="gallery-item" data-caption="
        👍 Likes: ${likes}
        👁 Views: ${views}
        💬 Comments: ${comments}
        ⬇ Downloads: ${downloads}
      ">
        <div class="card">
          <img src="${webformatURL}" alt="${tags}" />
        </div>
      </a>
    `
  ).join("");

  catCard.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  catCard.innerHTML = "";
}

export function showLoader() {
  loader.style.display = "flex"; // або "block", залежить від стилю
}

export function hideLoader() {
  loader.style.display = "none";
}
