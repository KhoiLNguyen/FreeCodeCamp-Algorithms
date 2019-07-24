function translatePigLatin(str) {
  // Use regex to find out the first vowel in the string
  let firstVowel = str.match(/[aeiou]/);

  // Then find its index position
  let indexOfFirstVowel = str.indexOf(firstVowel);
  
  // index > 0 mean there are consonants to the left of it
  if(indexOfFirstVowel > 0) {
    // copy the rest of the string from index of first vowel + the consonants from the left of first vowel + 'ay'
    return str.slice(indexOfFirstVowel) + str.slice(0, indexOfFirstVowel) + 'ay';
    // if vowel is at the beginning === 0 just add way to the end
  } else if (indexOfFirstVowel === 0) {
    return str + 'way';
    // added else for edge case if there are only consonants letters in string
  } else {
    return str + 'ay'
  }

}

translatePigLatin("algorithm");
// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels. ("fwwsfms") return 'fwwsfmsay'