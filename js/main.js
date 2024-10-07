// 네비바 js

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const sear1 = document.querySelector(".sear");

// 반응형 배너
const ccner = document.querySelector(".carousel-container");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  sear1.classList.toggle("active");
  ccner.classList.toggle("active");
});

// 중간배너 js코드

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide a");
const totalSlides = slides.length;
let button = document.getElementsByClassName("carousel-button");

let timer = setInterval(() => {
  nextSlide();
  // slideContainer.style.transform = `translateX(0px)`;
}, 3000);

function showSlide(index) {
  const slideWidth = slides[1].clientWidth;
  const slideContainer = document.querySelector(".carousel-slide");

  slideContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// 자동 슬라이드
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseover", function () {
    clearInterval(timer);
  });

  button[i].addEventListener("mouseout", function () {
    timer = setInterval(() => {
      nextSlide();
    }, 2000);
  });
}

// 카드1

let festdata = []; // 축제 데이터를 저장할 배열

// JSON 데이터 가져오기
async function fetchData() {
  try {
    const response = await fetch("../files/data.json"); // JSON 데이터 가져오기
    if (!response.ok) {
      throw new Error(`Network response not ${response.status}`);
    }
    festdata = await response.json(); // 데이터를 JSON으로 변환하여 festdata에 저장
  } catch (error) {}
}

// 필터링된 이벤트를 표시하는 함수
function filterEvents() {
  let selectedLocation = $("#location").val(); // 선택한 지역

  // 축제 데이터를 필터링하여 지역에 맞는 축제만 반환
  let filteredFestivals = festdata.filter((event) => {
    return event.location.split(" ")[0] === selectedLocation;
  });

  // 필터링된 축제 데이터를 화면에 표시
  displayFestivals(filteredFestivals);
}

// 현재 진행 중인 축제인지 확인하는 함수
function isOngoing(event) {
  const today = new Date(); // 현재 날짜
  const startDate = new Date(event.startDate); // 축제 시작일
  const endDate = new Date(event.endDate); // 축제 종료일

  // 년도, 월, 일만 비교하기 위한 함수
  function compareDates(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  // 현재 날짜에서 년도, 월, 일 정보만 추출하여 비교
  const todayStripped = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const startStripped = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );
  const endStripped = new Date(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  );

  // 현재 날짜가 시작일과 종료일 사이에 있는지 확인 (시간 제외)
  return todayStripped >= startStripped && todayStripped <= endStripped;
}

function displayFestivals(festivals) {
  let locationContainer = $("#locationContainer"); // 선택한 지역의 이벤트를 표시할 컨테이너
  let ongoingContainer = $("#ongoingContainer"); // 진행 중인 이벤트를 표시할 컨테이너
  let message = $("#message");

  locationContainer.empty(); // 기존 내용을 초기화
  ongoingContainer.empty(); // 기존 내용을 초기화
  message.text(""); // 메시지 초기화

  let selectedLocation = $("#location").val(); // 선택한 지역

  // 선택된 지역의 축제 데이터를 필터링
  let locationFestivals = festivals.filter(
    (event) => event.location.split(" ")[0] === selectedLocation
  );

  // 선택한 지역의 이벤트가 없을 경우 메시지 출력
  if (locationFestivals.length === 0) {
    locationContainer.append(
      `<p>${selectedLocation}에 해당하는 이벤트가 없습니다.</p>`
    );
  } else {
    // 선택한 지역의 축제 데이터를 카드로 표시
    locationFestivals.forEach((event) => {
      let card = `
              <div class="card">
                  <a href="../html/detail.html?id=${event["id"]}" target="_blank">
                      <img src="${event.images[0]}" alt="${event.name}">
                  </a>
                  <div class="info">
                      <h3>${event.name}</h3>
                      <p class="duration">${event.startDate} ~ ${event.endDate}</p>
                      <p class="location">${event.location}</p>
                  </div>
              </div>
          `;
      locationContainer.append(card);
    });
  }

  // 진행 중인 이벤트 필터링
  let ongoingFestivals = festivals.filter(isOngoing);

  // 진행 중인 이벤트가 없는 경우
  if (ongoingFestivals.length === 0) {
    ongoingContainer.append(`<p>현재 진행 중인 이벤트가 없습니다.</p>`);
  } else {
    // 진행 중인 축제 데이터를 카드로 표시
    ongoingFestivals.forEach((event) => {
      let card = `
              <div class="card">
                  <a href="../html/detail.html?id=${event["id"]}" target="_blank">
                      <img src="${event.images[0]}" alt="${event.name}">
                  </a>
                  <div class="info">
                      <h3>${event.name}</h3>
                      <p class="duration">${event.startDate} ~ ${event.endDate}</p>
                      <p class="location">${event.location}</p>
                      <p class="status">현재 진행 중</p>
                  </div>
              </div>
          `;
      ongoingContainer.append(card);
    });
  }
}

// 페이지 로드 시 모든 축제 데이터를 초기화면에 표시
$(document).ready(async function () {
  await fetchData(); // JSON 데이터를 불러온 후
  displayFestivals(festdata); // 초기 화면에 모든 축제 표시
});

const container = document.getElementById("cardContainer");

function scrollRight1() {
  container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
}
function scrollLeft1() {
  container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
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

function scrollRight2() {
  container2.scrollBy({ left: container2.clientWidth, behavior: "smooth" });
}
function scrollLeft2() {
  container2.scrollBy({ left: -container2.clientWidth, behavior: "smooth" });
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
