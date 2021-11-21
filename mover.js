
let angle = 0;
class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(2),random(9));
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
     this.c = random(0,100);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

  }

  show() {
    strokeWeight(1);
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r);
  }
}