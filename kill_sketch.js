let blood = false;
let angle = 0;

function preload(){
  open=loadImage("claw_open.png");
  close=loadImage("claw_closed.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  imageMode(CENTER);
  if(blood){
        noStroke();
        fill(255,0,0,50);
        ellipse(windowWidth/2, windowHeight/2+50,300,250);
       ellipse(windowWidth/2-200,windowHeight/2,50);
       ellipse(windowWidth/2+150,windowHeight/2+41,150);
        ellipse(windowWidth/2+151,windowHeight/2+160,50);
        ellipse(windowWidth/2+250,windowHeight/2+118,20);
        ellipse(windowWidth/2-100,windowHeight/2-80,20);

      }

  if(open){
  image(open,windowWidth/2, windowHeight/2,open.width*1.2,open.height*1.2);
    noStroke();
    fill(255,255,255,50);
    ellipse(windowWidth/2-100, windowHeight/2+50,150*sin(angle));
    ellipse(windowWidth/2-100, windowHeight/2+50,80*sin(angle));
        fill(255,0,0,60);

ellipse(windowWidth/2-100, windowHeight/2+50,40*sin(angle));
  }else{
          image(close,windowWidth/2, windowHeight/2,close.width*1.2,close.height*1.2);
  
  }

    if (mouseIsPressed){
    open = null;
      image(close,windowWidth/2, windowHeight/2,close.width*1.2,close.height*1.2);
      blood = true;
  }
  angle+=1;
}

