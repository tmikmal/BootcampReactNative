console.log("=====================================")
var pertama = 2;
var kedua = 20;
console.log("Looping Pertama ");
         
            while (pertama <= 20) {
               console.log(pertama + " - I Love Coding");
               pertama+=2;
            } 
console.log("Looping Kedua");
            while (kedua >= 2) {
              console.log(kedua + " - I Will Become a Mobile Developer");
              kedua-=2;
            }
console.log("=====================================")
var i;
for(i = 1; i <= 20; i++){
  if(i % 2 == 0){
    console.log(i + ' - Berkualitas');
  } if(i % 2 == 1){
   if(i % 3 == 0){
    console.log(i + ' - I Love Ngoding'); 
  }
  else {
    console.log(i + ' - Santai');
  }
  }
}
console.log("=====================================")
for(l=1;l<=4;l++){
  for(p=1;p<=8;p++){
      process.stdout.write('#');
  }
  process.stdout.write('\n')
}

console.log("=====================================")
for(l=1;l<=7;l++){
  for(p=1;p<=l;p++){
      process.stdout.write('#');
  }
  process.stdout.write('\n')
}
console.log("=====================================")
for(l=1;l<=8;l++){
  for(p=1;p<=8;p++){
    if (l % 2 == 0) {
      if (p % 2 == 0){
        process.stdout.write(' ');
      } else {
        process.stdout.write('#');
      }   
    } else {
      if (p % 2 == 0){
        process.stdout.write('#');
      } else {
        process.stdout.write(' ');
      }
    }
    
  } 
  process.stdout.write('\n');
}