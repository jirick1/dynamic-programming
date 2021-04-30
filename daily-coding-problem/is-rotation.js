var a = [1, 2, 3, 4, 5, 6, 7]
var b = [5, 6, 7, 1, 2, 3, 4]

const isRotation = (a, b) => {
  if (a.length !== b.length) return false;

  var bDealth = b.indexOf(a[0])
  if (bDealth == -1) return false

  for (let i = 0; i < a.length; i++) {
    var bIndex = (bDealth + i) % a.length // remainder
    if (a[i] != b[bIndex]) return false;
  }

  return true
}

var a = [1, 2, 3, 4, 5, 6, 7]
var b = [5, 6, 7, 1, 2, 3, 4]
console.log(isRotation(a, b))

var c = [4, 6, 5, 7, 1, 2, 3]
console.log(isRotation(a, c))


/**
Python solution

# Implement your function below.
def is_rotation(a, b):
    if len(a) != len(b):
        return False
    try:
        bDealth = b.index(a[0])
    except:
        return False

    for index, element in enumerate(a):
        if element not in b:
            return False
        bIndex = (bDealth+index) % len(a)
        if a[index] != b[bIndex]:
            return False
    return True

list1 = [1, 2, 3, 4, 5, 6, 7]
list2a = [4, 5, 6, 7, 8, 1, 2, 3]

print(is_rotation(list1, list2a)) # should return False.

list2b = [4, 5, 6, 7, 1, 2, 3]
print(is_rotation(list1, list2b)) #should return True.

list2c = [4, 5, 6, 9, 1, 2, 3]
print(is_rotation(list1, list2c)) #should return False.

list1 = [1, 2, 3, 4, 5, 6, 7]
list2d = [4, 6, 5, 7, 1, 2, 3]
print(is_rotation(list1, list2d)) #should return False.

list2e = [4, 5, 6, 7, 0, 2, 3]
print(is_rotation(list1, list2e)) #should return False.

list2f = [1, 2, 3, 4, 5, 6, 7]
print(is_rotation(list1, list2f)) #should return True.

list2g = [7, 1, 2, 3, 4, 5, 6]
print(is_rotation(list1, list2g)) #should return True.



*/