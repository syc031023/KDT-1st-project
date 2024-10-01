let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide div");
const totalSlides = slides.length;
let button = document.getElementsByClassName("carousel-button");

let timer = setInterval(() => {
  nextSlide();
}, 3000);

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  const slideContainer = document.querySelector(".carousel-slide");
  slideContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
  console.log(currentSlide);
}

// function setSlide() {
//   currentSlide = (currentSlide + 1) % totalSlides;
//   showSlide(currentSlide);         % totalSlides;
// }

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
  console.log(currentSlide);
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseover", function () {
    console.log("hover");
    clearInterval(timer);
  });

  button[i].addEventListener("mouseout", function () {
    timer = setInterval(() => {
      nextSlide();
    }, 3000);
  });
}

// 자동 슬라이드

// else {
//   let timer = setInterval();
// }

// setInterval(() => {
//   nextSlide();
// }, 3000);

// setInterval(()=> {
//     nextSlide();
//   }, 3000);
