class Animal {
   constructor(name) {
       this.name = name;
       this.legs = 4;
       this.cold_blooded = false
   }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
console.log("=====================================")
// Code class Ape dan class Frog di sini
class Ape extends Animal {
    constructor(name,ape) {
        super(name);
        this.ape = ape;
        this.yell = "Auooo"
    }
}
var sungokong = new Ape("kera sakti")
sungokong.legs = 2
console.log(sungokong.name) 
console.log(sungokong.legs) 
console.log(sungokong.cold_blooded) 
console.log(sungokong.yell) 
console.log("=====================================")
class Frog extends Animal {
    constructor(name,frog) {
        super(name);
        this.frog = frog;
        this.jump = "hop hop"
    }
}
var kodok = new Frog("buduk") 

console.log(kodok.name) 
console.log(kodok.legs) 
console.log(kodok.cold_blooded) 
console.log(kodok.jump) 
console.log("=====================================")
// function Clock({ template }) {
  
//     var timer;
  
//     function render() {
//       var date = new Date();
  
//       var hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       var mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       var secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       var output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  
//   var clock = new Clock({template: 'h:m:s'});
//   clock.start(); 
// //   function di atas diubah menjadi struktur class seperti berikut:
  
//   class Clock {
//       constructor(timer) {
//           this.timer = timer;
//           this.template = 'h:m:s';
//       }
//   }
  
//   var clock = new Clock({template: 'h:m:s'});
//   clock.start();  