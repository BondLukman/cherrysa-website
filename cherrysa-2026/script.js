const images = document.querySelectorAll(".img-container img");

let currentIndex = 0;

setInterval(() => {
  images[currentIndex].classList.remove("active");

  currentIndex = (currentIndex + 1) % images.length;

  images[currentIndex].classList.add("active");
}, 4000);
