// 한줄 주석
/* 범위주석 */

// js 파일은 <script> 태그 내부라고 생각하면 됨 

/* js 안될 경우 개발자 도구 켜서 오류 확인! */

function btnClick2() {
    alert("external 버튼이 클릭됨")
}

function changeColor1() {
    document.getElementById("box").style.backgroundColor = "red";
    // 문서에서
    // 이름이 "box"인 아이디 요소 얻어온다
    // 스타일
    // 배경화면
    // 붉은색 변경!
}

function changeColor2() {
    document.getElementById("box").style.backgroundColor = "yellow";
}