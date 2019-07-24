function pairElement(str) {
  // Use js object to keep track of DNA pair
  let DNA = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }

  // split tring to array of letters
  let copyStr = str.split('');

  // use map to return array of DNA pairs
  return copyStr.map(letter => [letter, DNA[letter]]);
}

pairElement("GCG");

// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].