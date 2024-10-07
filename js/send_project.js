$(document).ready(function() {
  let JsonData = null;

  async function fetchData() {
    try {
      const response = await fetch('../files/data.json'); // json 데이터 가져오기
  
      if (!response.ok) {
        // HTTP 상태코드가 200~299 아니면 오류처리
        throw new Error(`Network response not ${response.status}`);
      }
  
      JsonData = await response.json(); // 데이터 josn 변환
    } catch (error) {
      // 네트워크 오류 또는 경로 오류 등 모든 예외 처리
      console.log('There has been a problem with your fetch : ', error);
    }
  }

  async function initialize() {
    await fetchData(); // 데이터를 들고온 다음에
    responseGetIdDetailPage();
  }


  initialize();
    // 1. 카테고리 및 달력에서 해당 축제 및 모임 리스트를 보여준다.
    // 2. 각각의 리스트에는 그에 맞는 축제 정보와 리스트가 담겨있고 사용자한테 그 축제에 맞는 상세정보를 보여주어야 한다.

  const receive = location.href.split('?')[1];
  const data_result = receive.split('=')[1]; // 넘겨받은 값 저장

  function responseGetIdDetailPage() {

    
    for(let i = 0; i < JsonData.length; i++) {
      if(data_result === JsonData[i].id) {

        const festivalData = {
          name : JsonData[i].name,
          address : JsonData[i].address,
          startDate : JsonData[i].startDate,
          endDate : JsonData[i].endDate,
          cost : JsonData[i].cost,
          instagram : JsonData[i].instagram,
          describe : JsonData[i].describe,
          content_1 : JsonData[i].detail,
          category : JsonData[i].category,
          location : JsonData[i].location,
          contact : JsonData[i].contact,
          images : JsonData[i].images,
          more_info : JsonData[i].more_info,
          youtube : JsonData[i].youtube
        };
        
        for (const key in festivalData) {
          if(key === "startDate") {
            // 기간 표시
            const startDate = festivalData[key];
            const endDate = festivalData["endDate"];
            $('.period').append(startDate + '~' + endDate);
            let stDate = new Date(festivalData["startDate"]);
            const weekDay = ['sun','mon','Tue','wed','thr','fri','sat']
            let week = weekDay[stDate.getDay()];
            $('.startDate').append(festivalData["startDate"] + ' ' + week);
          } else if(key === "images") {
            $('.backimg').css('background-image', `url(${festivalData[key][1]}`);
           
          } else if (key == "more_info") {
              $('.homePageMove').append(`<a href="${festivalData[key]}" target="_blank"><button class="homepage">공식 홈페이지</button></a>`);

          } else if (key == "youtube") {
            $('#youtube_size').attr('src', `${festivalData[key]}`);
          }
          else {
            $(`.${key}`).append(festivalData[key]);
          }
        }
      }
    }
  }
    // 데이터 가져와서 jqeury로 출력 id 값 가져와서
    // 객체 데이터 배열에 먼저 접근한다.
    // 객체 데이터 배열에 id 값과 data_result 값을 먼저 비교하고 같은 값인지 찾아준다.
});