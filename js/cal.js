$(document).ready(function(){
  // -------------------------------------------------------------------------------------
  
  // 네비바 js
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const sear1 = document.querySelector(".sear");
  const header_logo = document.querySelector('.header-logo-wrap');
  
  // 반응형 배너
  
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    sear1.classList.toggle("active");
    header_logo.classList.toggle("menuBtn");
  
  });
  
  let JsonData = null;
  // JSON 데이터 가져오기
  // fetch 비동기 함수로 동작한다. 이러한 이유로 데이터를 가져오는 과정에서 여러 가지 상황을 처리할 수 있다.
  
  // 1. 네트워크 오류발생 : 네트워크 오류가 발생시 catch 블록에서 해당 오류를 잡는다.
  // 2. 데이터를 성곡적으로 가져왔을때 : 성공적으로 데이터가 불러와지면 then 에서 데이터를 처리할 수 있다.
  // 3. 잘못된 파일 경로 또는 파일 없음 : 경로가 잘못되었거나 파일이 존재하지 않으면 response.ok 가 false 가 되어 then 내부에서 오류 처리가 가능하다.
  // 비동기 처리 : 프로그램의 실행흐름을 차단하지 않고 다른 작업을 수행하는 동안 결과를 기다리는 방식 UI 가 멈추지 않고 계속 작동함
  async function fetchData() {
    try {
      const response = await fetch('../files/data.json'); // json 데이터 가져오기
  
      if (!response.ok) {
        // HTTP 상태코드가 200~299 아니면 오류처리
        throw new Error(`Network error ${response.status}`);
      }
  
      JsonData = await response.json(); // 데이터 josn 변환
    } catch (error) {
      // 네트워크 오류 또는 경로 오류 등 모든 예외 처리
      console.log('경로 오류 발생 : ', error);
    }
  }
  
    // 달력데이터 출력하기
    // 날짜 객체 생성하기
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth(); // 현재 월에 대한 달력이 나오게
  
    let dayAllMonth = new Date(year,month+1,0).getDate();
 
    async function initialize() {
      await fetchData(); // 데이터를 들고온 다음에
      makeCal(year,month); // 달력 그리고
      updateDate();  // 날짜 html 요소 그려주고
      Datehendel(); // td 리스트 그려준다.
    }
  
    initialize(); // 레이아웃 호출
  
  
  // 해당월에 열리는 축제를 새로운 배열에 담아서 저장
  function festDataMonth(year,month) {
    //filter 함수를 사용하면 해당하는 조건에 대한 데이터를 가져올 수 있다.
    //해당 월에 열리는 모든 축제에 대한 데이터를 검사하여 가져옴
      return JsonData.filter(festVlaue => {
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
    return JsonData.filter(festValue => {
      const start = new Date(festValue.startDate);
      const end = new Date(festValue.endDate);
      return dateVal >= start && dateVal <= end;
    });
  }
    // tablebody에 그려야하니까 body 가져오기
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
  
      // 날짜 채우기 day : 1일부터
      while (dayCount <= dayAllMonth) {
        // 현재 날짜를 2024-10-06 형식으로 변환한다.
          let fullDateOn = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayCount).padStart(2, '0')}`;
          // 변환된 날짜형식으로 festDataDay() (해당일자에 시작하는 이벤트와 끝나는 이벤트 정보를 불러오기)
          let fullDateValue = festDataDay(fullDateOn);
          // 반환된 이벤트 값을 가져와주고 배열의 길이를 이용하여 변수에 담아준다.
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
  
  // 리스트 불러올 스크립트 작성
  // td태그를 클릭했을때의 날짜 처리
  function Datehendel() {
    $('#calendar td').on("click", function() {
      const clickDate = $(this).find('.on').text();
      // 날짜가 1자리로 나오는걸 방지 -> ex) 1일 이면 01 
      const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(clickDate).padStart(2, '0')}`;
      let festivalData = festDataDay(fullDate);
  
      // 해당 날짜를 눌렀을때 리스트 출력하기
      const listWrap = $('.list-wrap');
      // 새 리스트를 부르면 초기화 해주기
      listWrap.empty();
      if(festivalData.length == 0) {
        listWrap.append('<p class = "no-fastival">해당 날짜에는 축제 및 모임이 없습니다. 다른날짜를 선택해주세요!</p>')
      }else {
        festivalData.forEach(festval => {
            // 'imges' 속성이 존재하고 배열인지 확인한 후 length 체크
            if (festval["images"] && Array.isArray(festval["images"]) && festval['id'] != 'Seoul-05') {
              
                listWrap.append(
                  `
                  <div class = "list-wr-box">
                      <a href = "../html/detail.html?id=${festval['id']}" target="_blank">
                        <div class="wr-img" style="background-image: url('${festval["images"][0]}');"></div>
                      </a>
                      <div class="wr-title">${festval['name']}</div>
                      <div class="wr-date">${festval.startDate} - ${festval.endDate}</div>
                      <div class="wr-loc">${festval['location']}</div>
                  </div>  
                  `
                );
                
      
          } else {
            listWrap.append(
              `
              <div class = "list-wr-box">
                  <a href = "../html/project.html?id=${festval['id']}" target="_blank">
                    <div class="wr-img" style="background-image: url('${festval["images"][0]}');"></div>
                  </a>
                  <div class="wr-title">${festval['name']}</div>
                  <div class="wr-date">${festval.startDate} - ${festval.endDate}</div>
                  <div class="wr-loc">${festval['location']}</div>
              </div>  
              `
            );
              console.error("imges is undefined or not an array for festival ID: ", festval['id']);
          }
        });
      }
  
      $('#no-wrap').hide();
      $('#all-list-wrap').show();
    });
  }
  
  
  $('.prev, .next').on("click", function() {
    Datehendel();
  })
  
  });