const timeInput = document.getElementById("time");
const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let intervalId;
let startTime;
let remainingTimeInSeconds;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
    const totalTimeInSeconds = parseInt(timeInput.value);
    if (totalTimeInSeconds <= 0) {
    alert("Please enter a valid time in seconds.");
    return;
    }
    remainingTimeInSeconds = totalTimeInSeconds;
    startTime = Date.now();
    intervalId = setInterval(() => {
    remainingTimeInSeconds--;
    if (remainingTimeInSeconds <= 0) {
clearInterval(intervalId);
        timer.innerHTML = "00:00:00";
    startButton.disabled = false;
        
        return;
    }
    const hours = Math.floor(remainingTimeInSeconds / 3600);
    const minutes = Math.floor((remainingTimeInSeconds % 3600) / 60);
    const seconds = remainingTimeInSeconds % 60;
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    timer.innerHTML = formattedTime;
    }, 1000);
    startButton.disabled = true;
}

function stopTimer() {
    clearInterval(intervalId);
    remainingTimeInSeconds -= Math.floor((Date.now() - startTime) / 1000);
    
    startButton.disabled = false;
    
}

function resetTimer() {
    clearInterval(intervalId);
    timer.innerHTML = "00:00:00";
    startButton.disabled = false;
    timeInput.value = "";
}

function pad(number) {
    return number < 10 ? "0" + number : number;
}

function a(x){
    return x+1;
}
function b(y)
{
    return a(y+1)
}
function c(z)
{
    return b(z+1)
}
console.log(c(3));

        function   updateClock(){
        var now = new Date();
        var dname = now.getDay(),
            mo = now.getMonth(),
            dnum = now.getDate(),
            yr = now.getFullYear(),
            hou = now.getHours(),
            min = now.getMinutes(),
            sec = now.getSeconds(),
            pe = "AM";
            
            if(hou >= 12){
                pe = "PM";
            }
            if(hou == 0){
                hou = 12;
            }
            if(hou > 12){
                hou = hou - 12;
            }
            
            Number.prototype.pad = function(digits){
                for(var n = this.toString(); n.length < digits; n = 0 + n);
                return n;
            }
            
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
            var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
            var values = [ months[mo], dnum.pad(2), yr,week[dname], hou.pad(2), min.pad(2), sec.pad(2), pe];
            for(var i = 0; i < ids.length; i++)
            document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        }

function startClock(){
        updateClock();
        window.setInterval("updateClock()", 1);
                    }
