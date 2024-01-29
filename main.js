let alarmAudio = new Audio("/sounds/alarm.wav");
let settingsHour = document.getElementById("settingsHour").value;
let settingsMinute = document.getElementById("settingsMinute").value;



function updateClock(){
    let settingsHour = document.getElementById("settingsHour").value;
    let settingsMinute = document.getElementById("settingsMinute").value;
    let now = new Date();
    let milli = now.getMilliseconds(),
        sec = now.getSeconds(),
        min = now.getMinutes(),
        hou = now.getHours(),
        mo = now.getMonth(),
        dy = now.getDate(),
        yr = now.getFullYear();

    let month = ["january","february","march","april","may","june","july","august","september","october","november","december"];
    let tags = ["mon","d","y","h","m","s","mi"],
        corr = [month[mo],dy,yr,hou,min,sec,milli];

    for(let i = 0; i < tags.length; i++ ){
        document.getElementById(tags[i]).firstChild.nodeValue = corr[i] ;
    }

    if (hou == settingsHour && min == settingsMinute && sec<5){
        playSound(alarmAudio);
     }

}; 

function initClock (){
    updateClock();
    window.setInterval("updateClock()", 1);
};

function playSound(sound) {
    sound.play();
}

