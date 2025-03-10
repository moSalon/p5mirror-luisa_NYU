// Play the kick drum once per second


// Create a Player object and load the "kick.mp3" file
const kick = new Tone.Player("samples/505/kick.mp3");

// Connect the player output to the computer's audio output
kick.toDestination();

// Create a loop: call playBeat every second
Tone.Transport.scheduleRepeat(playPulse, 1.5);
// Try other durations, like 0.5 and 1.2 seconds

function playPulse(time){
  kick.start(time);
}

// Interface: p5 functions
function setup(){  
  btn = createButton("play");
  btn.mousePressed(togglePlay);
  btn.position(0, 0);
}

function togglePlay(){
  if(Tone.Transport.state == "started"){
    Tone.Transport.pause();
    btn.html("play");
  }
  else{
    Tone.Transport.start();
    btn.html("pause");
  }
}
