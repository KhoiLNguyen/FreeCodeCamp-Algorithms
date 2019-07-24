function fearNotLetter(str) {
  // abce = 97 98 99 101 we skipped d = 100
  // loop starts from 97 and end when i < 104. There's a + 1
  for(let i = str.charCodeAt(0); i < (str.charCodeAt(str.length-1)+1); i++) {
    // check if letter is present in the given string
    // if not return that missing letter
    if(str.indexOf(String.fromCharCode(i)) === -1) {
      return String.fromCharCode(i);
    }
  }

  return undefined;
}

fearNotLetter("abce");

// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.