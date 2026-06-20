// Question 1 (Easy) — Find Expensive Products
let prices = [100, 250, 500, 150, 700];
let expensiveProduct = prices.filter((value) => value > 300)
console.log(expensiveProduct);

// Question 2 (Moderate) — Student Average
let marks = [80, 90, 70, 85, 95];
// Calculate the average marks of all students.
let totalMarks = marks.reduce((acc, curr) => acc + curr, 0)
let average = totalMarks / marks.length;
console.log("Student Average:", average);


// Question 3(Hard) — Most Frequent Number
let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];

let count = {};

for (let value of numbers) {
    if (value in count) {
        count[value]++
    } else {
        count[value] = 1
    }
}

let maxFreq = 0;
let result;
for (let key in count) {
    if (count[key] > maxFreq) {
        maxFreq = count[key];
        result = key
    }
}
console.log(count);
console.log("Max Frequency: " + result);


// 🟢 Objects
// Question 4 (Easy) — Update User Age
let user = {
    name: "Ritik",
    age: 20
};
// Update age to 21.
user.age = 21;

// Question 5 (Moderate) — Print User Information
let user2 = {
    name: "Ritik",
    age: 20,
    city: "Bhopal"
};
let userArray = Object.entries(user2);
for (let value of userArray) {
    console.log(value.join(": "));
}

for (let key in user2) {
    console.log(key + ": " + user2[key]);
}


// Question 6 (Hard) — Highest Paid Employee
let employees = {
    aman: 25000,
    ritik: 50000,
    priya: 45000
};

let highestPaid = Object.entries(employees)
let maxSallary = 0;
let employeeName = "";
for (let value of highestPaid) {
    if (value[1] > maxSallary) {
        maxSallary = value[1]
        employeeName = value[0]
    }
}
console.log(employeeName);

// 🟢 Functions
// Question 7 (Easy) — Greeting Function
// greet(name)
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("Ritik"));

// Question 8 (Moderate) — Discount Calculator
function calculateDiscount(price) {
    return price - (price * 10 / 100);
}
console.log(calculateDiscount(500));

// 10% discount
// Input: 500
// Output: 450



// Question 9 (Hard) — Dynamic Sum Function
// Create a function:🟢sum(...numbers)
function sum(...num) {
    return num.reduce((acc, curr) => acc + curr, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// 🟢Question 10 (Easy) — Find Adult Users
let users = [
    { name: "Ritik", age: 20 },
    { name: "Aman", age: 16 },
    { name: "Priya", age: 25 }
];

function getAdults(users) {
    return users.filter(adult => adult.age > 18)
}
console.log(getAdults(users));

// Functions🟢Question 11 (Moderate) — Shopping Cart Total
let cart = [
    { name: "Mouse", price: 500, qty: 2 },
    { name: "Keyboard", price: 1000, qty: 1 },
    { name: "Monitor", price: 10000, qty: 1 }
];
let total = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
}, 0)
console.log(total);

// Question 12 (Hard) — Student Grade Report
let students = [
    {
        name: "Ritik",
        marks: [80, 90, 85]
    },
    {
        name: "Aman",
        marks: [50, 40, 60]
    }
];

// Create a function:
function generateReport(students) {
    return students.map((student) => {
        let total = student.marks.reduce(
            (acc, curr) => acc + curr,
            0
        );

        return {
            name: student.name,
            totalMarks: total
        };
    });
}

console.log(generateReport(students));


// 🚀 Final Challenge (Very Hard)
// Mini Library Management System
const librarySystem = [];

function addBook(title, author) {
    librarySystem.push(
        {
            id: librarySystem.length + 1,
            title: title,
            author: author,
            isBorrow: false
        }
    )
}

addBook("Atomic Habits", "James Clear");
addBook("Khara To Ekachi Dharam", "Sane Guruji");
addBook("Kana", "Kusumagraj");
addBook("Fulrani", "Balkavi");

function borrowBook(id) {
    const book = librarySystem.find((book) => book.id === id);
    if (!book) {
        console.log("Book Not Found");
        return;
    }
    if (book.isBorrow) {
        console.log("Book Is Alreday Borrowed.");
        return;
    }
    book.isBorrow = true;
    console.log("Borrowed Book Successfully.");
}
borrowBook(1);
borrowBook(1);
borrowBook(2);

function returnBook(id) {
    const book = librarySystem.find((book) => book.id === id)

    if (book) {
        book.isBorrow = false;
    }
}
returnBook(1);

function showAvailableBooks() { return librarySystem.filter(book => !book.isBorrow) }
showAvailableBooks();
console.log(librarySystem);


