// Write a function that implements filtering in array


function filterFalsyValues(array) {
    truthy_values = [];
    for (let i of array) {
        if (Boolean(i) === true) {
            truthy_values.push(i)
        } else {
            continue
        }
    }
    return truthy_values
}


const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];


console.log(filterFalsyValues(values))