// JavaScript Document
function setup() {
  //createCanvas(400,400);
	createCanvas(displayWidth, displayHeight);
  //frameRate(10);
  noLoop(); //important when saving an image at the end
}

function draw() {
  background(255,0);
  
  
  var n = 300; //number of times loop runs - also number of dots generated

for (var i = 0; i < n; i++) {

  //random rgb color values:
  var r = int(random(50, 150)); 
  var g = int(random(50, 150));
  var b = int(random(200, 256));
  
  fill(r,g,b);
    
  
  var x = int(random(0, 3000));
  var y = int(random(0, 3000));
  
  ellipse(x, y, 10, 10);
  
}

}

function mouseMoved() {
    fill(255,0,0);
    ellipse(mouseX, mouseY, 20, 20);
}

function mouseClicked() {
	clear();
  redraw();
}