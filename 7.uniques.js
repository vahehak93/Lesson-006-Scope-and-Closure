// Given an array. Determine whether it consists only from uniques or not.


const arr = ["Vahe", "Hakobyan", "28", "Vahee`", "Armenia", "Yerevan"];


function unique_elems(array) {
    let obj = {};
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        obj[array[i]] = count
        count++
    }
    if (Object.keys(obj).length === array.length) {
        console.log("True: elements are unique")
    } else {
        console.log("False: elements are NOT unique")
    }
}

unique_elems(arr)

