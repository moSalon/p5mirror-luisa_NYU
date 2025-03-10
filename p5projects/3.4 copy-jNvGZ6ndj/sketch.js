//from Cross-Rhythm code
const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3",
  "snare": "samples/505/snare.mp3"
});

kit.toDestination();


//tempo and time signature
//from syncopation code
Tone.Transport.bpm.value = 120;
Tone.Transport.timeSignature = [3, 4];  // triple time

Tone.Transport.scheduleRepeat(playKick, "12n");  // triplets 
Tone.Transport.scheduleRepeat(playSnare, "4n"); // quarter notes



let snareFlash = 0;
let kickFlash = 0;



//to play kick with accents
//from Accents code
function playKick(time) {
  let beat = Tone.Transport.position.split(":")[1]; // Get the beat
  if (beat == 0) {
    kit.player("kick").volume.rampTo(2, 0.05);
  } else {
    kit.player("kick").volume.rampTo(-10, 0.05);
  }
  kit.player("kick").start(time);

  kickBrightness = 100;
  kickFlash = random(60, 0);  
}

//playing snare on the second and third beat
function playSnare(time) {
  let beat = Tone.Transport.position.split(":")[1];
  if (beat == 1 || beat == 2) {
    kit.player("snare").start(time); 
    
    snareBrightness = 100;
    snareFlash = random(130, 200); 
  }
}


Tone.loaded().then(function() {
  Tone.Transport.start();
});


//from Syncopation code
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  btn = createButton("play/pause");
  btn.mousePressed(togglePlay);
  btn.position(10, 10);
}

// Toggle play/pause from Syncopation code
function togglePlay() {
  if (Tone.Transport.state === "started") {
    Tone.Transport.pause();
    btn.html("play");
  } else {
    Tone.Transport.start();
    btn.html("pause");
  }
}

let snareBrightness = 0;
let kickBrightness = 0;
function draw() {
  background(0);

  fill(snareFlash, 100, snareBrightness); 
  rect(0, 0, width, height);
  
  fill(kickFlash, 100, kickBrightness);
  rect(0,300,width,100);
  
  if(snareBrightness > 0){
    snareBrightness -= 10;
  }
  
  if(kickBrightness > 0){
    kickBrightness -= 10;
  }
  

}
