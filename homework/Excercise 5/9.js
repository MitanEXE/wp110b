function f(x){
    if(x !== 0){
        for(let i = 0;i < 1;i++){
            x += x - 1;
        }
    } 
    console.log(x);
}

f(0);
