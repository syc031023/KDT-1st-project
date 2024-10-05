window.onload = function() {

  // 네비바 js

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const sear1 = document.querySelector(".sear");

console.log(menuToggle);

// 반응형 배너
const ccner = document.querySelector(".carousel-container");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  sear1.classList.toggle("active");
  ccner.classList.toggle("active");
});


// 중간배너 js코드

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

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
  console.log(currentSlide);
}

// 자동 슬라이드
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

// 카드 js코드

const container = document.getElementById("cardContainer");
console.log(container);

function scrollRight1() {
  container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
  console.log(container);
}
function scrollLeft1() {
  container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
  console.log(container);
}

// 가로 스크롤

function row_scroll() {
  document.querySelector(".card-container").addEventListener("wheel", (e) => {
    e.preventDefault();

    var scrollAmount = e.deltaY * 5;

    e.currentTarget.scrollLeft += scrollAmount;
  });
}

row_scroll();

// 카드2 js코드

const container2 = document.getElementById("cardContainer2");
console.log(container2);

function scrollRight2() {
  container2.scrollBy({ left: container2.clientWidth, behavior: "smooth" });
  console.log(container2);
}
function scrollLeft2() {
  container2.scrollBy({ left: -container2.clientWidth, behavior: "smooth" });
  console.log(container2);
}

// 가로 스크롤

function row_scroll2() {
  document.querySelector(".card-container2").addEventListener("wheel", (e) => {
    e.preventDefault();

    var scrollAmount = e.deltaY * 5;

    e.currentTarget.scrollLeft += scrollAmount;
  });
}

row_scroll2();


};

