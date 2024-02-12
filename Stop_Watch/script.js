let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start(){
    timer = true;
    stopWatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;

    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";

}

function stopWatch(){
    if(timer){
        count++;
        if(count == 100){
            sec+=1;
            count=0;
        }
        if(sec == 60){
            min+=1;
            sec=0;
        }

        if(min == 60){
            hr+=1;
            min=0;
            sec=0;
        }

        let hrS = hr;
        let minS = min;
        let secS = sec;
        let countS = count;
        if(hr < 10){
            hrS = "0"+hr;
        }

        if(min < 10){
            minS = "0"+min;
        }

        if(sec < 10){
            secS = "0"+sec;
        }

        if(count < 10){
            countS = "0"+count;
        }

        document.getElementById('hr').innerHTML = hrS;
        document.getElementById('min').innerHTML = minS;
        document.getElementById('sec').innerHTML = secS;
        document.getElementById('count').innerHTML = countS;

        setTimeout("stopWatch()", 10);
    }
}