class Animal {
   constructor(name) {
       this.name = name;
       this.legs = 4;
       this.cold_blooded = false
   } get aleg() {
    return this.legs;
   } set aleg(x){
    this.legs = x;
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
    } get aleg() {
        return this._legs;
       } set aleg(x){
        this._legs = x;
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