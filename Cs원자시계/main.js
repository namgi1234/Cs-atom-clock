const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
const movingTime = 1.08782776e-7;

function moveCtx() {
  let x =Math.floor(Math.random() * (200 - 50 + 1)) + 50;
  let y =Math.floor(Math.random() * (200 - 50 + 1)) + 50;
  c.getContext("2d").clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.stroke();
  console.log("1")
}

function startTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  if(h > 12){
    h = h-12;
  };
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

setInterval(moveCtx, movingTime);