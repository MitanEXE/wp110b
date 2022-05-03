function factor(x){
    var a = [];
    for(let i = 2; i <= x;i++){
        if(x % i == 0){
            a.push(i);
            x /= i;
            i = 1;
        }
    }
    return a;
}

console.log(factor(45));
