let img;

function preload(){
  img = loadImage("gameover.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(150,20);
  noStroke();
  ellipse(mouseX,mouseY,50);
  image(img, width/2,height/2,img.width/5,img.height/5);
}