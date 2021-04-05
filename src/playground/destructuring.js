const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

//Destructuring
const { name, age } = person;

console.log(`${name} is ${age}.`);