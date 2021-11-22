const countOccurrences = function (arr: Array<string>) {
  return arr.reduce((a, v) => {
      let c = a[v];
      if (c) {
          a[v] = c + 1
      } else {
          a[v] = 1
      }
      return a
  }, {} as { [key: string]: number })
}
