//Collision detection - Bouncing behavior
//TODO - seems to be bouncing on central point
//TODO - add 'cursor'

let l1;
let l2;
let l3;
let imgC, imgl1, imgl2, imgl3;
let critter;
let leaf1;
let wc;

function preload() {
  imgC = loadImage("critter.png");
  imgl1 = loadImage("leaf1.png");
  imgl2 = loadImage("leaf2.png");
  imgl3 = loadImage("leaf3.png");
  wc = loadImage("wordcloud.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  critter = createSprite(imgC.width / 3, imgC.height / 3);
  critter.addImage(imgC);
  critter.scale = 0.4;

  l1 = new Group();
  l2 = new Group();
  l3 = new Group();

  for (var i = 0; i < 20; i++) {
    leaf1 = createSprite(random(width / 6, 5 * width / 6), random(height / 6, 5 * height / 6));
    leaf1.addImage(imgl1);
    leaf1.setCollider('circle', -2, 2, 55);
    // leaf1.setSpeed(random(.1, .2), random(.1, 20));

    //scale affects the size of the collider
    leaf1.scale = random(0.3, 0.5);
    //mass determines the force exchange in case of bounce
    leaf1.mass = leaf1.scale;

    l1.add(leaf1);
  }

  for (var i = 0; i < 20; i++) {
    leaf3 = createSprite(random(width / 6, 5 * width / 6), random(height / 6, 5 * height / 6));
    leaf3.addImage(imgl3);
    leaf3.setCollider('circle', -2, 2, 55);
    // leaf1.setSpeed(random(.1, .2), random(.1, 20));

    //scale affects the size of the collider
    leaf3.scale = random(0.3, 0.5);
    //mass determines the force exchange in case of bounce
    leaf3.mass = leaf3.scale;

    l3.add(leaf3);
  }

  for (var i = 0; i < 20; i++) {
    leaf2 = createSprite(random(width / 6, 5 * width / 6), random(height / 6, 5 * height / 6));
    leaf2.addImage(imgl2);
    leaf2.setCollider('circle', -2, 2, 55);
    // leaf1.setSpeed(random(.1, .2), random(.1, 20));

    //scale affects the size of the collider
    leaf2.scale = random(0.3, 0.5);
    //mass determines the force exchange in case of bounce
    leaf2.mass = leaf2.scale;

    l2.add(leaf2);
  }

}



function draw() {
  background("#242A43");
  image(wc, width / 2, height / 2, 1.3 * wc.width, 0.9 * wc.height);
  // console.log(wc);
  critter.position.x = mouseX;
  critter.position.y = mouseY;
  //circles bounce against each others
  // l1.displace(l1);
  l2.displace(l1);
  l3.displace(l1);
  // l2.displace(l2);
  // l3.displace(l3);
  l2.displace(l3);


  //all sprites bounce at the screen edges
  for (var i = 0; i < allSprites.length; i++) {
    var s = allSprites[i];
    if (s.position.x < 50) {
      s.position.x = 50;
      s.velocity.x = 0;
    }

    if (s.position.x > width - 50) {
      s.position.x = width - 51;
      s.velocity.x = 0;
    }

    if (s.position.y < 70) {
      s.position.y = 71;
      s.velocity.y = 0;
    }

    if (s.position.y > height - 70) {
      s.position.y = height - 71;
      s.velocity.y = 0;
    }
  }
  for (var i = 0; i < 20; i++) {
    critter.displace(l1[i]);
  }
  drawSprites();
  for (var i = 0; i < 20; i++) {
    critter.displace(l2[i]);
  }
  for (var i = 0; i < 20; i++) {
    critter.displace(l3[i]);
  }
  drawSprites();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
