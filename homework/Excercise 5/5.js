function average(x){
    var a = 0;
    for(let i in x){
        a += x[i];
    }
    console.log(a / x.length);
}

average([1,2,3,4,5]);
