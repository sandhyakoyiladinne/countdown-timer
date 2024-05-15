// const day=document.getElementById('days')
// const hour=document.getElementById('hours')
// const minute=document.getElementById('min')
// const second=document.getElementById('sec');

// const newYears=' 10 May 2024'
// function countDown(){
//   const newYearDate=new Date(newYears)
//   const currentDate=new Date()
//   const TotalSeconds=(newYearDate-currentDate)/1000;
//   const days=Math.floor(TotalSeconds/3600/24);
//   const hours=Math.floor(TotalSeconds/3600)%24
//   const minutes=Math.floor(TotalSeconds/60)%60;
//   const seconds=Math.floor(TotalSeconds)%60;


//   day.innerHTML=days;
//   hour.innerHTML=hours;
//   minute.innerHTML=minutes;
//   second.innerHTML=seconds;
// }
// countDown()
// setInterval(countDown,1000)




const countdownElements = {
    days: document.querySelector('#days'),
    hours: document.querySelector('#hours'),
    minutes: document.querySelector('#min'),
    seconds: document.querySelector('#sec')
};

const newYears = new Date('May 10, 2024').getTime();

function countDown() {
    const now = new Date().getTime();
    const distance = newYears - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElements.days.textContent = days;
    countdownElements.hours.textContent = hours;
    countdownElements.minutes.textContent = minutes;
    countdownElements.seconds.textContent = seconds;
}

countDown();
setInterval(countDown, 1000);
