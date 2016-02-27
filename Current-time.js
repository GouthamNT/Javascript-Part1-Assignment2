

function displayTime() {
    var date = new Date();
    var minute = date.getMinutes();
    var hour = date.getHours();
    var time=timeformat(minute,hour);
    var result = document.querySelector("#time");
    result.textContent = time;
    var thanks = document.querySelector("#thanks");
    thanks.textContent = "Thanks for helping her";
}

function timeformat(minute,hour) {
    if(minute<10) {
        minute = "0" + minute;
    }
    var session="AM";
    if(hour > 12)
    {
        hour = hour - 12;
        session="PM"
    }
    var time = hour + ':' + minute + " " + session;
    return time;
}