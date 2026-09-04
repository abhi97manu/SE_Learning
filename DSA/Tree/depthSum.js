function depthSum (node) {

    if (node === null)
    {
        return 0;
    }
    
    let left = depthSum(node.left);
    let right = depthSum(node.right);

    return 1 + Math.max(left,right);
}
