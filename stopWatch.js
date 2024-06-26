
// stop watch
let milliseconds=0;
let seconds =1;
let minutes =1;
let hours =1;
let flag = true;
let timer_control;
let millisecsText = document.getElementById("millisecs")
let secsText = document.getElementById("secs")
let minsText = document.getElementById("mins")
let hoursText = document.getElementById("hours")
//start button
const startButton = document.getElementById("start")
startButton.onclick = ()=>{
    if(flag){
        timer_control = setInterval(()=>{
            millisecsText.innerText = milliseconds++;
            if(milliseconds==100) {
                milliseconds=1;
                // seconds++;
                secsText.innerText=seconds++; 
                if(seconds==61) {
                    seconds=0
                    secsText.innerText=seconds;
                    // minutes++
                    minsText.innerText= minutes++;
                    if(minutes==61) {
                        minutes=0;
                        minsText.innerText= minutes++;
                        // hours++
                        hoursText.innerText= hours++;
                    }
                }
            }
        },10)
    }
    flag = false
}
//stop button
const stopButton = document.getElementById("stop")
stopButton.onclick = ()=>{
    clearInterval(timer_control)
    flag =true
}
//reset button
const resetButton = document.getElementById("reset");
resetButton.onclick = ()=>{
    milliseconds=0;
    seconds=1;
    minutes=1;
    hours=1;
    millisecsText.innerText="00";
    secsText.innerText="00";
    minsText.innerText="00";
    hoursText.innerText="00";
    while(laps_container.firstElementChild) {
        laps_container.firstElementChild.remove();
    }
}

// Night Mode Button
 const nightMode = document.getElementById("night_mode_btn");
 nightMode.onclick = ()=> {
     document.getElementById("night_btn_parent").classList.toggle("night_btn_night_mode");
     document.body.classList.toggle("nightMode");
     nightMode.classList.toggle("color_change");
    document.getElementById("nav_night_mode").classList.toggle("navbar_night_mode");
    document.getElementById("clock_night_mode").classList.toggle("item_con_night_mode");
    let boxBorder = document.getElementsByClassName("box");
    for(var i=0;i<boxBorder.length;i++) {
        boxBorder[i].classList.toggle("box_night_mode");
    }
    
}


 