let miniSecond = document.getElementById("msec");
let second = document.getElementById("sec");
let minite = document.getElementById("mint");
let hours = document.getElementById("hour");
let msec = 0;
let sec = 0;
let mint = 0;
let hour = 0;

var interval;

function start(){
    interval = setInterval(time,100)
    document.getElementById("button").disabled = true;
}

function pause(){
    document.getElementById("button").disabled = false;
    clearInterval(interval);
}

function reset(){
    msec = 0;
    sec = 0;
    mint = 0;
    hour = 0;
    miniSecond.innerHTML = msec;
    second.innerHTML = sec;
    minite.innerHTML = mint;
    hours.innerHTML = hour;
    pause();
}

function time(){
    msec++;
    miniSecond.innerHTML = msec;
    if(msec === 100){
        sec++;
        second.innerHTML = sec;
        msec = 0;
    }
    else if(sec === 60){
        mint++
        minite.innerHTML = mint;
        sec = 0;
    }
    else if(mint === 60){
        hour++;
        hours.innerHTML = hour;
        mint = 0;
    }
}