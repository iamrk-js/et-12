let cl = console.log;
let baseurl = 'https://jsonplaceholder.typicode.com/posts';
const posts = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const userForm = document.getElementById('userForm');
const title = document.getElementById('title');
const content = document.getElementById('content');

// function sendHttpRequest(method, url) {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.onload = function () {
//         cl(this.status, this.readyState);
//         if (this.status === 200 && this.readyState === 4) {
//             let data = JSON.parse(xhr.response);
//             for (let post of data) {
//                 const postEl = document.importNode(postTemplate.content, true);
//                 postEl.querySelector('h2').textContent = post.title;
//                 postEl.querySelector('p').textContent = post.body;
//                 posts.append(postEl)
//             }
//         }  for (let post of data) {
//                 const postEl = document.importNode(postTemplate.content, true);
//                 postEl.querySelector('h2').textContent = post.title;
//                 postEl.querySelector('p').textContent = post.body;
//                 posts.append(postEl)
//             }
//     }
//     xhr.send();
// }
function sendHttpRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status === 200 && this.readyState === 4) {
                resolve(JSON.parse(xhr.response))
            } else {
                reject("Something Went Wrong !!!")
            }
        }
        xhr.send(data);
    })
    return promise;
}

// function fetchPosts() {
//     sendHttpRequest('GET', baseurl)
//         .then((responce) => {
//             templating(responce)
//         })
//         .catch(err => cl(err))
// }
let responceData;
// async function fetchPosts() {
//     try {
//         responceData = await sendHttpRequest('GET', baseurl);
//         templating(responceData);
//     } catch (err) {
//         cl(err);
//     }
// }

function templating(arr) {
    posts.innerHTML = "";
    for (let post of arr) {
        let postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title;
        postEl.querySelector('p').textContent = post.body;
        postEl.querySelector('li').id = post.id
        posts.append(postEl)
    }
}

fetchPosts();

const onUserPost = (eve) => {
    eve.preventDefault();
    let obj = {
        title: title.value,
        body: content.value,
        userId: Math.random(),
        id: (responceData.length + 1)
    }
    responceData.push(obj);
    templating(responceData);
    sendHttpRequest('POST', "https://ea-12-new-default-rtdb.firebaseio.com/.json", JSON.stringify(obj))
    eve.target.reset()
}

userForm.addEventListener('submit', onUserPost)


posts.addEventListener('click', function (eve) {
    if (eve.target.tagName === 'BUTTON') {
        let postId = eve.target.closest('li').id;
        let deleteUrl = `${baseurl}/${postId}`
        sendHttpRequest('DELETE', deleteUrl);
        responceData = responceData.filter((obj) => {
           return obj.id != postId
        });
        templating(responceData)
    }
})














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


