function sumFibs(num) {
  let prevNumb = 0;
  let currentNumb = 1;
  let sum = 0;

  while(currentNumb <= num) {
    // if current numb % 2 not equal to 0 => odd => add to sum
    if(currentNumb % 2 !== 0) {
      sum += currentNumb;
    }
    // Ex: prev = 1, cur = 2
    // cur = 2 + 1 = 3;
    // prev = 3 - 1 = 2;
    // move on
    currentNumb += prevNumb;
    prevNumb = currentNumb - prevNumb;
    
  }

  return sum;
}



sumFibs(4);

// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.