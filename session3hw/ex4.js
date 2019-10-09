
let item = ['Jeans', 'T-shirt', 'Socks'];
 let option= ['R', 'C', 'U', 'D']; 
while(true) {
 x= prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?');

 if (x=== option[0]) {
   console.log('The current items are: \n');
   for (i=0; i< item.length; i++) {
      console.log( ` \n ${i+1}.`+  item[i]  ) ; 
 } break; }

   else if (x=== option[1] )  {
    let newItem= prompt('Enter the name of the new item')
 item.push(newItem) ;  
 alert('Done');  
 
   }  else if (x=== option[2]) {
     let  p = Number(prompt('Enter the position you want to update'));
     item[(p-1)] = prompt('Enter the new name');   // p-1 theo logic của khách hàng
     alert('done');

   } else if (x=== option[3]) {
     let d= Number(prompt('Enter the position you want to delete'));
     item.splice( (d-1) ,1);   // d-1 theo logic của khách hàng .-.

   }
 else { alert('This command is not supported') ;
}
}
 
