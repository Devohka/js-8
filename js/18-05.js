// завдання 1

const arr = [45, 32, 77];
console.log(arr);
arr[1] = 10;
console.log(arr);

// завдання 2

const row = ["1", " Oleg-bobr", " row"];
const add = row + ", " + "ytuy";
console.log(add);

// завдання 3

const x1 = [44, 5, 6, 23, 576];
let y = 0;

for (let tr of x1) {
  let rert = 0;
  rert = tr * 1;
    y += rert;
 console.log(y);
}

// завдання 4

const numdr = [1, 2, 3, 4, 5];
let findNumdr = 0;
for (let i = 1; i < 6; i++) {
    findNumdr = i;
    console.log(findNumdr);
}

// завдання 5


const rows = ["ytry", "ygokl;p", "ghfjfhgj", "3434", "ffgjkfgjkf"];
let findRows = " ";
 for (let i = 1; i < rows.length; i++) {
   if (rows[i] > "5") {
       findRows = rows[i];
       console.log(findRows);
   }
}

// завдання 6

const number1 = [12, 345, 67, 889, 6];
let numberFind = number1[0];
for (let number of number1) {
    if (number > numberFind) [
        numberFind = number
    ]
}
console.log(numberFind);

// завдання 7

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i], "Парне число");
  }
}
