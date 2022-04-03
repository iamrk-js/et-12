function Circle(rad) {
    this.radius = rad;
    let defaultLocation = { x: 0, y: 0 };
    let computeOptimumLocation = function () {
        // defaultLocation
    }
    this.draw = function () {
        computeOptimumLocation();
        console.log(`Draw the Circle with radius ${this.radius}`)
    }
    // this.getDefaultLocation = function(){
    //     return defaultLocation
    // }
    Object.defineProperty(this, 'defaultLocation',{
        get : function(){
            return defaultLocation
        },
        set : function(value){
            if(value.x && value.y){
                 defaultLocation = value;
                 cl("Location is set")
            }else{
                throw new Error("Invalid Location")
            }
        }
    })
}
let cl = console.log;
let circle = new Circle(10);
let circle2 = new Circle(20);
let circle3 = new Circle(30);
let circle4 = new Circle(40);

// circle.defaultLocation = false;
circle.draw();
// cl(circle.getDefaultLocation());
cl(circle.defaultLocation);
// circle.defaultLocation = 10;
circle.defaultLocation = {x : 10, y : 10};

// let d = new Date();
// console.log(typeof d)
// let dateKeys = Object.keys(d);
// console.log(dateKeys);

let person = {
    fname : "Jhons",
    age : 33,
    toString : function(){
        cl("Do Nothing")
    }
}


let ages = [20,35,5,63,58,49]