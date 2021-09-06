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
  
           const start = new Date().getTime()//getMilliseconds();
           delete a[position];
           const end = new Date().getTime()//Milliseconds();
           console.log("Time taken is", end - start,"milliseconds");
    
  })