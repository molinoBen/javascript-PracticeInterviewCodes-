/**
 * 1. if strings are identical - then return false - zero edit
 * 2. create character maps of both strings
 * 3. check if each character are of same type and value.
 * if they are not, increase the counter.
 * if the counter is 2 or more, then return false.
 * 4.return true.
 */

const charMap = (str) => {
  const obj = {};
  for (let i of str) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }
  return obj;
};

const oneAway = (str1, str2) => {
  if (str1 === str2) return false;
  const obj1 = charMap(str1);
  const obj2 = charMap(str2);
  let counter = 0;
  for (let i in obj1) {
    if (obj1[i] !== obj2[i]) {
      counter++;
    } else if (counter >= 2) {
      return false;
    }
  }
  return true;
};

const w1 = "pale",
  w2 = "pa";

console.log(oneAway(w1, w2));
