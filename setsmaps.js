// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }

// for (const entry of ids.values()) {
//   console.log(entry)
// }

const person1 = {name: 'Jeff'};
const person2 = {name: 'Douglas'};

const personData = new Map([[person1, [{data: 'yesterday', price: 10}]]]);

personData.set(person2, [{date: 'two weeks aga', price: 100}]);

console.log(personData);
console.log(personData.get(person1))

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

