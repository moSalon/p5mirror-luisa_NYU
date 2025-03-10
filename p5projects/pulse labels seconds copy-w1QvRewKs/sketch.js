// Create a Player object and load the "kick.mp3" file
const kick = new Tone.Player("samples/505/kick.mp3");

// Connect the player output to the computer's audio output
kick.toDestination();

Tone.Transport.schedule(playPulse, 0);

let count = -1;
let bpm = 60; 
let lastBeatInSeconds = 0;
function playPulse(time){
  kick.start(time);
  let interval = 60/bpm; //convert to seconds
  Tone.Transport.schedule(playPulse, time + interval);
  lastBeatInSeconds = round(Tone.now(), 2);
  count++;
}

let s;
function setup(){
  createCanvas(400, 400);
  background(255);
  s = createSlider(30, 240, bpm, 30);
  s.input(updateSpeed);
  noStroke();
}

// let's assume the width is four measures
// four measures is count = 16


function draw(){
  let beat = count%4;
  let measure = count%16;
  // we're showing 4 measures
  // at 60 bpm + 4/4, 4s per measure, 
  // the total width is 16 seconds
  let seconds = lastBeatInSeconds % 16; 
  
  if(beat == 0){
    fill(255,0,0);
  }
  let x = map(seconds, 0, 16, 0, width);
  if(seconds > 15){
    background(255);
  }
  let y = height/2;
  let h = height/10;
  rect(x, y, 2, h);
  
  //draw bpm
  // clear
  fill(255);
  rect(0, 0, 100, 40);
  // text
  fill(0);
  text("speed: " + bpm + " bpm", 20, 20);
  
  // draw seconds
  // // clear
  // fill(255);
  // rect(x-3, y+h+10, 40, 20);
  // // text
  // fill(0);
  // textSize(7);
  // text(round(count*60/bpm, 1) + "s", x-2, y+h+20);  
  
}

function updateSpeed(){
  bpm = s.value();
}

console.log('loading...');
Tone.loaded().then(function(){
  console.log('loaded');
  Tone.Transport.start();
});
