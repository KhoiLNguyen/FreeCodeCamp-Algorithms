function destroyer(arr) {
  // Remove all the repeated values

  // Get the rest of the arguments in an array using Arra.from(arg).slice(1) slice from index 1 instead of 0
  // unique array to keep track of non-repeated value
  let args = Array.from(arguments).slice(1);
  let unique = [];

  // loop through both arrays On^2, count to keep track of repeated value after 2nd loop,
  // 0 = non-repeated => push to unique
  // > 0 == repeated
  for(let i = 0; i < arr.length; i++) {
    let count = 0;
    for(let j = 0; j < args.length; j++) {
      if(arr[i] === args[j]) {
        count++;
      }
    }
    if(count === 0) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

// Faster if using filter() function and includes()
// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);
//   return arr.filter(function(val) {
//     return !args.includes(val);
//   });
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].