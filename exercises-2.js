function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
    if (arrPenumpang[0] === undefined) {
      return [];
    }
  
    var naikIndx = 0;
    var turunIndx = 0;
  
  
    for (var i = 0; i < arrPenumpang.length; i++) {
  
      var dataObj = {
        penumpang: arrPenumpang[i][0],
        naikDari: arrPenumpang[i][1],
        tujuan: arrPenumpang[i][2],
        bayar: 0
      }
  
      for (var j = 0; j < rute.length; j++) {
        if (dataObj.naikDari === rute[j]) {
          naikIndx = j
        }
        if (dataObj.tujuan === rute[j]) {
          turunIndx = j;
        }
      }
  
      var jarak = turunIndx - naikIndx;
  
      dataObj.bayar = jarak * 2000;
  
      console.log(dataObj);
    }
    return ''
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]