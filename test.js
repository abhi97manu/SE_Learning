function DailyTemp(arr){
    let stk = [];
    let diffDays = Array.from(arr.length).fill(0);

    for(let i = 0;i<arr.length;i++)
    {
        let temp = arr[i];
        while(stk.length > 0 && stk[stk.length-1][0] < temp)
        {
            const [stackTemp, stackIndex] = stk.pop();
            diffDays[stackIndex] = i - stackIndex;
        }
        
        stk.push([arr[i],i]);

    }

    return diffDays;
}


const temp = [73,74,56,21,73,78,23]

console.log(DailyTemp(temp))

