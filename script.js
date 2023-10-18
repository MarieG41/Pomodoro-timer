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
    document.getElementById('start-count').style.display = "none";
    document.getElementById('reset').style.display = "block";
    seconds = 59;
    let workMin = workTime - 1;
    let breakMin = breakTime - 1;
    breakCount = 0;
    
    let timeFunction = () => {
        document.getElementById("minutes").innerHTML = workMin;
        document.getElementById("seconds").innerHTML = seconds;
        
        seconds = seconds - 1;

        if(seconds === 0) {
            workMin = workMin - 1;
            if(workMin === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    workMin = breakMin;
                    breakCount++

                    work.classList.remove('active');
                    brea.classList.add('active');
                }else {
                    workMin = workTime;
                    breakCount++

                    brea.classList.remove("active");
                    work.classList.add("active");
                }
            }
            seconds = 59;
        }
    }
    setInterval(timeFunction, 1000);
}