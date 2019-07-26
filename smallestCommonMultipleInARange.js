function smallestCommons(arr) {
  arr.sort((a,b) =>  b - a) // sort descending

  let range = [];
  // push all the numbers in the given range in array
  for(let i = arr[0]; i >= arr[1]; i--) {
    range.push(i);
  }

  // using euclidian algorithm
  let lcm = range[0];
  for(let i = 1; i < range.length; i++) {
    let GCD = gcd(lcm, range[i])
    lcm = (lcm * range[i]) / GCD;
  }

  return lcm;

}

// function to find greatest common denominator
function gcd(a,b) {
  if(!b) {
    return a;
  }
  return gcd(b, (a%b));
}



smallestCommons([1,5]);

// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.