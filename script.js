const counting = document.querySelector("#counting")
const startBtn = $("#startBtn");
const pauseBtn = $("#pauseBtn");
const resetBtn = $("#resetBtn");
const completeCountdown = document.querySelector("#alert")

let countdown = parseInt(counting.innerText);
var start, pause, reset

startBtn.on("click", function () {
    clearInterval(start)
    let customTime = document.querySelector("#countdown").value
    if (customTime) {
        console.log(customTime)
        countdown = customTime
    }
    start = setInterval(() => {
        if (countdown > 0) {
            countdown -= 1
            counting.innerText = countdown
        } else {
            // alert("Time Out")
            clearInterval(start)
            completeCountdown.innerHTML = `
             <div class="alert alert-success alert-dismissible" role="alert">
                <div>Hey! Your countdown is complete..!</div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `
        }
    }, 1000);
})

