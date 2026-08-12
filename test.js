function findPeak(arr)
{
    let left = 0;
    let right = arr.length -1;
    let mid =0;
    while (left< right)
    {
        mid = Math.floor((right+left)/2)
     
        
     if(arr[mid]< arr[mid+1] )
        {
            left = mid+1;
        }
        else {
                right = mid;
            }
        
    }
    return left;
}

const peak = findPeak([1,2,3,3,4,3])
console.log(peak);