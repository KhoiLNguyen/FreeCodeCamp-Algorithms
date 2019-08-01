function convertToRoman(num) {

    // Store the common numbers of decimal and roman numerals that equivalent to it
    let decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let romanNum = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

    let romanized = '';

    // Start from index 0 of decimalValue array with for loop
    for(let i = 0; i < decimalValue.length; i++) {
        // Then do the calculation in while loop
        // for Example: while(1000 <= 2014) true
        // romanize = '' + M = M | num = 2014 - 1000 = 1014
        // while(1000 <= 1014) true
        // romanize = M + M = MM | num = 1014 - 1000 = 14
        // while(1000 <= 14) false break out of while loop and continue with for loop
        // while(900 <= 14) false break out of while loop and continue with for loop
        // and so on
        while(decimalValue[i] <= num) {
            romanized += romanNum[i];
            num -= decimalValue[i]
        }
    }

 return romanized;
}

convertToRoman(36);

// convertToRoman(2) should return "II".
// convertToRoman(3) should return "III".
// convertToRoman(4) should return "IV".
// convertToRoman(5) should return "V".
// convertToRoman(9) should return "IX".
// convertToRoman(12) should return "XII".
// convertToRoman(16) should return "XVI".
// convertToRoman(29) should return "XXIX".
// convertToRoman(44) should return "XLIV".
// convertToRoman(45) should return "XLV"
// convertToRoman(68) should return "LXVIII"
// convertToRoman(83) should return "LXXXIII"
// convertToRoman(97) should return "XCVII"
// convertToRoman(99) should return "XCIX"
// convertToRoman(400) should return "CD"
// convertToRoman(500) should return "D"
// convertToRoman(501) should return "DI"
// convertToRoman(649) should return "DCXLIX"
// convertToRoman(798) should return "DCCXCVIII"
// convertToRoman(891) should return "DCCCXCI"
// convertToRoman(1000) should return "M"
// convertToRoman(1004) should return "MIV"
// convertToRoman(1006) should return "MVI"
// convertToRoman(1023) should return "MXXIII"
// convertToRoman(2014) should return "MMXIV"
// convertToRoman(3999) should return "MMMCMXCIX"