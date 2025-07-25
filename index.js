console.log("Assignment-17--function in js")


// Q1)

const square = (number) => {
    return number * number;
}

// console.log(square(3));
let numsquare = square(7);

console.log(numsquare);


//Q2)  

function generateGreeting(name){
    return "Good Morning! " + " " + name;
}
let person1 = generateGreeting("adnan");
let person2 = generateGreeting("rohan");
let person3 = generateGreeting("rohit");
console.log(person1 + "\n" + person2 + "\n" + person3);

//Q3)

(function(){
    function square(n){
        return n ** 2;
    }
    let numsquare = square(9);
    console.log(numsquare);
}) ();

// Q4) 

function taxCalculator(){
     return function (income){
        let taxRate;
        if(income <= 250000){
            taxRate = 10/100; /// 10 %
        }else if(income <=750000){
            taxRate = 20/100;   /// 20%
        }else{
            taxRate = 30/100;    /// 30%
        }
    return income * taxRate;
    };
};

let calculateIncome = taxCalculator();
console.log(calculateIncome(800000));



// Q5   

function factorial(n){

    if(n < 0){
        throw new Error ("Factorial is not defined for Negative Number")
    }
    // base case
    if(n == 0 || n == 1){
        return 1;
        
    }
    // console.log(n);                           /// debugging purpose 
    // recursive case 
    return n * factorial(n - 1);
}
 
//   factorial(5);                                 /// debugging purpose 

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(9));
console.log(factorial(6));
console.log(factorial(5));



// Q6) 

function curry(functions){                                        //We don’t know how many arguments the user will pass each time
    return function curried(...arguments){                       // use when you dont know how many argument will be passed / ... called as spread or rest operator it collect all arguments into an array called arguments
        if(arguments.length >= functions.length){                // arguments are previously collected arguments                            
            return functions(...arguments);                          
        }else{
            return function (...nextArguments){                   //nextArguments are newly passed argument
                return curried(...arguments, ...nextArguments);    // ...arguments, ...nextArguments = combine both into one array and call curried() again


            };
        };
    };

};

// Test function 
function add(a,b){
    return a + b;
};

//curried version 
const curriedAdd = curry(add);

// test cases 

console.log(curriedAdd(10,2));
console.log(curriedAdd(9,2));