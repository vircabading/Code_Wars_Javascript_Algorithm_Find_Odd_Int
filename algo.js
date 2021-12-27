///////////////////////////////////////////////////
//  ALGORITHM: FIND ODD INT
///////////////////////////////////////////////////

function findOdd(arr) {
    let arrDict = {};
    
    console.log("arr:", arr);

    // Create a Key:Value pair to track how many times each number appears in the list
    for (let idx=0; idx < arr.length; idx++) {
        let num = arr[idx];
        
        if (!(num in arrDict)) {
            arrDict[num] = 1;
        } else {
            arrDict[num] = arrDict[num] + 1;
        }

    }
    console.log("arDict:", arrDict);
    return 0;
  }

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);