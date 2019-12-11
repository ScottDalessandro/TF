/* eslint-disable no-unused-vars */

const createCalculator = () => {
  return {
    total: 0,
    add(num) {
      this.total += num;
    },
    subtract(num) {
      this.total -= num;
    },
    value() {
      return this.total;
    },
    clear() {
      this.total = 0;
    },
  };
};

// const addSquareMethod = arr => {
//   return arr.map(val => {
//     val.square = function() {
//       return this.total * this.total;
//     };
//     return val;
//   });
// };

// The array passed to the addSquareMethod is an array of objects
// (each object is an instance created by the createCalculator factory function)

const addSquareMethod = function(arr) {
  const arrayOfCalculatorInstances = [];

  // Loop over the array of calculator objects and access each individual calculator object
  for (let index = 0; index < arr.length; index++) {
    // attach a "square" method to the current calculator instance in the iteration
    arr[index]['square'] = function() {
      return this.total * this.total;
    };

    // add the calculator object (now with the square method) to the array
    arrayOfCalculatorInstances.push(arr[index]);
  }

  return arrayOfCalculatorInstances;
  // after the square method is added to each calculator instace,
  // return the array of calculator objects
};

const humanCalcPrototype = {
  add(num) {
    this.total += num;
  },
  subtract(num) {
    this.total -= num;
  },
  value() {
    return this.total;
  },
  clear() {
    this.total = -10;
  },
};

const createHumanCalculator = () => {
  const humanCalc = Object.create(humanCalcPrototype);
  humanCalc.total = -10;

  return humanCalc;
};
