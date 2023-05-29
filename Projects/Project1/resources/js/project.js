/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */


function getPosts(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if(response.ok)    
            return response.json()
        else
            throw Error("Failed to get Posts data");
    })
    .catch((error) => {
        console.log(error.message);
    })
}

function newRandomChild(parent, data){
    let newChild = document.createElement("div");
    newChild.className = "post";
    newChild = document.createElement("div");
    let i = Math.floor(Math.random() * 100);
    newChild.innerHTML = `
    <div id="${data[i].id}">    
        <h2>${data[i].title}</h2>
        <p>${data[i].body}</p>
        <p>Author: ${data[i].userId}</p>
    </div> 
    `;
    parent.appendChild(newChild);
}

function newChildById(parent, data){
    let newChild = document.createElement("div");
    newChild.className = "post";
    newChild = document.createElement("div");
    newChild.innerHTML = `
    <div id="${data[id-1].id}">    
        <h2>${data[id-1].title}</h2>
        <p>${data[id-1].body}</p>
        <p>Author: ${data[id-1].userId}</p>
    </div> 
    `;
    parent.appendChild(newChild);
}

getPosts().then((data) => {
    let parent = document.querySelector("#projects");
    newRandomChild(parent,data);
    newRandomChild(parent,data);
    newRandomChild(parent,data);
    newChildById(parent,data,3);
})