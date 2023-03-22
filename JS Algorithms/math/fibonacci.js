function fib(n) {
  const numebrs = [1, 1]

  for (let i = 2; i < n + 1; i++) {
    numebrs.push(numebrs[i - 2] + numebrs[i - 1])
  }

  return numebrs[n]
}

console.log(fib(4))
