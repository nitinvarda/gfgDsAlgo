/*
LCM (Least Common Multiple) of two numbers is the smallest number which can be divided by both numbers. 

a x b = LCM(a,b) * GCD(a,b)

LCM(a,b) = a x b/ GCD(a,b)


Smallest number divisible by first n numbers

Difficulty Level : Medium
Last Updated : 26 Mar, 2021
Given a number n find the smallest number evenly divisible by each number 1 to n.
Examples: 
 

Input : n = 4
Output : 12
Explanation : 12 is the smallest numbers divisible
              by all numbers from 1 to 4

Input : n = 10
Output : 2520

Input :  n = 20
Output : 232792560


*/


function lcm(n){
    let ans = 1
    for(let i=1;i<=n;i++){
        ans = (ans * i)/ gcd(ans,i)
    }
    return ans
}

function gcd(a,b){

    if(a%b != 0){
        return gcd(b,a%b)
    }
    else{
        return b
    }
}

console.log(lcm(10))


