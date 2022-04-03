// IIFE >> Immediately Invoked Function Expression 

let cl = console.log;

// function init() {
//     var x = 10;
//     var y = 20;
//     let result = x + y;
//     return result;
// }

// init();



(
    function () {
        //     var x = 10;
        //     var y = 20;
        //     let result = x + y;
        //    cl(result)

        function init() {
            var x = 10;
            var y = 20;
            let result = x + y;
            return result;
        }
        cl("Output of init ", init())
    })()


// export function test() {

// }