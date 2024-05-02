// time declaration 
let watch_outer = document.querySelector('.watch-outer');
let clock_container1 = watch_outer.children[2];
let clock_container2 = watch_outer.children[0];
let hourEle = clock_container1.children[0];
let minEle = clock_container1.children[1];
let secEle = clock_container1.children[2];
let ampmEle = clock_container1.children[3];
// date declaration 
let weekEle = clock_container2.children[0];
let monthEle = clock_container2.children[1];
let dayEle = clock_container2.children[2];
let yearEle = clock_container2.children[3];


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