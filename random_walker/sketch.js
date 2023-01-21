let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  background(51);
}

function draw() {
  stroke(255, 100);
  strokeWeight(2);
  point(x, y);

  const move = floor(random(4));
  switch (move) {
    case 0:
      x = x + 1;
      break;
    case 1:
      x = x - 1;
      break;
    case 2:
      y = y + 1;
      break;
    case 3:
      y = y - 1;
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
