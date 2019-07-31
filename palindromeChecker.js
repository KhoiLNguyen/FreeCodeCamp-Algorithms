function palindrome(str) {
  // This is shorter than the original way I did it but
  // it is technically the same. I used /[^a-zA-Z0-9]/g
  // means replace any special characters that are not A/a - Z/z and numbers
  // including space, - and _
  // /[\W_]/g will result in the same thing - w = word characters, W = non-word characters
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}

function palindrome(str) {
  // same thing as above but we only have to iterate through half of the string
  str = str.toLowerCase().replace(/[\W_]/g, "");
  for (let i = 0, len = str.length - 1; i < len / 2; i++) {
    // compare first and last letter and so on (2nd and next to last)
    // EX: notapalindrome
    // n !== e return false right away
    // EX: r a c e c a r length = 7 - 1 = 6 | i < 3
    //     0 1 2 3 4 5 6
    //     r    !==    r    false
    //       a  !==  a      false
    //         c!==c        false
    // Done return true. Since this string length is odd, no need to check middle letter
    // It's self explainatory for even length
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}

palindrome("My age is 0, 0 si ega ym.");

// palindrome("eye") should return a boolean.
// palindrome("eye") should return true.
// palindrome("_eye") should return true.
// palindrome("race car") should return true.
// palindrome("not a palindrome") should return false.
// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("never odd or even") should return true.
// palindrome("nope") should return false.
// palindrome("almostomla") should return false.
// palindrome("My age is 0, 0 si ega ym.") should return true.
// palindrome("1 eye for of 1 eye.") should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.
// palindrome("five|\_/|four") should return false.
