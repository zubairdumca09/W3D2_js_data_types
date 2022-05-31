// function 1
function test() {
    console.log(12)
}
// function 2
let fun = function () {

}
// function 3
let fun1 = (x, y) => {
    console.log(x, y)
    return x + y;
}

console.log(typeof test)


function sum(x, y) {
    console.log(x, y)
    return x + y;
}
console.log("==========================")
let result = sum(2, 3);

console.log(result)


