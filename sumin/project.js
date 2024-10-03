/* <하트 누르면 색깔 변하고 다시 누르면 색깔 없어지게 하기>

const 변수명 = document.querySelector("#~") //id명
변수명.addEventListener("click", ( ) =>{
    let isOn = wrap.classList.contains("on");
    console.log(isOn);

    if(isOn){
       wrap.classList.remove("on");
    }else{
       wrap.classList.add("on");
    }
});


* 더 간단한 방법 ( 삼항 연산자 )

  (isOn) ? wrap.classList.remove("on") : wrap.classList.add("on");


* 더더 간단한 방법( toggle )
  wrap.classList.toggle("on"); */

{
  /* < 커서 올리면 미우스 모양 바뀌게 하는 법>
 js 파일
 태그명.클래스명{
    cursor: pointer;(한쪽만 가르키는 손가락)
 } 
    cursor: grab;(지도 길찾기사진에 올리면 나타나는 다편 손가락)*/
}
