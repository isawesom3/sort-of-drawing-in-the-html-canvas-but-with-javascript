let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

//width and height
let width = canvas.width;
let height = canvas.height;

//set opacity
let opacity = 1;

//function to draw a circle
function drawCircle(x, y) {
ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
ctx.beginPath();
ctx.arc(x, y, 10, 0, Math.PI * 2, false);
ctx.fill();
}

//make the circles when you click the canvas
canvas.addEventListener("click", e => {
drawCircle(e.offsetX, e.offsetY);
});

// clear the canvas
document.querySelector("#clear").addEventListener("click", () => {
ctx.clearRect(0,0, width, height);
});

//change the opacity of circles
document.querySelector("#opacity").addEventListener("change", e => {
opacity = e.target.value;
});





//hello
