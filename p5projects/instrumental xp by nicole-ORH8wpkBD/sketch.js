const dream1 = new SimplePlayer("sounds/FX Dreamycue1.wav");
dream1.toDestination(); //putting a cable between sound and output

const dream2 = new SimplePlayer("sounds/FX Dreamycue2.wav");
dream2.toDestination();

const village1 = new SimplePlayer("sounds/Synth VillageChord1.wav");
village1.toDestination();

const village2 = new SimplePlayer("sounds/Synth VillageChord2.wav");
village2.toDestination();

const village3 = new SimplePlayer("sounds/Synth VillageChord3.wav");
village3.toDestination();


let analyzer = new Tone.Waveform(128);
dream1.connect(analyzer)

let analyzer2 = new Tone.Waveform(128);
dream2.connect(analyzer2)


let loaded = false; //flag
let x = 0;

function preload() {
  bg = loadImage("bg.jpg")
}


function setup() {
  createCanvas(600, 600);
  
}

function draw() {
   image(bg,0, 0, width, height)
   noStroke();
  
  let frequencyData = analyzer.getValue();
  
  let frequencyData2 = analyzer2.getValue();
  
  beginShape();  
  fill("#809C73");  
  for (let i = 0; i < frequencyData2.length; i++) {
    let x = map(log(i), 0, log(frequencyData2.length), -150, width*3);
    let y = map(frequencyData2[i], -100, -1, height, 100);
    vertex(x, y);
  }
  // vertex(width, height);
  endShape();
  
  // ellipse(400,410,600,160)
  // ellipse(0,420,400,100)

  
  let waveform = analyzer.getValue();
  fill("#84B86C");
  noStroke();
  beginShape();
  vertex(0, height-100);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width+10);
    let y = map(waveform[i], -1, 1, height, 100);
    vertex(x, y);
  }
  vertex(width, height);
  vertex(0, height);
  vertex(0, 100);
  endShape();

//   fill("#84B86C")
//   stroke("#84B86C")
  
//   rect(0,500,600,300)
//   ellipse(0,500,600,150)
//   ellipse(400,500,500,100)
  
}

function keyTyped(){
  //loaded = loaded == true
  if (loaded){
    if(key == "f"){
      dream1.start();
    }
    if(key == "v"){
      dream2.start();
    }
    if(key == "n"){
      village1.start();
    }
    if(key == "j"){
      village2.start();
    }
    if(key == "k"){
      village3.start();
    } 

  }
}

//tone will only execute >> after it's all loaded
Tone.loaded().then(
  function(){
    loaded = true
  }
)