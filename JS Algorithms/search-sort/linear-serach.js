function findElement(arr, element) {
  let index = 0

  for (const item of arr) {
    if (item == element) {
      return index
    }

    index++
  }
}

const numbers = [5, 3, 10, 51, 22]

console.log(findElement(numbers, 10))
