let soundfx;
let img;
let collectButton;
let collect = true;
let posx;
let posy;
let machinew;
let machineh;

function preload(){
    img = loadImage("machine.png");
  soundfx = loadSound("acquisition.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  imageMode(CENTER);
  collectButton = createButton("CLICK TO COLLECT");
  collectButton.id("btn");
  posx=width/2;
  posy=height/2;
  machinew=img.width;
  machineh=img.height;
}

function draw() {
  background(255);
      collectButton.center();

  collectButton.style("padding","30px 30px");
  

  collectButton.style("opacity","70%");
  collectButton.style("font-size","30px");
  collectButton.style("font-weight","bolder");

  collectButton.style("border","none");
  
    machinew =machinew*0.95;
    machineh=machineh*0.95;
    posx = posx+8;
    posy = posy -6;
      collectButton.html("CONGRATS! NEW WEAPON ACQUIRED.");
    collectButton.style("color","white");
    collectButton.style("background-color","transparent");
  collectButton.style("border-radius","0px");
    background(100,100,100);
  if(collect){
      soundfx.play();
  }
  image(img,posx,posy,machinew,machineh);
  collect = false;
}
