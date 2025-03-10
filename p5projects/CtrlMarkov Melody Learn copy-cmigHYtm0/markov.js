/*
 This class (based on the deprecated Tone.CtrlMarkov) represents a Markov Chain where each call to Markov.next will move to the next state. If the next state choice is an array, the next state is chosen randomly with even probability for all of the choices. For a weighted probability of the next choices, pass in an object with "state" and "probability" attributes. The probabilities will be normalized and then chosen. If no next options are given for the current state, the state will stay there. 
 
Example 1
 let chain = new markov({
   "beginning" : ["end", "middle"],
   "middle" : "end"
 });
 chain.value = "beginning";
 chain.next(); //returns "end" or "middle" with 50% probability
 
Example 2
let chain = new markov({
  "beginning" : [{"value" : "end", "probability" : 0.8}, 
                {"value" : "middle", "probability" : 0.2}],
  "middle" : "end"
});
chain.next(); //returns "end" with 80% probability or "middle" with 20%.

*/
class Markov {
  constructor(values) {
    // An object with the state names as the keys and the next state(s) as the values.
    this.values = values;

    // The current state
    this.value;
  }

  // Receives an array of states, where states are primitive values (could be expanded to be of higher order)
  learn(sequence) {
    this.values = {};
    
    // add unique states as keys, count nextStates present in sequence
    for (let i = 0; i < sequence.length; i++) {
      let state = sequence[i];
      let nextState = sequence[(i + 1) % sequence.length];

      if (state in this.values) {
        let transition = this.values[state].find((o) => o.value === nextState);
        if (transition) {
          // this state is already in the dictionary.
          // the transition to nextState is already in the transition array.
          // add one to the count of that transition.
          transition.count += 1;
        } else {
          // this state is already in the dictionary,
          // but the transition to this nextState isn't in the array yet.
          // add it now.
          this.values[state].push({ value: nextState, count: 1 });
        }
      } else {
        // this state is not in the dictionary yet.
        // add it as a key.
        this.values[state] = [{ value: nextState, count: 1 }];
      }
    }
    
    // Calculate probabilities for each transition:
    for(let state in this.values){
      // 1. For each state, count the total transitions in the original material.
      let totalTransitions = 0;
      for(let transition of this.values[state]){
        totalTransitions += transition.count;
      }
      // 2. For each transition, calculate its probability
      for(let transition of this.values[state]){
        transition.probability = transition.count / totalTransitions;
      }
    }
    console.log("dictionary: ", this.values);
  }

  // Returns the next state of the Markov values.
  next() {
    let next = this.values[this.value];
    if (Tone.isArray(next)) {
      let distribution = this.getProbDistribution(next);
      let rand = Math.random();
      let total = 0;
      for (var i = 0; i < distribution.length; i++) {
        var dist = distribution[i];
        if (rand > total && rand < total + dist) {
          let chosen = next[i];
          if (Tone.isObject(chosen)) {
            this.value = chosen.value;
          } else {
            this.value = chosen;
          }
        }
        total += dist;
      }
    } else {
      this.value = next;
    }
    return this.value;
  }

  // Choose randomly from an array weighted options in the form
  // {"state" : string, "probability" : number} or an array of values
  // Returns the randomly selected choice
  getProbDistribution(options) {
    let distribution = [];
    let total = 0;
    let needsNormalizing = false;
    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      if (Tone.isObject(option)) {
        needsNormalizing = true;
        distribution[i] = option.probability;
      } else {
        distribution[i] = 1 / options.length;
      }
      total += distribution[i];
    }
    if (needsNormalizing) {
      //normalize the values
      for (let j = 0; j < distribution.length; j++) {
        distribution[j] = distribution[j] / total;
      }
    }
    return distribution;
  }
}
