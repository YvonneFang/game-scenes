let paintRect = 0;
function preload() {
     img = loadImage("machine.png");
  } 
function setup() {
  createCanvas(windowWidth, windowHeight);
    setInterval(function(){paintRect += 1;},500);

}

function draw() {
  background(100,100,100);
    imageMode(CENTER);

  image(img, windowWidth/2, windowHeight/2,img.width,img.height);
  fill(255,0,0,95);
  if (paintRect%2 == 1){
    noStroke();
    rect(0,0,windowWidth, windowHeight);
  }
}