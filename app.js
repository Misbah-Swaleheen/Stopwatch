var hours = 0,
    mins = 0,
    secs = 0,
    interval = null;

function stopwatch(){

    secs++;
    if(secs === 60){
        secs = 0;
        mins++;
    
    if(mins === 60){
        mins = 0;
        hours++;
    }
}
    if(secs < 10){
        document.getElementById("secs").innerHTML = "0" + secs;
    }
    else
    {
        document.getElementById("secs").innerHTML = secs;
    }

    if(mins < 10){
        document.getElementById("mins").innerHTML = "0" + mins;
    }
    else
    {
        document.getElementById("mins").innerHTML = mins;
    }

    if(hours < 10){
        document.getElementById("hours").innerHTML = "0" + hours;
    }
    else
    {
        document.getElementById("hours").innerHTML = hours;
    }
    
    
   
}

function play(){
    interval = window.setInterval(stopwatch, 1000);
}

function stop(){
    window.clearInterval(interval);
}

function reset(){
    // window.clearInterval(interval);
    hours = 0;
    mins = 0;
    secs = 0;
    document.getElementById("secs").innerHTML = "0" + secs;  
    document.getElementById("mins").innerHTML = "0" + mins; 
    document.getElementById("hours").innerHTML = "0" + hours;
    window.clearInterval(interval);
}