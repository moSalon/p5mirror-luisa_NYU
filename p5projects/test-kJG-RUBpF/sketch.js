let mic, recorder, player;
let isRecording = false;
let isPlaying = false;

function setup() {
  createCanvas(400, 200);
  
  mic = new Tone.UserMedia();
  mic.open();

  player = new Tone.Player().toDestination();
  
  let recordButton = createButton('Record');
  recordButton.mousePressed(toggleRecording);
  
  let playButton = createButton('Play');
  playButton.mousePressed(togglePlayback);
}

function draw() {
  background(220);
  
  fill(0);
  textAlign(CENTER);
  textSize(24);
  text(isRecording ? "Recording..." : (isPlaying ? "Playing..." : "Ready"), width/2, height/2);
}

function toggleRecording() {
  if (!isRecording) {
    if(!recorder) recorder = new Tone.Recorder();
    mic.connect(recorder);
    recorder.start();
  } else {
    recorder.stop();
    console.log(recorder.get().buffer);
  }
  isRecording = !isRecording;
}

function togglePlayback() {
  if (!isPlaying && player.state === 'started') {
    player.stop();
  } else if (!isPlaying) {
    player.start();
    player.loop = true;
    
    player.buffer = recorder.get().buffer;
  } else {
    player.stop();
  }
  isPlaying = !isPlaying;
}