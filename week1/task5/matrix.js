const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  read.question("Enter size:", d => {
       let a = new Array(d) , small , smallSize;
       for(let i=0;i<d;i++)
          a[i] = new Array(d);

       for(let i=0; i<d ;i++){
           for(let j=0; j<d ;j++){
                  a[i][j] = Math.ceil(Math.random()*100) + 1;
                
           }
        }
        console.log(a);
        read.question("Enter size of small matrix:" , size =>{
          smallSize = size;
            small = new Array(size);

            for(let i=0;i<size;i++)
              small[i] = new Array(size);


            for(let i=0; i<size ;i++){
                for(let j=0; j<size ;j++){
                    small[i][j] = Math.ceil(Math.random()*100) + 1;
                   
                }
             }
             console.log(small);

             let flag = 0 , temp=0;
        for( let i=0 ; i<=d-smallSize ; i++){
             for(let j=0  ; j <=d - smallSize ; j++){
                   flag=0;
                   for(let m=0; m<smallSize ; m++){

                     for(let n=0 ;n<smallSize ;n++){

                           if(a[i+m][j+n] != small[m][n]){
                                 flag=1;
                                 break;
                           }
                     }

                   }
                   if(flag == 0){
                     console.log(`Match Found at (${i},${j})`);
                     temp++;
                   }
             }
        }
        if(temp == 0){
          console.log("Could not found Match");
        }
              
      })
        
        

  })