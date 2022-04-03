let cl = console.log;
let url = "https://jsonplaceholder.typicode.com/posts";

let xml = new XMLHttpRequest();

xml.open('GET', url);
xml.send();
xml.onload = function(){
    // cl(this.responseText)
    let data = JSON.parse(this.responseText)
    cl(data)
}


