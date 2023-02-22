# lab-4-sophieknox16
lab-4-sophieknox16 created by GitHub Classroom
First I created a canvas that is 400, 400 and in the function draw I chose a background color of mistyrose.

``` Javascript
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background("mistyrose");
```
  
  Next I created three functions at the end of my draw function that made three different shapes. 
  One was a trangle, one a circle, and one a flower made out of circles. 
  In these functions there are parameters that mainly go by `x`, y and size that let the user pick where on the canvas the shape will show up. 
 
``` Javascript
function drawTriangle(firstX, firstY, secondX, secondY, thirdX, thirdY, size){
  stroke("salmon")
  scale(size)
  triangle(firstX, firstY, secondX, secondY, thirdX, thirdY);
function drawEllipse(x, y, diameter){
  stroke("salmon")
  ellipse(x, y, diameter)
```  
  I lastly called these functions in draw to put them onto the canvas using the aprameters in the functions 
  I alos used push and pop to ensure that the vales only work for the coresponding shape. 
```Javascript
  push()
  drawTriangle(30, 75, 58, 20, 86, 75,1.5)
  pop()
  ```
Link to sketches https://editor.p5js.org/Sophiek/sketches/ppAzadIPL 

# Example 2

# Example 3
I created a cavas of 400, 400 and a background of midnight blue. I also defined the angle mode as degrees so the arcs that I used in my code would go by degrees rather than radians. 
``` Javascript
  createCanvas(400, 400);
  angleMode(DEGREES)
...
function draw() {
  background("midnightblue");
  mySprite()
```
I added two functions that created two different shapes. 
One is a planet with blue scale colors and the other one is a star that is yellow. 
```Javascript
function newPlanet(x, y, size) {
  translate(x, y);
  scale(size);
  noStroke();
  // Equator (the circular background).
  fill("lightcyan");
  ellipse(50, 50, 100);
  // Northern latitude.
  fill("lightseagreen");
  arc(50, 50, 100, 100, 200, -20, OPEN);
  // Southern latitude.
  fill("lightblue");
  arc(50, 50, 100, 100, 30, 150, OPEN);
  // North pole.
  fill("turquoise");
  arc(50, 50, 100, 100, 240, -60, OPEN);
  // South pole.
  fill("darkcyan");
  arc(50, 50, 100, 100, 60, 120, OPEN);
}
function drawStar(x, y, size) { 
  translate(x, y);
  scale(size);
  strokeWeight(1);
  stroke("lightyellow")
  fill("yellow")
  beginShape(); //connecting the points
  vertex(200, 80); //top point
  vertex(230, 150); //right indent
  vertex(230, 150); //right indent
  vertex(300, 160); //right point
  vertex(300, 160); //right point
  vertex(240, 200); //botton right indent
  vertex(240, 200); //botton right indent
  vertex(265, 280); //bottom right point
  vertex(265, 280); //bottom right point
  vertex(200, 230); //bottom indent
  vertex(200, 230); //bottom indent
  vertex(135, 280); //bottom right point
  vertex(135, 280); //bottom right point
  vertex(160, 200); //bottom left indent
  vertex(160, 200); //bottom left indent
  vertex(100, 160); //left point
  vertex(100, 160); //left point
  vertex(170, 150); //botton left indent
  vertex(170, 150); //botton left indent
  endShape(CLOSE);
}
```
I then called these two functions in a new function with mouseIsPressed, ths allowed my sprites to appear and disapear as I clicked the mouse on the canvas. 
I used if and else statrements to 
```Javascript
function mySprite(){
  if(mouseIsPressed){
  newPlanet(30, 30, 1)
  } else{
  drawStar(150, 50, 0.3)
  }
}
```

