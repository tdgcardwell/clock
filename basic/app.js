let content = document.querySelector('.content');

function timeNow() {
  let x = new Date();
  content.textContent = x.toLocaleTimeString();
}

setInterval(timeNow, 1000);
