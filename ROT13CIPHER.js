function rot13(str) { // LBH QVQ VG!
  let newArr = str.split('');
  let regEx = /[A-Z]/;

  for(let i = 0; i < newArr.length; i++) {
    // check if value == any letter between A-Z
    // if not just ignore it
    if(regEx.test(newArr[i])) {
      // if it is check if its charcode is less than 78
      if(str.charCodeAt(i) < 78) {
        // if so + 13 => convert it to letter
        newArr[i] = String.fromCharCode(str.charCodeAt(i)+13);
      } else {
        // else - 13
        newArr[i] = String.fromCharCode(str.charCodeAt(i)-13);
      }
      
    }
  }
  
  return newArr.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

// rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
// rot13("SERR CVMMN!") should decode to FREE PIZZA!
// rot13("SERR YBIR?") should decode to FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.