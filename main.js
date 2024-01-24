function updateClock(){
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

    for(let i = 0; i < tags.length; i++ )
        document.getElementById(tags[i]).firstChild.nodeValue = corr[i] ;
    

}; 

function initClock (){
    updateClock();
    window.setInterval("updateClock()", 1);
};