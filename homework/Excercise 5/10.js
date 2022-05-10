function integral(f, u, v)
{
    let calc = 0;
    for(let i = u;i <= v;i += 0.01){
        calc += f(i) * 0.001;
    }
        console.log(calc);
}

integral((x)=>x*x, 0, 1);
