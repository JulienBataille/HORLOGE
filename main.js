Number.prototype.pad = function(n){
    for (r = this.toString(); r.length < n; r=0+r);
    return r;
};

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
        corr = [month[mo],dy,yr,hou.pad(2),min.pad(2),sec.pad(2),milli];

    for(let i = 0; i < tags.length; i++ )
        document.getElementById(tags[i]).firstChild.nodeValue = corr[i] ;
    

}; 

function initClock (){
    updateClock();
    window.setInterval("updateClock()", 1);
};