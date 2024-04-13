// Array of students with their names and grades
const students = [
    { name: "Alice", grades: [80, 75, 90] },
    { name: "Bob", grades: [85, 90, 88] },
    { name: "Charlie", grades: [70, 65, 80] },
    { name: "David", grades: [90, 85, 92] },
    { name: "Raja", grades: [95, 90, 85] },
    { name: "Rani", grades: [90, 85, 92] },
    { name: "Gird", grades: [80, 55, 90] },
    { name: "Hank", grades: [85, 90, 98] }
]

// Calculate average grade for each student and add it to the student object
students.forEach(student => {
    let sum = 0;
    for (let i = 0; i < student.grades.length; i++) {
        sum += student.grades[i];
    }
    const averageGrade = sum / student.grades.length;
    student.averageGrade = averageGrade;
})

console.log(students);

// Array of books with their titles, authors, and prices
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: 9.99 },
    { title: "1984", author: "George Orwell", price: 10.99 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 8.49 },
    { title: "Pride and Prejudice", author: "Jane Austen", price: 7.99 },
];

// Function to format books into strings containing title and price
function formatBooks(books) {
    return books.map(book => `${book.title}: ${book.price}`);
}

const formattedBooks = formatBooks(books);
console.log(formattedBooks);

// Array of purchases with items and their prices
const purchases = [
    { item: "Shoes", price: 89.99 },
    { item: "Headphones", price: 49.99 },
    { item: "Book", price: 15.50 },
    { item: "Backpack", price: 39.99 },
    { item: "T-shirt", price: 12.99 },
];

// Function to calculate the total amount spent on purchases
function calculateTotal(purchases) {
    return purchases.reduce((total, purchase) => total + purchase.price, 0);
}

const totalAmountSpent = calculateTotal(purchases);
console.log(totalAmountSpent);

// Array of employees with their names, departments, and salaries
const employees = [
    { name: "Alice", department: "Backend Developer", salary: 60000 },
    { name: "Bob", department: "Front end", salary: 55000 },
    { name: "Charlie", department: "Engineering", salary: 52000 },
    { name: "David", department: "Testing", salary: 58000 },
    { name: "Emily", department: "HR", salary: 51000 },
];

// Function to filter employees based on department and salary criteria
function filterEmployees(employees) {
    return employees.filter(employee => employee.department === "Engineering" && employee.salary > 50000);
}

const filteredEmployees = filterEmployees(employees);
console.log(filteredEmployees);
