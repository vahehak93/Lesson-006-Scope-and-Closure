// Create a function printAfter that calls its argument after printing hello world


function printAfter() {
    console.log("hello world")
    return print()
}

const print = () => console.log("Elon Musk");



printAfter(print);