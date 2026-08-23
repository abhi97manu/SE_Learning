function twoSum(arr, target) {

    const map = new Map();
let result = []
    for (let i =0 ; i<=arr.length;i++)
    {
        const value = target - arr[i]
        if(!map.has(arr[i]))
        {
            map.set(value, i)
        }
        else{
            
         result = [map.get(arr[i]),i]
        }
       
    }
     return result;
  
}

const res = twoSum([2,7,11,15,23],18)

console.log(res)