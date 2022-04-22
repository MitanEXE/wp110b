// Basic way, without Functions
// let a = 10; // input
// let b = a; // storing data
// for (let index = a; index > 1; index--) {
//     b *= index;
// }
// console.log("%s! = %s",a,b);

// Using Functions
let a = 10;
let b = a;
function factorial(params){
    b *= params;
    if(params == 1){
        console.log(b);
    } else {
        factorial(params-1);
    }
}

factorial(a-1);
