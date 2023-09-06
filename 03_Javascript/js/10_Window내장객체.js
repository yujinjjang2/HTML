// window.setTimeout()
document.getElementById("btn1").addEventListener("click", function() {

    setTimeout( function() {
        alert("3초 후 출력!")
    }, 3000); // 3000ms = 3초
});


// window.setInterval()
let interval; // setInterval을 저장하기 위한 전역 변수

// 현재 시간 문자열로 반환 함수
function currentTime() {
    const now = new Date();

    let hour = now.getHours(); // 시
    let min = now.getMinutes(); // 분
    let sec = now.getSeconds(); // 초

    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    return hour + " : " + min + " : " + sec;
}

function clockFn() {
    const clock = document.getElementById("clock");
    clock.innerText = currentTime();

    interval = setInterval(function() {
        clock.innerText = currentTime();
    }, 1000);
}

clockFn(); // 함수호출

// clearInterval
document.getElementById("stop").addEventListener("click", function() {
    clearInterval(interval);
});

// stop 버튼 2번째 누르면 시간이 다시 돌아감.
document.getElementById("stop").addEventListener("click", function() {
    clockFn();
});