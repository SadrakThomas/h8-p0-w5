function highestScore (students) {
    var classObj = {}
    var classArr = []
    var dataArr = []
  
    for (var i = 0; i < students.length; i++) {
      if (classObj[students[i].class] === undefined) {
        classObj[students[i].class] = {}
        classArr.push(students[i].class)
        dataArr.push([])
      }
      for (var j = 0; j < classArr.length; j++) {
        if (students[i].class === classArr[j]) {
          dataArr[j].push([students[i].name, students[i].score])
        }
      }
  
      for (var k = 0; k < dataArr.length; k++) {
        var highest = 0;
        var highestIndex= 0;
        for (var l = 0; l < dataArr[k].length; l++) {
          if (highest < dataArr[k][l][1]) {
            highest = dataArr[k][l][1]
            highestIndex = l
          }
        }
        classObj[classArr[k]].name = dataArr[k][highestIndex][0]
        classObj[classArr[k]].score = dataArr[k][highestIndex][1]
      }
  
    }
    return classObj
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}