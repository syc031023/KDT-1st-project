let festdata = []; // 축제 데이터를 저장할 배열

// JSON 데이터 가져오기
async function fetchData() {
    try {
        const response = await fetch('../files/data.json'); // JSON 데이터 가져오기
        if (!response.ok) {
            throw new Error(`Network response not ${response.status}`);
        }
        festdata = await response.json(); // 데이터를 JSON으로 변환하여 festdata에 저장
    } catch (error) {
        console.log('There has been a problem with your fetch: ', error);
    }
}

// 필터링된 이벤트를 표시하는 함수
function filterEvents() {
    let selectedLocation = $("#location").val(); // 선택한 지역
    let selectedCategory = $("#category").val(); // 선택한 카테고리

    // 축제 데이터를 필터링하여 조건에 맞는 축제만 반환
    let filteredFestivals = festdata.filter(event => {
        let locationMatch = selectedLocation === "location" || event.location.split(' ')[0] === selectedLocation || !selectedLocation;
        let categoryMatch = selectedCategory === "category" || event.category === selectedCategory || !selectedCategory;

        // 지역과 카테고리 조건이 모두 맞는 경우에만 반환
        return locationMatch && categoryMatch;
    });

    // 필터링된 축제 데이터를 화면에 표시
    displayFestivals(filteredFestivals);
}

// 필터링된 축제 데이터를 표시하는 함수
function displayFestivals(festivals) {
    let tbody = $("#tbody"); // 데이터를 표시할 테이블의 tbody 요소
    tbody.empty(); // 기존 내용을 초기화

    // 필터링된 결과가 없을 경우 메시지 출력
    if (festivals.length === 0) {
        tbody.append(`<tr><td colspan="3">조건에 맞는 결과가 없습니다.</td></tr>`);
        return;
    }
    let rows = '';
    // 필터링된 축제 데이터를 테이블에 3개씩 나열
    
    if(window.screen.width > 390){
        festivals.forEach((event, index) => {
            if (index % 3 === 0) rows += '<tr>';
            if(event.id === 'Seoul-05'){
                rows += `
                <td class="content">
                    <a href="../html/project.html?id=${event.id}" target="_blank">
                        <img src="${event.images[0]}" alt="${event.name}">
                    </a>
                    <div class="info">
                        <h3>${event.name}</h3>
                        <p class="duration">${event.startDate} ~ ${event.endDate}</p>
                        <p class="location">${event.location}</p>
                    </div>
                </td>
            `;

            } else {
                rows += `
                <td class="content">
                    <a href="../html/detail.html?id=${event.id}" target="_blank">
                        <img src="${event.images[0]}" alt="${event.name}">
                    </a>
                    <div class="info">
                        <h3>${event.name}</h3>
                        <p class="duration">${event.startDate} ~ ${event.endDate}</p>
                        <p class="location">${event.location}</p>
                    </div>
                </td>
            `;
            }
            if ((index + 1) % 3 === 0) rows += '</tr>';
        });
    
        // 마지막 행이 3개로 채워지지 않았다면 빈 td 추가
        let remainingCells = festivals.length % 3;
        if (remainingCells !== 0) {
            for (let i = 0; i < 3 - remainingCells; i++) {
                rows += '<td class="content"></td>'; // 빈 셀 채우기
            }
            rows += '</tr>';
        }

    } else {
        // 화면 너비가 390 이하일 때, 한 줄에 1개씩 나열
        festivals.forEach((event) => {
            if(event.id === 'Seoul-05'){
                rows += `
                <td class="content">
                    <a href="../html/project.html?id=${event.id}" target="_blank">
                        <img src="${event.images[0]}" alt="${event.name}">
                    </a>
                    <div class="info">
                        <h3>${event.name}</h3>
                        <p class="duration">${event.startDate} ~ ${event.endDate}</p>
                        <p class="location">${event.location}</p>
                    </div>
                </td>
            `;

            } else {
                rows += `
                <td class="content">
                    <a href="../html/detail.html?id=${event.id}" target="_blank">
                        <img src="${event.images[0]}" alt="${event.name}">
                    </a>
                    <div class="info">
                        <h3>${event.name}</h3>
                        <p class="duration">${event.startDate} ~ ${event.endDate}</p>
                        <p class="location">${event.location}</p>
                    </div>
                </td>
            `;
            }
        });
    }

    // 완성된 행을 tbody에 추가
    tbody.append(rows);
}

window.addEventListener('resize', () => {
    displayFestivals(festdata);
})

// 페이지 로드 시 모든 축제 데이터를 초기화면에 표시
$(document).ready(async function() {
    await fetchData(); // JSON 데이터를 불러온 후
    displayFestivals(festdata);// 초기 화면에 모든 축제 표시
});
