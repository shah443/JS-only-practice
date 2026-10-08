// try{
//     console.log("This is my try block");
// }catch(object){
//     console.log(object);
// }finally{
//     console.log("Finally")
// }

//Random Number
// Write a program that generates a random number between 1 and 10 using Math.random().
// Use try...catch...finally to handle any unexpected error.

// try{
//     console.log( Number.parseInt((Math.random()*10)+1))
// }
// catch (name){
//     console.log(name)
// }
// finally{
//     console.log("finally")
// }

// Square Root
// Ask the user for a number and calculate its square root using Math.sqrt().

// If the input is negative, throw an error.
// Handle the error with catch.
// Print "Calculation completed" in finally.


// try{
//     const number = prompt("write any number")
//     if(number < 0){
//         throw new Error("User ne negative number enter kra")
//     }
//     console.log(Math.sqrt(number))
// }
// catch(error){
//     console.log(error)
// }
// finally{
//     console.log("calculation completed")
// }

// try{
//     throw new Error("error is")
// }
// catch(error){
//     console.log(error)
// }
