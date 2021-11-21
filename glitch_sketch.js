let vid;
let img;
let glitch;
let imgPath = "glitch.jpg"
p5.disableFriendlyErrors=true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // vid = createVideo("glitch.m4v");
  // vid.hide();
  // vid.loop();
  imageMode(CENTER);
  glitch = new Glitch();
  // glitch.loadBytes(imgPath,function(){
  //   glitch.randomBytes(50);
  // });
  // glitch.loadType("jpg");
  // glitch.loadQuality(0.96);
  // glitch.pixelate(0.8);
  
  glitch.loadImage(imgPath);
  loadImage(imgPath, function(img) {
		glitch.loadImage(img); 
	});
  
  // glitch.errors(false);
  // glitch.debug(false);
}

function draw() {
	// glitch.resetBytes(); // fresh bytes
	// glitch.limitBytes(0.5, 0.6) // limit bytes, how much of the img
	// glitch.randomByte(5) // single random
	// glitch.randomBytes(5) // 5 random
	// glitch.randomBytes(5, 150) // 5 random pos, exact val
	// glitch.replaceByte(20, 255); // single replace
	// glitch.replaceBytes(100, '7c'); // all replace
	// //glitch.replaceHex('ffdb00430101', 'ffdb00430155');
	// glitch.swapBytes(88, 200); // swap values
  
  	glitch.resetBytes();
    glitch.replaceBytes(100, 200);// swap all decimal byte 100 for 104
    glitch.randomBytes(10);// add one random byte for movement

	glitch.buildImage();
  image(glitch.image, width/2,height/2,width,height);
}