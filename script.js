let work = document.getElementById("work");
let brea = document.getElementById("break");

let workTime = 25;
let breakTime = 5;

let seconds = "00";

window.onload = () => {
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = seconds;

    work.classList.add("active");
}

function start() {
    seconds = 59;
    let workMin = workTime - 1;
    let breakMin = breakTime - 1;
    breakCount = 0;

    let timeFunction = () => {
        document.getElementById("minutes").innerHTML = workMin;
        document.getElementById("seconds").innerHTML = seconds;
        seconds = seconds - 1;
    }

    setInterval(timeFunction, 1000);
}

function reset(){

}