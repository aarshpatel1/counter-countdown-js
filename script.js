const counting = document.querySelector("#counting")
const startBtn = $("#startBtn");
const pauseBtn = $("#pauseBtn");
const resetBtn = $("#resetBtn");

let countdown = parseInt(counting.innerText);
var start, pause, reset

startBtn.on("click", function () {

    let customTime = document.querySelector("#countdown").value
    if (customTime) {
        console.log(customTime)
        countdown = customTime + 1
    }
    start = setInterval(() => {
        if (countdown > 0) {
            countdown -= 1
            updateCounter(countdown)
        } else {
            // alert("Time Out")
            clearInterval(start)
            updateCounter("Time Out")
        }
    }, 1000);
})

function updateCounter(currentCount) {
    counting.innerText = currentCount
}