// Objects in JavaScript contain keys (or properties) with corresponding values
const user = {
    "first_name": "Sammy",   // key: "first_name", value: "Sammy"
    "last_name": "Shark",    // key: "last_name", value: "Shark"
    "age": 25,               // key: "age", value: 25
    "followers": 987         // key: "followers", value: 987
};

// We can access properties with dot notation
console.log(user.first_name); // Output: Sammy
console.log(user.age);        // Output: 25

// Or with array-style square bracket syntax
console.log(user["last_name"]); // Output: Shark

// We can also assign new values to object properties
user.followers = 988; // The "followers" property is updated to 988

// Or create new properties
user.location = 'Pacific Ocean'; // A new property "location" with value "Pacific Ocean" is added

console.log(user); // Output the updated user object
