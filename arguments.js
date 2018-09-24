function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

// console.log(sum(1, 2, 3, 4))

function sumTwo(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

// console.log(sumTwo(1, 2, 3, 4))

Function.prototype.myBind = function(context) {
  let method = this;
  let bindMethods = Array.from(arguments).slice(1);
  return function() {
    const callTimeArgs = Array.from(arguments);
    method.apply(context, bindMethods.concat(callTimeArgs));
  }
}
// --------------------------------
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

Function.prototype.myBindTwo = function(...callArgs) {
  const method = this;
  const context = callArgs[0];
  const otherCallArgs = callArgs.slice(1);
  return function(...bindArgs) {
    method.apply(context, otherCallArgs.concat(bindArgs));
  }
}

// markov.says.myBindTwo(breakfast, "meow", "Kush")();
// markov.says.myBindTwo(breakfast)("meow", "a tree");
// markov.says.myBindTwo(breakfast, "meow")("Markov");
// const notMarkovSays = markov.says.myBindTwo(breakfast);
// notMarkovSays("meow", "me");
