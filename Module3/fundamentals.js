// //Exercise 1:

// "" + 1 + 0 // 10
// "" - 1 + 0 // -1
// true + false // 1
// !true // false
// 6 / "3" // 2
// "2" * "3" //6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5 //$45
// "4" - 2 //2
// "4px" - 2 //Nan
// "  -9  " + 5 // -9 5 
// "  -9  " - 5// -14 
// null + 1 // 1
// undefined + 1 // Nan
// undefined == null // True
// undefined === null // False
// "\t \n" - 2 // -2


// console.log("" + 1 + 0);
// console.log("" - 1 + 0); 
// console.log(true + false); 
// console.log(!true); 
// console.log(6 / "3"); 
// console.log("2" * "3"); 
// console.log(4 + 5 + "px"); 
// console.log("$" + 4 + 5); 
// console.log("4" - 2); 
// console.log("4px" - 2); 
// console.log("  -9  " + 5); 
// console.log("  -9  " - 5); 
// console.log(null + 1); 
// console.log(undefined + 1); 
// console.log(undefined == null); 
// console.log(undefined === null); 
// console.log(" \t \n" - 2); 

//Exercise 2:

// let three = "3"; 
// let four = "4";
// let thirty = "30"; // string concentrated

// Original expressions
// let addition = three + four; // "34" - because these are strings, not numbers.
// let multiplication = three * four; // 12 - automatically converts to numbers.
// let division = three / four; // 0.75 - automatically converts to numbers.
// let subtraction = three - four; // -1 - automatically converts to numbers.

// addition = Number(three) + Number(four); // 7
// multiplication = Number(three)*Number(four);
// division = Number(three)/Number(four);
// subtraction = Number(three)-Number(four);

// console.log(addition);
// console.log(multiplication);
// console.log(division);
// console.log(subtraction);

//Exercise 3:

// if (0) console.log('#1 zero is true') // zero is a Numeric datta type and cannot return a true false styatement 
//     if ("0") console.log('#2 zero is true') //#2 zero is true
//     if (null) console.log('null is true') // Null cannot returna  boolean equation
//     if (-1) console.log('negative is true') //Negative is true 
//     if (1) console.log('positive is true') // Postitive is true 

// Exercise 4:
// let a = 2, b = 3;
// let result = `${a} + ${b} is`;

// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10'
// }

// let a = 2, b = 3;
// let result = `${a} + ${b} is `;
// result += (a + b < 10) ? 'less than 10' : 'greater than or equal to 10';

// console.log(result);

//Exercise 5: Arrow Function 

// let getGreeting = (name)=> 'Hello' + name + '!'

// console.log(getGreeting('Gai')); 

// Exercise 6

// const westley = {
//     name: 'Westley',
//     numFingers: 5
//     }
//     const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
//     }
//     const inigo = {
//     firstName: 'Inigo',
//     LastName: 'Montaya',

//     greeting(person) {
//     let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.LastName}. `;
    
//     console.log(greeting + this.getCatchPhrase(person));
//     },
//     getCatchPhrase: (person) => person.numFingers === 6 ? "You killed my father. Prepare to die." : "Nice to meet you."
//     }

//     inigo.greeting(westley)
//     inigo.greeting(rugen)

//Exercise 8:

// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
//     }
    // function printCityProperties(city) {
    //     for (let property in city) {
    //       console.log(`${property}: ${city[property]}`);
    //     }
    //   };

    // //   printCityProperties(sydney);

    //   const newYork = {
    //     name: 'New York City',
    //     population: 8_336_817,
    //     state: 'New York',
    //     founded: '1624',
    //     timezone: 'America/New_York'
    //   };
      
    //   printCityProperties(newYork);

//Exercise 9: push - unshift in Array


      