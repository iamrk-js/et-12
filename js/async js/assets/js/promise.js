// const demo = document.getElementById("demo")
let posts = [
    { title: 'Post One', msg: "This is blog one" },
    { title: 'Post Two', msg: "This is blog Two" },
]

function getPosts() {
    setTimeout(() => {
        let output = `<ul class="list-group">`;
        posts.forEach((post) => {
            output += ` 
                <li class="list-group-item">
                    <strong>${post.title}</strong> <br>
                    ${post.msg}
                </li>
            `
        });
        output += `</ul>`
        demo.innerHTML = output
    }, 1000)
}

function createPosts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let error = true;
            if (!error) {
                resolve()
            } else {
                reject("Error : Something Went Wrong")
            }
        }, 2000)
    })
}

// getPosts();
// createPosts({ title: 'Post Three', msg: "This is blog Three" })
//                 .then(getPosts)
//                 .catch(err => console.log(err))
              
async function init(){
    try {
     await createPosts({ title: 'Post Three', msg: "This is blog Three" });
        getPosts();
    }catch ( err) {
        cl(err)
    }
}

init()