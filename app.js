var min=0;
var sec=0;
var msec=0;

var minh1=document.getElementById('min');
var sech1=document.getElementById('sec');
var msech1=document.getElementById('msec');

var interval;

function timer(){

    msec++;
    msech1.innerHTML=msec;
    if(msec>=100){
        sec++;
        sech1.innerHTML=sec;
        msec=0;

    }else if(sec >=60){
        min++;
        
        
        minh1.innerHTML=min;
        sec=0;
    }

}
function start(){
interval=setInterval(timer,10);    
}

function stop(){
    clearInterval(interval)
   
}

function ans(){
    var ap=document.getElementById('al');
    ap.innerHTML=min+":"+sec+":"+msec;
    
}

function reset(){
    min=0;
    sec=0;
    msec=0;
    minh1.innerHTML=min;
    msech1.innerHTML=msec;
    sech1.innerHTML=sec;
    stop();
}

