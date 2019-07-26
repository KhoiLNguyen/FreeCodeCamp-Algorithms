function addTogether() {
  // function to check if it is a number or not
  let checkNum = function(num) {
    if (typeof num !== "number") {
      return undefined;
    } else {
      return num;
    }
  };

  // if there is 2 arguments
  if (arguments.length == 2) {
    let a = checkNum(arguments[0]);
    let b = checkNum(arguments[1]);
    // if either is undefined return it
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b; // if not return sum
    }
  }
  if (arguments.length == 1) {
    let c = arguments[0];

    // currying here
    if (checkNum(c)) {
      return function(d) {
        if (c === undefined || checkNum(d) === undefined) {
          return undefined;
        } else {
          return c + d;
        }
      };
    }
  }
}

addTogether(2, 3);

// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.
