const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


      read.question("Enter first String:" , str1 =>{
        let count=0;
        temp= str1.toLowerCase();
        let a = new Array(26);
        let newStr = [];
        for(let i=0 ;i< 26 ;i++)
            a[i] =0;

        for(let i=0 ;i< str1.length ;i++){
               if(a[str1.charCodeAt(i) - 97] == 0){
                   newStr.push(str1[i]);
                   a[str1.charCodeAt(i) - 97] =1;
               }
                  
        }
        
        let str2 = newStr.join("");
        console.log(str2);

        
        

    })