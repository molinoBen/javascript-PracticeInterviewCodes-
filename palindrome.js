const palindrome = (str) => {
  const arr = str.split("");
  arr.reverse();
  const newStr = arr.join("");
  console.log(newStr);
  //   if (str === newStr) {
  //     console.log(`The word ${str} is a Palindrome`);
  //   } else {
  //     console.log("not palindrome");
  //   }
  str === newStr
    ? console.log(`The word ${str} is a Palindrome`)
    : console.log("not a palindrome");
};

palindrome("Hello");

const str = "Hellloooooo";
// const arr = str.split("");
let obj = {};
for (let char of str) {
  !obj[char] ? (obj[char] = "") : (obj[char] = "");
}
console.log(obj);
// console.log(arr);
