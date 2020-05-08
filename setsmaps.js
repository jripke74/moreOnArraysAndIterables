// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }

// for (const entry of ids.values()) {
//   console.log(entry)
// }

// const person1 = {name: 'Jeff'};
// const person2 = {name: 'Douglas'};

// const personData = new Map([[person1, [{data: 'yesterday', price: 10}]]]);

// personData.set(person2, [{date: 'two weeks aga', price: 100}]);

// console.log(personData);
// console.log(personData.get(person1))

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

let person = {name: 'Max'};
const persons = new WeakSet();
persons.add(person);

// ... some operations
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null;

console.log(personData);

const numbers = [1, 2, 3, 4, 5, 6];

const numsGreater5 = numbers.filter((val) => val > 5 );
console.log(numsGreater5);

const mappedNumbers = numbers.map(val => ({ num: val }));
console.log(mappedNumbers);

const multiplication = numbers.reduce((curResult, curValue) => {
  return curResult * curValue;
}, 1);
console.log(multiplication);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...numbers));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMax, curMin];
}

const [min, max] = findMinMax(...numbers);
console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);
