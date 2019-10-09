let n= prompt('Enter a sequence of number, separated by commas (,) ');
let newlist = n.split(",").filter( Num => Num%2 == 1 ).join(",");
alert(  n + ' => ' + newlist);