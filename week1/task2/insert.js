

const start = new Date();
  
let a =[];

for( let i=0; i<10000 ;i++){
    a[i]=i;
}

const end = new Date();

console.log(end.getTime() - start.getTime());




