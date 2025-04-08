import axios from "axios";

const myApiKey = "49674407-1d122c5bfd0965d51e6fbc3dd";

export function getImagesByQuery(query) {
  return axios("https://pixabay.com/api/", {
    params: {
      key: myApiKey,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  }).then(response => response.data.hits);
}
