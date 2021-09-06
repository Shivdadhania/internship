const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

let root = null;
let depth , sum;
let path =[];

class tree{
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

function createTree(node ,currentHight , oldNode) {
      if(node == null && currentHight <= depth) {
             value = Math.ceil(Math.random()*100) + 1;
             const newNode = new tree(value);
             currentHight++;

             if(root == null) {
                root = newNode;
                createTree(newNode.left, currentHight , root);
                createTree(newNode.right, currentHight, root);
             }

             else {
                if(oldNode.left == null){
                    oldNode.left=newNode;
                } else if (oldNode.right == null){
                   oldNode.right=newNode;
                }

             createTree(newNode.left , currentHight , newNode);
             createTree(newNode.right , currentHight ,newNode);
            }
      }
      else{
          return true;
      }
}


function inorder(node)
{   
	if(node !== null)
	{   
		inorder(node.left);
		console.log(node.data, 'node');
		inorder(node.right);
	}
}
    
function findPath(temp, sum, count, path)
{
    if (temp == null)
        return;

    count += temp.data;
 
    path.push(temp.data);
 
    
    if (count == sum)
    {
         console.log("Path Found : " , path);
    }
 
    if (temp.left != null)
        findPath(temp.left, sum, count, path);
 
    
    if (temp.right != null)
        findPath(temp.right, sum, count, path);
 
    
    path.pop();
}


    read.question("Enter depth:", d => {
             depth = d;
             createTree(root , 1 , null);
             console.log(root, 'root node value');
             inorder(root);
             read.question("Enter sum:", s => {
                     sum = s;
                  findPath(root , sum , 0 , path);
             })
    })
    
         
       
        

