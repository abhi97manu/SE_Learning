function bfs(root)
{
    let queue = [root]
    let front =0;

    let levelSize= 0;
    let array = []
    let result = [];

    while (queue.length > 0)
    {
        
        levelSize = queue.length - front;
        for (let i = 0; i< levelSize; i++)
        {
            let node = queue[front++]
            array.push(node.val)

            if(node.left)
            {
                queue.push(node.left)
            }
            if(node.right)
            {
                queue.push(node.right)
            }
        }

        result.push(array)


    }
}


