const twoIntegers = (target, numbers)=> {

  let mySet = new Set(numbers);

  for (let num of numbers) {

    const remandier = target /  num;

    if (mySet.has(remandier)) {
      return [num, remandier]
    }
  }

  return null;

}

console.log(twoIntegers(20, [3, 4, -2, 5, 6]))