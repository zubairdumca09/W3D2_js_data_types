//object
let person = {
    age: 29,
    address: "ABC Road",
    name: "Manohar",
    "earlier address": "AGH Road",
    getName() {
        return this.name;
    }
}
person.getName();
let x = "address";

console.log(person.age)
console.log(person.name)
console.log(person.address)
console.log(person["address"])
console.log(person["name"])
console.log(person[x])
console.log(person["earlier address"])


//nested object
let user = {
    name: {
        first: "Manohar",
        last: "Sharma"
    },
    age: 29
}

console(user.name.first)

//delete key from object

let user1 = {
    name: "Manohar",
    age: 29
}
delete user1.age;
console.log(user1)

//edit key in object

let user2 = {
    name: "Manohar",
    age: 29
}

user2.age = 26;
user2["name"] = "Rama";

console.log(typeof user2)



