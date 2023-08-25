/**ALGORITHM
 * 1. declare a count variable to keep track of each character (count = 1);
 * 1b. also need another count variable for cases when each character are unique
 * 2. Loop
 * -if arr[i] = arr[i+1], count++;
 * -increment i
 * -else output: arr[i] + count
 * -count = 1
 * -increment i
 */

const stringCompression = (str) => {
  const n = str.length;
  let count = 1,
    uniqCount = 0,
    output = "";
  for (let i = 0; i < n; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      uniqCount++;
      output += str[i] + count;
      count = 1;
    }
  }
  if (uniqCount === n) return str;
  else return output;
};

console.log(stringCompression("hhhhiii"));

// const stringCompression = (str) => {
//   const n = str.length;
//   let count = 1,
//     output = "",
//     uniqCount = 0;
//   for (let i = 0; i < n; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       output += str[i] + count;
//       count = 1;
//       uniqCount++;
//     }
//   }
//   if (uniqCount === n) return str;
//   else return output;
// };

// console.log(stringCompression("abcd"));
