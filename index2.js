// Challenge 1

// Add the following elements to the container class in the HTML file using ONLY JavaScript and the DOM methods.

// 1. a <p> with red text that says “Hey I’m red!”
// 2. an <h3> with blue text that says “I’m a blue h3!”
// 3. a <div> with a black border and pink background color with the following elements inside of it:
//     i. another <h1> that says “I’m in a div”
//     ii. a <p> that says “ME TOO!”
   
let container = document.querySelector('#container')

console.log(container)
let h3 = document.createElement('h3')
h3.innerText = 'I am a blue h3';
h3.style.backgroundColor = 'blue';
h3.style.color = 'white';
h3.style.width = '150px';
h3.style.paddingBottom = '20px';
h3.style.paddingTop = '20px';
h3.style.paddingLeft = '20px';
h3.style.paddingRight = '20px';
container.appendChild(h3);

 let content = document.querySelector('.content')
 console.log(content)
 content.classList.add('p')
 content.innerText = "hey I'm red";
 content.style.backgroundColor = 'red'
 content.style.color = 'white'
content.style.width = '150px'
content.style.paddingBottom ='20px'
content.style.paddingTop = '20px'
content.style.paddingLeft = '20px'
content.style.paddingRight ='20px'
container.appendChild(content)

let div2 = document.querySelector('.div2')
console.log(div2)
div2.innerText = "I'm a div"
div2.style.border = '2px solid black';
div2.style.border = 
div2.style.backgroundColor = 'pink'
div2.style.width = '150px'
div2.style.paddingBottom ='20px'
div2.style.paddingTop = '20px'
div2.style.paddingLeft = '20px'
div2.style.paddingRight ='20px'
container.appendChild(div2)




// Challenge 2
// Write a JavaScript function that takes an array of numbers and finds the lowest and highest numbers.
function highestLowest(arr) {
    console.log(Math.max(...arr))
    console.log(Math.min(...arr))
}

highestLowest([8,4,9,2,3,45,1,3,45,4,5,5])



// Challenge 3
// Write a JavaScript program to compute the sum and product of an array of integers

function product(arr) {
    let pro = 1
    for(let i = 0; i < arr.length; i++) {
        pro *= arr[i]
    }
    console.log(pro)
}
product([8,9,3,4,5,6,7,8,5,4,565,5])


// Challenge 4
//  Write a Javascript program that changes the background color of the Click Me button to red and 
// also changes its text color to grey at the click of the button.

let btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', function() {
    console.log('change')
    btn.style.backgroundColor = 'red'
    btn.style.color = 'gray';
   

})


// Challenge 5
// Write a javascript program that calculates a simultaneous equation using the almighty formula(quadratic formula).
// Hint: Know what the almighty formula, pass in the a,b,c of the almighty formula as a parameter

function quadratic(a,b,c) {
    let result = (-b) + Math.sqrt((b * b) - 4 * a * c)
    console.log(result / 2 * a)
}

quadratic(1, -5, 6)

