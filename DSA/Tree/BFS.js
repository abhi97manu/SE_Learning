function bfs(root)
{
    let queue = [root]
    let front =0;

    while(queue.length > 0)
    {
        let node = queue[front++]
        console.log(node.val)

        if(node.left)
        {
            queue.push(node.left);
        }
        if(node.right)
        {
            queue.push(node.right)
        }
    }
}
