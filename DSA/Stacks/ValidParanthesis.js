function ValidParanthasis (arr)
{
    const a = arr.split('');

    const paranPairs = new Map([
        [']','['],
        [')','('],
        ['}','{']])
    let latestParan = '';
    let st = [];

    for (let i = 0 ; i< a.length ; i ++)
    {
         if (st.length === 0) {
                return false;
            }

        
        if(a[i] === ')' || a[i] === '}'|| a[i] === ']')
        {
            console.log("found",a[i])
            // if(st === null) return
            latestParan = st.pop();
            console.log("pop",latestParan);
            if(paranPairs.get(a[i]) !== latestParan) return false
            
        }
        else{
console.log("push",a[i])
        st.push(a[i]);
        }
         
    }
    return st.length === 0;
    
}

let ex = '{([]{}})}';
console.log(ValidParanthasis(ex));