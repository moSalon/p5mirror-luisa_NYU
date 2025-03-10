// Create a 120BPM beat

// Create a Players object and load the drum kit files
const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/505/snare.mp3",
  "hh": "samples/505/hh.mp3",
  "hho": "samples/505/hho.mp3"
});
kit.toDestination();


Tone.Transport.bpm.value = 120; 
Tone.Transport.timeSignature = [4, 4];
Tone.Transport.start();

Tone.Transport.scheduleRepeat(playDrum, "4n");

// let bpm = 100;
let count = 0;
let louder = 0;
let lower = -20;

let kickPattern = [1, 0, 1, 0];
let snarePattern = [0, 1, 0, 1];
let hhPattern = [1, 1, 1, 1];


function playDrum(time){
  let beat = int(Tone.Transport.position.split(":")[1]);
  console.log(beat);
  if(kickPattern[beat] == 1){
    kit.player("kick").start();
  }
  if(snarePattern[beat] == 1){
    kit.player("snare").start();
  }
  
  // 80% of the time, play a high hat

  if(hhPattern[beat] == 1){
    if(random() < 0.8){
      kit.player("hh").start();  
    }
    else{
      kit.player("hho").start();  
    }
  }
  
}

function setup(){
  createCanvas(200, 200); 
  background(0);
}

function draw(){
  
}
