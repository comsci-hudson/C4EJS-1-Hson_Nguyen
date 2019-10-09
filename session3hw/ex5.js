let listNumber = prompt('Enter a sequence of Number, separated by commas (,)');

// 5,4,3,2,5,

let new_ListNumber = listNumber.split(",")    // .split : tách string -> array
console.log(new_ListNumber);
let s = 0
for(i= 0; i< new_ListNumber.length; i++) {
s += Number(new_ListNumber[i]) ;
}
alert('The sum of them is '+ s);




