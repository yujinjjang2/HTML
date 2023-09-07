// 문자열 관련함수(가장 많이 사용됨)
document.getElementById("btn1").addEventListener("click", function() {

    // 문자열.indexOf("str") :
    // 문자열에서 "str"과 일치하는 부분이 시작되는 인덱스를 반환
    // 없으면 -1반환

    const str1 = "Hello World";

    console.log(  str1.indexOf("e")  ); // 1
    console.log(  str1.indexOf("l")  ); // 2 (가장 먼저 검색된 인덱스 반환)
    console.log(  str1.indexOf("가")  ); // -1


    // 문자열.substring(시작인덱스, 종료인덱스) : 문자열 일부 잘라내기
    // - 시작인덱스 이상 종료인덱스 미만
    const str2 = "abcdefg";

    console.log(  str2.substring(0, 3)  ) // abc
    console.log(  str2.substring(2, 6)  ) // cdef


    // 문자열.split("구분자") : 문자열을 "구분자"로 잘라서 배열로 반환
    const str3 = "햄버거, 피자, 김밥, 파스타, 삼겹살";
    const arr = str3.split(", "); // 띄어쓰기까지 포함한 것 -> 구분자!
    console.log(arr); // ['햄버거', '피자', '김밥', '파스타', '삼겹살']
    // console.log(arr[0]);
});

// 숫자 관련 함수
document.getElementById("btn2").addEventListener("click", function() {

    // Infinity 리터럴 확인
    console.log( 5 / 0 ); // Infinity

    if(5/0 == Infinity) {
        console.log("무한 입니다"); // 무한 입니다
    }

    // NaN 리터럴 확인
    console.log( "aaa" * 100 ); // NaN

    // "aaa" * 100 == NaN (X)

    // isNaN(값) : 값이 NaN이면 true, 아니면 false

    if( isNaN("aaa" * 100) ) {
        console.log("숫자가 아닙니다"); // 숫자가 아닙니다
    }


    // Math.random() : 0 이상 1 미만의 난수 발생 (0 <= random < 1)
    console.log(Math.random());

    // 소수점 관련 함수
    // round(), ceil(), floor(), trunc()
    // 반올림    올림    내림      버림

    // -> 소수점 자리를 지정할 수 없다.

    console.log( Math.round(10.555) ); // 11
    console.log( Math.ceil(10.555) ); // 11
    console.log( Math.floor(10.555) ); // 10
    console.log( Math.trunc(10.555) ); // 10


    // 버튼 배경색 랜덤으로 바꾸기

    const r = Math.floor(Math.random() * 256)  // 0~255
    const g = Math.floor(Math.random() * 256)  // 0~255
    const b = Math.floor(Math.random() * 256)  // 0~255

    console.log(r);
    console.log(g);
    console.log(b);
    this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"

    // 숫자.toFixed(자릿수) : 지정된 자릿수 까지 반올림해서 표현
    console.log( (3.55).toFixed(1) ); // 3.5 ?
    console.log( (3.55).toFixed(2) ); // 3.55

});


// 형변환 확인
// parseInt() : 정수로 변환함 ("3.14" -> 3)
console.log( parseInt("3.14") ); // 3
console.log( typeof parseInt("3.14") ); // number
// console.log( typeof "3.14" ); // string

// parseFloat() : "정수" -> 정수, "실수" -> 실수
console.log( parseFloat("3.14") ); // 3.14
console.log( typeof parseFloat("3.14") ); // number