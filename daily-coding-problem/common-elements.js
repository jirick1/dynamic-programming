const common_elements = (arr1, arr2) => {

  let commonItems = []
  let set = new Set(arr1);

  for (let num of arr2) {
    if (set.has(num)) {
      commonItems.push(num)
    }
  }

  return commonItems
}

list_a1 = [1, 3, 4, 6, 7, 9]
list_a2 = [1, 2, 4, 5, 9, 10]
console.log(common_elements(list_a1, list_a2)) //#should return [1, 4, 9] (a list).

list_b1 = [1, 2, 9, 10, 11, 12]
list_b2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]
console.log(common_elements(list_b1, list_b2))  //should return [1, 2, 9, 10, 12] (a list).

list_c1 = [0, 1, 2, 3, 4, 5]
list_c2 = [6, 7, 8, 9, 10, 11]
console.log(common_elements(list_c1, list_c2)) //should return [] (an empty list).



const common_elements2 = (arr1, arr2) => {

  var p1 = 0, p2 = 0;
  var result = [];

  while(p1 < arr1.length && p2 < arr2.length) {

    if (arr1[p1] == arr2[p2]) {
      result.push(arr1[p1])
      p1+=1;
      p2+=1;
    }
    else if (arr1[p1] > arr2[p2]) {
      p2+=1
    }
    else {
      p1+=1
    }
  }

  return result
}

list_a1 = [1, 3, 4, 6, 7, 9]
list_a2 = [1, 2, 4, 5, 9, 10]
console.log(common_elements2(list_a1, list_a2)) //#should return [1, 4, 9] (a list).

list_b1 = [1, 2, 9, 10, 11, 12]
list_b2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]
console.log(common_elements2(list_b1, list_b2))  //should return [1, 2, 9, 10, 12] (a list).

list_c1 = [0, 1, 2, 3, 4, 5]
list_c2 = [6, 7, 8, 9, 10, 11]
console.log(common_elements2(list_c1, list_c2)) //should return [] (an empty list).

