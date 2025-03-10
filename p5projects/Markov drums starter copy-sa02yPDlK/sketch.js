let drumNames = ["kick", "snare", "hh", "hho"];
let kit = new Tone.Players({
  "kick": "/samples/kick.mp3",
  "snare": "/samples/snare.mp3",
  "hh": "/samples/hh.mp3",
  "hho": "/samples/hho.mp3"
}).toDestination();

// let chain = new Markov({
//   "kick": ["kick" 0.5, "snare"0.5]
//   "snare": ["hh"0.7, "hho"0.3]
//   "hh": ["kick"0.5, "snare"0.5]
//   "hho": "kick"
// })

let chain = new Markov({
  "kick": [{
    "value": "kick",
    "probability": 0.5
  }, {
    "value": "snare",
    "probability": 0.5
  }],
  "snare": [{
    "value": "hh",
    "probability": 0.7
  }, {
    "value": "hho",
    "probability": 0.3
  }],
  "hh": [{
    "value": "kick",
    "probability": 0.5
  }, {
    "value": "snare",
    "probability": 0.5
  }],
  "hho": "kick"
});
chain.value = "kick";

function setup() {
  
}

function mouseClicked(){
  kit.player("kick").start();
}
