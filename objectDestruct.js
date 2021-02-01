
const person = {
    name: "mathan",
    favouriteFood: 'LemonRice',
    age: 23,
    address: {
        city: "Tirunelveli",
        state: "Tamilnadu"
    }
}

//const { name, age } = person

// const { name: firstName = 'John', age, favouriteFood = 'Briyani' } = person
// console.log(firstName);
// console.log(age)
// console.log(favouriteFood)

// const { name: firstName, age, ...rest } = person
// console.log(firstName);
// console.log(rest)

// const { name: firstName, age, address: { city } } = person
// console.log(firstName);
// console.log(city)

function printUser({ name, age }) {
    console.log("Name:", name, ', Age:', age)
}

printUser(person)

