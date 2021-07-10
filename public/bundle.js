/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
const PHOTO_COUNT = 10;
const API_KEY = "0sxPS6oS9ZwnBroHlHoq2XZJX_4Rjt7a5aVMdSD1gcc";
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${PHOTO_COUNT}`;

const loadPhotos = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    fillImages(data);
  } catch (error) {
    // Catch Error Here
  }
}

const fillImages = (data) => {
  const imageContainer = document.querySelector('.image-container');
  data.forEach(unit => {
    const image = document.createElement('img');
    image.src = unit.urls.raw;
    image.alt = unit.alt_description;

    imageContainer.appendChild(image);
  });
}

loadPhotos()

/******/ })()
;
//# sourceMappingURL=bundle.js.map