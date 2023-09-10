//  변수 선언 위치에 따른 구분

var num1 = 1; // 전역 변수
num2 = 2;     // 전역 변수

console.log(num1); // 1
console.log(num2); // 2

var num1 = 20;
num2 = 40;

console.log(num1); // 20
console.log(num2); // 40

console.log("JS 코드를 함수 내부가 아닌 JS 파일 또는 script 태그에 바로 작성하면 HTML 랜더링 시 바로 수행된다.")



function test() {
    var num3 = 3; // function 지역변수
    num4 = 4; // 전역 변수

    if(true) {
        // let num5 = 5; // function 지역변수
        var num5 = 5;
        num6 = 6; // 전역 변수
    }

    console.log(num5); // 5
}


test(); // 함수호출


// console.log(num3);
console.log(num4); // function 종료 후에도 사용 가능 -> 전역변수

// console.log(num5);
console.log(num6);


// 자료형 확인
function typeTest() {

    const typeBox = document.getElementById("typeBox");

    let temp; // 선언 후 값을 초기화하지 않음 == undefiend
    typeBox.innerHTML = "temp : " + temp;
    // console.log(typeBox.innerHTML);
    const name = "홍길동";

    // typeof 변수명 : 해당 변수의 자료형을 검사하는 연산자
    typeBox.innerHTML += "<br>name : " + name + " / " + typeof name;

    const gender = 'M';
    typeBox.innerHTML += "<br>gender : " + gender + " / " + typeof gender;

    // 자바스크립트는 char 자료형이 존재하지 않는다
    // -> "", '' 모두 string 리터럴 표기법

    const age = 20;
    const height = 178.9;

    typeBox.innerHTML += "<br>age : " + age + " / " + typeof age;
    typeBox.innerHTML += "<br>height : " + height + " / " + typeof height;


    const isTrue = true;
    typeBox.innerHTML += "<br>isTrue : " + isTrue + " / " + typeof isTrue;

    // object

    // java ( {} )
    // int[] arr = {1,2,3,4,5}

    // javascript [] 사용
    const arr = [10,30,70,50];
    typeBox.innerHTML += "<br>arr : " + arr + " / " + typeof arr;

    for(let i = 0; i < arr.length; i++) {
        typeBox.innerHTML += "<br>arr[i] : " + arr[i] + " / " + typeof arr[i];
    }

    // 자바스크립트 객체 K:V (Map 형식)로 작성
    const user = { "id":"user01", "pw":"pass01" };
    typeBox.innerHTML += "<br>user : " + user + " / " + typeof user;

    // 객체 내용 출력 방법 1
    typeBox.innerHTML += "<br>user.id : " + user.id;
    typeBox.innerHTML += "<br>user.pw : " + user.pw;

    // 객체 내용 출력 방법 2 (객체 전용 for문 for..in)
    for(let key in user) {
        // user 객체의 키(id, pw)를 반복할 때 마다 하나씩 얻어와 key 변수에 저장
        typeBox.innerHTML += "<br>user[key] : " + user[key];
    }


    // function (함수도 자료형이다!)

    // 1) 변수명 == 함수명
    const sumFn = function(n1,n2) { // 익명함수
        return n1 + n2;
    }
    // function sumFn(n1, n2) {
    //     return n1 + n2;
    // }

    // 함수명만 작성한 경우 -> 함수에 작성된 코드가 출력됨
    typeBox.innerHTML += "<br>sumFn : " + sumFn + " / " + typeof sumFn;

    // 함수명() 괄호를 포함해서 작성하는 경우 -> 함수 호출(실행)
    typeBox.innerHTML += "<br>sumFn(10,20) : " + sumFn(10,20);
}