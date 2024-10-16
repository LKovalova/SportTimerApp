const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    document.querySelector("#myVideo").play();


    let selectedTime = document.querySelector("#time");
    let timer = 0;
    timer = parseFloat(selectedTime.value);
    let amountTime = 60 * timer;

    selectedTime.addEventListener("change", function() {
        stopTimer();
        
        timer = parseFloat(selectedTime.value);
        amountTime = 60 * timer;
        calculateTime();
    });

    let timerId;

    function calculateTime() {

        const countdown = document.querySelector("#countdown");

        let minutes = Math.floor(amountTime / 60);
        let seconds = amountTime%60;

        if(seconds < 10) {
            seconds = "0" + seconds;
        }

        countdown.textContent = `${minutes} : ${seconds}`;
        amountTime--;

        if( amountTime < 0) {
            stopTimer();
            amountTime=0;
        }
    }

    function startTimer() {
        timerId = setInterval(calculateTime, 1000);
        button.style.display = "none";
    }

    function stopTimer() {
        clearInterval(timerId);
        button.style.display = "block";
    }
    
    calculateTime();
    startTimer();
})