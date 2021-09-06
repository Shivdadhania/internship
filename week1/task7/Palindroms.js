
const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

let usedAlphabet = 0;
      read.question("Enter first String:" , str1 =>{
          let count=0;
          read.question("From :" , first =>{
                 
             read.question("To:",second=>{

                let temp = str1.slice(first-1 , second);
                
                temp= temp.toLowerCase();
                console.log(temp);
                for(let i=0;i<temp.length;i++){

                  for(let j=i+1;j<temp.length;j++){
                      let str2 = temp.slice(i , j+1);
                      let rev = Array.from(str2).reverse().join("");
                       
                      if(str2 == rev){
                      
                          count++;
                      }

                  }
                }
                console.log("total No of Palindrome string possible",count);
                
                
                

             } )
             


          })
       
        
    
      })
      
    
