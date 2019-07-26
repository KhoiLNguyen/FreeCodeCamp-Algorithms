
function steamrollArray(arr) {
  // I'm a steamroller, baby
  let flattenArray = [];
  
  flattenArray(arr);

  function flatten(arr) {
    // goes through each value of array check if it is array or not
    // if not push to flattenArray
    arr.forEach((arr2) => {
      if(!Array.isArray[arr2]) {
        flattenArray.push(arr2);
      } else { // if it is pass that array to flatten function again to flatten it
        flatten(arr2);
      }
    })
  }

  return flattenArray;

  // Another way to do it
  // .flat() flatten array of arrays based on the depth you specify
  // return arr.flat(5);
}

steamrollArray([1, [2], [3, [[4]]]]);