
let maxDiamemter = 0
function longestPath (node) {

    
    if (node === null)
    {
        return 0;
    }

   let Lheight = longestPath(node.left);
   let Rheight = longestPath(node.right);

    maxDiamemter = Math.max(maxDiamemter , Lheight + Rheight );
   return 1+ Math.max(Lheight, Rheight);
}