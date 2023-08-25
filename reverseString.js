const rvrsStr = (str) => {
  const arr = str.split("");
  arr.reverse();
  const newStr = arr.join("");
  console.log(newStr);
};

rvrsStr("hello");
