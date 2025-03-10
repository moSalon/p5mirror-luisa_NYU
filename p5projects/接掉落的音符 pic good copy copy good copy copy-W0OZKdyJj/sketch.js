var synth = new Tone.PolySynth().toMaster();

let leftX = 100;
let leftY = 520;

let rightX = 200;
let rightY = 520;

let leftScore = 0;
let rightScore = 0;

let r = 60;
let img1;
let img2;
let img3;
let img4;
let img5;

let xPos = 100;
let xPosr = 200;

let speed = 16 / 3;

let currentFrame = 0;
let currentPos = 0;
let startFrame = 0;
let startFramer = 0;

let balls = [];
let ballsright = [];

let leftHand = [
  "C3",
  "G2",
  "A2",
  "E2",
  "F2",
  "G2",
  "F2",
  "G2",
  "C3",
  "G2",
  "A2",
  "E2",
  "F2",
  "C3",
  "F2",
  "G2",
];

let rightHand = [
  "E4",
  "D4",
  "C4",
  "B3",
  "A3",
  "G3",
  "A3",
  "B3",
  "E5",
  "D5",
  "C5",
  "B4",
  "A4",
  "G4",
  "A4",
  "B4",
];

let leftPos = [
  -12,
  -17,
  -15,
  -20,
  -19,
  -17,
  -19,
  -17,
  -12,
  -17,
  -15,
  -20,
  -19,
  -12,
  -19,
  -17,
];
let rightPos = [4, 2, 0, -1, -3, -5, -3, -1, 16, 14, 12, 11, 9, 7, 9, 11];

let jumpFrame;
let jumping = 0;

let downFrame;
let downing = 0;
function preload() {
  img1 = loadImage("background.jpg");
  img2 = loadImage("Flower2.jpg");
  img5 = loadImage("Flowerrrrr.jpg");
  img3 = loadImage("panda.jpg");
  img3.resize(300, 300);
  img4 = loadImage("pandaaaa.jpg");
  img4.resize(300, 300);
}

function setup() {
  createCanvas(480, 640);
  frameRate(30);
}

function draw() {
  blendMode(BLEND)
  xPos = 480 * noise(0.01 * frameCount);
  xPosr = 480 * noise(0.01 * frameCount + 100);
  noStroke();
  image(img1, 0, 0, width, height);

  // push()
  // blendMode(MULTIPLY)
  // fill(80,80,191,170)
  // rect(0,0,width, height)
  // pop()
  
  if (frameCount % 60 == 0 && balls.length < 2) {
    currentFrame = frameCount;
    balls.push(new Ball(currentPos, img2, img5));
    currentPos++;
  }

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].show();
    balls[i].hitsPlayer(1, leftX, leftY);
    balls[i].hitsPlayer(2, rightX, rightY);
  }
  //     if (frameCount % 60 == 0 && ballsright.length < 2) {
  //     currentFrame = frameCount;
  //     ballsright.push(new Ballright(currentPos, img2));
  //     // currentPos++;
  //   }

  //   for (let i = 0; i < ballsright.length; i++) {
  //     ballsright[i].update();
  //     ballsright[i].show();
  //     ballsright[i].hitsPlayer(rightX, rightY);
  //   }
  // let dis = leftX - rightX;
  // let heig = leftY-rightY;
  let dis = dist(leftX, leftY, rightX, rightY);
  console.log(dis);
  if (keyIsDown(LEFT_ARROW) && leftX > r / 2 && dis > 30) {
    leftX -= 5;
  } else if (keyIsDown(RIGHT_ARROW) && leftX < width - r / 2 && dis > 30) {
    leftX += 5;
  }

  if (keyIsDown(65) && rightX > r / 2 && dis > 30) {
    rightX -= 5;
  } else if (keyIsDown(68) && rightX < width - r / 2 && dis > 30) {
    rightX += 5;
  }

  if (keyIsDown(UP_ARROW)&&leftY==520) {
    jumpFrame = frameCount;
  }

  if (keyIsDown(87)&&rightY==520) {
    downFrame = frameCount;
  }

  if (frameCount - jumpFrame < 30) {
    jumping = map(frameCount - jumpFrame, 0, 30, 0, TWO_PI);
    leftY = leftY - sin(jumping) * 10;
  } else {
    leftY = 520;
  }
  if (frameCount - downFrame < 30) {
    downing = map(frameCount - downFrame, 0, 30, 0, TWO_PI);
    rightY = rightY - sin(downing) * 10;
  } else {
    rightY = 520;
  }

  // if(leftX < width - r / 2 && dis < 30){
  //   leftX ++
  // }else if(leftX > r / 2 && dis < 30)(
  //   leftX ++
  // )
  
  if (leftY <= 400) {
    leftY = 400;
  }
  if (rightY <= 400) {
    rightY = 400;
  }

  image(img3, leftX - r / 2, leftY - r / 2, r, r);
  image(img4, rightX - r / 2, rightY - r / 2, r, r);

  text("White: " + leftScore, 20, 20);
  text("Brown: " + rightScore, 20, 40);
}

class Ball {
  constructor(currentNum, img2, img5) {
    this.pos = currentNum;
    this.x = map(leftPos[this.pos % 16], -22,-10,50,width-50);
    this.y = 0;
    this.speed = 16 / 3;
    // this.speed = 7;
    this.diameter = 20;    
    this.img = img2;
    this.imgr = img5;

    this.xr = map(rightPos[this.pos% 16], -6,17,50,width-50)
    // xPosr;
    this.yr = 0;
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.reset(currentPos);
      currentPos++;
    }

    this.yr += this.speed;
    if (this.yr > height) {
      this.reset(currentPos);
      currentPos++;
    }
    // console.log(this.pos);
  }

  show() {
    image(
      this.img,
      this.x - this.diameter / 2,
      this.y - this.diameter / 2,
      this.diameter,
      this.diameter
    );
    image(
      this.imgr,
      this.xr - this.diameter / 2,
      this.yr - this.diameter / 2,
      this.diameter,
      this.diameter
    );
    // circle(this.xr, this.yr, 20)
  }

  reset(num) {
    this.pos = num;
    this.x = map(leftPos[this.pos% 16], -22,-10,50,width-50);;
    this.y = 0;
    
    this.xr = map(rightPos[this.pos% 16], -6,17,50,width-50)
    // this.xr = xPosr;
    this.yr = 0;
    
    // console.log(currentPos);
  }

  hitsPlayer(x, m, n) {
    let distance = dist(this.x, this.y, m, n);
    let distancer = dist(this.xr, this.yr, m, n);
    if (
      distance < this.diameter / 2 + 20 &&
      x == 1 &&
      startFrame + 30 < frameCount
    ) {
      let f = leftHand[this.pos % 16];
      synth.triggerAttackRelease(f, "4n");
      leftScore++;
      startFrame = frameCount;
    }
    if (
      distancer < this.diameter / 2 + 20 &&
      x == 2 &&
      startFramer + 30 < frameCount
    ) {
      let f = rightHand[this.pos % 16];
      synth.triggerAttackRelease(f, "4n");
      rightScore++;
      startFramer = frameCount;
    }
    {
      return false;
    }
  }
}

// class Ballright {
//   constructor(currentNum, img2) {
//     this.x = xPosr;
//     this.y = 0;
//     this.speed = 16 / 3;
//     this.diameter = 20;
//     this.pos = currentNum;
//     this.img = img2;
//   }

//   update() {
//     this.y += this.speed;
//     if (this.y > height) {
//       this.reset(currentPos);
//       // currentPos++;
//     }
//     // console.log(this.pos);
//   }

//   show() {
//     // image(
//     //   this.img,
//     //   this.x - this.diameter / 2,
//     //   this.y - this.diameter / 2,
//     //   this.diameter,
//     //   this.diameter
//     // );

//     circle(this.x,this.y,20)
//   }

//   reset(num) {
//     this.x = xPosr;
//     this.y = 0;
//     this.pos = num;
//     // console.log(currentPos);
//   }

//   hitsPlayer(m,n) {
//     let distance = dist(this.x, this.y, m,n);
//     if (distance < this.diameter / 2 + 20) {
//       let f = rightHand[this.pos % 16];
//       synth.triggerAttackRelease(f, "8n");
//     } else {
//       return false;
//     }
//   }
// }
