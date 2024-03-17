async function race() {
    var runner1 = false;
    var runner2 = false;
    var loser = " ";

    var runner1Go = new Promise(resolve => {
        setTimeout(()=>{
            loser = "runner1";
            resolve(true);
        }, 3000);
    });

    var runner2Go = new Promise(resolve => {
        setTimeout(()=>{
            loser = "runner2";
            resolve(true);
        }, 5000);
    });


    let result1 = await runner1Go;
    let result2 = await runner2Go;

    return [result1, result2, loser];
        
}
race().then(function(result){
    console.log(result[2]);
    console.log("Array values:", result);
    
});

