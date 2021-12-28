///////////////////////////////////////////////////
//  ALGORITHM: FIND ODD INT
///////////////////////////////////////////////////

function findOdd(arr) {
    let arrDict = {};
    // Create a Key:Value pair to track how many times each number appears in the list
    for (let idx=0; idx < arr.length; idx++) {
        let num = arr[idx];
        if (!(num in arrDict)) {
            arrDict[num] = 1;
        } else {
            arrDict[num] = arrDict[num] + 1;
        }
    }
    // Iterate through the key:value pairs to see which key has an odd value
    for (const [key, value] of Object.entries(arrDict)) {
        if (value % 2 === 1) {
            return parseInt(key);
        }
    }
    return 0;
  }


console.log("findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])", findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log("findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])", findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
console.log("findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])", findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));
console.log("findOdd([10])", findOdd([10]));
console.log("findOdd([1,1,1,1,1,1,10,1,1,1,1])", findOdd([1,1,1,1,1,1,10,1,1,1,1]));
// console.log("findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])", findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));