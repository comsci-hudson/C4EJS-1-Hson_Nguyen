let month= Number(prompt('Enter number of months after I bought my sheeps'));
let size = [ 5,7 ,300 ,90, 24]; 
console.log('Hello, my name is Son and here are my sheep sizes \n ' , ...size);  // 8.1

for (j=0; j< month; j++) {
console.log('Now my biggest sheep has size '+ Math.max(...size) + ' ,let\'s shave it' );    //8.2

  let a=  size.indexOf(Math.max(...size));
  size[a] = 8
console.log('After shearing, here are my sheep sizes \n ' , ...size);   //8.3

for (i=0; i< size.length; i++) {
  size[i]= Number(size[i]) + 50  ; 
} 
console.log(`MONTH ${j+1}  \n` , ` ${j+1} month has passed, my sheeps have grown, here are their sizes \n ` , ...size);  //8.4

}
console.log('Now my biggest sheep has size '+ Math.max(...size) + ' ,let\'s shave it' );    

  let b =  size.indexOf(Math.max(...size));
  size[b] = 8
console.log('After shearing, here are my sheep sizes \n ' , ...size);   
//8.5
let sumsize = 0
for (k=0; k < size.length ; k++) {
  sumsize += Number(size[k]);
}
console.log('My flock has size in total '+ sumsize);
console.log('I would get '+ sumsize + '*2$ = '+ sumsize*2+ '$');









