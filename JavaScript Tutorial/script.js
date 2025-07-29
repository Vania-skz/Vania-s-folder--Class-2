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