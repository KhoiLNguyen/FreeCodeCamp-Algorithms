function sumPrimes(num) {
  // array to store prime numbers
  let primeNumb = [];

  for(let i = 2; i <= num; i++) {
    // pass a number to isPrime to check if it is or not,
    // if so push into array
    if(isPrime(i)) {
      primeNumb.push(i);
    }
  }

  // sum all with reduce
  return primeNumb.reduce((total, currentValue) => total + currentValue);
}

function isPrime(number) {
  // Since number can be divided by itself/1 we don't include it with j <= number
  // instead j < number
  for(let j = 2; j < number; j++) {
    // keep incrementing until we find number % j then it is not prime
    // if we couldn't find after all iterations mean it is prime, return true
    if(number % j === 0) {
      return false;
    }
  }
  return true;
}

sumPrimes(10);

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.