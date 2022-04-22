// Using Basic Way
// let a = 8; // input
// let b = 2; //default number to test it out

// for (let index = 0; index < a; index++) {
//         if(a == 2 || a == 1){
//             console.log("2 is prime number but 1 isnt prime number");
//             break;
//         } else if((a / b++) == 2){
//             console.log("%s isnt Prime number", a);
//             break;
//         } else if((a / b++) == 1 ){
//             console.log("%s is Prime number", a);
//         }
// }


// Using Functions
let a = 11 ;// Input
function prime(param, params){
    if(param == 2 || param == 1){
        console.log("2 is prime number but 1 isnt prime number");
        return;
    } else if((param / params) == 2){
        console.log("%s isnt Prime number", a);
        return;
    } else if((param / params) == 1 ){
        console.log("%s is Prime number", a);
        return;
    }
    prime(param, params + 1);
}

prime(a,2);
