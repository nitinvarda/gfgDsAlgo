// method --1

function arrayRotation(arr,n,d){

    var temp = [];

    for(let i=0;i<d;i++){
        temp[i] = arr[i]
    }

    for(let j=0;j<n-d;j++){
        arr[j] = arr[j+d]
    }

    for(let k=n-d,z=0;k<n;k++,z++){
        arr[k] = temp[z]
    }

    return arr


}

// console.log(arrayRotation([1,2,3,4,5,6,7],7,2))

// method --2


function arrayRotation2(arr,n,d){

    for(let i=0;i<d;i++){
        arrayRotate(arr,n)
    }
    console.log(arr)

}

function arrayRotate(arr,n){
    let temp = arr[0];

    for(let i=0;i<n-1;i++){
        arr[i] = arr[i+1]
    }
    arr[n-1] = temp

}

console.log(arrayRotation2([1,2,3,4,5,6,7],7,3))