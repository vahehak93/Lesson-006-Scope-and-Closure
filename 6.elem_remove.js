// Write a function which remove elements with length <= 3

function filterByLength(array) {
    for (let i in array) {
        if (array[i].length <= 3) {
            array.splice(i,1)
        }
    }
    return array
}

const arr = ["kia", "tesla", "bmw", "mercedes"];

console.log(filterByLength(arr))