function uniteUnique(arr) {
  let unique = [];
  // Get all the arguments in an array to process
  let newArr = Array.from(arguments).slice(0);
  // Then flatten the argument's array into 1 dimension array
  newArr = newArr.reduce((total, amount) => {
    return total.concat(amount);
  }, []);

  // .map() goes through each value check if unique doesn't have that value => push that value
  // if it does have ignore and move on
  newArr.map( number => {
    if(!unique.includes(number)) {
      unique.push(number);
    }
  })
  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].