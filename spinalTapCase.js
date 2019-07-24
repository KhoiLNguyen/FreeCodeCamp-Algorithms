function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  // put a space between word that end with a lower case letter
  // and the next word start with a capitalized letter
  // then replace space/non-word character or underscore with hyphen '-'
  return str.replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/\W|_/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');

// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".