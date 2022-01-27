// This code is to practice callback functions
const numArray = [1, 2, 33, 55, 64, 33, 7, 7, 32, 123];

function findFirstNum(arr, callback) {
  callback(arr[0]);
}

// findFirstNum(numArray, (number) =>
//   console.log(`The first number in the array is ${number}`)
// );

function modifiedArray(arr, callback) {
  let newArray = [...new Set(arr)];
  callback(newArray);
}

// modifiedArray(numArray, (array) =>
//   console.log(`The modified array is ${array}`)
// );

const legends = [
  {
    name: "Joshua",
    race: "human",
    age: 34,
    profession: "warrior",
  },
  {
    name: "Izzy",
    race: "orc",
    age: 23,
    profession: "mage",
  },
  {
    name: "Lorthar",
    race: "undead",
    age: 112,
    profession: "necromancer",
  },
];

function findMage(arr, profession, callback) {
    let person = arr.filter((individual) => individual.profession === profession);
    callback(person[0]);
}

findMage(legends, 'mage', (foundPerson) => console.log(`The mage was found. Her name is ${foundPerson.name}`));