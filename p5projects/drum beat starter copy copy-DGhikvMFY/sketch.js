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
const repeatEvent = new Tone.Loop(playDrum, "4n");
repeatEvent.start(0);


// store the drum patterns in arrays
// let snarePattern = [0,1,0,1];
// let kickPattern = [1,0,1,0];



function playDrum(time){    
  let measure = int(Tone.Transport.position.split(":")[0]);
  let beat = int(Tone.Transport.position.split(":")[1]);
  let sixteenths = int(Tone.Transport.position.split(":")[2]);
  
  // if the snare pattern has a 1 in the current beat position, play the snare
  if(snarePattern[beat] == 1){
    kit.player("snare").start(time);
  }
  // if the kick pattern has a 1 in the current beat position, play the kick
  if(kickPattern[beat] == 1){
    kit.player("kick").start(time);
  }
  
  // if(beat == 0 || beat == 2){
  //   kit.player("kick").start(time);
  // }
  // else if(beat == 1 || beat == 3){
  //   kit.player("snare").start(time);
  // }
  
}

function setup(){
  createCanvas(300, 300);
}

function draw(){
  background(255);
}

// start the Transport timeline
function keyPressed(){
  Tone.Transport.start();
}
