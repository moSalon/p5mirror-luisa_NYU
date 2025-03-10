// Press keys 1 - 8 on the keyboard to play a scale
// Uncomment below to play each example

let synth = new Tone.Synth()
synth.toDestination();
let f = 100; // in Hertz
let scale = [];

let n = 12;

function setup() {
  createCanvas(620, 200);
  
  // 0. By hand pentatonic scale
  // scale = [200, 225, 266.7, 300, 337.5, 400]; 
  
  // 1. Derive pentatonic scale  
  // scale[0] = f;
  // scale[3] = f * 3 / 2;
  // scale[5] = f * 2;
  // scale[2] = scale[5] * 2 / 3;
  // scale[1] = scale[3] * 3 / 4;
  // scale[4] = scale[1] * 3 / 2;
  // console.log("pentatonic scale: ", scale);
  
  // 2. Derive equal-tempered chromatic scale
  // let f = 100;  
  // scale[0] = f;
  // let twelfthRootOfTwo = pow(2, 1/n);
  // for (let i = 0; i < n; i++) {
  //   scale[i + 1] = scale[i] * twelfthRootOfTwo;
  // }
  // console.log("chromatic scale: ", scale);
  // each step is called a 'semitone'
  
  // 3. Try dividing the pitch circle into 3, 4, 5 steps

  // These frequencies were given names
  //In 'scientific notation', pitches range from C0 to B8 (C0, D0, E0, F0, G0, A0, B0; C1, D1, and so on). The number denotes the octave. 
  
  //4. Play equal-tempered pitches.
  // a. between A3 and A4  - A minor scale, which approximates the Aeolian mode  
  // scale = ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4"];
  
  // b. between C3 and C4  - C major scale, which approximates the Ionian mode  
  // scale = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4"];
  
  // The rest of the notes are named in relation to their neighbors (higher-than: sharp #, lower-than: flat b). To play all 12 equal-tempered notes using scientific notation, we need those 'accidents'
  // scale = ["C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4"];
  

  // The pentatonic scale and greek modes can be approximated in the equal-tempered system.
  // It is often convenient to represent notes by their MIDI number (MIDI is based on the equal-tempered tuning system). See next example for using MIDI arithmetics to deal with different scales and (approximated) modes.
  
  //5. Play equal-tempered pitches, using MIDI numbers instead of note names (C3 = 60)
  // scale = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72];
  

}

function keyPressed(){
  let pos = parseInt(key) % n - 1;  
  
  let pitch = scale[pos];
  // console.log("current pitch: ", pitch);  
  
  // if using midi numbers, use this line instead: 
  // let pitch = Tone.Frequency(scale[pos], "midi");  
  // console.log("current pitch: ", pitch) // see _val and _units
  
  synth.triggerAttack(pitch);
    
}

function keyReleased(){
  synth.triggerRelease();
}