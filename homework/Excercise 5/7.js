function transpose(x)
{
    var y = Array.from(Array(x[0].length), () => new Array(x.length));
    //console.log(y);
    //console.log(x);
    //console.log(x[0].length);
    for (let i = 0; i < x.length; i++)
    {
        for (let j = 0; j < x[0].length; j++)
        {
            y[j][i] = x[i][j];
        }
    }
    console.log(y);
}

transpose([[1,2,3], [3,2,1]]);
