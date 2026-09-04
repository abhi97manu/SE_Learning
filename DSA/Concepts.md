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

## Longest Repeating Substring
**Problem statement ask to find the longest substring having repeating characters by changing charaters k times**
The approach here is to use variable sliding window algorithm. Will start with left =0 and maxFrequency = 0. for each char in the array we will store its freq in map and get the max frequency (Math.max(maxfreq , the freq of current character)). nopw with the current window size we need to check if the window size - maxfreq > k .why ?? cause we need to check from current window sixe what is the max count of any character, so if we subtract that with window size ..that number of element we need to change .. if that comes out greater than allowed number of changes(k) then only we move left pointer (since we are not allowed to change more than k we change our window). then we return the max length.


## Valid Paranthesis
**Problem is to check if the given string has proper paranthesis or not**
The idea is that we create a hashmap with open and close key -value pair..and maintan a stack.. cause we will be dealing with latest elemnt of the stack.. so we keep on pushing the open paranthesis into the stack. As soon as we find the close one we will check the lenght of stack , if it is 0 that means it is empty..if not we will pop the elemnt and compare that with the hashmap value...if all the elements are covered then we can retrun true.

## Min Stack
**Create a minstack that will have push, pop, top and minVal with O(1)time complexity**
To solve this we need two stacks, one regular and the other that will hold the minimum stack. Since minimum stack will have all these function we will create a class with these as its methods. for push fn we will insert into the stack and cehck if the minstack is empty or the value pushing is less then the top value in minstack (since we want the stack to hold min value on top) if not we will push the top element of the minstack again. For Pop fn , we will simply pop out from stack and miinstack both. For top and get min fn we will return the minstack.length -1 value.

## Daily Temperature
**Find how many days one must wait until a warmer temperature occurs**
To solve this we will use monotonic Stack(stack flows in one direction asc or desc). the concept is to have a stack whihc will keep the temperature and the index ( [StackTemp, StackIndex]) of it. why index ?? cause the difference between the current element index and the last element in stack's index will be the number of days until warmer temperature. Also we will need another array of days filled with 0. Now for each elemnt we will keep on cehcking if the stack is not empty and last element's temp is less than the current temp, if so that means we got the warmer day and we will subtract the current index and last element idex to get the days difference and will the days array index. the check will continue untill we hit the bottom of the stack or the current temp is colder than the stacks last temp. 
n such a way we  will loop through this monotonic stack pushing the current temp into this stack. 

## Find Peak

*As per the problem statement, we need to find any peak in the given array. It doesnt have to be the highest peak.*

**Mental model** : The idea is to find the mid of the array and then search the nearest bigger value. lets say the left one is the bigger that means we are going uphil on left, indicating the peak lies there and move one of our pointer in that direction then we again find the mid. until left is greater than right pointer.



## Merge Intervals

*Per the problem statement, we need to merge overlapping intervals so that we consider the earliest start time and the latest end time among the given intervals*

**Mental Model** : first we have to sort the array on the basis of the first element i.e a[0]-b[0] ..once done we will keep the first array element as the result and then loop through the whole interval array and calculate current and next subArray.. current will be the result[result.length-1] (the latest array in the result that we pushed). next will be intervals[i].
then we will conpare next[0] < current[1] , that means it overlaps and we have to take the max of current[1] , next[1] . else we push the next to the result array and retur result when lopp ends
**important concept : we referenced the result array as current , so when we update the current[1], result[1] wil get updated**


## Linked List 
**Design a linked List**
The concept of linked list is to connect all the nodes. a Node is made up of a value it stores and the next pointer it is going to link. So we create a Node class, an Entity. After that we will focus on the system as whole . The linkedlist starts with head which points to first element. Now there are multiple fn inside the linked list: 

append() : create a new Node and  initialise the current pointer then loop through until the current.next is not null (cause we are appending at the end) assigning the current value to current.next. when we reach we simply add the new node to current.next.

getAll () : loop through until current becomes null. log the current.val and assign current.next to current;


## Remove Nth Element from End of List ##
**As the topic suggest remove the node from nth position from end**

We will be given a list and the nth. THe approah will be using two pointers, left pointing to dummy and right pointing to list head and a dmmy node that will point to list head. then we will loop through right to be places at nth distance from left. why ?? because once right reached the end ..left pointer will be pointing to the nth from end. Then we traverese until right is not null.. and once there come out of loop and assign left.next.next to the left.next.. to delte the element


## Tree Depth ##
**Problem is to find depth in a tree**
The tree consist of nodes (val, left,right). since at every node we need to check the condition it is prefere to use recursion. Now we will hcekc the base case , if node ==null we will return 0 , if there is no node then depth is 0. then we will maintain left and right , both will have call the recursion function with node.left and node.right respectively. then we will return max of left and right values + 1 (last node depth is considered 1)