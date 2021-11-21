let img;
let destroyButton;
let destroy;
let explosion = [];
let smoke = [];//might need another smoke particle class with different physics
let gravity;
function setup() {
  createCanvas(windowWidth, windowHeight);
  destroyButton = createButton("DESTROY");
  destroyButton.id("btn");
  destroyButton.mousePressed(()=>{
      destroy = true;
    destroyButton.style("display","none");
});
  gravity = createVector(0,0.05);
  for(i=0;i<1000;i++){
    explosion.push(new Particle(10,0));
  }
  for(i=0;i<50;i++){
    explosion.push(new Particle(150,200));
  }
}

function preload() {
     img = loadImage("machine.png");
  } 

function draw() {
  background(255);
  imageMode(CENTER);
  if(img){
  image(img,windowWidth/2,windowHeight/2,img.width,img.height);
  }
  destroyButton.position(windowWidth/2-100,windowHeight/2);
  destroyButton.style("padding","30px 30px");
    destroyButton.style("background-color","white");
  destroyButton.style("border-radius","50px");
  destroyButton.style("opacity","70%");
  destroyButton.style("font-size","30px");
    destroyButton.style("font-weight","bolder");
    destroyButton.style("color","red");
  destroyButton.style("border","none");
  if(destroy){
  　　for (let i=explosion.length-1;i>=0;i--){
      explosion[i].update();
      explosion[i].show();
      if (explosion[i].done()){
      explosion.splice(i,1);
      }
     }
    for (let i=smoke.length-1;i>=0;i--){
      smoke[i].update();
      smoke[i].show();
      if (smoke[i].done()){
      smoke.splice(i,1);
      }
     }
   img = null; 
  }
}

class Particle{
  constructor(size,color){
    this.pos = createVector(windowWidth/2,windowHeight/2);
    this.speed = p5.Vector.random2D().mult(random(1,200));
    this.accl = createVector(0,0);
    this.lifespan = 255;
    this.maxSize = size;
    this.minColor = color;
  }
  
  applyForce(force){
    this.accl.add(force);
  }
  
  update(){
    this.applyForce(gravity);
    this.speed.mult(0.8);
    this.lifespan-=1;
    this.speed.add(this.accl);
    this.pos.add(this.speed);
    this.accl.mult(0);
  }
  
  done(){
    if(this.lifespan <= 0){
      return true;
    }else{
      return false;
    }
  }
  
  show(){
    strokeWeight(random(0,this.maxSize));
    stroke(random(this.minColor, 255),this.lifespan);
    point(this.pos.x,this.pos.y);
  }
}
