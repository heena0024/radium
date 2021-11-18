// Write an api which gives the missing number in an array of integers starting from 1….
// e.g [1,2,3,5,6,7] : 4 is missing write an api which gives the missing 
router.get("/problm1", function(req, res){
    let arr =[1,2,3,5,6,7]
    let total =0;
    for(var i =0; i<arr.length; i++){
        total+=arr[i]
    }
    let lastDigite=arr.pop()
    let consecutiveSum = lastDigite * (lastDigite+1)/2
    let missingNumber = consecutiveSum-total

    res.send({data:missingNumber});
});


//problem2
router.get("/problm2", function(req, res){
    const arr=[33,34,35,37,38]
    const len= arr.length;
    let total =0;
    for(var i =0; i<arr.length; i++){
        total+=arr[i]
    }
    let lastDigite=arr.pop()
    let consecutiveSum = lastDigite * (lastDigite+1)/2
    let missingNumber = consecutiveSum-total

    res.send({data:missingNumber});
})
 //
 
 
//  const arr=[33,34,35,37,38]
//     const len= arr.length;
//     let total =0;
//     for(var i =0; i<arr.length; i++){
//         total+=arr[i]
//     }
//     let lastDigite=arr.pop()
//     let consecutiveSum = 
//     let missingNumber = consecutiveSum-total
// console.log(missingNumber)
// console.log(total)
// console.log(lastDigite)


