const beep = new SimplePlayer("microwave-beep.wav");
beep.toDestination();
const door = new SimplePlayer("microwave-door.wav");
door.toDestination();
const pot = new SimplePlayer("pot.wav");
pot.toDestination();
const silverware = new SimplePlayer("silverware.wav");
silverware.toDestination();
const gas = new SimplePlayer("gas.wav");
gas.toDestination();
const water = new SimplePlayer("water.wav");
water.toDestination();

let isButton1Pressed = false;
let isButton2Pressed = false;
let isButton3Pressed = false;
let isButton4Pressed = false;
let isButton5Pressed = false;
let isButton6Pressed = false;
let isButton7Pressed = false;
let isButton8Pressed = false;

let isdoorPressed = false;
let ispotPressed = false;
let issilverwarePressed = false;
let isgasPressed = true;
let iswaterPressed = false;

let kitchen;
let kitchenRefreshInterval = 500; 
let lastRefreshTime = 0;

let doorPic;
let waterPic;
let gasPic;
let potPic;
let silverwarePic;

function preload() {
  kitchen = loadImage('Kitchen.png');
  Button1 = loadImage('Button1.png');
  Button2 = loadImage('Button2.png');
  Button3 = loadImage('Button3.png');
  Button4 = loadImage('Button4.png');
  Button5 = loadImage('Button5.png');
  Button6 = loadImage('Button6.png');
  Button7 = loadImage('Button7.png');
  Button8 = loadImage('Button8.png');
  
  doorPic = loadImage('Door.png')
  potPic = loadImage('Pot.png')
  silverwarePic = loadImage('silverware.png')
  gasPic = loadImage('Gas.png')
  waterPic = loadImage('Faucet.png')
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
}

function mousePressed() {
  if (
    mouseX > 0 &&
    mouseX < windowWidth &&
    mouseY > 0 &&
    mouseY < windowHeight
  ) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function draw() {
  // image(kitchen, 0, 0)
  
  while (millis() - lastRefreshTime > kitchenRefreshInterval) {
    // Reload the kitchen image every kitchenRefreshInterval milliseconds
    kitchen = loadImage('Kitchen.png');
    lastRefreshTime = millis();
    
    
    isButton1Pressed = false;
    isButton2Pressed = false;
    isButton3Pressed = false;
    isButton4Pressed = false;
    isButton5Pressed = false;
    isButton6Pressed = false;
    isButton7Pressed = false;
    isButton8Pressed = false;
    
  isdoorPressed = false;
  ispotPressed = false;
  issilverwarePressed = false;
  isgasPressed = false;
  iswaterPressed = false;

  }
  
  image(kitchen, 0, 0, displayWidth, displayHeight, 0, 0, kitchen.width, kitchen.height);
  
    if (isButton1Pressed) {
    image(Button1, 0, 0, displayWidth, displayHeight, 0, 0, kitchen.width, kitchen.height);
  }
  if (isButton2Pressed) {
    image(Button2, 0, 0, displayWidth, displayHeight, 0, 0, kitchen.width, kitchen.height);
  }
  if (isButton3Pressed) {
    image(Button3, 0, 0, displayWidth, displayHeight, 0, 0,
         kitchen.width, kitchen.height);
  }
    if (isButton4Pressed) {
    image(Button4, 0, 0, displayWidth, displayHeight, 0, 0,
         kitchen.width, kitchen.height);
  }
    if (isButton5Pressed) {
    image(Button5, 0, 0, displayWidth, displayHeight, 0, 0,
         kitchen.width, kitchen.height);
  }
    if (isButton6Pressed) {
    image(Button6, 0, 0, displayWidth, displayHeight, 0, 0,
         kitchen.width, kitchen.height);
  }
    if (isButton7Pressed) {
    image(Button7, 0, 0, displayWidth, displayHeight, 0, 0,
         kitchen.width, kitchen.height);
  }
    if (isButton8Pressed) {
    image(Button8, 0, 0, displayWidth, displayHeight, 0, 0,
         kitchen.width, kitchen.height);
  }

  if (isgasPressed) {
    image(gasPic, 0, 0, displayWidth, displayHeight, 0, 0,
         kitchen.width, kitchen.height);
  }
  
  if (iswaterPressed) {
    image(waterPic, 0, 0, displayWidth, displayHeight, 0, 0,
         kitchen.width, kitchen.height);
  }
  
  if (issilverwarePressed) {
    image(silverwarePic, 0, 0, displayWidth, displayHeight, 0, 0,
         kitchen.width, kitchen.height);
  }
  
  if (isdoorPressed) {
    image(doorPic, 0, 0, displayWidth, displayHeight, 0, 0,
         kitchen.width, kitchen.height);
  }
  
  if (ispotPressed) {
    image(potPic, 0, 0, displayWidth, displayHeight, 0, 0,
         kitchen.width, kitchen.height);
  }
  
  
  
  let x = beep.progress() * 10;
  // ellipse(x, 100, 40, 40);
  // console.log(beep.progress())
}

// function mouseClicked(){
//   if(loaded){

//   }

// }

const loop = new Tone.Loop((time) => {
  // triggered every eighth note.
  gas.start();
}, "8n");

function keyPressed() {
  Tone.loaded().then(function () {
    if (keyCode == "32") {
      loop.start(0);
      Tone.Transport.start();
      isgasPressed = true;
    }
  });
}

function keyReleased() {
  if (keyCode == "32") {
    loop.start();
    Tone.Transport.stop();
    isgasPressed = false;
  }
  
    if (keyCode == "a") {
    // Set the state of Button1 to false when 'a' is released
    isButton1Pressed = false;
  }
  
    if (keyCode == "s") {
    // Set the state of Button1 to false when 'a' is released
    isButton2Pressed = false;
  }
    if (keyCode == "d") {
    // Set the state of Button1 to false when 'a' is released
    isButton3Pressed = false;
  }
    if (keyCode == "f") {
    // Set the state of Button1 to false when 'a' is released
    isButton4Pressed = false;
  }
    if (keyCode == "j") {
    // Set the state of Button1 to false when 'a' is released
    isButton5Pressed = false;
  }
    if (keyCode == "k") {
    // Set the state of Button1 to false when 'a' is released
    isButton6Pressed = false;
  }
    if (keyCode == "l") {
    // Set the state of Button1 to false when 'a' is released
    isButton7Pressed = false;
  }
    if (keyCode == ";") {
    // Set the state of Button1 to false when 'a' is released
    isButton8Pressed = false;
  }
  
    if (keyCode == "v") {
    // Set the state of Button1 to false when 'a' is released
    ispotPressed = false;
  }
  
  if (keyCode == "n") {
    // Set the state of Button1 to false when 'a' is released
    isilverwarePressed = false;
  }
  
  if (keyCode == "m") {
    // Set the state of Button1 to false when 'a' is released
    isdoorPressed = false;
  }
  
  if (keyCode == "c") {
    // Set the state of Button1 to false when 'a' is released
    iswaterPressed = false;
  }
}

Tone.loaded().then(function () {
  console.log("yes");
});

function keyTyped() {
  Tone.loaded().then(function () {
    if (key == "y") {
      Tone.Transport.bpm.rampTo(60, 0.2);
    }
    if (key == "a") {
      pitch_shift = new Tone.PitchShift({
        pitch: "0",
      }).toDestination();
      beep.disconnect();
      beep.connect(pitch_shift);
      beep.start();
      isButton1Pressed = true;
    }
    if (key == "s") {
      pitch_shift = new Tone.PitchShift({
        pitch: "2",
      }).toDestination();
      beep.disconnect();
      beep.connect(pitch_shift);
      beep.start();
      isButton2Pressed = true;
    }
    if (key == "d") {
      pitch_shift = new Tone.PitchShift({
        pitch: "4",
      }).toDestination();
      beep.disconnect();
      beep.connect(pitch_shift);
      beep.start();
      isButton3Pressed = true;
    }
    if (key == "f") {
      pitch_shift = new Tone.PitchShift({
        pitch: "5",
      }).toDestination();
      beep.disconnect();
      beep.connect(pitch_shift);
      beep.start();
      isButton4Pressed = true;
    }
    if (key == "j") {
      pitch_shift = new Tone.PitchShift({
        pitch: "7",
      }).toDestination();
      beep.disconnect();
      beep.connect(pitch_shift);
      beep.start();
      isButton5Pressed = true;
    }
    if (key == "k") {
      pitch_shift = new Tone.PitchShift({
        pitch: "9",
      }).toDestination();
      beep.disconnect();
      beep.connect(pitch_shift);
      beep.start();
      isButton6Pressed = true;
    }
    if (key == "l") {
      pitch_shift = new Tone.PitchShift({
        pitch: "11",
      }).toDestination();
      beep.disconnect();
      beep.connect(pitch_shift);
      beep.start();
      isButton7Pressed = true;
    }
    if (key == ";") {
      pitch_shift = new Tone.PitchShift({
        pitch: "12",
      }).toDestination();
      beep.disconnect();
      beep.connect(pitch_shift);
      beep.start();
      isButton8Pressed = true;
    }
    if (key == "v") {
      pot.start();
      ispotPressed = true;
    }
    // if (key == "v") {
    //   pot.start();
    // }
    if (key == "n") {
      silverware.start();
      issilverwarePressed = true;
    }
    if (key == "m") {
      door.start();
      isdoorPressed = true;
    }
    if (key == "c") {
      water.start();
      iswaterPressed = true;
    }
  });
}