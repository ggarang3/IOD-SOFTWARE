//EXECERISE 1:
// const cities = ['perth', 'melbourne', 'adelaide', 'brisbane'];

// function ucFirstLetters(cities) {
//   for (let i = 0; i < cities.length; i++) {
//     cities[i] = cities[i].charAt(0).toUpperCase() + cities[i].slice(1);
//   }
//   return cities;
// }

// console.log(ucFirstLetters(cities));  

//Exercise 2:

// const usercomments = ['jacob was born in the year 2003 in Manhatten at the Saint Bernard hospital'];

// function TruncateComments(comment, max) {
  
//   if (comment.length > max) {
//     return comment.slice(0, max) + "...";  
//   } else {
//     return comment;  
//   }
// }
// console.log(TruncateComments(usercomments[0], 20)); 

// Exercise 3:

// const animals = ['Tiger', 'Giraffe'];

// // Add new values
// animals.push('Elephant', 'Lion');
// console.log('After adding to the end:', animals);

// // Add values at the beginning
// animals.unshift('Monkey', 'Zebra');
// console.log('After adding to the beginning:', animals);

// // Sort the array alphabetically
// animals.sort();
// console.log('After sorting alphabetically:', animals);

// // Function to replace the middle animal
// function replaceMiddleAnimal(newValue) {
//     const middleIndex = Math.floor((animals.length - 1) / 2);
//     animals[middleIndex] = newValue;
// }

// replaceMiddleAnimal('Panda');
// console.log('After replacing middle animal:', animals);

// // Function to find matching animals by their starting letter
// function findMatchingAnimals(animals, beginsWith) {
//     const matchedAnimals = [];
//     beginsWith = beginsWith.toLowerCase(); 
    
//     for (let i = 0; i < animals.length; i++) {
//         if (animals[i].toLowerCase().startsWith(beginsWith)) {
//             matchedAnimals.push(animals[i]);
//         }
//     }
//     return matchedAnimals;
// }
// console.log('Animals that begin with "t":', findMatchingAnimals(animals, 't'));

//Exercise 6:
// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
// const mixedItems = ['apple', 10, 'banana', 20, 'apple', 10, 30, 'banana'];

// function unique(duplicatesArray) {
//     let uniqueArray = [];  

//     for (let i = 0; i < duplicatesArray.length; i++) {
//         // Check if uniqueArray already contains the current element from duplicatesArray
//         if (!uniqueArray.includes(duplicatesArray[i])) {
//             uniqueArray.push(duplicatesArray[i]);  
//         }
//     }
//     return uniqueArray;
// }

// console.log(unique(colours));
// console.log(unique(testScores)); 
// console.log(unique(mixedItems));

//Exercise 7:
// const books = [
//     { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//     { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//     { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//     { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
//     { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }
// ];

// function getBookTitle(bookId) {
//     for (let i = 0; i < books.length; i++) {
//         if (books[i].id === bookId) {
//             return books[i].title;
//         }
//     }
//     return 'Book not found';
// }
// function getOldBooks() {
//     let oldBooks = [];
//     for (let i = 0; i < books.length; i++) {
//         if (books[i].year < 1950) {
//             oldBooks.push(books[i]);
//         }
//     }
//     return oldBooks;
// }
// function addGenre() {
//     let updatedBooks = [];
//     for (let i = 0; i < books.length; i++) {
//         updatedBooks.push({...books[i], genre: 'classic'});
//     }
//     return updatedBooks;
// }


// console.log(addGenre()); // returns new Genre with title 'classic'
// console.log(getOldBooks());  // Returns books published before 1950
// console.log(getBookTitle(1)); // Returns book Title
