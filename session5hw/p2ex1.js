let myArr = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let counts = {};
for (let i=0; i < myArr.length; i++ ) {
   let num = myArr[i];
   counts[num]  =   counts[num] ;
   counts[num] +=1;
  if (counts[num] != counts[num]) {
     counts[num] = 1;
    }
}
console.log(counts);
