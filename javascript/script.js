// flowchart 1

let A = 100;

while(A<200){
    console.log(A);
    A++;
}

// flowchart 2

A = 100;

while(A<=200){

    if(A%2 == 0){
        console.log("-");
    } else {
        console.log("*");
    }

    A++;

}


// soln 2

for(let i=1; i<11; i++){
    
    for(j=0; j<10; j++){
        console.log(i)
    }

}

//soln 3 - rewrite flowchart with for loops

for(let i=100;i<201;i++){
    console.log(i);
}

for(let i=100; i<=200; i++){
    if(A%2 == 0){
        console.log("-");
    } else {
        console.log("*");
    }
    A++;
}

let day = "Wednesday";
switch (day) {
    case "Monday":
        console.log("Monday");
    case "Tuesday":
        console.log("Tuesday");
    case "Wednesday":
        console.log("Wednesday");
    case "Thursday":
        console.log("Thursday");
    case "Friday":
        console.log("Friday");
        break;
    case "Saturday":
        console.log("Saturday");
        break;
    case "Sunday":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
        break;
}

//console.log(new Date().getDay());