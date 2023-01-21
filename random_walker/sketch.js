let cell = 2;
let xoff = 0;
let walkers = [];

function setup() {
  for (let index = 0; index < 50; index++) {
    createCanvas(windowWidth, windowHeight);
    let posX = floor(random(width));
    let posY = floor(random(height));
    for (let index = 0; index < 100; index++) {
      walkers.push(new Walker(posX, posY));
    }
    draw();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  clear();
}
function mouseClicked() {
  for (let index = 0; index < 10; index++) {
    walkers = [];
    setup();
  }
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.colorR = floor(random(100));
    this.colorG = floor(random(100,200));
    this.colorB = floor(random(250));
    this.draw();
  }
  isOut() {
    return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
  }
  move() {
    const direction = floor(random(4));
    switch (direction) {
      case 0:
        this.x += cell;
        break;
      case 1:
        this.x -= cell;
        break;
      case 2:
        this.y += cell;
        break;
      case 3:
        this.y -= cell;
        break;
    }
  }
  draw() {
    fill(this.colorR, this.colorG, this.colorB);
    noStroke();
    rect(this.x, this.y, cell, cell);
    xoff += 0.1;
  }
}

function draw() {
  walkers.forEach((walker) => {
    if (!walker.isOut()) {
      walker.move();
      walker.draw();
    }
  });
}
