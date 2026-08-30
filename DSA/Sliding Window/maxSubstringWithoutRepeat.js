function maxSubstring(arr)
{
    let a = arr.split('')
    let maxlength = 0;
    let seen = new Set()
    let left = 0;
    let index = []
    
    
    for(let right=0;right<a.length ; right++)
    {
        while(seen.has(a[right]))
        {
            seen.delete(s[left])
            left++
        }
            seen.add(a[right])
            maxlength = Math.max(maxlength, right-left +1)
         
    }
    return maxlength;
}

const  s = 'fleet'
let ans = maxSubstring(s)
console.log(ans)