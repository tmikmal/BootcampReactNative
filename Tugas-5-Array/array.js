function range(startNum, FinishNum) {
    if (startNum <= FinishNum){
        var x=[];
        for (i = startNum; i <= FinishNum; i++){
            x[i] = i;
        } 
    } else if(startNum == null && FinishNum == null) {
        return x=-1;
    }
    else {
        var x=[];
        for (i = startNum; i >= FinishNum; i--){
            x[i] = i;
        }
        x.reverse();
    }
     return x;
  } 
  console.log(range(1,10))
  console.log(range(11,18))
  console.log(range(54, 50))
  console.log(range())
//   var numbers = [0, 1, 2, 3]
// numbers.unshift(-1) 
// console.log(numbers) // [-1, 0, 1, 2, 3]