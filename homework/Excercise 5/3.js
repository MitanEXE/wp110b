let a = 11; // input
let b = 2; //default number to test it out

for (let index = 0; index < a; index++) {
        if(a == 2 || a == 1){
            console.log("2 is prime number but 1 isnt prime number");
            break;
        } else if((a / b++) == 2){
            console.log("%s isnt Prime number", a);
            break;
        } else if((a / b++) == 1 ){
            console.log("%s is Prime number", a);
        }
}
