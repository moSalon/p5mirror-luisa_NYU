var synth = new Tone.PolySynth(4, Tone.Synth).toMaster();

let octave = 0;
let root1 = 60;
//root1 is the current key selected on the canvas

//each triad has its own array (this sketch will use only 4 triads)
let array1 = [];
let array2 = [];
let array3 = [];
let array4 = [];

let major = [0, 2, 4, 5, 7, 9, 11];
let minor = [0, 2, 3, 5, 7, 9, 10];
let myScale = major;

var pianoPart;

//updating arrays with default notes when the code first runs (C key, triad 1);
calcNotes(root1, 0, array1);
calcNotes(root1, 0, array2);
calcNotes(root1, 0, array3);
calcNotes(root1, 0, array4);

//updates arrays with new notes
function calcNotes(rootType, triadType, list) {
  if(list.length>0){
    list.splice(0, list.length);
  }
  
  let note1 = rootType + myScale[triadType] + octave * 12;

  let pos2 = (triadType + 2) % myScale.length;
  let octave2 = octave + Math.floor((triadType + 2) / myScale.length);
  let note2 = rootType + myScale[pos2] + octave2 * 12;

  let pos3 = (pos2 + 2) % myScale.length;
  let octave3 = octave2 + Math.floor((pos2 + 2) / myScale.length);
  let note3 = rootType + myScale[pos3] + octave3 * 12;

  list.push(note1, note2, note3);
  console.log("inside calcNotes", note1+" "+note2+" "+note3);
}

//calls function calcNotes, updating the triad arrays with new notes, when user changes key/triad.
//also stops the loop, "resets" it, and plays the new loop with updated notes.
function updateCode(){
  if (whatKey.value == "C") {
      root1 = 60;
    } else if (whatKey.value() == "D") {
      root1 = 62;
    } else if (whatKey.value() == "E") {
      root1 = 64;
    } else if (whatKey.value() == "F") {
      root1 = 65;
    }else if (whatKey.value() == "G") {
      root1 = 55;
    }else if (whatKey.value() == "A") {
      root1 = 57;
    }else if (whatKey.value() == "B") {
      root1 = 59;
    }
    calcNotes(root1, (int(triad1.value())-1), array1);
    calcNotes(root1, (int(triad2.value())-1), array2);
    calcNotes(root1, (int(triad3.value())-1), array3);
    calcNotes(root1, (int(triad4.value())-1), array4);
  reset();
  console.log("array1", array1);
  // pianoPart.start();
}

//called when key/triad is changed, updating pianoPart with new notes
function reset(){
  Tone.Transport.stop();
  pianoPart = new Tone.Part(playTriad,
    [["0:0", array1], 
      ["0:2", array2], 
     ["0:4", array3], 
     ["0:6", array4] 
     ]
  ).start();
  pianoPart.loop = true;
  pianoPart.loopEnd = "2m";
  Tone.Transport.start();
}

function playTriad(time, chord) {
    for(i in chord){
      synth.triggerAttackRelease(new Tone.Frequency(chord[i], "midi"), "2n", time);
    }
}

function setup() {
  reset();
  Tone.Transport.start();
  // pianoPart.start();
  createCanvas(730, 630);
  background(0);
  // play = createButton("PLAY");
  // play.position(0, 315);
  // ts1 = createSelect();
  // ts2 = createSelect();
  // ts1.position(170, 98);
  // ts2.position(215, 98);
  triad1 = createSelect();
  triad2 = createSelect();
  triad3 = createSelect();
  triad4 = createSelect();
  whatKey = createSelect();
  triad1.position(90, 280);
  triad2.position(140, 280);
  triad3.position(190, 280);
  triad4.position(240, 280);
  whatKey.position(100, 200);
  whatKey.option("C");
  whatKey.option("D");
  whatKey.option("E");
  whatKey.option("F");
  whatKey.option("G");
  whatKey.option("A");
  whatKey.option("B");
  triad1.option("1");
  triad1.option("2");
  triad1.option("3");
  triad1.option("4");
  triad1.option("5");
  triad1.option("6");
  triad1.option("7");
  triad2.option("1");
  triad2.option("2");
  triad2.option("3");
  triad2.option("4");
  triad2.option("5");
  triad2.option("6");
  triad2.option("7");
  triad3.option("1");
  triad3.option("2");
  triad3.option("3");
  triad3.option("4");
  triad3.option("5");
  triad3.option("6");
  triad3.option("7");
  triad4.option("1");
  triad4.option("2");
  triad4.option("3");
  triad4.option("4");
  triad4.option("5");
  triad4.option("6");
  triad4.option("7");
  whatKey.changed(updateCode);
  triad1.changed(updateCode);
  triad2.changed(updateCode);
  triad3.changed(updateCode);
  triad4.changed(updateCode);
}

function draw() {
  translate(width / 2, height / 2);
  background(0);
  fill(255);
  textSize(50);
  text("Chord Machine", -340, -250);
  textSize(20);
  text("Triads:", -340, -20);
  text("Key: ", -340, -100);
}