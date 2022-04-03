let cl = console.log;


let featured = ['Deep Dish', 'Peporoni', "Panner Tikka"];

let specialty = ['Indian Tandoor', 'Spicy Mama', 'Butter Chicken'];

// let allPizzas = featured.concat("Hawaiian", specialty);

let allPizzas = [...featured, "Hawaiian", ...specialty];

cl(allPizzas);

let fridayPizzas = [...specialty];

fridayPizzas.push('Friday Pizza');

cl(fridayPizzas);
cl(specialty);

let persons = [...document.querySelectorAll('.persons p')];
cl(persons)
let names = persons.map((person) => {
    return person.textContent
});
cl(names);

let comments = [
    { id: 123, text: 'Your are not bad at js.' },
    { id: 124, text: "Ypu don't have a value of others time."},
    { id: 125, text: "You are dumb."},
    { id: 126, text: "I love your Blogs" }
];
let id = 125;
let getIndex = comments.findIndex((comment) => {
  return comment.id === id;
})

cl(getIndex)

let updatedComments = [...comments.slice(0,getIndex ), ...comments.slice(getIndex + 1)];

cl(updatedComments);

let inventors = ['Einstein', 'Newton', 'Araybhat'];

let newInvetors = ['Musk', 'Jobs'];


inventors.push(...newInvetors);
// inventors.push('Musk', 'Jobs');

cl(inventors);

function sayHi(fname, lname){
    alert(`Hey There ${fname} ${lname}`)
}

const fullName = ['Ravikiran', 'Niturkar'];

// sayHi(fullName[0], fullName[1])
sayHi(...fullName)