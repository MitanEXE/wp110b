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
    mul(x)
    {
        return new Ratio(this.a * x.a, this.b * x.b);
    }

    div(x)
    {
        return new Ratio(this.a * x.b, this.b * x.a);
    }
    reduce()
    {
        var z;

        if (this.a < this.b) z = this.a;
        else z = this.b;

        for (let i = 2; i <= z; i++)
        {
            if (this.a % i == 0 && this.b % i == 0)
            {
                this.a /= i;
                this.b /= i;
                z /= i;
                i = 1;
            }
        }
    }

    toString()
    {
        return this.a + "/" + this.b;
    }
}

var r1 = new Ratio(6,9);
r1.reduce();
console.log(r1.toString());
