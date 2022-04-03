let cl = console.log;

let person = {
    name : "RAvikiran",
    email : "iamrk@gmail.com",
    age : 33,
    canDrive : false
}

cl(person);

let personJson = JSON.stringify(person);
cl(personJson);

let newPerson = JSON.parse(personJson);
cl(newPerson)