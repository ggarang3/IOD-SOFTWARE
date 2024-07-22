// Step 1: Create a JSON object for a book
const book = {
    "title": "The Book of Gai",
    "description": "A novel set in the Jazz Age that tells the story of Gai Garang and his unrequited love for software.",
    "author": "Donald trump",
    "pages": 180
};

// Step 2: Print the object property values individually and the whole book object
console.log("Title:", book.title);
console.log("Description:", book.description);
console.log("Author:", book.author);
console.log("Pages:", book.pages);
console.log("Whole book object:", book);

// Step 3: Update the description of the book
book.description = "A classic novel about Gai and his life.";
console.log("Updated book object:", book);

// Step 4: Create an array of 5 book objects
const books = [
    {
        "title": "To Kill a Mockingbird",
        "description": "A novel about the serious issues of rape and racial inequality.",
        "author": "Harper Lee",
        "pages": 281
    },
    {
        "title": "1984",
        "description": "A dystopian novel set in a totalitarian society under constant surveillance.",
        "author": "George Orwell",
        "pages": 328
    },
    {
        "title": "Pride and Prejudice",
        "description": "A romantic novel that also critiques the British landed gentry at the end of the 18th century.",
        "author": "Jane Austen",
        "pages": 279
    },
    {
        "title": "The Catcher in the Rye",
        "description": "A novel about the events around a young man named Holden Caulfield.",
        "author": "J.D. Salinger",
        "pages": 214
    },
    {
        "title": "Moby-Dick",
        "description": "A novel about the voyage of the whaling ship Pequod.",
        "author": "Herman Melville",
        "pages": 635
    }
];

console.log("Array of books:", books);
