// alert("Hello")
let cl = console.log;
const posts = document.getElementById("posts");
const userForm = document.getElementById("userForm");
const title = document.getElementById("title");
const content = document.getElementById("content");
const updateBtn = document.getElementById("updateBtn");
const addPostBtn = document.getElementById("addPostBtn");
let baseUrl = "http://localhost:3000/posts";

updateBtn.style.display = "none";

function makeApiCall(method, url, body) {
    return fetch(url, {
        method: method,
        body: body,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(res => {
        return res.json()
    })
}

// fetch >> Browser API >> HTML5 

// function fetchData(url) {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => templating(data))
// }

async function fetchData() {
    let responceData = await makeApiCall("GET", baseUrl);
    // let newResData = await responceData.json();
    templating(responceData);
}

// function createPost(eve) {
//     eve.preventDefault();
//     let postObj = JSON.stringify({
//         title: title.value,
//         body: content.value,
//         userId: Math.random()
//     });
//     fetch(baseUrl, {
//         method: "POST",
//         body: postObj,
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     })
// }

async function createPost(eve) {
    eve.preventDefault();
    let postObj = JSON.stringify({
        title: title.value,
        body: content.value,
        userId: Math.random()
    });
    let responceData = await makeApiCall("POST", baseUrl, postObj);
    cl(responceData)
}


function templating(arr) {
    let output = "";
    arr.forEach(element => {
        output += `<li class="post-item" id="${element.id}"> 
                    <h2>${element.title}</h2>
                    <p>${element.body}</p>
                    <button type="button" onclick="deletePost(this)">DELETE</button>
                    <button type="button" onclick="editPost(this)">EDIT</button>
        </li>`
    });
    posts.innerHTML = output;
}
function deletePost(post) {
    let getId = post.closest("li").id;
    let deleteUrl = `${baseUrl}/${getId}`
    fetch(deleteUrl, {
        method: "DELETE"
    })
}
// function editPost(post) {
//     let editId = post.closest('li').id;
//     cl(editId)
//     let editUrl = `${baseUrl}/${editId}`
//     fetch(editUrl)
//         .then(res => res.json())
//         .then(data => {
//             localStorage.setItem("postToUpdate", JSON.stringify(data))
//             title.value = data.title;
//             content.value = data.body;
//         })
//     updateBtn.style.display = "block";
//     addPostBtn.style.display = "none";
// }
async function editPost(post) {
    let editId = post.closest('li').id;
    let editUrl = `${baseUrl}/${editId}`
    let res = await makeApiCall('GET', editUrl)
    title.value = res.title;
    content.value = res.body;
    updateBtn.style.display = "block";
    addPostBtn.style.display = "none";
}

// function updatePost() {
//     let updatePost = JSON.parse(localStorage.getItem("postToUpdate"));
//     let updateUrl = `${baseUrl}/${updatePost.id}`;
//     let updateObj = JSON.stringify({
//         title: title.value,
//         body: content.value,
//     });
//     fetch(updateUrl, {
//         method: "PATCH",
//         body: updateObj,
//         headers: {
//             'Content-type': 'application/json; chartset=UTF-8',
//             'token': 'bearer-token : my private key'
//         }
//     })
// }

async function updatePost() {
    let updatePost = JSON.parse(localStorage.getItem("postToUpdate"));
    let updateUrl = `${baseUrl}/${updatePost.id}`;
    let updateObj = JSON.stringify({
        title: title.value,
        body: content.value,
    });
    let res = await makeApiCall('PATCH', updateUrl, updateObj);
}

userForm.addEventListener("submit", createPost);
updateBtn.addEventListener("click", updatePost);
fetchData(baseUrl)


async function init() {
    let test = await demo()
    let test2 = await demo2(test)
}