var values = [],
    i,
    j,
    rectWidth = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 100; i++) values.push(floor(random(1, 150)))
  i = values.length - 1;
  j = 0;
}

function draw() {
  background(0);
  rectMode(CENTER);
  strokeWeight(2);
  stroke(0);
  for(let k = 0; k < values.length; k++) {
    if(k == j)
    fill(255, 0, 0, 255);
    else
    fill(255);
    rect(k * rectWidth + 100, height / 2, rectWidth, values[k] * 5);
  }
  if(i >= 1) {
      if(values[j + 1] < values[j]) {
        let temp = values[j + 1];
        values[j + 1] = values[j];
        values[j] = temp;
      }
    j++;
    if(j >= i) {
      j = 0;
      i--;
    }
  }
}
