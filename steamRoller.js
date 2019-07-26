function steamrollArray(arr) {
  // I'm a steamroller, baby
  // .flat() flatten array of arrays based on the depth you specify
  return arr.flat(5);
}

steamrollArray([1, [2], [3, [[4]]]]);