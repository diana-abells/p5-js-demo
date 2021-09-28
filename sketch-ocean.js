// JavaScript Document


function setup() {
  createCanvas(displayWidth, displayHeight);
  noLoop();
}

function draw() {
  background(66, 194, 245);

  var n = 1000;

  for (var i = 0; i < n; i++) {

    var r = int(random(0, 150)); //limits on range affect the color
    var g = int(random(0, 200));
    var b = int(random(200, 256));

    fill(r, g, b, 128); //added an opacity value, 128 is 50% transparent

    //random position values:
    var x = int(random(0, 2000));
    var y = int(random(0, 2000));
    
    //random size value
    var diameter = int(random(1,3));//picks either 1 or 2


    noStroke();
    ellipse(x, y, diameter*10); //draws a circle - diameter is either 10 or 20

  }

}

function mouseClicked() {
  redraw();
}