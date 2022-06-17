function gcd(a, b)
{
    if (a % b == 0) return b;
    else return gcd(b, a % b);
}

function lcm(a, b)
{
    return Math.abs(a * b) / gcd(a, b);
}

class Ratio
{
    constructor(a, b)
    {
        this.a = a;
        this.b = b;
    }

    add(x)
    {
        return new Ratio(this.a * (lcm(this.b, x.b) / this.b) + x.a * (lcm(this.b, x.b) / x.b), lcm(this.b, x.b));
    }
    sub(x)
    {
        return new Ratio(this.a * (lcm(this.b, x.b) / this.b) - x.a * (lcm(this.b, x.b) / x.b), lcm(this.b, x.b));
    }
    toString()
    {
        return this.a + "/" + this.b;
    }
}

var r1 = new Ratio(1,3), r2 = new Ratio(2,4);
var r3 = r1.add(r2);
console.log(r3.toString());
