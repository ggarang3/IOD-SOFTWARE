//STEP 1: Array - 5 elements (fruits)
let fruits = ["apple","banana", "cherry", "grapes", "kiwi"];
console.log("initial array", fruits); //console.log to display Fruit Array 

//STEP 2: REPLACING VALUE POSITION 1 AND 4
fruits[1]= "Blueberry"; // Banana Replaced with Blueberry
fruits[4]= "watermelon"; // Kiwi replaced with Watermelon 
console.log("updated array", fruits);

//STEP 3: ADDING A NEW ELEMENT AT BEGGINING AND END OF ARRAY
fruits.unshift("avocado")
fruits.push("Date")
console.log("array after replacements", fruits);

// Step 4: REMOVING ELEMENTS FROM BEGINNING AND END OF ARRAY
let firstFruit = fruits.shift(); // Remove the first element
console.log("Removed first element:", firstFruit);
let lastFruit = fruits.pop(); // Remove the last element
console.log("Removed last element:", lastFruit);
console.log("Array after removing elements:", fruits);

// Step 5: FIND INDEX FOR SPECIFIC ELEMENT 
let cherryIndex = fruits.indexOf("Cherry");
console.log("Index of 'Cherry':", cherryIndex);

// Step 6: FINDING LENGTGH OF THE ARRAY
let numFruits = fruits.length;
console.log("Number of elements in the array:", numFruits);