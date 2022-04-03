let cl = console.log;

// single threaded >> excutes one task at a time
// callback  functions
function printTen(){
    cl("10 Printed");
}

function printTwenty(){
    setTimeout(() => {
        cl("Complex Fun with API call !!!")
        cl("20 Printed");
    },2000 )
}


function printThirty(){
    cl("30 Printed");
}

printTen();
printTwenty();
printThirty();

let data = "";
function fetchData(callbackFun){
    setTimeout(() => {
        cl("Fetched data from database");
        data = "Fetched data from database";
        callbackFun();
    }, 2000)
}

function templating(){
   setTimeout(() => {
    if(data.length){
        cl("Created Beatifull UI")
    }else{
        alert("No data for tempalting")
    }
   }, 500)
}

fetchData(templating);
// templating();
const demo = document.getElementById("demo") 
let posts = [
    {title: 'Post One', msg : "This is blog one"},
    {title: 'Post Two', msg : "This is blog Two"},
]

function getPosts(){
    setTimeout(() => {
        let output = `<ul class="list-group">`;
        posts.forEach((post) => {
            output += ` 
                <li class="list-group-item">
                    <strong>${post.title }</strong> <br>
                    ${post.msg}
                </li>
            `
        });
        output += `</ul>`
        demo.innerHTML = output
    },1000)
}

function createPosts(post, callBackFun){
    setTimeout(() => {
        posts.push(post);
        callBackFun();
    }, 2000)
}

// getPosts();
createPosts({title: 'Post Three', msg : "This is blog Three"}, getPosts);

// ecma-2015 >> es-6


// Promise and async and await
//

// Angular >> Observables >> Rx.js

// Promise >> 

