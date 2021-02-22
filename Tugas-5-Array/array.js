console.log("=====================================")
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
console.log("=====================================")
// function rangeWithStep(startNum, FinishNum, step) {
//     var x=[];
//     for (i = startNum; i <= FinishNum; i+= step){
//         x.push(i)
// } for (i = startNum; i >= FinishNum; i-= step){
//     x.push(i)
// }   if (startNum == null || FinishNum == null) {
//     x = -1
// }
// return x;
// }
// console.log(rangeWithStep(1, 10, 2))
// console.log(rangeWithStep(11, 23, 3)) 
// console.log(rangeWithStep(5, 2, 1)) 
// console.log(rangeWithStep(29, 2, 4)) 
// console.log("=====================================")
// function rangeWithStep(startNum, FinishNum, step) {
//     var x=[];
//     for (i = startNum; i <= FinishNum; i+= step){
//         x.push(i)
// } for (i = startNum; i >= FinishNum; i-= step){
//     x.push(i)
// }   if (startNum == null || FinishNum == null) {
//     x = -1
// }
// return x;
// }
// function sum(awalderet, angkaakhirderet, step2) {
//     for (j = awalderet; )
// }