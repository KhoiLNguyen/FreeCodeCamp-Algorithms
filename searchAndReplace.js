function myReplace(str, before, after) {
  // Find index of the word needed to be replaced at
  let indexOfBefore = str.indexOf(before);

  // Check if the first letter of that word is capitalized, if it is
  let regexUpper = /[A-Z]/;
  if(regexUpper.test(before[0])) {
    // Convert the first letter of the new word to be capitalized, then replace old with new 
    let toUpper = after[0].toUpperCase() + after.slice(1);
    return str.replace(before, toUpper);
  }

  return str.replace(before, after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john") should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".