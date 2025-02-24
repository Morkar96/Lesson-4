let name = "Mor"
let age = 28
let isStudent = false
console.log( name , age , isStudent)

function greet(){
    return "Hello World!"
}

function getNumber(){
    return 42
}

function isEven(){
    return true
}

console.log(greet() , getNumber() , isEven())

function getMyName(){
    let name = "Mor"
    return name
}
function getMyAge(){
    let age = 28
    return age
}
function introduce(){
    return `My name is ${getMyName()} and I am  ${getMyAge()} years old`
}
console.log(introduce())