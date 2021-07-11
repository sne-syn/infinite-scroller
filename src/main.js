const PHOTOS_COUNT = 10;
const API_KEY = process.env.ACCESS_KEY;
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${PHOTOS_COUNT}`;

let photosCollection = [];
let isLoaded = false;

const setAttributes = (item, attributes) => {
  for (const key in attributes) {
    item.setAttribute(key, attributes[key]);
  }
}

const getPhotosFromApi = async () => {
  const loader = document.querySelector('.loader');
  try {
    const response = await fetch(API_URL);
    photosCollection = await response.json();
    displayImages(photosCollection);
    isLoaded = true;
    loader.hidden = true;
  } catch (error) {
    alert( "Our apologies, the data has errors. We will try to fix it as soon as possible" );
  }
}

const displayImages = (data) => {
  const container = document.querySelector('.image-container');
  data.forEach(element => {
    const imageLink = document.createElement('a');
    setAttributes(imageLink, {
      href: element.urls.regular,
      target: '_blank',
      rel: 'noreferrer'
    })

    const img = document.createElement('img');
    setAttributes(img, {
      src: element.urls.regular,
      alt: element.alt_description,
      title: element.alt_description
    })

    imageLink.appendChild(img);
    container.appendChild(imageLink);
  })
}

window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.body.clientHeight && isLoaded) {
    getPhotosFromApi();
    isLoaded = false;
  }
})

getPhotosFromApi()

