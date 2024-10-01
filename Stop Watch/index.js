let interval = null;
let secondinterval = 0;


const time = document.getElementById("time")

function padStart(value){
    return String(value).padStart(2,"0")
}

function setTime(){
    const minute = Math.floor(secondinterval/60)
    const second = secondinterval % 60
    time.innerHTML = `${padStart(minute)}:${padStart(second)}`
}

function timer(){
    secondinterval++
    setTime()
}


function startClock() {
    
    if (interval) stopClock()
    interval = setInterval(timer,1000)
}



function stopClock(){
    clearInterval(interval)
}


function restartClock() {
    stopClock()
    secondinterval = 0;
    setTime()
}

