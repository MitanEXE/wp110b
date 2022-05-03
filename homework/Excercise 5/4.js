function filter357(x,y){
    var result = [];
    
    for(var i = x; i <= y;i++){
        if(i % 3 != 0 && i % 5 != 0 && i % 7 != 0){
            result.push(i);
        }
    }
    return result;
}

console.log(filter357(5,15));
console.log(filter357(5,10));
