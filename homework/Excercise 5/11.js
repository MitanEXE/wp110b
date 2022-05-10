class Ratio{
    
    constructor(a,b){
        this.x = a;
        this.y = b;
    }
    
    toString()
    {
        return this.x + "/" + this.y;
    }
}

var r1 = new Ratio(1,3);
console.log(r1.toString());
