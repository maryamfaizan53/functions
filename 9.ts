//Function Basics:
//Write a TypeScript function called greet that takes a name parameter and returns a greeting message like “Hello, {name}!”.
//Create an arrow function called addNumbers that takes two numbers as arguments and returns their sum.
//Function Overloading:
//Define a function called calculateArea that calculates the area of a circle when given the radius (use function overloading to handle different argument types).
function calculateArea(radius: number): number;
function calculateArea(length: number, width: number): number;
function calculateArea(radiusOrLength: number, width?: number): number {
    if (width === undefined) {
        // Calculating area of a circle
        return Math.PI * radiusOrLength ** 2;
    } else {
        // Calculating area of a rectangle
        return length * width;
    }
}



//Implement the same function to calculate the area of a rectangle when provided with length and width.
//Higher-Order Functions:
//Create a function called applyOperation that takes three arguments: value1, value2, and an operation function (e.g., add, subtract, multiply). Apply the operation to value1 and value2.
//Example: applyOperation(5, 3, add) should return 8.
function applyOperation(val1:number,val2:number,operation:(a:number,b:number)=>number):number{
    return operation(val1,val2)
}
console.log(applyOperation(4, 5, (a, b) => a + b));






//Recursion:
//Write a recursive function called factorial that calculates the factorial of a given positive integer.
//Example: factorial(5) should return 120.
function greet(name:string){
    return(`"Hello! ${name}`)
}
console.log(greet("Maryam"));


let addNumbers =(a:number,b:number)=>{
    return (a+b)
}
console.log(addNumbers(2,3));
//Q1. Write a function checkEvenOdd that accepts a number and prints whether it is even or odd.
function checkOddEven (number:number){
    if(number%2 ==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }

}
checkOddEven(4)
    
//Q2.Write a function arrayOperations that creates an array of numbers, adds a number to the end of the array, removes the first number, and prints the modified array.
function arrayOperations(numbers:number[]){
    numbers.push(7)
    numbers.shift()
    console.log(numbers);
}

console.log(arrayOperations([1,2,3,4,5,6]));

//Q3. Write a function multiplies the elements of an array by 2 and returns the modified array.
function multipliesByTwo(numbers0:number[]){
    for(let i=0;i<numbers0.length;i++){
        numbers0[i]=numbers0[i]*2
    }
    return numbers0
}
    console.log(multipliesByTwo([2,4,7,8,9,5]))

    //.....................2nd method..........................

let array: number[]=[1,3,4,5,8,0];
array = array.map((num)=>{
    return num*2
})
console.log(array);

//Q4. Write a function findLargest that accepts an array of numbers and returns the largest number.

function findLargest1(number:number[]){
    let largest:number=number[0]
    for (let num of number){
        if(num>largest){
            largest=num
        }
    }
    return largest
        }
    console.log(findLargest1([3,5,6,9,2,1,4,]))


    
//Q5. Write a function reverseString that accepts a string and returns the reversed string.
function reverseString(str:string){
    let reversed =  ""            //:string
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i]
    }
    return reversed
}
console.log(reverseString("MARYAM FAIZAN"));

