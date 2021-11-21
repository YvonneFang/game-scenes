
	let res = 1000;
	let amp = 12;
	let iter = 50;
	let xOffset = 0;
	let yOffset = 0;
	let speed = 0.001;
	let time = 0;
	let bgColor = 100;
	let color = 2;
    let angle = 0;

	
	function setup(){
		createCanvas(windowWidth, windowHeight);
		colorMode(HSB,100);
  		noFill();
	};
	
	function draw(){
      angle+=1;
	  background(bgColor);
      //fill("#000");
      //textSize(32);
      //text("Clicking around is encouraged",0,30);
      noFill();
		translate(width / 2, height / 2);
		time += speed;
		xOffset = Math.sin(time * 0.05) * 100 + 5000;
		yOffset = Math.cos(time * 0.05) * 100 + 5000;
	for (let j = 0; j< iter;j++){
		beginShape();
		for (let i = 0; i < res; i++) {
			let n = noise(xOffset + Math.sin(i * TWO_PI / res) * 0.01*j , yOffset + Math.cos(i * TWO_PI / res) * 0.01*j , time);
			stroke(color,100,100);
			let x = Math.sin(i * TWO_PI / res) * amp * n*j + 1;
			let y = Math.cos(i * TWO_PI / res) * amp * n*j + 1;
			vertex(x, y);
		}
		endShape();
	}
	  color = (color+1)%360;
    noStroke();
    fill(255,255,255,30);
    ellipse(0, 0,150*sin(angle));
    ellipse(0, 0,80*sin(angle));
    fill(255,255,255,60);
    ellipse(0, 0,40*sin(angle));
      
    }

function mouseClicked(){
	bgColor-=33;
	amp/=2
  
}