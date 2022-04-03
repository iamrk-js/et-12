function Circle(rad){
    this.radius = rad;
    this.draw = function(){
        console.log('Draw the Circle')
    }
}
let cl = console.log;
let circle = new Circle(10);
console.log(circle);

for (let key in circle){
    // console.log(circle.key)
    // console.log(circle[key])
    if(typeof circle[key] !== 'function'){
        console.log(circle[key])
    }
}


const keys = Object.keys(circle);
console.log(keys);
cl('radius' in circle)
if('radius' in circle){
    console.log("Circle has a radius")
}

cl('diameter' in circle);

if('diameter' in circle){
    console.log("Circle has a Diameter")
}else{
    console.log("Circle don't have a Diameter")
}

// let d = new Date();
// console.log(typeof d)
// let dateKeys = Object.keys(d);
// console.log(dateKeys);