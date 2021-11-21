let gravity;
let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0,0.1);
  stroke(255);
  strokeWeight(2);
  colorMode(HSB,255);
}

function draw() {
  background(0,30);
  if(random(1)<0.03){
  fireworks.push(new Firework());
  }
    for (let i =fireworks.length-1; i>=0;i--){
  fireworks[i].update();
  fireworks[i].show();
      if(fireworks[i].done()){
        fireworks.splice(i,1);
      }
  }
}

class Particle{
  constructor(x,y,isFirework){
    this.pos = createVector(x,y);
    if (isFirework){
    this.speed = createVector(0,random(-8,-5));//randomize speed so diff particles have diff accl and mvmt behaviors
    }else{
      this.speed = p5.Vector.random2D().mult(random(3,20));//completely random vectors - circle
    }
    this.accl = createVector(0,0);
    this.lifespan = 255;
  }
  
  applyForce(force){
    this.accl.add(force);
  }
  
  update(){
     if (!this.isFirework){
      this.speed.mult(0.8);
       this.lifespan-=4;
    }
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
    if (!this.isFirework){
      stroke(random(255),255,255,this.lifespan);
    } else{
      stroke(255);
    }
    point(this.pos.x,this.pos.y);
  }
}

class Firework{
  constructor(){
  this.firework = new Particle(random(width),random(height),true);//firework seed
    this.exploded = false;
    this.fireworkP = [];
  }
  
  done(){
    if (this.exploded && this.fireworkP.length == 0){
      console.log("here");
      return true;
    }else{
      return false;
    }
  }
  
  update(){
    if(!this.exploded){
    this.firework.applyForce(gravity);
    this.firework.update();//particle within firework object updates
    if (this.firework.speed.y>=0){
      this.exploded = true;
      this.explode();
    }
    }
      for(let i =this.fireworkP.length-1; i>=0;i--){
      this.fireworkP[i].applyForce(gravity);
      this.fireworkP[i].update();
        if (this.fireworkP[i].done()){
        this.fireworkP.splice(i,1);
        }
    }
  }
  
  explode(){
    for(let i =0; i<100;i++){
      let p = new Particle(this.firework.pos.x,this.firework.pos.y);//firework sparks
      this.fireworkP.push(p);
    }
  }
  
  show(){
    if (!this.exploded){
    this.firework.show();
  }
    for(let i =0; i<this.fireworkP.length;i++){
      this.fireworkP[i].show();
    }
  }
}