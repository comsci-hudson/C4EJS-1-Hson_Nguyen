let a = 5 ;
let b = 6 ; 
console.log(a,b);
// a= [b, b = a][0];   cách 1
a += b
b  = a - b;
a -= b;     //cách 2
console.log(a,b);
