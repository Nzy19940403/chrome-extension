import React from "react";

export default function Lca(){
    
    let rootlist = [1,2,3,4,5,6,7,8]
    class TreeNode{
        val
        left:any
        right:any

        constructor(val:any){
            this.val = val;
            this.left = undefined;
            this.right = undefined
        }
    }
    
    const TreeInit = (start:any,stop:any)=>{
 
        let list = []
      
        while(start<rootlist.length){
            let root = rootlist.slice(start,stop);

            let newRoot = root.map(item=>new TreeNode(item));

            if(!list.length){
                list.push(newRoot)
            }else{
                 
                let prevRoot = list[list.length-1] ;
                 
                prevRoot.forEach((item,index)=>{
                    
                    let childIndex = index*2;
                    let child1 = newRoot[childIndex];
                    let child2 = newRoot[childIndex+1];
                    item.left = child1;
                    item.right = child2

                });
                
                list.push(newRoot)
            }

            start = stop;
            stop = root.length*2+start

        }

        return list.length?list[0][0]:undefined
    }

    let root = TreeInit(0,1);
     

    const lca = (root:TreeNode)=>{
        debugger

        const dfs = ()=>{
            
        }

    }

    lca(root);

    return (
        <div>
            123
        </div>
    )
}