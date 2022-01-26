const hoursElement = document.querySelector(".hour-indicator")
const minutesElement = document.querySelector(".minute-indicator")


const secondsElement = document.getElementById("second_hand");
const dateBox = document.getElementById("dateBox");

function animate() {
  const date = new Date();

  const hour = date.getHours() % 12;
  const minute = date.getMinutes();
  const second = date.getSeconds();
  let day = date.getDate()

  hoursElement.style.strokeDasharray = `${hour} ${12 - hour}`;
  minutesElement.style.strokeDasharray = `${minute} ${60 - minute}`;

  secondsElement.setAttribute("transform", `rotate(${(360 / 60) * second})`);
  dateBox.textContent = day;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
