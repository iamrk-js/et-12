let cl = console.log

function fetchRequest(stack) {
    return new Promise((resolve, reject) => {
        cl(`We are starting Request for ${stack}`);
        if (stack.toLowerCase() === "angular") {
            resolve('Angular Says Hi !!!')
        } else {
            reject('We only deals with Angular')
        }
    })
}

// fetchRequest("react.js")
//             .then((data) => cl(data))
//             .catch((err) => cl(err) )


function processData(responce) {
    return new Promise((resolve, reject) => {
        resolve(`We got the Information about ${responce}`)
    })
}

// fetchRequest('angular')
//     .then(res => {
//         cl('Responce Recived');
//         return processData(res);
//     })
//     .then((processedResponce) => {
//         cl(processedResponce)
//     })
//     .catch(err => {
//         cl(err)
//     })

async function init() {
    try {
        let responce = await fetchRequest('react.js');
        let processedResponce = await processData(responce);
        cl(processedResponce);
    } catch (err) {
        cl(err);
    }
}

init()