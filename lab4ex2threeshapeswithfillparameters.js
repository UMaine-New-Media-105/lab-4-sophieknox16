//Sophie Knox Lab 4 Ex1 and Ex2
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("mistyrose");
  push();
  drawTriangle(30, 75, 58, 20, 86, 75, 1.5, 241, 143, 143);
  pop();
  drawEllipse(90, 150, 40, 241, 143, 143);
  drawFlower(25, -10, 1, 241, 143, 143);
}
//fucntion to draw a triangle at any points at any size
function drawTriangle(
  firstX,
  firstY,
  secondX,
  secondY,
  thirdX,
  thirdY,
  size,
  redValue,
  greenValue,
  blueValue
) {
  fill(redValue, greenValue, blueValue);
  stroke("salmon");
  scale(size);
  triangle(firstX, firstY, secondX, secondY, thirdX, thirdY);
}
//function to draw a circle at any x y points on the canvas
function drawEllipse(x, y, diameter, redValue, greenValue, blueValue) {
  stroke("salmon");
  fill(redValue, greenValue, blueValue);
  ellipse(x, y, diameter);
}
//function to draw a flower with a white center
function drawFlower(x, y, size, redValue, greenValue, blueValue) {
  push();
  translate(x, y);
  scale(size);
  fill(redValue, greenValue, blueValue);
  noStroke();
  ellipse(76, 235, 20); //right petal
  ellipse(61, 247, 20); //bottom petal
  ellipse(45, 235, 20); //left petal
  ellipse(51, 216, 20); //top left petal
  ellipse(70, 216, 20); //top right petal
  fill("white");
  ellipse(60, 230, 23);
}
