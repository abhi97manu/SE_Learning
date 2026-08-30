function MaxVowel(aa, k)
{
    const arr = aa.split('')
   
    let currentMax = 0
    let MaxVowel = 0;

    for (let i =0; i<k;i++)
    {   
        currentMax += isVowel(arr[i]);
       console.log("first max ", currentMax)
    }
    function isVowel(value){
      
        if(value == 'a' || value == 'e' || value == 'i' || value =='o' || value == 'u') return 1

        return 0
    }

    for(let i = 1 ; i< arr.length-k ; i++)

        {
            currentMax += isVowel(arr[i+k -1]) - isVowel(arr[i-1])
            console.log("next max ", currentMax)
            MaxVowel = Math.max(currentMax,MaxVowel); 
        }

        return MaxVowel;
}

let s = 'leetcode';

let val = MaxVowel(s, 3)
 
console.log(val);