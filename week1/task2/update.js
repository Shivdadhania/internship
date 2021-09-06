const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

let a =[];
for( let i=0; i<10000 ;i++){
    a[i]=i;
}
read.question("Enter position:", position => {
   
    read.question("Enter value:" ,value=>{
           const start = new Date().getMilliseconds();
           a[position] = value;
           const end = new Date().getMilliseconds();   
           console.log(end - start);
    })
  })