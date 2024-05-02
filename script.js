// time declaration 
let hourEle = document.querySelector('#hour');
let minEle = document.querySelector('#min');
let secEle = document.querySelector('#sec');
let ampmEle = document.querySelector('#ampm');
// date declaration 
let weekEle = document.querySelector('#week');
let monthEle = document.querySelector('#month');
let dayEle = document.querySelector('#day');
let yearEle = document.querySelector('#year');


// functions 
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
    
    hour = dateFormat(hour);
    min = dateFormat(min);
    sec =  dateFormat(sec);

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

function date(){
    const weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const months_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date();
    let week = weekArray[date.getDay()];
    let month = months_array[date.getMonth()];
    let currentDate = date.getDate();
    let year = date.getFullYear();
    
    weekEle.textContent = week + ',';
    monthEle.textContent = month;
    dayEle.textContent = currentDate + ',';
    yearEle.textContent = year;
    
}
date();