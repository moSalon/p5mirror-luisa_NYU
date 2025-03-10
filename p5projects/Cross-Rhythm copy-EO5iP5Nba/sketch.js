const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/snare.mp3"
});
kit.toDestination();

let bpm1 = 120;
let bpm2 = 70;
let bpm3 = 323;
let drum1 = new Tone.Loop(playRhythm1, 60/bpm1);
let drum2 = new Tone.Loop(playRhythm2, 60/bpm2);
let drum3 = new Tone.Loop(playRhythm1, 60/bpm3);
drum1.start(0);
drum2.start(0);
drum3.start(0);

// Exercise: add accents to each loop

function playRhythm1(time){
  kit.player("kick").start(time);
}

function playRhythm2(time){
  kit.player("snare").start(time);
}

Tone.loaded().then(function(){
 console.log("loaded");
  Tone.Transport.start();
}
)
