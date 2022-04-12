const array = process.argv.slice(2)

// function declaration

// function addTwoNumbers(x,y){
// console.log(x+y)
// }

// addTwoNumbers(2,4)

// // function expression 

// const functionEx = function addTwoNumbers(x,y){
//     console.log(x+y)
//     }
    
// functionEx(2,4)

// // arrow function 

// const x1=(x,y)=>
//     console.log(x+y);
    
    
// x1(4,4)


//ASSERT EQUALS FUNCTION


const assertEquals = (actual, expected) => {
    if (actual === expected){
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    }
    else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
    }
}
assertEquals(5,5)