const ppl = new SimplePlayer("ppl.mp3");
ppl.toDestination();

const piano = new SimplePlayer("piano.mp3");
let analyzer = new Tone.Waveform(128);
piano.toDestination();
piano.connect(analyzer);

const heartbeat = new SimplePlayer("heartbeat.mp3");
heartbeat.toDestination();
//heartbeat.loop = true;

let meter = new Tone.Meter();
meter.normalRange = true;
meter.channels = 1;
heartbeat.connect(meter);

var x = 0;
var y = 0;
var speed = 3;
var circleSize;
var r;
var g;
var b = 255;

let loaded = false;
let showWaveform = false; 

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  
  
  let hue = map(piano.progress(), 0, 1, 315, 45);
  background(hue, 100, 100);
  
  
  if (loaded && showWaveform) {
    let waveform = analyzer.getValue();

    fill(255);
    noStroke();
    beginShape();
    vertex(0, height / 2);
    for (let i = 0; i < waveform.length; i++) {
      let x = map(i, 0, waveform.length, 0, width + 10);
      let y = map(waveform[i], -1, 1, height, 0);
      vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape();
  }

  if (heartbeat.state === "started") {
    console.log(meter.getValue() * 100);
    circleSize = meter.getValue() * 500;
    r = random(255);
    g = random(255);

    // Circle 1
    noStroke();
    fill(r, g, b, 200);
    ellipse(x, 200, circleSize);

    x = x + speed;
    if (x > width) {
      speed = -3;
    } else if (x < 0) {
      speed = 3;
    }

    // Circle 2
    noStroke();
    fill(b, g, r, 200);
    ellipse(200, x, circleSize);

    // Circle 3
    noStroke();
    fill(g, r, b, 240);
    ellipse(0, y, circleSize);

    // Circle 4
    noStroke();
    fill(b, r, g, 240);
    ellipse(y, 0, circleSize);

    y = y + speed;
    if (y > height) {
      speed = -3;
    } else if (y < 0) {
      speed = 3;
    }
  } else {
    text("loading...", 20, 20);
  }
}

function mouseClicked() {
  if (loaded) {
    heartbeat.start();
  }
}


Tone.loaded().then(function () {
  loaded = true;
});


function keyTyped() {
  if (key === 'a') {
    if (piano.state !== "started") {
      piano.start(); 
    } else {
      piano.stop(); 
    }
    showWaveform = true; 
  }
  if (key === 'b'){
    ppl.start();
  }
}
