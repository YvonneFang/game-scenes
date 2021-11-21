let mover;
let movers = [];
let attractor;
let flow=[];

var num = 2000;
var noiseScale=500, noiseStrength=1;
var particles = [num];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i<1000;i++){
    let x=random(width);
    let y=random(height);
    let m = random(0.01,30);
     movers[i] = new Mover(x,y,m);
  }
  attractor = new Attractor(width/2,height/2,5);
  colorMode(HSB,255);
  //flow field
  noStroke();
  for (let i=0; i<num; i++) {
    //x value start slightly outside the right of canvas, z value how close to viewer
    var loc = createVector(random(width*1.2), random(height), 2);
    var angle = 0; //any value to initialize
    var dir = createVector(cos(angle), sin(angle));
    var speed = random(10);
    particles[i]= new Particle(loc, dir, speed);
  }}

function draw() {
  background(0,0,255,0.8);//world sky color

//   for (let i = 0; i<50;i++){
//     line(random(width),random(height),random(width),random(height));
    
//   }
  fill("rgba(200,13,0,50)");
  for (let i=0; i<particles.length; i++) {
    particles[i].run();
  }
  for (let i = 0; i<1000;i++){
  movers[i].update();
  movers[i].show();
  attractor.attract(movers[i]);
  attractor.show();
  }
  }

class Particle{
  constructor(_loc,_dir,_speed){
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;

  }
  run() {
    this.move();
    this.checkEdges();
    this.update();
  }
  move(){
    let angle=noise(this.loc.x/noiseScale, this.loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength; //0-2PI
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    var vel = this.dir.copy();
    var d =1;  //direction change 
    vel.mult(this.speed*d); //vel = vel * (speed*d)
    this.loc.add(vel); //loc = loc + vel
  }
  checkEdges(){
    if (this.loc.x<0 || this.loc.x>width || this.loc.y<0 || this.loc.y>height) {    
      this.loc.x = random(width*1.2);
      this.loc.y = random(height);
    }
  }
  update(){
    ellipse(this.loc.x, this.loc.y, 1.5);
  }
}