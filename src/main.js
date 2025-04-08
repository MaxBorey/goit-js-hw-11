import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-function.js";

// DOM
const form = document.querySelector("#search-form");
const breedInput = document.querySelector("#breed-input");
const breedsList = document.querySelector("#breeds-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = breedInput.value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.info({
          title: "No results",
          message: "No images found for your query.",
          position: "topRight",
        });
        return;
      }

      // Рендер галереї
      createGallery(images);

      // Показуємо тільки унікальні теги у вигляді підказок
      const allTags = images.flatMap(image =>
        image.tags.split(',').map(tag => tag.trim().toLowerCase())
      );

      const uniqueTags = [...new Set(allTags)];
      const topTags = uniqueTags.slice(0, 10); // максимум 10 тегів

      breedsList.innerHTML = topTags
        .map(tag => `<option value="${tag}"></option>`)
        .join("");
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: "Error",
        message: "Something went wrong!",
        position: "topRight",
      });
    })
    .finally(() => {
      hideLoader();
    });
});
