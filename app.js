// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array(5, 6, 7);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const evenMoreNumbers = Array.from(listItems);
// console.log(evenMoreNumbers);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreData: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// const hobbiesLength = hobbies.push('Reading'); // adds item to the end of array and rtns array length
// console.log(hobbies, 'Length: ' + hobbiesLength);
// hobbies.unshift('Coding'); // adds item to begining of array and rtns length
// console.log(hobbies);
// hobbies.pop();
// console.log(hobbies);
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// hobbies[5] = 'Reading';
// console.log(hobbies);

// hobbies.splice(2, 3, 'Photography');
// console.log(hobbies);

// hobbies.splice(0, 1, 'BBQing')
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storedResults = testResults.slice(-3, -1);
// const storedResults = testResults.concat([1, 2, 4])

// testResults.push(5.91);

// console.log(testResults, storedResults);
// console.log(testResults.indexOf(1));

// console.log(testResults.includes(10.999));

// const personData = [{ name: 'Jeff' }, { name: 'Manuel' }];
// console.log(personData.indexOf({ name: 'Jeff' }));

// const jeff = personData.find((person, inx, persons) => {
//   return person.name === 'Jeff';
// });

// jeff.name = 'Douglas';

// console.log(jeff, personData);

// const douglasIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Douglas';
// });

// console.log(douglasIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = {index: idx, taxAdjPrice: price * price * (1 + tax) }
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedPrices.reverse());

const filteredPrices = prices.filter(price => price > 6);

console.log(filteredPrices);

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);

console.log(sum);

const data = 'new york;10.99;2000';

const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);
