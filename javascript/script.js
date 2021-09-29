//conditionals

//falsey

let falseOne = 0;
let falseTwo = ``;
let falseThree;
let falseFour = null;
let falseFive = NaN;
let falseSix = false;

//everything else is truthy

let age = 18;

//(age >= 18 && age <= 65)? console.log(`age is ${age}, between 18 and 65`) : console.log(`age is not between`);

if(age >= 18 && age <= 65){
    console.log(`age is ${age}, between 18 and 65`);
} else if (age>18){
    console.log("underage");
} else{ ;
    console.log(`age is ${age}, not between 18 and 65`);
}

let age2=50;

(age2>50)? console.log("over 50"):console.log("under 50");

