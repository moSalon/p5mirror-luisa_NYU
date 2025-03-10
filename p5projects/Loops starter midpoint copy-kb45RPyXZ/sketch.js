const bass = new Tone.Player({
  url: "loops/Bass0.mp3",
  loop: true,
});
bass.toDestination();

const chords = new Tone.Player({
  url: "loops/Chords0.mp3",
  loop: true,
});
chords.toDestination();

const drums = new Tone.Player({
  url: "loops/Drums0.mp3",
  loop: true,
});
drums.toDestination();

const melody = new Tone.Player({
  url: "loops/Melody0.mp3",
  loop: true,
});
melody.toDestination();

function setup() {
  noCanvas();
}

function draw() {
  // not drawing anything for now
}

function keyTyped() {
  if (loaded) {
    if(Tone.Transport.state == "stopped"){
      Tone.Transport.bpm.value = 121.80;
      Tone.Transport.start();
    }
    if (key == "a") {
      if (drums.state == "stopped") {
        drums.start("@1m");
      } else {
        drums.stop();
      }
    } else if (key == "s") {
      if (chords.state == "stopped") {
        chords.start("@1m");
      } else {
        chords.stop();
      }
    } else if (key == "d") {
      if (bass.state == "stopped") {
        bass.start("@1m");
      } else {
        bass.stop();
      }
    } else if (key == "f") {
      if (melody.state == "stopped") {
        melody.start("@1m");
      } else {
        melody.stop();
      }
    }
  }
}

Tone.loaded().then(function () {
  loaded = true;
});
