function findElement(sortedArr, element) {
  let startIndex = 0
  let endIndex = sortedArr.length - 1

  const middleIndex = Math.floor((endIndex - startIndex) / 2)

  if (element == sortedArr[middleIndex]) {
    return middleIndex
  }
}

const numbers = [3, 5, 10, 22, 51]

console.log(findElement(numbers, 10))
