//https://openprocessing.org/sketch/800479


let img;
let gif;

function preload(){
	img=loadImage("arctic.jpg");
  gif = loadImage("sphere.gif");
}

function setup() {
	background(225);
	createCanvas(windowWidth, windowHeight);
	img.resize(width,height);	
    //vid = createVideo("sphere.mp4");
  //vid.hide();
  imageMode(CENTER);
  //vid.loop();
}

function draw() {
	  noStroke();
		let x=random(width);
		let y=random(height);
	  let col=img.get(x,y);
	  fill(random(red(col),225),random(green(col),225),random(blue(col),225),random(2));
	
		for(let i=0;i<30;i++){
			ellipse(brightness(col),y,random(width),random(100));
			ellipse(width-brightness(col),y,random(width),random(50));
	  	ellipse(x,brightness(col),random(width),random(height));
		}
		image(gif, width/2,height/2,gif.width/4,gif.height/4); 
}