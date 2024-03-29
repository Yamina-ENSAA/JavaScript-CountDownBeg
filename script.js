const currentDate = new Date(); // get the currentdate
const targetDate = new Date('2024-08-24T12:00:00'); // Replace with target
console.log(targetDate);
const difference = targetDate - currentDate;
console.log(difference)

function updateCountdown() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }

  const interval = setInterval(updateCountdown, 1000);