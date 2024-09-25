// counter logic
const increaseBtn = $("#increase")
const decreaseBtn = $("#decrease")
const reset = $("#reset")
const counter = document.querySelector("#counter")
let count = parseInt(counter.innerText)

increaseBtn.on("click", function () {
    count++;
    counter.innerText = count
})

decreaseBtn.on("click", function () {
    count--;
    counter.innerText = count
})

reset.on("click", function () {
    count = 0
    counter.innerText = count
})

// countdown logic
const counting = document.querySelector("#counting")
const startBtn = $("#startBtn");
const pauseBtn = $("#pauseBtn");
const resetBtn = $("#resetBtn");
const showAlerts = document.querySelector("#alert")

let countdown = parseInt(counting.innerText);
var start

startBtn.on("click", function () {
    clearInterval(start)
    showAlerts.innerHTML = `
    <div class="alert alert-primary alert-dismissible fade show" role="alert">
        <div>Hey! Your countdown started...!</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
    let customTime = document.querySelector("#countdown").value
    if (customTime) {
        if (customTime > 0) {
            // console.log(customTime)
            countdown = customTime
        } else {
            showAlerts.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <div>Hey! Enter the positive value...!</div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `
            // counting.innerText = 10
            // countdown = 10
            // clearInterval(start)
        }
    }
    start = setInterval(() => {
        if (countdown > 0) {
            countdown -= 1
            counting.innerText = countdown
        } else {
            // alert("Time Out")
            clearInterval(start)
            showAlerts.innerHTML = `
             <div class="alert alert-success alert-dismissible" role="alert">
                <div>Hey! Your countdown is complete...!</div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `
        }
    }, 1000);
})

pauseBtn.on("click", function () {
    showAlerts.innerHTML = `
    <div class="alert alert-warning alert-dismissible" role="alert">
        <div>Hey! Click start to continue countdown...!</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
    clearInterval(start)
})


resetBtn.on("click", function () {
    showAlerts.innerHTML = `
    <div class="alert alert-danger alert-dismissible" role="alert">
        <div>Hey! You've reset the countdown...!</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
    clearInterval(start)
    counting.innerText = 10
    countdown = 10
})