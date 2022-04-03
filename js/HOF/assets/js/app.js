let cl = console.log;
// HOF >> Array Helping Methods 
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
{ name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let ages = [10, 25, 26, 5, 63, 55, 75, 45, 26, 8, 65, 9, 69, 12,18,19,20, 55];

let oldAges = []
ages.forEach((age) => {
    oldAges.push(age * 2)
})

cl(oldAges);

// map >> It returns new Array

let newOldAges = ages.map((age) => {
    return age * 2
})

cl(newOldAges);

let companyNameArr = [];
companies.forEach((comp) => {
    console.log(comp.name)
    companyNameArr.push(comp.name)
})
cl(companyNameArr);


// let newNameArr = companies.map((comp) => {
//     return comp.name
// })
let newNameArr = companies.map(comp => comp.name);
cl(newNameArr);

let compNameAndCat = [];

companies.forEach((comp) => {
    let obj = {
        name: comp.name,
        category: comp.category
    }
    // cl(obj)
    compNameAndCat.push(obj)
})
cl(compNameAndCat);

// let compNameAndCatNew = companies.map((comp) => {
//         return {
//             name: comp.name,
//             category: comp.category
//         }
// })
let compNameAndCatNew = companies.map(comp =>  ({ name: comp.name,category: comp.category}))
cl(compNameAndCatNew)

let compNameLife = [];

companies.forEach((comp) => {
    let obj = {
        name : comp.name,
        lifeSpan : comp.end - comp.start
    }
    compNameLife.push(obj)
})
cl(compNameLife);

let compNameLifeNew = companies.map(comp => ({name:comp.name, lifeSpan:comp.end - comp.start}));
cl(compNameLifeNew);




let updatedTech = [];

// companies.forEach((comp) => {
//     if(comp.category == 'Technology'){
//         comp.category = "IT"
//     }
//     // cl(comp)
//     updatedTech.push(comp)
// })
// cl(updatedTech);
cl(companies);

// filter

// const companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];
// let ages = [10, 25, 26, 5, 63, 55, 75, 45, 26, 8, 65, 9, 69, 12, 55];


let canDrive = [];

ages.forEach((age) => {
    if(age >= 18){
        // cl(age)
        canDrive.push(age)
    }
})
cl(canDrive);

// let canDriveNew = ages.filter((age) => {
//     // if(age >= 18){
//     //     return age
//     // }
//     return age >= 18
// })
let canDriveNew = ages.filter(age => age >= 18)
cl(canDriveNew);

let canDriveAndMarry = ages
                            .filter(age => age >= 18)
                            .filter(age => age >= 21)
                            .map(age => age * 2);
cl(canDriveAndMarry);

let retailCompanies = [];
companies.forEach((comp) => {
    if(comp.category === 'Retail'){
        // cl(comp)
        retailCompanies.push(comp)
    }
})
cl(retailCompanies);

let retailCompaniesNew = companies.filter((comp) => {
    return comp.category === 'Retail'
})
cl(retailCompaniesNew);
// const companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];
// let ages = [10, 25, 26, 5, 63, 55, 75, 45, 26, 8, 65, 9, 69, 12, 55];

let compRunFor10Y = [];

companies.forEach((comp) => {
    if(comp.end - comp.start >= 10){
        // cl(comp)
        compRunFor10Y.push(comp)
    }
})

cl(compRunFor10Y)

// let compRunFor10YNew = companies.filter((comp) => {
//     return (comp.end - comp.start >= 10)
// })

let compRunFor10YNew = companies.filter(comp => (comp.end - comp.start >= 10));
cl(compRunFor10YNew)

// {name: "comp name", lifeSpan : 15}

let comp10 = [];

companies.forEach((comp) => {
    if(comp.end - comp.start >= 10){
        let obj = {
            name: comp.name,
            span : comp.end - comp.start
        };
        comp10.push(obj)
    }
})
cl(comp10);

// let comp10New = companies
//                     .filter(comp => comp.end - comp.start >= 10)
//                     .map(comp => ({name:comp.name, span : comp.end - comp.start}))

let comp10New = compRunFor10YNew
                    .map(comp => ({name:comp.name, span : comp.end - comp.start}))
cl(comp10New)

let retail10 = [];

companies.forEach((comp) => {
    if(comp.end - comp.start >= 10 && comp.category === "Retail"){
        // cl(comp)
        retail10.push(comp)
    }
})
cl(retail10)


let retail10New = companies.filter(comp => (comp.end - comp.start >= 10 && comp.category === "Retail"))
cl(retail10New);

// sort 
// const companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];
// let ages = [10, 25, 26, 5, 63, 55, 75, 45];
// [25,26,10,63,55,75,45,5]
// [26,25,63]
// [ 75,63,55,45,26,25,10,5]

// let sortedCompnies = companies.sort((comp1, comp2 ) => {
//     debugger
//     if(comp1.start > comp2.start){
//         return 1;
//     }else{
//         return -1
//     }
// })

let sortedCompnies = companies.sort((c1,c2) => (c1.start < c2.start ? 1 : -1))
cl("sortedCompnies",sortedCompnies);

let assendingAges = ages.sort((a, b) => (a > b) ? 1 : -1);
cl(assendingAges);
let dAges = ages.sort((a,b) => (a < b) ? 1 : -1);
cl(dAges);

let demoSort = ages.sort();
cl(demoSort);

let skills = ["HTML", "CSS", "javaScript","jQuery","Typescript","SASS","Angular","Node","MongoDB"];
cl(skills.sort())


// let assendingCompNew = companies.sort((c1,c2) => {
//     if(c1.end > c2.end){
//         return 1
//     }else {
//         return -1
//     }
// })

let assendingCompNew = companies.sort((a,b) => (a.end > b.end ? 1 : -1));
cl("assendingCompNew", assendingCompNew);

// Reduce 

// let ageSum  = 0;

// for (let i = 0; i < ages.length; i++) {
//         ageSum += ages[i]
// };

// let ageSum = ages.reduce((total, age) => {
//     return total + age;
// }, 0)

let ageSum = ages.reduce((total, age) =>  total + age, 0)
cl(ageSum)

let sortedCompnies1 = companies.sort((c1,c2) => (c1.category > c2.category ? 1 : -1))
cl("sortedCompnies",sortedCompnies1);

// let allCompAge = companies.reduce((total, comp) => {
//     return total + (comp.end - comp.start)
// },0)
let allCompAge = companies.reduce((total, comp) =>  total + (comp.end - comp.start),0)
cl(allCompAge)