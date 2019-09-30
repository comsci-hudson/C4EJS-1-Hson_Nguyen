while (true) {
    let x = Number(prompt('Enter a number'));
    let n= Number(prompt('enter a number n'));
    if (x < (n/2) && x>=0)  {
        alert(`Lower half of ${n}`);
    } else if (x == (n/2)) {
        alert(`Middle of 0- ${n} range`);
    } else if (x > (n/2) && x <= n) {
        alert(`Higher half of ${n}`);
    } else {
        alert(`Not in 0-${n} range`);
    }
    
    }