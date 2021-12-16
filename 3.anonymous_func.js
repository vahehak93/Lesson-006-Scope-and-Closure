/*Write a function that returns an anonymous function, which transforms its input by adding a
particular suffix at the end.*/

function add_let(input) {
    let add = "let";
    return function() {
        console.log(input + add)
    }
}

let input = "pig";
let add_suffix = add_let(input) 
add_suffix()

