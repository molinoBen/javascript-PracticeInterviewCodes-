// const maxChar = (str) => {
//   let obj = {};
//   for (let char of str) {
//     !obj[char] ? (obj[char] = 1) : obj[char]++;
//   }
//   let maxNum = 0;
//   let maximumChar = "";
//   for (let char in obj) {
//     if (obj[char] >= maxNum) {
//       maxNum = obj[char];
//       maximumChar = char;
//     }
//   }
//   console.log(obj);
//   console.log(`Maximum char is: ${maximumChar}`);
// };

// maxChar("hhhhhhhhhhhhhelllo");

// function maxChar(str) {
//   let obj = {};
//   for (let char of str) {
//     !obj[char] ? (obj[char] = 1) : obj[char]++;
//   }
//   console.log(obj);
// }

// maxChar("heeeeeeeee");

const maxChar = (str) => {
  let obj = {};
  for (let char of str) {
    !obj[char] ? (obj[char] = 1) : obj[char]++;
  }
  console.log(obj);
  let maxNum = 0;
  let maxChars = "";
  for (let char in obj) {
    if (obj[char] >= maxNum) {
      maxNum = obj[char];
      maxChars = char;
    }
  }
  console.log(`The maximum char is: ${maxChars}`);
};

maxChar("hhhhhhhhhhhhhhhhhhelllo");
