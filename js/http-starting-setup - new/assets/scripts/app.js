let cl = console.log;
let baseurl = 'https://jsonplaceholder.typicode.com/posts';
const posts = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const userForm = document.getElementById('userForm');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitBtn = document.getElementById('submitBtn');
const updateBtn = document.getElementById('updateBtn');
let responceData = [];
function fetchHttpRequest(method, url, data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if ((xhr.status === 200 || xhr.status === 201) && xhr.readyState === 4) {
                resolve(JSON.parse(xhr.response))
            } else {
                reject("Some Thing Went Wrong ??")
            }
        }

        xhr.send(data)
    })

}

function templating(arr) {
    let output = ``;
    arr.forEach(element => {
        output += `
                    <li class="post-item" id="${element.id}">
                            <h2>${element.title}</h2>
                           <p>${element.body}</p>
                           <button onclick="onDelete(this)">DELETE</button>
                           <button onclick="onEdit(this)">EDIT</button>
                    </li>
                `
    });
    posts.innerHTML = output;
}

let onSubmit = (eve) => {
    eve.preventDefault();
    let obj = {
        title: title.value,
        body: content.value,
        userId: Math.random(),
        id: responceData.length + 1
    }
    responceData.push(obj);
    templating(responceData)
    fetchHttpRequest("POST", baseurl, JSON.stringify(obj))
}

function onDelete(ele) {
    cl(ele.closest('li').id);
    let id = ele.closest('li').id;
    let deleteUrl = `${baseurl}/${id}`;
    fetchHttpRequest("DELETE", deleteUrl);
    responceData = responceData.filter(obj => obj.id != id);
    templating(responceData);
}
function onEdit(ele) {
    let id = +ele.closest('li').id;
    let getObject = responceData.find(obj => obj.id === id);
    localStorage.setItem("setObjcect", JSON.stringify(getObject));
    title.value = getObject.title;
    content.value = getObject.body;
    submitBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none');
}

function toggleBtns() {
    submitBtn.classList.toggle('d-none');
    updateBtn.classList.toggle('d-none');
}

const onUpdate = (eve) => {
    let id;
    let getLocalObj = JSON.parse(localStorage.getItem("setObjcect"));
    cl(getLocalObj);
    let getObj = {
        title : title.value,
        body :content.value,
        userId : getLocalObj.userId,
        id : getLocalObj.id,
    }
    let putUrl =` ${baseurl}/${getLocalObj.id}`;

    fetchHttpRequest('PUT', putUrl, getObj);
     responceData.forEach((obj) => {
        if(obj.id == getObj.id){
            obj.title = getObj.title;
            obj.body = getObj.body;
        }
    })
    templating(responceData);
    userForm.reset();
    submitBtn.classList.remove('d-none');
    updateBtn.classList.add('d-none');
}
fetchHttpRequest("GET", baseurl)
    .then(data => {
        responceData = data;
        templating(data)
    })
    .catch(err => cl(err))


userForm.addEventListener('submit', onSubmit)

updateBtn.addEventListener('click' , onUpdate)









// xhr.status >>
// 200 >> success
// 4xx >> client side error >> 404 >> page not found ; 403 >> forbidden
// 5xx >> server side error


// xhr.readyState
// 0 >> request is not inialized
// 1 >> server connection establised
// 2 >> request received
// 3 >> proccessing request
// 4 >> responce is ready


