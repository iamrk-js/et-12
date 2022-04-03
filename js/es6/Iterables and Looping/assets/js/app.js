let cl = console.log;

let skills = ["Html", "CSS3", "javaScript", "Angular"];

let test = [];
for (skill of skills.entries()){
    cl(skill);
    test.push(skill)
}

// [0, "HTML"]