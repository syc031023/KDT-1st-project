$(document).ready(function(){

  // 샘플데이터
const festdata = [
  {
      "url": "/calendar/img/fastivalImg/rac.png",
      "fa-title": "구파일 선셋 레이싱",
      "startDate" : "2024-09-01",
      "endDate" : "2024-09-05",
      "fa-loc": "서울 특별시 마포구"
  },
  {
      "url": "/calendar/img/fastivalImg/firework.png",
      "fa-title": "서울 불꽃놀이",
      "startDate" : "2024-09-09",
      "endDate" : "2024-09-10",
      "fa-loc": "서울 특별시 강남구"
  },
  {
      "url": "/calendar/img/fastivalImg/musicfa.png",
      "fa-title": "부산 해변 음악제",
      "startDate" : "2024-08-29",
      "endDate" : "2024-09-05",
      "fa-loc": "부산 해운대구"
  },
  {
      "url": "/calendar/img/fastivalImg/junju.png",
      "fa-title": "전주 한지 문화제",
      "startDate" : "2024-08-20",
      "endDate" : "2024-09-05",
      "fa-loc": "전북 전주"
  },
  {
      "url": "/calendar/img/fastivalImg/jejuBt.png",
      "fa-title": "제주도 꽃 축제",
      "startDate" : "2024-09-04",
      "endDate" : "2024-09-07",
      "fa-loc": "제주도"
  },
  {
      "url": "/calendar/img/fastivalImg/pentFat.png",
      "fa-title": "인천 펜타포트 록 페스티벌",
      "startDate" : "2024-09-09",
      "endDate" : "2024-09-10",
      "fa-loc": "인천 송도"
  },
  {
      "url": "/calendar/img/fastivalImg/interMusic.png",
      "fa-title": "대구 국제 음악제",
      "startDate" : "2024-09-15",
      "endDate" : "2024-09-19",
      "fa-loc": "대구"
  },
  {
    "url": "/calendar/img/fastivalImg/interMusic.png",
    "fa-title": "대구 국제 음악제",
    "startDate" : "2024-09-15",
    "endDate" : "2024-09-19",
    "fa-loc": "대구"
},
{
  "url": "/calendar/img/fastivalImg/interMusic.png",
  "fa-title": "대구 국제 음악제",
  "startDate" : "2024-09-15",
  "endDate" : "2024-09-19",
  "fa-loc": "대구"
},
{
  "url": "/calendar/img/fastivalImg/interMusic.png",
  "fa-title": "대구 국제 음악제",
  "startDate" : "2024-09-15",
  "endDate" : "2024-09-19",
  "fa-loc": "대구"
},
{
  "url": "/calendar/img/fastivalImg/interMusic.png",
  "fa-title": "대구 국제 음악제",
  "startDate" : "2024-09-15",
  "endDate" : "2024-09-19",
  "fa-loc": "대구"
},
{
  "url": "/calendar/img/fastivalImg/interMusic.png",
  "fa-title": "대구 국제 음악제",
  "startDate" : "2024-09-15",
  "endDate" : "2024-09-19",
  "fa-loc": "대구"
},
  {
      "url": "/calendar/img/fastivalImg/gyecal.png",
      "fa-title": "경기 여주 문화제",
      "startDate" : "2024-09-18",
      "endDate" : "2024-09-20",
      "fa-loc": "경기 여주"
  },
  {
      "url": "/calendar/img/fastivalImg/gwangju.png",
      "fa-title": "광주 비엔날레",
      "startDate" : "2024-09-25",
      "endDate" : "2024-09-26",
      "fa-loc": "광주"
  },
  {
      "url": "/calendar/img/fastivalImg/ulsanCar.png",
      "fa-title": "울산 자동차 축제",
      "startDate" : "2024-09-27",
      "endDate" : "2024-09-31",
      "fa-loc": "울산"
  }
]
// -------------------------------------------------------------------------------------
// 해당월에 열리는 축제를 새로운 배열에 담아서 저장
function festDataMonth(year,month) {
  //filter 함수를 사용하면 해당하는 조건에 대한 데이터를 가져올 수 있다.
  //해당 월에 열리는 모든 축제에 대한 데이터를 검사하여 가져옴
    return festdata.filter(festVlaue => {
      // 객체 데이터에 접근에서 시작일 끝일 값을 가져옴
      // 값 가져온뒤 Date 객체로 변환하기
      const start = new Date(festVlaue.startDate);
      const end = new Date(festVlaue.endDate);
      // 사용자가 선택한 해당월에 시작하는 월과 끝나는 월이 9월이 맞는지 검사
      return (start.getFullYear() === year && start.getMonth() + 1 === month) ||
            (end.getFullYear() === year && end.getMonth() + 1 === month);
    });
}


// 해당 날짜에 열리는 축제 개수 출력
function festDataDay(date) {
  const dateVal = new Date(date);
  return festdata.filter(festValue => {
    const start = new Date(festValue.startDate);
    const end = new Date(festValue.endDate);
    return dateVal >= start && dateVal <= end;
  })
}


  // 달력데이터 출력하기

  // 날짜 객체 생성하기
  let year = 2024;
  let month = 8; // 0 시작 9월 기반

  let dayAllMonth = new Date(year,month+1,0).getDate();
  console.log(dayAllMonth);

  // body에 그려야하니까 body 가져오기
  let $table_body = $('.cal-info table tbody');
  // 년도 월 span 태그 가져오기
  let $span_date = $('.month-info-rab .date-span');

//날짜 비우고 새로운 날짜 만들기
function cleanCal(year,month) {
  $table_body.empty();

  // 새로운 달력 그리기
  makeCal(year, month);
}

function updateDate() {
  $span_date.empty();
  let span_date_w = (`${year}년 ${month+1}월`);
  $span_date.append(span_date_w);
}


// 현재 년도와 월을 받아와서 새로운 달력으로 계속 그려줘야함
// 사용자는 이전달 다음달의 정보를 받아야 하기 때문
function makeCal(year, month) {
    // 해당 월의 1일 날짜 구하기
    let firstDate = new Date(year, month, 1);
    // 요일 구하기 [0 : 일 , 1 : 월 ~]
    let firstDay = firstDate.getDay();
    // 해당 월에 일수가 몇일인지 구하기
    let dayAllMonth = new Date(year, month + 1, 0).getDate();

    let calHtml = '';
    let dayCount = 1;
    let weekDayCount = 0;

    
    calHtml += '<tr>';
    // 첫번째 주 빈칸 처리
    for (let i = 0; i < firstDay; i++) {
        calHtml += '<td></td>'; // 빈칸 추가
        weekDayCount++;
    }

    // 날짜 채우기
    while (dayCount <= dayAllMonth) {
        let fullDateOn = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayCount).padStart(2, '0')}`;
        let fullDateValue = festDataDay(fullDateOn);
        let festCnt = fullDateValue.length;
       
        // 일요일이면 새로운 줄
        if (weekDayCount % 7 === 0) {
            calHtml += '</tr><tr>'; // 이전 줄 종료 및 새로운 줄 시작
        }

        // 일, 토 일반 클래스 적용하기
        let dayClass = '';
        if (weekDayCount % 7 === 0) {
            dayClass = 'sun-d on';
        } else if (weekDayCount % 7 === 6) {
            dayClass = 'sat-d on';
        } 

        if(weekDayCount % 7 == 0 || weekDayCount %  7 == 6) {
          // 주말인데 축제가 있으면
          if(festCnt > 0) {
            calHtml += `
            <td>
              <div class="container">
                <div class="${dayClass}">${dayCount}</div>
                <div class="fa-count">${festCnt}</div>
                <div class="fa-icon"><i class="fa-solid fa-caret-down" style="color: #050505;"></i></div>
              </div>
            </td>`;
            // 주말인데 축제가 없으면 화살표와 갯수 지우기
          } else {
            calHtml += `
            <td>
              <div class="container">
                <div class="${dayClass}">${dayCount}</div>
                <div class="fa-count"></div>
                <div class="fa-icon"></div>
              </div>
            </td>`;
          }
          // 평일
        } else {
          dayClass = 'fa-basic on';
          // 평일인데 축제가 있으면
          if(festCnt > 0) {
            calHtml += `
            <td>
              <div class="container">
                <div class="${dayClass}">${dayCount}</div>
                <div class="fa-count">${festCnt}</div>
                <div class="fa-icon"><i class="fa-solid fa-caret-down" style="color: #050505;"></i></div>
              </div>
            </td>`;
          }else {
            // 평일인데 축제가 없으면
            calHtml += `
            <td>
              <div class="container">
                <div class="${dayClass}">${dayCount}</div>
                <div class="fa-count"></div>
                <div class="fa-icon"></div>
              </div>
            </td>`;
          }

        }

        dayCount++;
        weekDayCount++;
    }

    calHtml += '</tr>'; // 마지막 줄 종료
    $table_body.append(calHtml); // 달력 html 테이블 추가
    
}

// 이전월 클릭
$('.prev').click(function() {
  if(month === 0) { // 1월 이전 이면 연도 감소
    month = 11; // 12월로 변경
    year--;
  } else {
    month--;
  }
  cleanCal(year,month);  // 달력 렌더링
  updateDate()
});

// 다음월 클릭
$('.next').click(function() {
  if(month === 11) { // 12월 이후 연도 증가
    month = 0; // 1월로 변경
    year++;
  } else {
    month++;
  }
  cleanCal(year,month);  // 달력 렌더링
  updateDate()
});


// 달력 생성 호출
makeCal(year, month);
updateDate();
Datehendel();



// 리스트 불러올 스크립트 작성
// td태그를 클릭했을때의 날짜 처리
function Datehendel() {
  $('#calendar td').on("click", function() {
    const clickDate = $(this).find('.on').text();
    // 날짜가 1자리로 나오는걸 방지 -> ex) 1일 이면 01 
    const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(clickDate).padStart(2, '0')}`;
    console.log(festDataDay(fullDate));
    
    let festivalData = festDataDay(fullDate);
    console.log(festivalData);

    // 해당 날짜를 눌렀을때 리스트 출력하기
    const listWrap = $('.list-wrap');
    // 새 리스트를 부르면 초기화 해주기
    listWrap.empty();
    if(festivalData.length == 0) {
      listWrap.append('<p class = "no-fastival">해당 날짜에는 축제 및 모임이 없습니다. 다른날짜를 선택해주세요!</p>')
    }else {
      festivalData.forEach(festval => {
        listWrap.append(
          `
          <div class = "list-wr-box">
              <a href = "#">
               <div class="wr-img" style="background-image: url('${festval.url}');"></div>
              </a>
              <div class="wr-title">${festval['fa-title']}</div>
              <div class="wr-date">${festval.startDate} - ${festval.endDate}</div>
              <div class="wr-loc">${festval['fa-loc']}</div>
          </div>  
          `
        );
      });
    }

    $('#no-wrap').hide();
    swal("불러오기 완료!","스크롤 하여 축제 정보를 확인해 보세요!","success");
    $('#all-list-wrap').show();
  });
}


$('.prev, .next').on("click", function() {
  Datehendel();
})


});