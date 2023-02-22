function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background("midnightblue");
  mySprite()
}
function mySprite(){
  if(mouseIsPressed){
  newPlanet(30, 30, 1)
  } else{
  drawStar(150, 50, 0.3)
  }
}
function newPlanet(x, y, size) {
  translate(x, y);
  scale(size);
  noStroke();
  /* 
    Degrees start from the far right at 0 and turn clockwise back to 360.
  */
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
//connecting points to create our custom shape which is a star
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
