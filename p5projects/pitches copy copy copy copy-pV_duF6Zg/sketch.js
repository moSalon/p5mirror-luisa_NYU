let synth = new Tone.Synth();
synth.toDestination();

function setup(){
   
}

function keyPressed(){
  //let frequencies = [400, 450, 533.4, 600, 675, 800];
  
//   let f = 400; // in Hertz
//   let scale = [];

//   // Derive pentatonic scale  
//   scale[0] = f;
//   scale[3] = f * 3 / 2;
//   scale[5] = f * 2;
//   scale[2] = scale[5] * 2 / 3;
//   scale[1] = scale[3] * 3 / 4;
//   scale[4] = scale[1] * 3 / 2;
//   console.log(scale);
  
//   let f = 400;  
//   let scale =[];
//   // number of perceptually equal steps in the scale
//   let n = 3;

//   // 2. Derive equal-tempered chromatic scale
//   scale[0] = f;
//   let twelfthRootOfTwo = pow(2, 1/n);
//   for (let i = 0; i < n; i++) {
//     scale[i + 1] = scale[i] * twelfthRootOfTwo;
//   }
  
  // let scale = ["A3", "B3", "C4", "D4", "E4"];
  let scale = [57, 59, 62, 62, 64, 65, 67, 69];
  // MIDI
  let pos = int(key) - 1;
  let midiNote = scale[pos];  
  let frequency = Tone.Frequency(midiNote, "midi");
  synth.triggerAttack(frequency);
}


function mouseReleased(){
  synth.triggerRelease();
}
