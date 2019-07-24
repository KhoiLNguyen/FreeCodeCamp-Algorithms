function diffArray(arr1, arr2) {
  // copy 2 arrays into 1 for easy comparison;
  let newArr = [...arr1, ...arr2];

  // We are trying to find if a value is not repeated in either one of the 2 arrays
  // .includes() will return false if value is not present => !false = true
  // we use || or here to check because if it is present in both arrays => repeated
  let result = newArr.filter(number => !arr1.includes(number) || !arr2.includes(number));


  return result;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
// [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
// [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
// [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
// [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.