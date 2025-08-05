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
