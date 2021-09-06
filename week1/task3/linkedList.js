

const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

let head = null , last = null;

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }

   
}

function addNode(value){
    if(head == null){
        const node = new Node(value);
        head = node;
        last = head;
        console.log("head",head.data);
    }
    else{
        const node = new Node(value);
        last.next = node;
        last = node;
        console.log("last",last.data);
    }
}

function updateNode(value){
    return new Promise(resolve => {
        let first = head;
        while(first.data != value ){
            first = first.next; 
        }
        read.question("Enter new value :", function (data) {
             first.data = Number(data);
             resolve(true);
        });
    })
}

function deleteNode(value){
    let first = head;
    let pre = first;
    while(first.data != value ){
        pre = first;
        first = first.next; 
    }
    pre.next = first.next;
    if(pre.next == null)
       last = pre;
}

function display(){
    let first = head;
    while(first!= null){
        console.log(first.data);
        first = first.next;
    }
    return true;
}

function updateNodeThenFunction() {
    console.log('displaying now');
    display();
    console.log('done');
}

           addNode(10);
           addNode(20);
           addNode(21);
           addNode(22);
           addNode(23);
           addNode(24);
           deleteNode(20);
           updateNode(10)
           .then(updateNodeThenFunction)
           .catch(err =>{
               console.log(err);
           });
           
           
           
           











