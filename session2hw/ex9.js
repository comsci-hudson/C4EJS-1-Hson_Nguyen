let mass= Number(prompt('Your weight in kg?'));
let height= Number(prompt('Your height in cm?'));
let BMI= (mass/ (Math.pow((height/100), 2))).toFixed(2);
if (BMI< 16)  {
    alert(`Your BMI is ${BMI} -> severely underweight`);
} else if (BMI >= 16 && BMI < 18.5) {
    alert(`Your BMI is ${BMI} -> underweight`);
} else if (BMI >= 18.5 && BMI < 25) {
    alert(`Your BMI is ${BMI} -> Normal`);
} else if (BMI >= 25 && BMI < 30) {
    alert(`Your BMI is ${BMI} -> Overweight`);
} else {
    alert(`Your BMI is ${BMI} -> Obese`);
}

