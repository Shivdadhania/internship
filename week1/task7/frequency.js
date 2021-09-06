
const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


      read.question("Enter first String:" , str1 =>{
          let count=0;
        temp= str1.toLowerCase();
        let a = new Array(26);
        
        for(let i=0 ;i< 26 ;i++)
            a[i] =0;

        for(let i=0 ;i< str1.length ;i++){
               a[str1.charCodeAt(i) - 97]++;
        }
        for(let i=1; i< 26 ;i++){
            if(a[i-1] != a[i]){
                count++;
                break;
            }
        }
        if(count==0){
            console.log("string has equal number of frequency");
        }
        else{
            console.log("String does not have equal no of frequency");
        }
    
      })
      
    
