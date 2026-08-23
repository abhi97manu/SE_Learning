# 

## Headers


## Emphasis

**This whole file is for my understanding of the DSA concepts. How i see the approach and how i can tackle it.**  

##Two Sum
**Problem statement ask us to find the indices whose sum are equal to the target value**
The idea here is to initialise the hashmap. and for each element in array we get the difference of element value and the target (target - arr[i]). then we check if the hashmap has this value or not.. if not we save this value and the index of the current element.This way we can get the result .


## Find Peak

*As per the problem statement, we need to find any peak in the given array. It doesnt have to be the highest peak.*

**Mental model** : The idea is to find the mid of the array and then search the nearest bigger value. lets say the left one is the bigger that means we are going uphil on left, indicating the peak lies there and move one of our pointer in that direction then we again find the mid. until left is greater than right pointer.



## Merge Intervals

*Per the problem statement, we need to merge overlapping intervals so that we consider the earliest start time and the latest end time among the given intervals*

**Mental Model** : first we have to sort the array on the basis of the first element i.e a[0]-b[0] ..once done we will keep the first array element as the result and then loop through the whole interval array and calculate current and next subArray.. current will be the result[result.length-1] (the latest array in the result that we pushed). next will be intervals[i].
then we will conpare next[0] < current[1] , that means it overlaps and we have to take the max of current[1] , next[1] . else we push the next to the result array and retur result when lopp ends
**important concept : we referenced the result array as current , so when we update the current[1], result[1] wil get updated**
