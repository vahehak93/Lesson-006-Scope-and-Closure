// Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
    return function () {
        return str
    }

}


let str = "Vahe";

const f1 = redundant(str);

console.log(f1());