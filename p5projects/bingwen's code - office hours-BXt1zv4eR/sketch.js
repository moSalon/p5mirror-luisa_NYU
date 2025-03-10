let synth;
let synthkey;
let currentChord = "";
let C_Chords = ["C4", "E4", "G4"];
let D_Chords = ["D4", "F#4", "A4"];
let E_Chords = ["E4", "G#4", "B4"];
let F_Chords = ["F4", "A4", "C5"];
let G_Chords = ["G4", "B4", "D5"];
let A_Chords = ["A4", "C#5", "E5"];
let B_Chords = ["B4", "D#5", "F#5"];
let colorr = 'orange';

function setup() {
  createCanvas(windowWidth,windowHeight);
  synth = new Tone.PolySynth().toDestination();
  synthkey = new Tone.PolySynth().toDestination();
  Tone.Transport.bpm.value = 120;
  Tone.Transport.start();
}

function draw() {
  background(colorr);
  
  textSize(32);
  textAlign(CENTER, CENTER);
  stroke('grey');
  strokeWeight(4);
  fill(255);
  text(currentChord, width / 2, height - 30);
  textSize(16);
  noStroke();
  textAlign(LEFT, TOP);
  fill('grey');
  text("Mouse click + Key type A/S/D/F", 10, 10);
}

// Function to handle keypress and trigger corresponding notes
function keyPressed() {
  // Check the current chord and the key that was pressed
  if (currentChord == "C") {
    if (key == "a" || key == "A") {
      synthkey.triggerAttackRelease("C4", "8n");
    } else if (key == "s" || key == "S") {
      synthkey.triggerAttackRelease("E4", "8n");
    } else if (key == "d" || key == "D") {
      synthkey.triggerAttackRelease("G4", "8n");
    } else if (key == "f" || key == "F") {
      synthkey.triggerAttackRelease("B4", "8n");
    }
  } else if (currentChord == "D") {
    if (key == "a" || key == "A") {
      synthkey.triggerAttackRelease("D4", "8n");
    } else if (key == "s" || key == "S") {
      synthkey.triggerAttackRelease("F#4", "8n");
    } else if (key == "d" || key == "D") {
      synthkey.triggerAttackRelease("A4", "8n");
    } else if (key == "f" || key == "F") {
      synthkey.triggerAttackRelease("B4", "8n");
    }
  } else if (currentChord == "E") {
    if (key == "a" || key == "A") {
      synthkey.triggerAttackRelease("E4", "8n");
    } else if (key == "s" || key == "S") {
      synthkey.triggerAttackRelease("G#4", "8n");
    } else if (key == "d" || key == "D") {
      synthkey.triggerAttackRelease("B4", "8n");
    } else if (key == "f" || key == "F") {
      synthkey.triggerAttackRelease("F#4", "8n");
    }
  } else if (currentChord == "F") {
    if (key == "a" || key == "A") {
      synthkey.triggerAttackRelease("F4", "8n");
    } else if (key == "s" || key == "S") {
      synthkey.triggerAttackRelease("A4", "8n");
    } else if (key == "d" || key == "D") {
      synthkey.triggerAttackRelease("C5", "8n");
    } else if (key == "f" || key == "F") {
      synthkey.triggerAttackRelease("A#4", "8n");
    }
  } else if (currentChord == "G") {
    if (key == "a" || key == "A") {
      synthkey.triggerAttackRelease("G4", "8n");
    } else if (key == "s" || key == "S") {
      synthkey.triggerAttackRelease("B4", "8n");
    } else if (key == "d" || key == "D") {
      synthkey.triggerAttackRelease("D5", "8n");
    } else if (key == "f" || key == "F") {
      synthkey.triggerAttackRelease("C5", "8n");
    }
  } else if (currentChord == "A") {
    if (key == "a" || key == "A") {
      synthkey.triggerAttackRelease("A4", "8n");
    } else if (key == "s" || key == "S") {
      synthkey.triggerAttackRelease("C#5", "8n");
    } else if (key == "d" || key == "D") {
      synthkey.triggerAttackRelease("E5", "8n");
    } else if (key == "f" || key == "F") {
      synthkey.triggerAttackRelease("F#5", "8n");
    }
  } else if (currentChord == "B") {
    if (key == "a" || key == "A") {
      synthkey.triggerAttackRelease("B4", "8n");
    } else if (key == "s" || key == "S") {
      synthkey.triggerAttackRelease("D#5", "8n");
    } else if (key == "d" || key == "D") {
      synthkey.triggerAttackRelease("F#5", "8n");
    } else if (key == "f" || key == "F") {
      synthkey.triggerAttackRelease("G#5", "8n");
    }
  }
}

let prevArea = -1;
// Mouse click event to change chord
function mouseMoved() {
  let areaWidth = width/7;
  let currentArea = floor(mouseX / areaWidth );
  if(currentArea != prevArea){
    // play chord
    let chord = null;
    if(currentArea == 1){
      chord = C_Chords;
    }
    else if(currentArea == 2){
      chord = D_Chords;
    }
    synth.triggerAttackRelease(chord, "4n");
    prevArea = currentArea;
  }
  console.log(currentArea);
  // if (mouseX < width / 7) {
  //   currentChord = "C";
  //   colorr = "lightgreen";
  //   synth.triggerAttackRelease(C_Chords, "4n");
  // } else if (mouseX < (2 * width) / 7 && mouseX > width / 7) {
  //   currentChord = "D";
  //    colorr = "lightblue";
  //   synth.triggerAttackRelease(D_Chords, "4n");
  // } else if (mouseX < (3 * width) / 7 && mouseX > (2 * width) / 7) {
  //   currentChord = "E";
  //    colorr = "lightpink";
  //   synth.triggerAttackRelease(E_Chords, "4n");
  // } else if (mouseX < (4 * width) / 7 && mouseX > (3 * width) / 7) {
  //   currentChord = "F";
  //    colorr = "rgb(247,247,93)";
  //   synth.triggerAttackRelease(F_Chords, "4n");
  // } else if (mouseX < (5 * width) / 7 && mouseX > (4 * width) / 7) {
  //   currentChord = "G";
  //    colorr = "rgb(227,227,252)";
  //   synth.triggerAttackRelease(G_Chords, "4n");
  // } else if (mouseX < (6 * width) / 7 && mouseX > (5 * width) / 7) {
  //   currentChord = "A";
  //    colorr = "rgb(243,157,157)";
  //   synth.triggerAttackRelease(A_Chords, "4n");
  // } else if (mouseX > (6 * width) / 7) {
  //   currentChord = "B";
  //    colorr = "rgb(223,149,220)";
  //   synth.triggerAttackRelease(B_Chords, "4n");
  // }
}
