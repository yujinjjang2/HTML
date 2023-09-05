// 내풀이

/*
1. 아이디 : 값이 변했을 때

영어 소문자로 시작하고,
영어 대/소문자, 숫자, -, _로만 이루어진 6~14글자 사이 문자열인지 검사

아이디 정규표현식 : (각자 작성)

- 형식이 일치할 경우
입력창의 배경색을 springgreen으로 변경

- 형식이 일치하지 않은 경우
입력창의 배경색을 red, 글자색을 white로 변경

*/
document.getElementById("inputId").addEventListener("change", function() {

    const regExp = /^[a-z]+[\w\d\-\_]{5,13}/g;

    if(regExp.test(this.value)) {
        this.style.backgroundColor = "springgreen";
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    }

});

/*
2. 비밀번호, 비밀번호 확인 : 키보드가 올라올 때

"비밀번호"를 미입력한 상태에서 "비밀번호 확인"을 작성할 경우
"비밀번호 확인"에 작성된 내용을 모두 삭제하고
'비밀번호를 입력해주세요' 경고창 출력 후
focus를 "비밀번호" 입력창으로 이동 -> 이게 안돼! + 비밀번호 일치가 뜸..

*/
document.getElementById("inputPwConfirm").addEventListener("keyup", function() {

    const pw = document.getElementById("inputPw").value;

    const pwM = document.getElementById("pwMessage").innerHTML;

    if(pw == "") {
        this.value = "";
        alert('비밀번호를 입력해주세요');
        pw.focus();
        pwM = "";
    }
});

/*
- 비밀번호가 일치할 경우
"비밀번호" 입력창 오른쪽에 "비밀번호 일치" 글자를 초록색으로 출력.

- 비밀번호가 일치하지 않을 경우
"비밀번호" 입력창 오른쪽에 "비밀번호 불일치" 글자를 빨간색으로 출력.
*/
document.getElementById("inputPwConfirm").addEventListener("keyup", function() {

    const pw = document.getElementById("inputPw").value;

    if(pw == this.value) {
        document.getElementById("pwMessage").innerText = "비밀번호 일치";
        document.getElementById("pwMessage").style.color = "green";
    } else {
        document.getElementById("pwMessage").innerText = "비밀번호 불일치";
        document.getElementById("pwMessage").style.color = "red";
    }

});

/*
3. 이름 : 값이 변화했을 때

한글 2~5글자 사이 문자열인지 검사.

이름 정규표현식 : /^[가-힣]{2,5}$/

- 형식이 일치할 경우
"이름" 입력창 오른쪽에 "정상입력" 글자를 초록색으로 출력.

- 형식이 일치하지 않을 경우
"이름" 입력창 오른쪽에 "한글만 입력하세요" 글자를 빨간색으로 출력.
*/
document.getElementById("inputName").addEventListener("change", function() {

    const regExp = /^[가-힣]{2,5}$/;

    const nameM = document.getElementById("nameMessage");

    if(regExp.test(this.value)) {
        nameM.innerHTML = "정상입력";
        nameM.style.color = "green";
    } else {
        nameM.innerHTML = "한글만 입력하세요";
        nameM.style.color = "red";
    }

});

/*
회원가입 버튼 클릭 시 : validate() 함수를 호출하여
성별이 선택 되었는지, 전화번호가 형식에 알맞게 작성되었는지 검사

- 성별이 선택되지 않은 경우
"성별을 선택해주세요." 경고창(==대화상자) 출력 후
submit 기본 이벤트를 제거하여 회원가입이 진행되지 않게 함.

전화번호 정규 표현식 : /^[0][0-9]{1,2}-[0,9]{3,4}-[0-9]{4}/

- 전화번호 형식이 올바르지 않을 경우
"전화번호의 형식이 올바르지 않습니다" 경고창(==대화상자) 출력 후
submit 기본 이벤트를 제거하여 회원가입이 진행되지 않게 함.

*/
const validate = document.getElementById("register").addEventListener("click", function() {

    if(!document.querySelectorAll(label).checked) {
        alert("성별을 선택해주세요.")
    }

});

document.getElementById("register").addEventListener("click", function() {

    validate();
    
});



