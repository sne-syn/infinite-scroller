const PHOTO_COUNT = 10;
const API_KEY = '';
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
    image.src = unit.urls.regular;
    image.alt = unit.alt_description;

    imageContainer.appendChild(image);
  });
}

loadPhotos()
