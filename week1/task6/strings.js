
const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


  read.question("Enter first String:" , str1 =>{

      read.question("Enter Second String:" , str2 =>{

          if(str1.indexOf(str2) != -1 && str1.length == str2.length){
              console.log("Strings are same");
          }
          else{
              console.log("Strings are different");
          }
          read.question("Enter String to check for palindrom:" , pal=>{
            
            let rev = Array.from(pal).reverse().join("");
           
            if(pal == rev){
                console.log("String is palindrom")
            }
             
           })
    
      })
      
    
      

  })