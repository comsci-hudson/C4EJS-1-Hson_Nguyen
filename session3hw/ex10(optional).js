let listName = prompt('Enter a sequence of Name, separated by commas (,)');
let new_ListName = listName.split(",")    // .split : tách string -> array
 let newlistName = new_ListName.map( ppl => `<${ppl}>` ).join(",");  // hoặc .map( ppl -> '<' + ppl + '>'),join(',');
console.log(...newlistName);




