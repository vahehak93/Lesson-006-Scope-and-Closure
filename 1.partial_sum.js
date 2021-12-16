// Create a function that implements partial sum

function sum(x) {
    return function(y) {
        return x+y
    }
}

console.log(sum(5)(10))