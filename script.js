// vars
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
var speedSlider = document.getElementById("speedSlider");

// constants
const g = 9.81;
//const timeScale = 50;
const height = 750;
const width = window.innerWidth;

// physics variables + circle
var x = 100;
var y = 50;
const r = 40;

var t = 0;
var v_x = 1; // vel x
var yFactor = 1; // flips between 1 & -1
var damping = 1;

canvas.width = width;
canvas.height = height;

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
}

function update() {
  // update x position based off constant velocity
  x += v_x;
  // update y position; v = u + at where u=0
  y += g * (t/1000) * yFactor * damping;
  
  // x bounce check
  if (x + r > canvas.width || x - r < 0) {
    v_x *= -1;
  }

  // y bounce check
  if(y + r + 2 > canvas.height) {
    yFactor *= -1;
    damping *= 0.85;
  }


  clearCanvas()
  drawBall()
}

drawBall()

setInterval(function() {
  if(yFactor == 1) t += 1
  if(yFactor == -1) t -= 1
}, 1);
setInterval(update, 1);