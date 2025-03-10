let tuningData;

function preload() {
  tuningData = loadJSON('tuningData.json');
}

function setup() {
  createCanvas(400, 400);
  console.log(tuningData);
}

function draw() {
  background(220);
}