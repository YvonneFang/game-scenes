let army1 = [];
let army2 = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0;i<100;i++){
    army1.push(new Us());
  }
  for(let i = 0;i<100;i++){
    army2.push(new Opponent());
  }
}

function draw() {
  background(0,50);
  for(let i = 0;i<100;i++){
    army1[i].update();
    army1[i].show();
  }
  for(let i = 0;i<100;i++){
    army2[i].update();
    army2[i].show();
  }
}

class Us{
  constructor(){
    if (random(1)<0.5){
    this.pos = createVector(random(1/3*windowWidth,windowWidth),0);
    }else{
    this.pos = createVector(windowWidth,random(2/3*windowHeight));
    }
    this.speed = createVector(-1,1).mult(random(0,10));
    this.size=random(10,15);
  }
  
  update(){
    this.pos.add(this.speed);
  }
  
  show(){
    stroke("#9b78fc");
    strokeWeight(this.size);
    point(this.pos.x,this.pos.y);
  }
}

class Opponent{
  constructor(){
    if (random(1)<0.5){
    this.pos = createVector(random(0,2/3*windowWidth),windowHeight);
    }else{
    this.pos = createVector(0,random(1/3*windowHeight, windowHeight));
    }
    this.speed = createVector(1,-1).mult(random(0,10));
    this.size=random(10,15);
  }
  
  update(){
    this.pos.add(this.speed);
  }
  
  show(){
    stroke(255);
    strokeWeight(this.size);
    point(this.pos.x,this.pos.y);
  }
}