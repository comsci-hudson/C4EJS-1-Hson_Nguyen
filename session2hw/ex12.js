clear();
let p = Number(prompt('enter polygons you want to draw'));
               let c=2; 
               for (z= 0; z< p; z++) {
    c+= 1
for ( let x= 0; x<c; x++) {
fd(100);
rt(180- ((180*(c-2)))/c); 
  if ( c%2 == 1) {
    color("red");
  } else {
   color("green"); }
}
}