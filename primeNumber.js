number = parseInt(prompt("Enter number"));
isPrime = true;

for(var n=2; n<number; n++ ){
    result = number%n;
    if (result == 0) {
        isPrime = false;
        console.log("Not a prime number"   +number + " I "+ n);
        break;

    }
}

if(isPrime){
    console.log("Prime Number"+number +"I" +n);
}