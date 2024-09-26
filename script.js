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

function autoFadeAlert() {
    // Set timeout to hide the alert after 5 seconds
    setTimeout(function () {
        // Fade out the alert
        let alert = document.getElementById('autoFadeAlert');
        if (alert) {
            alert.classList.remove('show'); // Remove the 'show' class to start fading
            setTimeout(function () {
                alert.remove(); // Optionally remove the alert from the DOM after fade out
            }, 500); // Delay the removal slightly to match the fade-out duration
        }
    }, 5000); // 5 seconds delay
}

startBtn.on("click", function () {
    clearInterval(start)
    showAlerts.innerHTML = `
    <div class="alert alert-primary alert-dismissible fade show" role="alert" id="autoFadeAlert">
        <div>Hey! Your countdown started...!</div>
    </div>
    `
    autoFadeAlert(); // Call the fade-out function after creating the alert

    let customTime = document.querySelector("#countdown").value
    if (customTime) {
        if (customTime > 0) {
            countdown = customTime
        } else {
            showAlerts.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert" id="autoFadeAlert">
                <div>Hey! Enter a positive value...!</div>
            </div>
            `
            autoFadeAlert();
            return; // Exit to prevent countdown from starting
        }
    }
    start = setInterval(() => {
        if (countdown > 0) {
            countdown -= 1
            let seconds = countdown % 60
            let minutes = parseInt(countdown / 60)
            let formattedSeconds = seconds.toString().padStart(2, '0');
            let formattedMinutes = minutes.toString().padStart(2, '0')
            counting.innerText = `${formattedMinutes}:${formattedSeconds}`
        } else {
            clearInterval(start)
            showAlerts.innerHTML = `
             <div class="alert alert-success alert-dismissible fade show" role="alert" id="autoFadeAlert">
                <div>Hey! Your countdown is complete...!</div>
            </div>
            `
            autoFadeAlert();
        }
    }, 1000);
})

pauseBtn.on("click", function () {
    showAlerts.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert" id="autoFadeAlert">
        <div>Hey! Click start to continue countdown...!</div>
    </div>
    `
    autoFadeAlert();
    clearInterval(start)
})

resetBtn.on("click", function () {
    showAlerts.innerHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert" id="autoFadeAlert">
        <div>Hey! You've reset the countdown...!</div>
    </div>
    `
    autoFadeAlert(); // Call the fade-out function for the reset alert
    clearInterval(start)
    counting.innerText = 10
    countdown = 10
})
