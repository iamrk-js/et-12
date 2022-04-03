let cl = console.log;

function outerFunction() {
    var a = 10;
    function innerFunction() {
        function inner2Function() {
            return a;
        }
        return inner2Function
    }
    a = 100;
    return innerFunction;

}


let getValue = outerFunction();
cl(getValue);

let getNewValue = getValue();
cl(getNewValue);

let data = outerFunction()()();
cl("data", data)