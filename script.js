let hourEle = document.querySelector('#hour');
let minEle = document.querySelector('#min');
let secEle = document.querySelector('#sec');
let ampmEle = document.querySelector('#ampm');

function clock(){
    const date = new Date;
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if(hour >= 12){
        ampmEle.textContent = "PM";
    }else{
        ampmEle.textContent = "AM"; 
    }

    min = dateFormat(min)
    sec =  dateFormat(sec)
    
    hourEle.textContent = hour + " : ";
    minEle.textContent = min + " : ";
    secEle.textContent = sec;

    setInterval(clock, 1000);
}
clock();
function dateFormat(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}