///////////////////////////////////////////////////
//  ALGORITHM: FIND ODD INT
///////////////////////////////////////////////////

function findOdd(arr) {
    let arrDict = {};
    
    console.log("arr:", arr);

    for (let idx=0; idx < arr.length; idx++) {
        let num = arr[idx];
        console.log(num);
        arrDict[num.toString()] = 1;
    }
    console.log("arDict:", arrDict);
    return 0;
  }

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);