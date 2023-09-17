// 변수 선언
let nameFlag = false;
let mailFlag = false;

// Contact Me : Name
document.getElementById("form-name").addEventListener("keyup", function() {

    // 결과 출력용 span
    const spanName = document.getElementById("span-name");

    // 한글 2~5글자 정규 표현식
    const regExp = /^[가-힣]{2,5}$/;

    // 빈칸인지검사
    if(this.value == 0) {
        spanName.innerText = "";
        return;
    }

    // 유효성 검사
    if ( regExp.test(this.value) ) {
        // 유효한 경우
        spanName.innerText = "유효한 이름 형식입니다";
        spanName.style.color = "green";
        spanName.style.fontWeight = "bold";
        nameFlag = true;
    } else {
        spanName.innerText = "이름 형식이 유효하지 않습니다";
        spanName.style.color = "red";
        spanName.style.fontWeight = "bold";
        nameFlag = false;
    }
});

// Contact Me : Email
document.getElementById("form-email").addEventListener("keyup", function() {

    // 결과 출력용 span
    const spanEmail = document.getElementById("span-email");

    // 이메일 정규 표현식
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    // 빈칸인지검사
    if(this.value == 0) {
        spanEmail.innerText = "";
        return;
    }

    // 유효성 검사
    if ( regExp.test(this.value) ) {
        // 유효한 경우
        spanEmail.innerText = "유효한 이메일 형식입니다";
        spanEmail.style.color = "green";
        spanEmail.style.fontWeight = "bold";
        mailFlag = true;
    } else {
        spanEmail.innerText = "이메일 형식이 유효하지 않습니다";
        spanEmail.style.color = "red";
        spanEmail.style.fontWeight = "bold";
        mailFlag = false;
    }
});

// Contact Me : Send Button
document.getElementById("send-btn").addEventListener("click", function(event) {

    // input 타입 객체 가져오기
    const formName = document.getElementById("form-name");
    const formEmail = document.getElementById("form-email");
    
    if(isNull(formName.value)) {
        alert("이름을 입력해주세요.");
        event.preventDefault();
        return;
    } else {
        if(nameFlag == false) {
            alert("유효하지 않은 이름입니다.");
            event.preventDefault();
            return;
        }
    }

    if(isNull(formEmail.value)) {
        alert("이메일을 입력해주세요.");
        event.preventDefault();
        return;
    } else {
        if(mailFlag == false) {
            alert("유효하지 않은 이메일입니다.");
            event.preventDefault();
            return;
        }
    }
});

// null 체크
function isNull(str) {
    if(str == null || str == "" || str == undefined) {
        return true;
    } else {
        return false;
    }
};

// 다크모드 변경
document.getElementById("color-mode").addEventListener("click", function() {

    const bigSection = document.getElementById("big-section");

    // body 요소의 배경색 얻어오기
    const bgColor = bigSection.style.backgroundColor;

    // 다크모드 변경
    if( bgColor == "white" || isNull(bgColor)) {
        bigSection.style.backgroundColor = "black";
        bigSection.style.color = "yellow";
    } else {
        bigSection.style.backgroundColor = "white";
        bigSection.style.color = "black";
    }
});









