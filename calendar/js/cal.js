$(document).ready(function(){

  // 샘플데이터
const festdata = [
  //충청북도 데이터 3 Start
  {
    "id" : "Chungbuk-01",
    "name":"우륵문화제",
    "startDate":"2024-10-02",
    "endDate": "2024-10-06",
    "address":"충청북도 충주시 남한강로 26 (금릉동) 충주탄금공원",
    "cost":"무료",
    "contact":"043-847-1565",
    "instagram":"ureuk_af1971",
    "more_info" : "http://www.cjart.or.kr/cjart/%EB%A9%94%EC%9D%B8",
    "describe": "개막작 : 창작국악뮤지컬 왕의귀환",
    "detail": "제52회 우륵문화제는 시민이 직접 참여하는 예술문화 및 체험프로그램을 다양하게 접목시켜 시민의 자율적인 참여를 유도하여 다양한 충주 시민 개개인의 예술문화를 표출하고 접할 수 있는 기회를 제공하며 충주시민 및 관광객이 함께 참여하여 즐길 수 있는 다양하고 폭 넓은 프로그램 개발로 중원문화권 중심축제로 발전시키고자 하는 중원 최대 예술문화제이다.",
    "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_32c38244-ca3a-4b7c-9e04-d6cf7a8a987c_1.jpg",
    "poster_url": "https:\"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/32c38244-ca3a-4b7c-9e04-d6cf7a8a987c_3.png",
    "category": "culture",
    "location": "충청북도 충주시",
  },

  {
    "id" : "Chungbuk-02",
    "name":"보은 회인 문화유산 야행",
    "startDate":"2024-10-03",
    "endDate": "2024-10-05",
    "address":"충청북도 보은군 회인면 중앙리 회인로 42-5",
    "cost":"무료",
    "contact":"043-540-3046-9",
    "instagram":"boeunhoein_yahaeng",
    "more_info" : "https://bhnight.kr/index",
    "describe": "메인프로그램: 회인 밤도깨비 난장(도깨비 불쇼)",
    "detail": "제52회 우륵문화제는 시민이 직접 참여하는 예술문화 및 체험프로그램을 다양하게 접목시켜 시민의 자율적인 참여를 유도하여 다양한 충주 시민 개개인의 예술문화를 표출하고 접할 수 있는 기회를 제공하며 충주시민 및 관광객이 함께 참여하여 즐길 수 있는 다양하고 폭 넓은 프로그램 개발로 중원문화권 중심축제로 발전시키고자 하는 중원 최대 예술문화제이다.",
    "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_3eaa264f-cab5-464a-900a-05c02432371b_1.jpg",
    "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/3eaa264f-cab5-464a-900a-05c02432371b_3.png",
    "category": "culture",
    "location": "충청북도 충주시",
  },
  {
    "id" : "Chungbuk-03",
    "name":"세종대왕과 초정약수축제",
    "startDate":"2024-10-11",
    "endDate": "2024-10-13",
    "address":"충청북도 청주시 청원구 내수읍 초정약수로 851",
    "cost":"무료",
    "contact":"043-540-3046-9",
    "instagram":"",
    "more_info" : "http://www.cjart21.org/index.php?mid=cjart2_1_1&act=dispBusinessInfo&its_business_srl=17",
    "describe": "공식행사 : 어가행차, 개장식, 영천제, 개막식",
    "detail": "세종대왕이 1444년 두 차례 걸쳐 초정에 머물며 질병을 치료하고 훈민정음 창제 등 애민정책을 펼친 초정행궁 121일 이야기의 재발견과 세계 3대 광천수의 가치를 재조명하고 지역 문화브랜딩 및 문화 자원을 재창조하겠다는 마음을 담은 세종대왕과 초정약수의 역사성, 문화적 가치에 초점을 두는 행사이다.",
    "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_d86c5d13-6e48-42d9-bb10-68cda235473b_1.jpg",
    "poster_url": "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=d86c5d13-6e48-42d9-bb10-68cda235473b&cntntsNm=%EC%84%B8%EC%A2%85%EB%8C%80%EC%99%95%EA%B3%BC%EC%B4%88%EC%A0%95%EC%95%BD%EC%88%98%EC%B6%95%EC%A0%9C#none",
    "category": "culture",
    "location": "충청북도 충주시",
  },
// 청주데이터 3 end

// 충청남도 데이터 4 start
  {
    "id" : "Chungnam-01",
    "name":"서산해미읍성축제",
    "startDate":"2024-10-02",
    "endDate": "2024-10-05",
    "address":"충청남도 서산시 남문2로 143 해미읍성",
    "cost":"무료",
    "contact":"041-660-2696",
    "instagram":"seosancf",
    "more_info" : "http://www.haemifest.com/",
    "describe": "개막프로그램 : 세계민속공연, 식전 공연",
    "detail": "해미읍성에서 전통복식을 입고 조선시대 퍼포머들과 함께 역사를 체험하고, 클래식을 비롯한 다양한 문화예술공연을 즐기며, 과거와 현재, 미래가 융합된 미디어아트쇼를 통해 아름답게 물든 해미읍성에서 기억에 남을 추억사진도 남길 수 있다. 읍성의 안과 밖에서 다채롭게 열리는 버스킹 공연과 지역 상권과 주민들이 함께 만드는 지역상생 프로그램 '해미해피데이' , 어린이부터 어르신까지 모든 세대를 아우르는 '이고지고이어달리기'를 비롯한 다양한 프로그램들이 10월 2일부터 5일까지 4일간 이어진다.",
    "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_edf5996d-f34f-476c-9d32-358e72bdf46a_1.jpg",
    "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/edf5996d-f34f-476c-9d32-358e72bdf46a_3.jpg",
    "category": "art",
    "location": "충청남도 서산시",
  },

  {
    "id" : "Chungnam-02",
    "name":"아트밸리 아산 재즈패스티벌 with 자라섬",
    "startDate":"2024-10-18",
    "endDate": "2024-10-20",
    "address":"충청남도 아산시 신정로 616 신정호공원",
    "cost":"무료",
    "contact":"1422-42",
    "instagram":"",
    "more_info" : "https://culture.asan.go.kr/_culture/new/developer/m_board/m_board.asp?tb_nm=tbl_business_culture_art&m_mode=view&idx=243&genre=01",
    "describe": "메인프로그램 : 재즈 페스티벌",
    "detail": "아트밸리 아산 제2회 재즈페스티벌 with 자라섬은 매년 10월 신정호 야외음악당에서 개최되는 음악축제이다. 아산 내 지역밴드 부터 국내외 유명 아티스트들을 신정호 야외음악당에서 만날 수 있으며 국제 재즈페스티벌 3개 축제 중 하나로 손꼽히는 자라섬 재즈 페스티벌과 연계하여 전문적이고 수준 높은 라인업을 계획하여 대중에게 친근하고 다가가는 재즈로 즐거움과 음악적 경험을 시민들에게 제공할 예정이다. 재즈 공연뿐만 아니라 체험프로그램 및 푸드존이 운영되며, 편리한 교통 서비스를 위해 셔틀버스도 무료로 운영된다.",
    "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_73a71c93-bae8-4ed6-9d9c-b7528e748e83_1.png",
    "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/73a71c93-bae8-4ed6-9d9c-b7528e748e83_3.png",
    "category": "culture",
    "location": "충청남도 아산시",
  },

  {
    "id" : "Chungnam-03",
    "name":"백제고도부여국화축제",
    "startDate":"2024-10-25",
    "endDate": "2024-11-03",
    "address":"충청남도 부여군 부여읍 신기정로 15 부여 궁남지 일원",
    "cost":"무료",
    "contact":"041-830-2591",
    "instagram":"",
    "more_info" : "https://www.buyeo.go.kr/html/bcfestival/",
    "describe": "메인프로그램 : 재즈 페스티벌",
    "detail": "아트밸리 아산 제2회 재즈페스티벌 with 자라섬은 매년 10월 신정호 야외음악당에서 개최되는 음악축제이다. 아산 내 지역밴드 부터 국내외 유명 아티스트들을 신정호 야외음악당에서 만날 수 있으며 국제 재즈페스티벌 3개 축제 중 하나로 손꼽히는 자라섬 재즈 페스티벌과 연계하여 전문적이고 수준 높은 라인업을 계획하여 대중에게 친근하고 다가가는 재즈로 즐거움과 음악적 경험을 시민들에게 제공할 예정이다. 재즈 공연뿐만 아니라 체험프로그램 및 푸드존이 운영되며, 편리한 교통 서비스를 위해 셔틀버스도 무료로 운영된다.",
    "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_63d35fa7-b042-484a-b91a-c7bb44ac496f_1.JPG",
    "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/63d35fa7-b042-484a-b91a-c7bb44ac496f_3.jpg",
    "category": "culture",
    "location": "충청남도 부여군",
  },

  {
    "id" : "Chungnam-04",
    "name":"천리포수모권 가을축제",
    "startDate":"2024-10-19",
    "endDate": "2024-11-03",
    "address":"충청남도 태안군 천리포1길 187",
    "cost":"유료",
    "contact":"041-672-9982",
    "instagram":"",
    "more_info" : "https://www.chollipo.org/board/bbs/board.php?bo_table=clp_newnews&wr_id=2173&menuKey=68",
    "describe": "메인프로그램 : 천리포수목원 책바슴",
    "detail": "천리포수목원에서 계절의 정취를 담은 '2024 천리포수목원 가을축제'가 개최된다. 축제는 오는 10월 19일부터 11월 3일까지 16일간 진행되며, 그 중 10월 19일부터 20일까지 양일간은 북페어 '2024 천리포수목원 책바슴'을 개최한다. 수목원에서 열리는 북페어는 국내 최초로, 이 기간 정세랑 작가와 함께하는 북토크 등 다양한 프로그램이 마련돼 기대감을 높인다.",
    "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_e0855154-b549-488c-88d6-2a5c1f4fd0df_1.JPG",
    "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/e0855154-b549-488c-88d6-2a5c1f4fd0df_3.jpg",
    "category": "culture",
    "location": "충청남도 태안군",
  },
// 충청남도 데이터 4 end

// 경상북도 데이터 3 start
{
  "id" : "GyeongsanBuk-01",
  "name":"영덕국제H웰니스페스타",
  "startDate":"2024-10-03",
  "endDate": "2024-10-06",
  "address":"경상북도 영덕군 병곡면 고래불로 68",
  "cost":"무료",
  "contact":"054-730-5800",
  "instagram":"ydct_official",
  "more_info" : "https://www.hwfesta.org/",
  "describe": "메인프로그램 - 웰니스 체험전",
  "detail": "천혜의 바다와 숲, 역사와 문화가 있는 영덕에서 펼쳐지는 영덕 국제 H웰니스 페스타는 경상북도와 인도 UP주, 영덕군과 바나라스힌두대학교(BHU,인도 최대의 대학)가 함께 하는 국제 웰니스 행사로서,국내외 유명 웰니스 기업들이 참가하는 국내 최대 규모의 웰니스 페스타이다.",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_54755072-c2de-4e66-8e22-11b949178a1f_1.jpg",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/54755072-c2de-4e66-8e22-11b949178a1f_3.jpg",
  "category": "art",
  "location": "경상북도 영도군",
},
{
  "id" : "GyeongsanBuk-02",
  "name":"청도세계코미디아트페스티벌",
  "startDate":"2024-10-11",
  "endDate": "2024-10-13",
  "address":"경상북도 청도군 청려로 1846",
  "cost":"무료",
  "contact":"054-370-2211",
  "instagram":"",
  "more_info" : "http://www.xn--hq1bx54atmfwzcbqh.kr/main.asp",
  "describe": "비보이 'JUST ONE'의 미디어 퍼포먼스/'김병만의 불청객' 개그공연/'안성훈' 축하공연",
  "detail": "2024 청도세계코미디아트페스티벌이 ‘행복특별시 코미디1번지’라는 주제로 10월 11일 금요일부터 10월 13일 일요일까지 청도야외공연장 일원에서 2024 청도반시축제와 함께 개최된다. 3일동안 야외공연장과 상설무대에는 해외초청공연으로 일본 최대 코미디 엔터테인먼트 요시모토 스페셜 무대와 국내초청공연으로 코믹 마임극 ‘삑삑이’, 세상 신기한 쇼를 다 보여주는 ‘SHOW MIX’, 벌룬 퍼포먼스 ‘매직유랑단’이 관람객들을 찾아간다. 실내극장에는 ‘김민형의 Fun한 매직쇼’, ‘김민기·홍윤화의 투깝쇼’가 관람객들에게 웃음과 즐거움을 선사할 예정이다.",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_1783d7c6-3567-42c8-81da-3356b46ae354_1.jpg",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/1783d7c6-3567-42c8-81da-3356b46ae354_3.png",
  "category": "art",
  "location": "경상북도 청도군",
},

{
  "id" : "GyeongsanBuk-03",
  "name":"한국민속예술제",
  "startDate":"2024-10-11",
  "endDate": "2024-10-13",
  "address":"경상북도 구미시 박정희로 375-22 (광평동)",
  "cost":"무료",
  "contact":"02-580-3260/3283",
  "instagram":"",
  "more_info" : "https://www.kfaf.or.kr/2024/",
  "describe": "세대와 세대를 잇는 우리 민속예술을 적극적으로 발굴해 보존하고 전승합니다.",
  "detail": "올해 65회를 맞이한 한국민속예술제는 1958년 대한민국 정부 수립 10주년을기리기 위해 ‘전국민속예술경연대회’라는 명칭으로 시작되어 현재까지 이어져 오고 있다. 마을을 중심으로 이어지는 각 지역의 대표 민속예술 경연을 통해 약 700여 개의 민속예술 종목이 발굴되었고, 그중 국가무형문화재 44개, 시·도 무형문화재 135개, 유네스코 인류무형유산에 12종목이 등재되었다. 또한 청소년 부문 경연이 진행되어 우리 민족 고유의 삶이 담긴 민속예술을 다음 세대에 전승하고 있다.",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_4d9f044e-d3e8-4623-8206-6c3c6ef76c66_1.jpg",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/4d9f044e-d3e8-4623-8206-6c3c6ef76c66_3.jpg",
  "category": "culture",
  "location": "경상북도 구미시",
},
// 경상북도 데이터 3 end

// 경상남도 데이터 2 start
{
  "id" : "Gyeongnam-01",
  "name":"거제 시민의 날",
  "startDate":"2024-10-04",
  "endDate": "2024-10-06",
  "address":"경상남도 거제시 계룡로11길 26 (고현동) 거제시종합운동장",
  "cost":"무료",
  "contact":"055-639-8194",
  "instagram":"geoje.gmdc",
  "more_info" : "",
  "describe": "거제 시민들이 직접 참여하여 즐길 수 있는 기념행사, 문화화합행사, 차없는거리",
  "detail": "경남 거제 시민이 하나 되는 제 30회 거제 시민의 날 행사가 10월 4일 금요일부터 10월 6일 일요일까지 거제시 관내에서 펼쳐진다. 10월 4일부터 5일까지는 거제시 종합운동장 내에서 기념행사 및 문화화합행사를 통해 많은 시민들이 직접 축제에 참여하고 즐길 수 있는 다양한 프로그램과 공연들이 준비되어 있으며, 10월 6일은 고현동 내 차없는 거리 운영을 통해 지역공연 페스타, 놀이기구 운영 및 거리공연 등이 펼쳐진다.",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_066ec7c7-e7f8-4630-9f3f-bc9ae57fd081_1.jpg",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/066ec7c7-e7f8-4630-9f3f-bc9ae57fd081_3.jpg",
  "category": "culture",
  "location": "경상남도 거제시",
},
{
  "id" : "Gyeongnam-01",
  "name":"가야문화축제",
  "startDate":"2024-10-16",
  "endDate": "2024-10-20",
  "address":"경상남도 김해시 분성로261번길 35 (봉황동) 수릉원",
  "cost":"무료",
  "contact":"055-330-6840",
  "instagram":"festival_gimhae",
  "more_info" : "https://www.gcfkorea.com/",
  "describe": "1962년 제1회 가락문화제를 시작으로 60여년의 전통을 자랑하는 김해 대표 축제",
  "detail": "가야문화축제는 가락국(금관가야)의 전통과 역사적 기반을 바탕으로 한 역사 문화 축제이며, 올해는 음력 9월 15일(10월 17일) 김수로왕의 숭선전 추향대제일 기점에 개최된다. 동북아시아 해상교통의 중심국가이자 철기문화를 지녔던 가야 왕국의 과거 위상을 알리고 가야문화의 가치를 재조명하는 역사문화축제가 될 것이며, 가락국 김해만의 독창적인 축제가 경남도민을 중심으로 펼쳐진다. 2024년은 김해 방문의 해로 지정하고 가야고분군 세계유산 등재 1주년을 축하하는 기념식과 더불어 전국체전 및 동아시아문화도시와 가야문화축제 연계를 통한 국제적인 축제로 거듭날 예정이다. 가야고분군 유네스코 세계유산 등재를 발판으로 가야유적을 배경으로 한 다양한 콘텐츠를 기획하여 김해시 이미지 브랜딩 및 관광 활성화에 큰 역할을 할 것이다.",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_578125d3-7e44-420f-925e-fbd13e8c73c9_1.jpg",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/578125d3-7e44-420f-925e-fbd13e8c73c9_3.JPG",
  "category": "culture",
  "location": "경상남도 김해시",
},
// 경상남도 데이터2 end

// 전북 데이터 3개 start
{
  "id" : "Jeonbuk-01",
  "name":"진안홍삼축제",
  "startDate":"2024-10-03",
  "endDate": "2024-10-06",
  "address":"전북특별자치도 전주시 완산구 태조로 44 (풍남동3가)",
  "cost":"무료",
  "contact":"063-232-9937",
  "instagram":"jeonjunight",
  "more_info" : "http://www.jeonjunight.com/",
  "describe": "모두를 사로잡을 문화유산 게임 한 판!",
  "detail": "천년고도의 찬란한 역사를 품은 전주의 문화유산 랜드마크를 찾아 떠나는 2024 전주문화유산야행(夜行), 다 같이 전주마블! 에서 여행 속의 또 다른 여행을 경험할 수 있는 색다른 역사 보드 게임이 펼쳐진다. 오는 10월 4일(금) ~ 10월 5일(토), 8夜(야)를 주제로 세부 프로그램별 매력을 더욱 강화한 전주문화유산야행에서 게임도 즐기고 역사도 공부하는 구석구석 전주 탐험이 시작된다.",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_fdb11408-6de8-46ea-b051-faac6fc020a7_1.png",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/697f4800-8c4d-4740-bfe6-51ad34192f31_3.jpg",
  "category": "culture",
  "location": "전북특별자치도 진안군",
},

{
  "id" : "Jeonbuk-02",
  "name":"전주예술난장",
  "startDate":"2024-10-11",
  "endDate": "2024-10-13",
  "address":"전북특별자치도 전주시 덕진구 구렛들3길 36 (팔복동1가)",
  "cost":"무료",
  "contact":"010-5485-9905",
  "instagram":"jjartnanjang",
  "more_info" : "",
  "describe": "전주 팔복동 공장지대에서 펼쳐지는 거리공연의 예술적인 난장!",
  "detail": "2024년 10월 11일, 전주 대표 거리공연 축제 ‘전주예술난장’이 전주 팔복동 제1산업단지 공장지대에서 펼쳐진다. 지금까지 쉽게 접할 수 없었던 거리예술가들의 다채로운 퍼포먼스와 행위예술, 상상력과 영감을 길어올리는 총천연색 공연. 참가하는 아티스트만 50여 팀! 산전 수전 공중전에 빛나는 전주예술난장의 세계가 10월 둘째 주 낮과 밤, 전주 팔복동을 찾을 관객들과 호흡한다.",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_9aea2c83-14ea-40e6-85d9-a3e8cfce3432_1.jpg",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/9aea2c83-14ea-40e6-85d9-a3e8cfce3432_3.jpeg",
  "category": "art",
  "location": "전북특별자치도 전주시",
},

{
  "id" : "Jeonbuk-03",
  "name":"전주독서대전",
  "startDate":"2024-10-11",
  "endDate": "2024-10-13",
  "address":"전북특별자치도 전주시 덕진구 기린대로 451 (덕진동1가) 전주종합경기장",
  "cost":"무료",
  "contact":"063-230-1858",
  "instagram":"jjbook_kr",
  "more_info" : "http://jjbook.kr/intro.php",
  "describe": "책 읽는 도시 글 쓰는 전주, 책 생태계와 독서공동체가 함께 만들고 즐기는 전주독서대전",
  "detail": "전주독서대전은 지역의 출판, 서점, 문화, 교육계 등 독서 생태계와 함께 강연, 공연, 전시, 체험, 북마켓 등 다채로운 프로그램들로 채워진 전주만의 특색을 갖춘 책 축제다.",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_518c24d3-309a-40a1-90a0-01dc354772c7_1.jpg",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/518c24d3-309a-40a1-90a0-01dc354772c7_3.jpg",
  "category": "art",
  "location": "전북특별자치도 전주시",
},
// 전북 데이터 3개 end


// 전라남도  3개 start
{
  "id" : "jeonnam-01",
  "name":"명량대첩축제",
  "startDate":"2024-10-18",
  "endDate": "2024-10-20",
  "address":"전라남도 진도군 군내면 진도대로 8459-13 울돌목 일원(진도 녹진관광지, 해남 우수영관광지)",
  "cost":"무료",
  "contact":"061-286-5265",
  "instagram":"midc_official",
  "more_info" : "http://www.mldc.kr/web/",
  "describe": "불멸의 명량! 호국의 울돌목!",
  "detail": "명량대첩축제는 삼도수군통제사로 재임명된 이순신 장군의 조선수군과 전라도 어민이 1597년 9월 16일 울돌목에서 일본 수군을 물리친 세계사에서 유례없는 명량해전을 기념하는 호국 역사문화축제이다. 전라남도, 진도군, 해남군이 함께 2008년부터 16회째 개최하는 이번 축제는 ICT 융복합 기술을 활용한 멀티 미디어해전과, 해군 군악의장대, 공군에어쇼, 지역공연 등 다양한 프로그램과 경관조명 등 볼거리로 관광객들의 이목을 끌 예정이다.",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_7dfae381-566f-4f5e-9d5e-650a90d24d97_1.jpg",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/7dfae381-566f-4f5e-9d5e-650a90d24d97_3.jpg",
  "category": "culture",
  "location": "전북특별자치도 전주시",
},
{
  "id" : "jeonnam-02",
  "name":"벌교꼬막축제",
  "startDate":"2024-10-27",
  "endDate": "2024-10-29",
  "address":"전라남도 보성군 벌교읍 벌교천1길 19 벌교읍 천변일원",
  "cost":"무료",
  "contact":"061-857-7676",
  "instagram":"",
  "more_info" : "https://www.boseong.go.kr/tour/festivity/cockle",
  "describe": "청정갯벌과 꼬막! 그리고 문학의 만남!",
  "detail": "소설 태백산맥의 무대이자 근대음악이 탄생한 문학기행 1번지 벌교의 역사적 의미를 되새기고 대한민국 수산물 지리적표시 제1호인 벌교의 대표적 특산품 꼬막을 활용한 향토문화축제이다. 벌교읍민회가 주최하는 이 행사는 꼬막까기, 널배타기, 갯벌체험, 꼬막시식 등 꼬막관련 행사 외에도 소설 태백산맥 속의 현장을 체험하며 채동선 선생 추모음악회 등을 함께할 수 있는 벌교만의 향토색 짙은 축제이다.",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_8ccbe9bc-55a1-48eb-bf2b-29cf499152ea_1.jpg",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/8ccbe9bc-55a1-48eb-bf2b-29cf499152ea_3.jpg",
  "category": "culture",
  "location": "전라남도 보성군",
},
{
  "id" : "jeonnam-03",
  "name":"대한민국 국항대전",
  "startDate":"2024-10-18",
  "endDate": "2024-11-03",
  "address":"전라남도 함평군 함평읍 곤재로 27 ",
  "cost":"유료",
  "contact":"061-320-2239",
  "instagram":"hampyeong",
  "more_info" : "https://www.hpftf.or.kr/",
  "describe": "나를위한 행복여행 in 함평국화",
  "detail": "가을과 겨울 정취를 만끽할 수 있는 경관연출과 대형트리, 종소리 게이트, 마법의성 및 9층탑 등 대형 국화 기획 작품과 매년 다양한 국화분재 작품이 전시되어 환상적인 분위기를 연출한다. 행사장에는 친환경 농산물이 전시 판매되고 있으며, 어린이들이 좋아하는 캐릭터 국화작품 전시, 동물숲 포토존, 전통민속놀이 체험, 축제 분위기에 어울리는 문화예술공연 등 다양한 체험과 즐길거리가 준비되어 있다",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_7828d5f4-9b6a-42c8-90bb-3ca13479e6a6_1.JPG",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/7828d5f4-9b6a-42c8-90bb-3ca13479e6a6_3.jpg",
  "category": "culture",
  "location": "전라남도 함평군",
},
// 전라남도  3개 end

// 제주도 데이터
{
  "id" : "Jeju-01",
  "name":"생태관광주간",
  "startDate":"2024-10-03",
  "endDate": "2024-10-09",
  "address":"제주특별자치도 제주시 조천읍 조함해안로 19 1층",
  "cost":"유료(일부 무료)",
  "contact":"064-782-3253",
  "instagram":"jeju_ecotour_center",
  "more_info" : "https://jejuecotour.com/",
  "describe": "제주다움으로 채워보는 여행의 한 페이지",
  "detail": "2022년부터 매해 운영되는 제주 생태관광주간은 올해 3회째로 일주일 동안 제주도 전역에서 생태관광프로그램을 동시에 운영하여 여행자들에게 다양한 프로그램의 선택과 참여기회를 제공한다. 2024 생태관광 주간은 20개 이상의 프로그램이 운영되며 마을과 한라산, 곶자왈, 오름, 바다, 습지, 하천, 용천수 등 제주 자연 속에서 체험할 수 있는 숲밧줄놀이, 바다생물관찰, 해먹명상, 환경보드게임, 드로잉 등 다양한 활동으로 구성되었다.",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_c8fa1db5-5288-4225-a824-622f198a6ab7_1.jpg",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/c8fa1db5-5288-4225-a824-622f198a6ab7_3.jpg",
  "category": "culture",
  "location": "제주도 제주시",
},

{
  "id" : "Jeju-02",
  "name":"세계유산축전 제주",
  "startDate":"2024-10-11",
  "endDate": "2024-10-22",
  "address":"제주특별자치도 제주시 조천읍 선교로 569-36",
  "cost":"무료 (일부 프로그램 유료) 유료 프로그램 : 워킹투어(5,000) / 특별탐험(10,000) 한라산 야간일출산행(10,000) / 유산마을나들이(10,000)",
  "contact":"064-755-2210",
  "instagram":"worldheritage_jeju",
  "more_info" : "https://worldheritage.kr/",
  "describe": "발견의 기쁨' Joy of Discovery 가치의 확산과 향유, 그리고 가치의 재발견",
  "detail": "자연이 만들어 낸 경이롭고 신비로운 제주와의 의미 있는 만남이 어느덧 5번째이다. 2007년, 제주는 국내 최초로 유네스코 세계자연유산에 등재되었고, 2020년부터 매년 이 가치를 알리기 위한 축전을 개최해 왔다. 세계유산축전은 국가유산청과 국가유산진흥원이 유네스코 세계유산으로 등재된 국내 세계유산의 가치와 의미를 내·외국인들에게 알리고자 추진하는 사업이다. 올해 세계유산축전 제주의 주제는 발견의 기쁨 이다 자연이 선사한 경이로움을 탐구하고, 탐험하며, 그 안에 보석 같은 이야기와 사람들을 발견하고 만나는 이번 축전은 세계유산이 갖는 제주의 특별한 매력을 국내외로 널리 알리고, 참여 세대를 확장하며 세계자연유산의 탁월한 보편적 가치와 학술적, 문화적 의미를 전함으로써, 제주도 브랜드 가치를 보다 더 높이고자 한다.2024년 10월, 워킹투어, 체험, 공연, 전시, 포럼 등 세계유산의 가치를 확산하고, 향유하는 프로그램을 통해 제주의 숨은 매력을 발견하며, 자연이 주는 위로와 힘의 선물도 받아 가시길 바란다. 동시에 세계유산을 지키고 보호하는 소중한 마음과 수호 실천 약속에도 참여 바란다.",
  "img_url":"https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_d5dfae4f-39f7-40a3-b80d-b045c0a39c48_1.jpg",
  "poster_url": "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/d5dfae4f-39f7-40a3-b80d-b045c0a39c48_3.png",
  "category": "culture",
  "location": "제주도 제주시",
},
// 제주도  2개 end















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
  });
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
              <a href = "/detailPage/html/detail.html?id=${festval['id']}" target="_blank">
                <div class="wr-img" style="background-image: url('${festval.img_url}');"></div>
              </a>
              <div class="wr-title">${festval['name']}</div>
              <div class="wr-date">${festval.startDate} - ${festval.endDate}</div>
              <div class="wr-loc">${festval['location']}</div>
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