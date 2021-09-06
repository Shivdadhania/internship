let a =[];

for( let i=0; i<10000 ;i++){
    a[i]=i;
}

const start = new Date();
  
for( let i=0; i<10000 ;i++){
    console.log(a[i]);
}


const end = new Date();

console.log((end.getTime() - start.getTime())/1000);





