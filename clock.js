
//clock function
const clock = document.getElementById("clock");
let hour = 0;
let minute = 0;
let second = 0;



setInterval(function(){
    second++;
    if(second == 60){
        second = 0;
        minute++;
        hour = 0;
    } else if(minute == 60){
        minute = 0;
        hour++;
    }
}, 1000);

document.addEventListener("DOMContentLoaded", function(){
    setInterval(function(){
        clock.innerHTML = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`
    }, 1000)
})
