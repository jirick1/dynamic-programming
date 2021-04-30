var productArray = function(arr) {

  var idx = 0;
  var results = []
  
  while(idx != arr.length) {
    var total = 1; 
    for(let i = 0; i < arr.length; i++) {
      if (idx!=i) {
        total*=arr[i];
      }
    }

    results.push(total);
    idx++;

  }
  return results
}

console.log(productArray([3, 2, 1]))       // expect: [2, 3, 6]
console.log(productArray([1, 2, 3, 4, 5])) // expect: [120, 60, 40, 30, 24]