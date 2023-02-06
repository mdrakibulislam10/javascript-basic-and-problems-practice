function smallPerson(persons) {
    let smallest = persons[0];
    // let smallestMan = "";
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        if (person.age < smallest.age) {
            smallest = person;
            // smallestMan = person.name;
        }
    }
    return smallest;
    // return smallestMan;
};

const persons = [
    { name: 'sakib', age: 30 },
    { name: 'samiul', age: 20 },
    { name: 'sahid', age: 50 },
    { name: 'samin', age: 10 },
    { name: 'samim', age: 40 },
];
const smallest = smallPerson(persons);
console.log(smallest);