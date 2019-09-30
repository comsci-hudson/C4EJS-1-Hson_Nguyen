while (true) {
let n = Number(prompt('Enter a number'));

if (n < 4.5 && n>=0)  {
    alert('Lower half of 9');
} else if (n == 4.5) {
    alert('Middle of 0-9 range');
} else if (n>4.5 && n<=9) {
    alert('Higher half of 9')
} else {
    alert('not in 0-9 range');
}

}