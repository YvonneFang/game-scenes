let video;
function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width,height);
  video.hide();
}

function draw() {
  // background(86, 94, 168,10);
  background(100,100,100,10);
  let gridSize = 15;
  video.loadPixels();
  noStroke();
  for (let x=0;x<video.width;x+=gridSize){
    for (let y=0;y<video.height;y+=gridSize){
      let index = (y*video.width+x)*4;
      let r = video.pixels[index];
      let d = map(r, 0, 255, 0, random(100));
      
      fill(255,random(20));
      ellipse(x,y,d);
    }
  }
  }