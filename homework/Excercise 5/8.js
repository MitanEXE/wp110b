function add(x,z)
{
    if(x.length == z.length && x[0].length == z[0].length){
        var y = Array.from(Array(x[0].length), () => new Array(x[0].length));
        for (let i = 0; i < x.length; i++)
        {
            for (let j = 0; j < x[0].length; j++)
            {
                y[j][i] = x[i][j] + z[i][j];
                console.log(y);
            }
        }
    }
}

add([[1,2],[3,4]], [[1,1],[1,1]]);
