function deepSum (arr) {
    var allNumArr = [];
  
    if (arr[0] === undefined) {
      return 'No number';
    }
  
  
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        for (var k = 0; k < arr[i][j].length; k++) {
          allNumArr.push(arr[i][j][k])
        }
      }
    }
  
    var totalSum = 0;
  
    for (var a = 0; a < allNumArr.length; a++) {
      totalSum = totalSum + allNumArr[a];
    }
    return totalSum;
  }
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number