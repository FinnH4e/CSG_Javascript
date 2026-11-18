function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('darkred');
  triangle(225,0,0,450,450,450);

  fill('pink');
  triangle(0,225, 450,0, 450,450);

  fill('purple');
  triangle(0,0, 0,450, 450,225);

  strokeweight(5);
  fill('blue')
  stroke('pink');
  beginshape();
  vertex(225,115);
  vertex(300,225);
  vertex(225,335);
  vertex(0,225);
  endshape(CLOSE);
}
