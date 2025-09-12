// Comment for todays class
// Always make sure you log to the console to know whats happening

// 1st topic variables
// Variables are pieces of container for data
// three ways to declare or store variables using var, const, let
// Variable names can be letters, numbers, underscores and dollarsign
// three ways of giving variable names 1. firstName == camelCase, 2. FirstName == pascalcase 3. First_Name == underscore

var First_Name = "Benjamin "
const SecondName = " Vania"
let lastName = " Imisi"

const fullName = First_Name + SecondName + lastName

console.log(fullName)

const lastNumber = 20
const firstNumber = 40

const totalNumber = lastNumber - firstNumber
console.log(totalNumber)

console.log(fullName, totalNumber)

let age, school, city, name
age = 13
school = "Fulwood Academy"
city = "Preston"
username = "Vania Imisi"

const details = {
    name : username,
    city : city,
    age : age,
    school: school
}

console.log(details);

// Assignment
// declare a variable using let and fill in the information of anybody's name, age class hobbie color birthdate then log the final details in an object as seen above. to this for two persoms.

let candidateName, candidateAge, candidateClass, candidateNumber, candidateID

candidateName = "John Doe"
candidateClass = "Year One"
candidateID = 1
candidateNumber = "08061674119"
candidateAge = 13


if(candidateAge > 12 ){
    candidateAge = 14
}
 if(candidateName.includes("John Doe")){
    candidateName = "Dwayne Johnson"
}

const CandidateDetails = {
    name : candidateName,
    age : candidateAge,
    class : candidateClass,
    Id : candidateID,
    number : candidateNumber
}

console.log(CandidateDetails)

// 2nd topic Data types || Primitive data types
// we have 5 data types

// String
const VaniaColor = "Vania is light skin and tall in height"

// Numbers
const VaniasAge = 20

// Boolean
const Logic = false || true

// Null
// which means absent
const presence = null

// undefined
// not defined yet
const definition = undefined

let password = "Vaniaimisi"
let confirmPassword = "VaniaJohnboski"

if(password === confirmPassword){
    console.log("Create Successfully")
}else if (password !== confirmPassword){
    console.log("Incorrect password")
}

// Reference types
const color = VaniaColor
console.log(color);

const regisDetails = CandidateDetails
console.log(regisDetails);

// Topic :  Type conversion
// type conversion is the process of converting a value from one value to another

// Converting string to number
let amount = "1000"
amount = parseInt(amount)
amount = +amount
amount = Number(amount)

console.log(amount, typeof(amount))

// Converting number to string
let count = 200
count = count.toString()
count = String(count)

console.log(count, typeof(count))

// Converting strings to decimals
let decimal = "99.5"
decimal = parseFloat(decimal)

console.log(decimal, typeof(decimal))

// Converting number to boolean
let check = 0
check = Boolean(check)

console.log(check);

// TASK - convert string 22 to number, convert number 32 to string, convert boolean false and true to  number.

// Topic : Operators
// Arithemetic Operators
let x;
x = 5 + 5
x = 10 - 5
x = 5 * 5
x = 7 % 5

// Increment
x = 1
x = x + 5
x++

// Decrement
x = 2
x = x - 5
x--
console.log(x);


// Comparison
let compare = 2 == 3
compare = 2 != 3
compare = 5 < 10
console.log(compare);

// Concatination
// means to join

console.log('Hello' + 'Vania')

// Task - use the arithemetic operators to do basic mathematical operation

// Topic: Type Coercion
// Coercion happens when you apply a value to operators
let coercion = 5 + "5"
coercion = 5 + Number("5")
console.log(coercion)

// Topic: Working with strings
// using concatination
const myName = "Benjamin"
const myBestFood = "Rice and Stew"
const favouriteColor = "Blue"

let fullSentence = "my name is " + myName + " my favourite is food " + myBestFood + " i love the color" + favouriteColor

console.log(fullSentence);

// using tempelate literals
const anotherSentence = `my name is ${myName} my favourite color is ${favouriteColor} and my best food is ${myBestFood}`
console.log(anotherSentence);


// Task use the concatination way to to add a string of I am going to school with the data of school been initialiazed as a variable


// Task 2 us template literals to add a string of my name is name and i am going home. make sure to initialiase name and home using a variable.


// Topic String Properties and Methods
// Methods are function
// Properties are attributes

const word = new String('Hello World')
x = word.length
x = word.toUpperCase()
x = word.toLowerCase()
x = word.indexOf('W')
x = word.substring(0, 5)
x = word.replace('Hello', 'Welcome')
x = word.replaceAll('Hello World', 'Welcome Vania')
x = word.includes('Vania') // returns true or false
x = word.valueOf()
x = word.split()
x = word.charAt(0) // gives the first data on the code
console.log(x)

// Change the first letter of this (developer) t0 uppercase