const matrix = [
  [0, 1, 1],
  [3, 2, 1],
  [1, 1, 1],
];

console.log(matrix[0]);
const n = 3;
for (let r = 0; r < n; r++) {
  console.log(`row: ${r}`);
  for (let c = 0; c < n; c++) {
    if (matrix[r][c] === 0) {
      matrix[r][c] = true;
    }
  }
}
for (let r = 0; r < n; r++) {
  for (let c = 0; c < n; c++) {
    if (matrix[r][c] === true) {
      for (let i = 0; i < n; i++) matrix[r][i] = 0;
      for (let i = 0; i < n; i++) {
        matrix[i][c] = 0;
      }
    }
  }
}

// console.log(matrix);
