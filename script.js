let hours = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(function () {
    
    let h = new Date().getHours(); 
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // convert 24 to 12 hr

    if (h < 10){

        h -= 12;

    }

    // add 0 to single digit 

    // if (h < 10){
    //     hours.innerHTML = '0'+ h;
    // }else{
    //     hours.innerHTML = h;
    // }
    
    // if (m < 10){
    //     minutes.innerHTML = '0' + m;
    // }else{
    //     minutes.innerHTML = m;
    // }
    // if (s < 10){
    //     seconds.innerHTML = '0'+ s;
    // }else{
    //     seconds.innerHTML = s;
    // }    
   
    
    hours.style.transform = `rotateZ(${h * 30}deg)`;
    minutes.style.transform = `rotateZ(${m * 6}deg)`;
    seconds.style.transform = `rotateZ(${s * 6}deg)`;


});








