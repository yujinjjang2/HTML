document.getElementById("lotto-btn").addEventListener("click", (e) => {

    const num = document.getElementsByClassName("num");

    let lotto = [];

    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 45 + 1);
        lotto[i] = random;
    }

    console.log(lotto);

})