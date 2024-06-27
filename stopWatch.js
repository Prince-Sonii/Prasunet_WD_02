
// stop watch
let milliseconds=0;
let seconds =0;
let minutes =0;
let hours =0;
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
            millisecsText.innerText = ++milliseconds;
            if(milliseconds==100) { 
                milliseconds=0;
                secsText.innerText=++seconds; 
                if(seconds==60) {
                    seconds=0;
                    secsText.innerText = seconds;
                    minsText.innerText=++minutes;
                    if(minutes==60) {
                        minutes=0;
                        minsText.innerText = minutes;
                        hoursText.innerText= ++hours;
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
    seconds=0;
    minutes=0;
    hours=0;
    millisecsText.innerText="00";
    secsText.innerText="00";
    minsText.innerText="00";
    hoursText.innerText="00";
    count=1;
    while(laps.childElementCount>0) {
        laps.removeChild(laps.firstElementChild)
    }
}
// lap button
let laps_button = document.getElementById("lap")
let laps = document.getElementById("laps_t")
let count=1;
laps_button.onclick = ()=>{
    // laps.append(hours+":"+minutes+":"+seconds+"/"+milliseconds)
    const outerBox = document.createElement("div");
    const newLapCount = document.createElement("div");
    const newLap = document.createElement("div");
    // Set its class to lap_timer
    newLapCount.className += "d";
    newLap.className += "d";
    outerBox.className = "flex_outer_box";
    // Set its text content to the current lap time
    newLapCount.innerText += `Lap${count++}`;
    newLap.innerText += `${hours}:${minutes}:${seconds}.${milliseconds}`;
    // Append the new div to the laps container
    outerBox.appendChild(newLapCount);
    outerBox.appendChild(newLap);
    laps.appendChild(outerBox);
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


 