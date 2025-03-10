
const footstep = new Tone.Player("samples/39044__wildweasel__wood3.wav").toDestination();
footstep.toDestination();
Tone.Transport.scheduleRepeat(playDrum, "4n");

let stepCount = -1;
function playDrum(time){
  if(stepCount %2 == 0) footstep.volume.value = 0;
  else footstep.volume.value = -3;
  
  footstep.start(time);
  stepCount++;
  if(stepCount == 0){
    startAnimation(time);
  }
}

let walking_x = -100;
function startAnimation(time){
  // start animation
    walking.setFrame(2); // down foot is on frames 3 and frame 9
    
    let stepsPerAnimationCycle = 2;
    let beatDuration = 60/Tone.Transport.bpm.value;
    let framesPerStep = (walking.numFrames()/stepsPerAnimationCycle); 
    let frameDuration = beatDuration / framesPerStep;
    
    Tone.Transport.scheduleRepeat(function(){
      if(walking){
        walking.setFrame((walking.getCurrentFrame() + 1) % walking.numFrames()); 
      } 
    }, frameDuration);  
}

function preload(){
  // walking = loadImage("images/run.gif");  
  walking = loadImage("images/walking_right.gif");
  //drummer
  // walking = loadImage("https://media.giphy.com/media/slRXBJg58UU24/giphy.gif");
  // walking = loadImage("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDB3NmZmeGhiZ3NmYTY0eTY4ZTZvOWE5aW1mcW81bmVqNmM1bnZmbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vznMJFViyp8mLy1xr/giphy.gif");
}

function setup(){
  createCanvas(400, 300);
  background(255);
  
  noStroke();
  walking.resize(0, 150);
  walking.pause();
  walking.setFrame(3); // down foot is in frame 3 and frame 9
  
  btn = createButton("play");
  btn.mousePressed(togglePlay);
  btn.position(0, height);
  
  
}

// let's assume the width is four measures
// four measures is count = 16


function draw(){
  
  fill(255);
  rect(0, 0, width, height/2);
  
  if(Tone.Transport.state == "started"){
    // image(walking, 0, 0);
    image(walking, walking_x, 0);
    walking_x = (walking_x + 0.85) % (width + 30);
  }
  

  let beat = stepCount%4;
  let measure = stepCount%16;
  
  if(measure == 0){
    // background
    fill(255);
    rect(0, 0, width, height);
    walking_x = -60;
  }
  fill(100);
  
  let x = map(measure, 0, 16, 0, width); 
  rect(x, height/2, 2, height/10);
  
}

let context;
function togglePlay(){
  if(Tone.loaded && Tone.Transport.state == "stopped"){
    
    if(!context){
      context = new AudioContext();
      context.resume();
      Tone.start();
    }
    
    Tone.Transport.start();
    btn.html("pause");
  }
  else{
    Tone.Transport.stop();
    btn.html("play");
  }
}
