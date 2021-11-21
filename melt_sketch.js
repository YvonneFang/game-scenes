let img;
let kMax;
let step;
let n = 100; // number of blobs
let radius = 150; // diameter of the circle
let inter = 0; // difference between the sizes of two blobs
let maxNoise = 100;
let lapse = 0;    // timer
let noiseProg = (x) => (x);
let angle = 0;
let rectw = 600;
let recth = 500;

function preload(){
   img = loadImage("machine.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1);
	angleMode(DEGREES);
  noFill();
	kMax =3;//spikiness
	step = 0.01;
	noStroke();
}

function draw() {
  background(1,0,1);
  imageMode(CENTER);//274 49 100//234 100 100
  noFill();
  for (i=0;i<15;i++){
  stroke(0.76,0.49,1);
  ellipse(windowWidth/2+100-i*5,windowHeight/2-60-i*3, rectw-i*22,recth-i*22);
  stroke(0.65,1,1);
  ellipse(windowWidth/2-80-i*5,windowHeight/2-i, rectw-i*22,recth-i*22);
  }
  image(img, windowWidth/2,5/6*windowHeight,img.width/2,img.height/2);
  let t = frameCount/100;
  for (let i = n; i > 0; i--) {
		let alpha = 1 - i / n;
        noStroke();
		fill((alpha/30 + 0.5)%1, 0.3, 1, alpha);
		let size = radius + i * inter;
		let k = kMax * sqrt(i/n);
		let noisiness = maxNoise * noiseProg(i / n);
    blob(size, width/2-80, height/2-100, k, 1, noisiness);
  }
  //noStroke();
    fill(0,0,255,0.5);
    ellipse(windowWidth/2-62, windowHeight/2+250,150*sin(angle));
    ellipse(windowWidth/2-62, windowHeight/2+250,80*sin(angle));
        fill(255,100,100,0.5);

ellipse(windowWidth/2-62, windowHeight/2+250,40*sin(angle));
  angle+=1;
}

  function mouseClicked(){
    if(radius>0){
      radius-=50;
      rectw+=50;
      recth+=50;
        }
    }


function blob(size, xCenter, yCenter, k, t, noisiness) {
  beginShape();
	let angleStep = 10;
  for (let theta = 0; theta <= 360 + 2 * angleStep; theta += angleStep) {
    let r1, r2;
		r1 = cos(theta)+1;
		r2 = sin(theta)+1;
    let r = size + noise(k * r1,  k * r2, t) * noisiness;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    curveVertex(x, y);
  }
  endShape();
}
