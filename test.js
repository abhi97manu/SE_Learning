class minstack{
    constructor(){
        this.stk = [];
        this.minstk = [];

    }

    push(val){
        this.stk.push(val);
        if(this.minstk.length === 0 || val <= this.minstk[this.minstk.length-1])
        {
            this.minstk.push(val);
        }
        else{
            this.minstk.push(this.minstk[this.minstk.length - 1 ])
        }
    }

    pop()
    {
        this.stk.pop();
        this.minstk.pop();
    }

    top()
    {
        return this.minstk[this.minstk.length -1]
    }

    getmin()
    {
         return this.minstk[this.minstk.length -1]
    }
}


let ex = new minstack();

ex.push(5);
ex.push(6);
ex.push(1);
ex.push(-1);
ex.pop();
ex.pop();
console.log(ex.top());
console.log(ex.getmin());


