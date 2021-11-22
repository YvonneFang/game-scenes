let img;

function preload(){
 img = loadImage("purple.png");  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(100,100,100,10);
  let gridSize = 15;
  img.loadPixels();
  noStroke();
  for (let x=0;x<img.width;x+=gridSize){
    for (let y=0;y<img.height;y+=gridSize){
      let index = (y*img.width+x)*4;
      let r = img.pixels[index];
      let d = map(r, 0, 255, random(90), random(10));
      
      fill(255,random(80));
      ellipse(x*5,y*2.5,d);
    }
  }
  }
