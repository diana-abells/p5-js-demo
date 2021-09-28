var pictureList; //this variable is used in preload() and in draw() so we create it outside of those sections.

function preload() {
  //The images need to be preloaded.  Here they are loaded into an array (essentially a list)
  pictureList = [];
  var imgCount = 6; //total number of images
  //use a for loop to load all 6 images into the array
  for (var i = 0; i < imgCount; i++) {
    pictureList[i] = loadImage("p5_images/"+(i + 1) + ".png");
  }
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  noLoop();
}

function draw() {
  background(75,184,255); //blue sky color

  var n = 10; //number of times loop runs

  for (var i = 0; i < n; i++) {
    
    var r = int(random(0, 6)); //chooses a random image number
    var randomImage = pictureList[r] //This references the preloaded list at the top
    
    var x = int(random(-100, 1000));
    var y = int(random(-100, 1000));
     
    image(randomImage, x, y, randomImage.width, randomImage.height);
  }

  //save("final-1.jpg"); //uncomment to save images; never use without the noLoop() in setup()
  //If the save function does nothing when you run the code, try updating your internet browser..or try a different browser
}

function mouseClicked() {
  redraw();
}// JavaScript Document