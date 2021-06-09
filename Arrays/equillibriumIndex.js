/*


Description - Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes. We are given an Array of integers, We have to find out the first index i from left such that -
A[0] + A[1] + ... A[i-1] = A[i+1] + A[i+2] ... A[n-1]
Input
[-7, 1, 5, 2, -4, 3, 0]
Output
3
A[0] + A[1] + A[2] = A[4] + A[5] + A[6]


*/

// Time Complexity : O(n^2)
// Auxiliary Space : O(1)

function equilibriumIndex(arr){
   
    let index;
    for(let i=1;i<arr.length;i++){

        let rightSum=0;
        for(let j=i+1;j<arr.length;j++){
            rightSum = rightSum + arr[j]
            
        }
         let leftSum=0;
        for(let k=i-1;k>=0;k--){
            leftSum =leftSum + arr[k]
        }
        
        if(leftSum == rightSum){
            index = i
            break;
        }


    }
    return index

}



// tricky solution

function trickyEquillibrium(arr){
    let sum=0;
    let leftSum=0;
    for(let i=0;i<arr.length-1;i++){
        sum = sum + arr[i]
    }
    for(let j=0;j<arr.length-1;j++){
        // console.log(sum,arr[j],sum-arr[j])
        sum = sum - arr[j]
        if(leftSum == sum){
            return j
        }
        leftSum = leftSum + arr[j]
        
    }

}

console.log(trickyEquillibrium([-7, 1, 5, 2, -4, 3, 0]))