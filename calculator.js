
// console.log("This is your calculator");

// function calculator(num1, num2, operation) {
//     if (operation === "+") {
//         console.log(`The sum of ${num1} and ${num2} is equal to ${num1 + num2}`)
//     } else if (operation === "-") {
//         console.log(`The subtraction of ${num1} and ${num2} is equal to ${num1 - num2}`)
//     } else if (operation === "*") {
//         console.log(`The multiply of ${num1} and ${num2} is equal to ${num1 * num2}`)
//     } else if (operation === "/") {
//         console.log(`The division of ${num1} and ${num2} is equal to ${num1 / num2}`)
//     } else {
//         console.log("Please type valid operator")
//     }
// }

// calculator(2, 4, "-")



function calculator(num1,num2,operator){   
    if(operator ==="+"){
    console.log(`the sum of ${num1} and ${num2} is equal to ${num1+num2}`)
    }
    else if (operator ==="-"){
     console.log(`the sum of ${num1} and ${num2} is equal to ${num1-num2}`)
    }
    else if(operator === "*"){
     console.log(`the sum of ${num1} and ${num2} is equal to ${num1*num2}`)
    }
    else if(operator === "/"){
         console.log(`the sum of ${num1} and ${num2} is equal to ${num1/num2}`)
        }
    
}
calculator(23,56,"+")
calculator(23,56,"-")
calculator(23,56,"*")
calculator(23,56,"/")
