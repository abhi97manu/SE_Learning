function mergeInterval(arr)
{
    if(arr.length <= 0) return [];

    const result = [arr[0]];
    for(let i = 1; i < arr.length - 1; i++)
    {
        const current  = result[result.length - 1];
        const next = arr[i]

        if(current[1] >= next[0])
            {
                current[1] = Math.max(current[1], next[1]);
            }
        else{
            result.push(next);
        }
        
    }
    return result;
}

const res = mergeInterval([[1, 3], [2, 4], [5, 7], [6, 8]]);

console.log(res);