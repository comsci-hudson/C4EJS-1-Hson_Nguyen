const mylist =  [ -51 , 23, -5, -105,6, 89];
 let input = Number(prompt('Search for a number'));
let a = mylist.indexOf(input);   // search for an element of an array is at index ?  (nếu k tìm đc -> index -1)
 if (a== -1) {
     alert(input + ' is NOT found in an array');
 } else {
     alert(input+ 'is found in an array at index '+ a)
 }
 console.log(a);
 