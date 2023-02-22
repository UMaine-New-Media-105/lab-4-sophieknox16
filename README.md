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
