function pathSum (node, total) {

    if (node === null)
    {
        return 0;
    }

    let remaining =  total - node.val
    if(node.left ===null && node.right ===null)
    {
        return remaining ===0;
    }
  
    return pathSum(node.left, remaining) || pathSum(node.right, remaining);
}