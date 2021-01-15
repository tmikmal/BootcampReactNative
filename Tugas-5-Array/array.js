function range(startNum, FinishNum) {
        var x=[];
        for (i = startNum; i <= FinishNum; i++){
            x.push(i)
    } for (i = startNum; i >= FinishNum; i--){
        x.push(i)
    }   if (startNum == null || FinishNum == null) {
        x = -1
    }
    return x;
}

  console.log(range(1,10))
  console.log(range(1))
  console.log(range(11,18))
  console.log(range(54, 50))
  console.log(range())
