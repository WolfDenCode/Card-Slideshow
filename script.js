const sliderItems = document.querySelectorAll(".slider-item");

const imageSources = [
  "images/Dandelion.jpg",
  "images/Ciri.png",
  "images/Geralt.jpg",
  "images/Yennefer.jpg",
  "images/Triss.jpg",
  "images/Regis.png",
];
let currentIndex = 0;

const slideRight = () => {
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;

  const items = document.querySelectorAll(".slider-item");

  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 0;
      setTimeout(() => {
        item.src = imageSources[(currentIndex + index) % imageSources.length];
        item.style.opacity = 1;
      }, 10);
    }, index * 50);
  });
};

const slideLeft = () => {
  currentIndex = (currentIndex + 1) % imageSources.length;

  const items = document.querySelectorAll(".slider-item");

  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 0;
      setTimeout(() => {
        item.src = imageSources[(currentIndex + index) % imageSources.length];
        item.style.opacity = 1;
      }, 10);
    }, (items.length - index) * 50);
  });
};
