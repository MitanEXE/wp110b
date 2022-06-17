class Vector {
  constructor(array) {
    this.a = array
  }

  length() {
    var x =0;
    for(let i=0;i<this.a.length;i++){
      x += Math.pow(this.a[i],2);
    }
    return Math.sqrt(x);
  }

  neg() {
    var x = [];
    for(let i=0;i<this.a.length;i++){
      x[i]=-this.a[i];
    }
    return new Vector(x);
  }

  add(y) {
    var x = [];
    for(let i=0;i<this.a.length;i++){
      x[i]=this.a[i]+y.a[i];
    }
    return new Vector(x);
  }

  sub(y) {
    return this.add(y.neg());
  }

  dot(y) {
    var x=0;
    for(let i=0;i<this.a.length;i++){
      x += this.a[i] * y.a[i];
    }
    return x;
  }

  distance(y) {
    return this.sub(y).length();
  }

  toString() {
    return this.a.toString();
  }
}
let x = new Vector([1,2,3]);
let y = new Vector([2,3,4]);
console.log(x);
console.log('p = ('+ x.toString()+')');
console.log('p.length = ', x.length());
console.log('p.neg = ('+ x.neg().toString()+')');
console.log('p.add(p2) = ('+ x.add(y).toString()+')');
console.log('p.sub(p2)=('+ x.sub(y)+')');
console.log('p.dot(p2)=', x.dot(y));
console.log('p.sub(p2).length()=', x.sub(y).length());
console.log('p.distance(p2)=', x.distance(y));
