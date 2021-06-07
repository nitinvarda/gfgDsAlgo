// Given an integral number N. The task is to find the count of digits present in this number.

// Let's say:
// N = 2019

// Number of digits in N here is 4 and,
// the digits are: 2, 0, 1, 9.

// Some more Examples:
// N = 1567
// Number of digits = 4

// N = 256
// Number of digits = 3

// N = 58964
// Number of digits = 5

function noOfDigits(num){
    var digits=0;

    do{
        console.log(num)
        if(num==0){
            digits=0
        }
        else{
            digits++
            num = Math.floor(num/10) //initialy tried with Math.round but it is failing because rounding 0.6 to 1
        }
    }
    while(num>0)

    
    return digits
}

console.log(noOfDigits(58964))