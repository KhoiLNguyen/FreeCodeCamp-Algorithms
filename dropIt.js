function dropElements(arr, func) {
  // Drop them elements.
  // new arr so we don't alter the original arr
  let copyArr = [...arr];

  // if true break, if not keep shifting the first element of array out
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      break;
    }
    copyArr.shift();
  }

  return copyArr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
// dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].