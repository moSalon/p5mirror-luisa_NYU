// Initialize Essentia.js
let essentia;

// Function to handle what happens when the audio file is loaded
async function handleAudioLoad() {
  console.log("Audio file loaded!");

  // Extract the audio buffer data
  const audioBuffer = player.buffer.getChannelData(0); // Get left channel data

  // Convert audio buffer data to a format that Essentia.js can process
  const audioVector = essentia.arrayToVector(audioBuffer);

  // Use Essentia.js's RhythmExtractor2013 to analyze the BPM
  const result = essentia.RhythmExtractor2013(audioVector);

  // Output the detected BPM
  console.log("Detected BPM:", result.bpm);
}

// Load Essentia.js (wait for the WASM module to be ready)
  EssentiaModule().then(Module => {
    essentia = new Essentia(Module);  // Initialize Essentia.js when WASM is ready
    console.log("Essentia.js has been initialized!");

    // Load an audio file using Tone.js
    const player = new Tone.Player({
      url: "stems/drums1.mp3", // Replace this with your audio file
      onload: handleAudioLoad // Use the named function here
    }).toDestination();

    // Start the Tone.js Player
    Tone.loaded().then(() => {
      player.start(); // Play the audio (optional)
    });
  }).catch(err => {
    console.error("Failed to load Essentia.js:", err);
  });
