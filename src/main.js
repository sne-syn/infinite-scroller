let count = 5;
const API_KEY = process.env.ACCESS_KEY;
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${count}`;

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

const setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

const imageLoaded = () => {
  const loader = document.querySelector('.loader');
  imagesLoaded++;
  ready = imagesLoaded === totalImages ? true : false;
  loader.hidden = true;
};

const displayPhotos = () => {
  const imageContainer = document.querySelector('.image-container');
  totalImages = photosArray.length;
  imagesLoaded = 0;

  photosArray.forEach(photo => {
    // Create <a> to link to Unsplash
    const imageLink = document.createElement('a');
    setAttributes(imageLink, {
      href: photo.urls.regular,
      target: '_blank',
      rel: 'noreferrer'
    })

    // Create <img> for photo
    const image = document.createElement('img');
    setAttributes(image, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    })

    image.addEventListener('load', imageLoaded);
    // Append created elements to the DOM
    imageLink.appendChild(image);
    imageContainer.appendChild(imageLink);
  });
};

const getPhotos = async () => {
  try {
    const response = await fetch(API_URL);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
};

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos();
  }
});

getPhotos();

