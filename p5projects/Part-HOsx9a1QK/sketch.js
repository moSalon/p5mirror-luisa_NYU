let arrayOfEvents = [
  {"time": 1, "message":"hello" }, 
  {"time": 1.5, "message":"world" }, 
  {"time": 2, "message":"!" }
];
let part = new Tone.Part(myCallbackFunction, arrayOfEvents).start(0);
part.start(0);
Tone.Transport.start();


function myCallbackFunction(time, value){
  // console.log(time);
  console.log(value.message);
}