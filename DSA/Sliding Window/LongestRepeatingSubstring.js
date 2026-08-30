function longestRepeatingChar(a,k)
{
    const arr = a.split('')
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;
    let map = new Map();

    for(let right =0; right < arr.length ; right ++)
    {
        char = arr[right]
        map.set(char, (map.get(char)||0)+1)

        maxFreq = Math.max(maxFreq, map.get(char));
          

        while((right-left +1) - maxFreq > k)
        {
           
            map.set(arr[left], map.get(arr[left])-1)
            left++;
        }
        maxLength = Math.max(maxLength , (right-left)+1)
    }

    return maxLength

}

const  s = 'aabbbbb'
let ans = longestRepeatingChar(s,1)
console.log(ans)