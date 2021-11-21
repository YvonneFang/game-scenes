//reference1 https://openprocessing.org/sketch/835598
//refernece2 https://www.openprocessing.org/sketch/759053

let particles = [];
const RESOLUTION = 0.1;
const TOTAL_PARTICLES = 100;
const ITERATIONS_PER_FRAME = 100;

const radius = 30;
let points = [];
let centerX, centerY;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	for(let i = 0; i < ITERATIONS_PER_FRAME; i++){
		particles.push(createVector());
    }
  	createCanvas(windowWidth, windowHeight);
	centerX = width/2;
	centerY = height/2;
	points.push([createVector(centerX, centerY),createVector(centerX, centerY)]);
}

function draw() {
	background(0,20);
  
  //Crack code
		let randomAngle = random(TWO_PI);
	let targetX = cos(randomAngle) * 100000 + centerX;
	let targetY = sin(randomAngle) * 100000 + centerY;
	
	var lineAB = lineEqua(centerX, centerY, targetX, targetY);
	let minX = min(centerX, targetX);
	let maxX = max(centerX, targetX);
	
	let closestDistance = 999999;
	let closestIndex = -1;
	let closestIntersectionX = 0;
	let closestIntersectionY = 0;
	
	strokeWeight(1);
	stroke(255);
	points.forEach((point, index) => {
		line(point[0].x, point[0].y, point[1].x, point[1].y);
		
		var intersections = findCircleLineIntersections(radius, point[0].x, point[0].y, lineAB.x, lineAB.y);
		for (var i = 0; i < intersections.length; i++) {
			if (intersections[i] > minX && intersections[i] < maxX) {
				var intersectionX = intersections[i];
				var intersectionY = lineAB.x * intersections[i] + lineAB.y;
				let distance = dist(targetX, targetY, intersectionX, intersectionY);
				if(distance < closestDistance){
					closestDistance = distance;
					closestIndex = index;
					closestIntersectionX = intersectionX;
					closestIntersectionY = intersectionY;
				}
			}
		}
	});
	
	noStroke();
	if(closestIndex != -1 && closestDistance > radius * 3){
		let angle = atan2(
			closestIntersectionY-points[closestIndex][0].y, 
			closestIntersectionX-points[closestIndex][0].x
		);
		let xx = cos(angle) * (radius * 2) + points[closestIndex][0].x;
		let yy = sin(angle) * (radius * 2) + points[closestIndex][0].y;
		//ellipse(xx, yy, radius * 2, radius * 2);
		points.push([createVector(xx, yy), points[closestIndex][0]]);
	}
  
    // Fire code
	let zoom = min(width, height) / 300;
	translate(width/2, height/2);
	scale(zoom);
	translate(-width/2, -height/2);
	
	for(let i = 0; i < particles.length; i++){
		let angle = i / particles.length *  TWO_PI;
		particles[i].x = cos(angle) * 150 + width / 2;
		particles[i].y = sin(angle) * 150 + height / 2;
	}
	
	const rotations = map(mouseX, 0, width, 4, 12) * PI;
	const length = map(mouseY, 0, height, 1, 3);
	const time = millis()/10;
	
	let alpha = 255;
	let blu = 0;
    let green = 0;
	let size = 10;
	
	for(let i = 0; i < ITERATIONS_PER_FRAME; i++){
		alpha *= 0.98;
		size *= 0.98;
		blu += 180/ITERATIONS_PER_FRAME;
        		green += 255/ITERATIONS_PER_FRAME;

      fill(255, green, blu, alpha);
		for(let i = 0; i < particles.length; i++){
			let angle = noise(particles[i].x * RESOLUTION, particles[i].y * RESOLUTION, time) * rotations;
			let v = p5.Vector.fromAngle(angle, length);
			particles[i].x += v.x;
			particles[i].y += v.y;
    	circle(particles[i].x, particles[i].y, size);
		}
	}
}

// 根据两个顶点求直线方程 y = ax+b
function lineEqua(x1, y1, x2, y2) {
  var a, b;

  a = (y1 - y2) / (x1 - x2);
  b = y1 - a * x1;

  return {
    x: a,
    y: b
  };
}

function findCircleLineIntersections(r, h, k, m, n) {
  // circle: (x - h)^2 + (y - k)^2 = r^2
  // line: y = m * x + n
  // r: circle radius
  // h: x value of circle centre
  // k: y value of circle centre
  // m: slope
  // n: y-intercept

  // get a, b, c values
  var a = 1 + sq(m);
  var b = -h * 2 + (m * (n - k)) * 2;
  var c = sq(h) + sq(n - k) - sq(r);

  // get discriminant
  var d = sq(b) - 4 * a * c;
  if (d >= 0) {
    // insert into quadratic formula
    var intersections = [
      (-b + sqrt(sq(b) - 4 * a * c)) / (2 * a), (-b - sqrt(sq(b) - 4 * a * c)) / (2 * a)
    ];
    if (d === 0) {
      // only 1 intersection
      return [intersections[0]];
    }
    return intersections;
  }
  // no intersection
  return [];
}