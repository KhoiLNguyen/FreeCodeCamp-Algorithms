function sumAll(arr) {
  // We copy the original array into a new one with spread operator,
  // so we don't accidentally alter/mutate it. Also sort from small -> large 
  let newArr = [...arr.sort((a,b) => a-b)];
  let sum = 0;

  // let i = the smaller number and increment until i = the larger number
  // get the sum from here then return
  for(let i = newArr[0]; i <= newArr[1]; i++) {
    sum += i;
  }

  return sum;
}

sumAll([10, 5]);

// sumAll([1, 4]) should return a number.

// sumAll([1, 4]) should return 10.

// sumAll([4, 1]) should return 10.

// sumAll([5, 10]) should return 45.

// sumAll([10, 5]) should return 45.