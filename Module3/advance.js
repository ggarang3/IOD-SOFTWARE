//Question 1



// ADVANCED JS - QUESTION 9

function randomDelay() {
    // your code
  
    // how to get the a random number (0 - 20)
    let randomAmountOfTime = Math.ceil(Math.random() * 20);
    console.log(randomAmountOfTime);
    return new Promise((resolve, reject) => {
      setTimeout(resolve, randomAmountOfTime * 1000);
    })
  }


  function randomDelay2() {
    //Step 1: need to get a random number
    let randomAmountOfTime = Math.ceil(Math.random() * 20);
    console.log(randomAmountOfTime);
    return new Promise((resolve, reject) => {
      //Check the random number is odd, if yes the we reject
      // if (randomAmountOfTime % 2 === 0) {
      //   setTimeout(resolve, randomAmountOfTime * 1000);
      // } else {
      //   setTimeout(
      //     reject(new Error("Invalid random number"), randomAmountOfTime * 1000)
      //   );
      // }
      setTimeout((randomAmountOfTime % 2 === 0) ? resolve: reject(new Error("Invalid random number"), randomAmountOfTime * 1000)); 
    });
  }
  
  randomDelay2()
    .then(() => console.log("Successful delay"))
    .catch(() => console.log("Failed delay"));

    function randomDelay3() {
        let randomAmountOfTime = Math.ceil(Math.random() * 6);
        console.log(randomAmountOfTime)
        return new Promise((resolve, reject) => {
          setTimeout(
            randomAmountOfTime % 2 === 0
              ? resolve
              : reject,
            randomAmountOfTime * 1000,
            randomAmountOfTime
          );
        });
      }
      
      randomDelay3()
        .then((result) => {
          console.log(`The result will be ${result}`);
          console.log(`Successful delay after ${result} seconds`);
        })
        .catch((error) => {
          console.log(error);
          console.log(`Failed delay after ${error} seconds`);
        });


// ADVANCED JS - QUESTION 10 