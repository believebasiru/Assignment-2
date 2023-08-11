// Challenge - 1
// Use a for loop to calculate the sum of the numbers in the given array.
let arrayNumbers = [3, 4, 6, 8, 90, 65, 75, 75, 54, 10]
let sum = 0
for(let i = 0; i < arrayNumbers.length; i++) {
    sum += arrayNumbers[i]
}



// Challenge - 2
// Use a for loop to determine the numbers of all even numbers in the given array. 
// You can determine if a number is even or odd by using the remainder operator(%)
// You will need a variable that is zero that increments by one for every even number detected.
let arrayOfNumbers = [3, 4, 6, 8, 90, 65, 75, 75, 54, 10]

for(let i = 0; i < arrayOfNumbers.length; i++) {
    if(arrayNumbers[i] % 2 === 0) {
        console.log('even number')
    } else {
        console.log('odd number')
    }
}



// Challenge - 3
// Use a for loop that logs 'This is Kadahive' 10 times

for(let i = 1; i <= 10; i++) {
    console.log('this is kadahive')
}



// Challenge - 4
// Write a program that calculates the area of a rectangle that has a height of 10cm and a breadth of 15cm
let area;
let height = 10
let breadth = 15

area = height * breadth
console.log(area + 'cm')



// Challenge - 5
// Write a JavaScript program to check a pair of numbers that logs true if one of the numbers is 50 or if their sum is 50

let firstNumber = 20
let secondNumber = 50

if(firstNumber === 50 || secondNumber === 50 || firstNumber + secondNumber === 50) {
    console.log(true)
}
