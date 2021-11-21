let p;
let particles = [];
let particles2 = [];
let particles3 = [];
let f;
let firel = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB,255);
}
//50 255 255//350 255 255

//keeping a track of the this.x and this.y
function draw() {
  background(0);
  
  for (let i=0; i<6;i++){
  p = new Fire(500,height);
  firel.push(p);
  }
  for (let i=firel.length-1;i>0;i--){
    firel[i].update();
    firel[i].show();
    if (firel[i].finished()){
      //remove particle
      firel.splice(i,1);
    }
  }
  
  
  for (let i=0; i<6;i++){
  p = new Particle(200,height);
  particles.push(p);
  }
  for (let i=particles.length-1;i>0;i--){
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()){
      //remove particle
      particles.splice(i,1);
    }
  }
  
  for (let i=0; i<6;i++){
  p = new Particle(2/3*width,height);
  particles2.push(p);
  }
  for (let i=particles2.length-1;i>0;i--){
    particles2[i].update();
    particles2[i].show();
    if (particles2[i].finished()){
      //remove particle
      particles2.splice(i,1);
    }
  }
  
  for (let i=0; i<6;i++){
  p = new Particle(2/3*width-100,height+50);
  particles3.push(p);
  }
  for (let i=particles3.length-1;i>0;i--){
    particles3[i].update();
    particles3[i].show();
    if (particles3[i].finished()){
      //remove particle
      particles3.splice(i,1);
    }
  }
}

class Particle{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.vx = random(-1,1);
    this.vy = random(-5,-1);
    this.alpha=255;
    this.c = random(80,130);
  }
  
  update(){
  this.x+=this.vx;  
  this.y+=this.vy; 
  this.alpha-=3
  }
  
  finished(){
    return this.alpha<0;
  }
  
  show(){
    noStroke();
    fill(this.c,this.alpha);
    ellipse(this.x,this.y,15);
  }
}

class Fire{
  constructor(){
    this.x=random(width);
    this.y=height;
    this.vy = random(-10,-5);
    this.alpha=150;
    this.size = 140;
    this.c = random(0,15);
  }
  
  update(){
  this.y+=this.vy; 
  this.alpha-=2;
  this.size-=2.5;
    this.x += 1;
  }
  
  finished(){
    return this.alpha<0;
  }
  
  show(){
    noStroke();
    fill(this.c,255,255,this.alpha);
    ellipse(this.x,this.y,this.size);
  }
}