let list = prompt('Enter a sequence of Number, separated by commas (,)');
let newList = list.split(",");             // .split : tách string -> array

// for(i= 0; i< newList.length; i++) {
//     var s= Number(newList[0]);
// if (s <= Number(newList[i] )) {
  
// } else {
//     s= Number(newList[i]);
// }
// }
// alert('The smallest number is '+ s);   (CÁCH 1 )

alert('The smallest number is ' + Math.min(...newList));   // ... -> in ra các element trong array mà k cần sử dụng vòng for
// ở trên dù newList là array( string), ...newList là string  nhưng mà math.min nên js tự hiểu là Number