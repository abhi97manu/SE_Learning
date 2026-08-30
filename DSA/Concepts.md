# 

## Headers


## Emphasis

**This whole file is for my understanding of the DSA concepts. How i see the approach and how i can tackle it.**  

## Max Vowel
**Problem Statement is to find max count of vowel present in substring of length k**
To solve this we use sliding window concept/algo we first loop through the first k element to get the count using function isVowel that return 1 or 0.
once we get the current max we will then loop through the 1st index to lenght - k and add on the isVowel(arr[i+k -1]) (cause we are adding the next value) and subtract the isVowel(arr[i-1] (cause we are getting rid of previous as we are moving the window forward)). This way we can get the current Max of the current window.. then we can take max out of it and return it


## Two Sum
**Problem statement ask us to find the indices whose sum are equal to the target value**
The idea here is to initialise the hashmap. and for each element in array we get the difference of element value and the target (target - arr[i]). then we check if the hashmap has this value or not.. if not we save this value and the index of the current element.This way we can get the result .

## Max Substring without Repeat
**Problem statement is that we have to fin the longest substring without repeating characters**

TO solve this we need variable sliding window  algo, which suggest hacing two pointers. So Right pointer will move forward and keep pushing the element into the set calculating the max length at each loop until it find already existing one. Once it fine that we will run a while loop and move our left pointer deleting the elemnts untill we get rid of the repeated element. THats it. then we will retunr the max length 

## Find Peak

*As per the problem statement, we need to find any peak in the given array. It doesnt have to be the highest peak.*

**Mental model** : The idea is to find the mid of the array and then search the nearest bigger value. lets say the left one is the bigger that means we are going uphil on left, indicating the peak lies there and move one of our pointer in that direction then we again find the mid. until left is greater than right pointer.



## Merge Intervals

*Per the problem statement, we need to merge overlapping intervals so that we consider the earliest start time and the latest end time among the given intervals*

**Mental Model** : first we have to sort the array on the basis of the first element i.e a[0]-b[0] ..once done we will keep the first array element as the result and then loop through the whole interval array and calculate current and next subArray.. current will be the result[result.length-1] (the latest array in the result that we pushed). next will be intervals[i].
then we will conpare next[0] < current[1] , that means it overlaps and we have to take the max of current[1] , next[1] . else we push the next to the result array and retur result when lopp ends
**important concept : we referenced the result array as current , so when we update the current[1], result[1] wil get updated**
