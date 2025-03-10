console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

console.log(SUPER_SECRET_PASSWORD === receivedPassword ? "Welcome! You are logged in as Brunhilde1984." : "Access denied!")

// Part 2: Even / Odd
const number = 0;

if (number % 2 === 0) {
    console.log("Even number")
} else {
    console.log("Odd number")
}


// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
    console.log("Price per hot-dog: 2 euros");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
    console.log("Price per hot-dog: 1.50 euros");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
    console.log("Price per hot-dog: 1 euros");
} else if (numberOfHotdogs >= 1000000) {
    console.log("Price per hot-dog: 0.10 euros");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName === "CoachName" ? "Coach" : userName) + "!";

console.log(greeting);
