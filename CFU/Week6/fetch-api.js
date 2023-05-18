// Fetch #1
// Instrucciones

// En este ejercicio, trabajarás con la función fetch() para solicitar datos de la API JSONPlaceholder.

//     Crea una función llamada getTodos que utilice la API fetch para realizar una petición GET al endpoint de la API JSONPlaceholder https://jsonplaceholder.typicode.com/todos.
//     Manejar la respuesta del servidor analizándola en JSON y devolviendo los datos analizados. Si hay un error en la petición, lanza un mensaje de error “Failed to get todos data”.
//     Usa la función getTodos para obtener todos los todos y registra la respuesta en la consola.
//     Añade un tratamiento de errores a la función getTodos para capturar cualquier error que ocurra durante la petición y registrarlo en la consola con el mensaje de error “Failed to get todos data”.


function getTodos(){
    return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
        if(response.ok)    
            return response.json()
        else
            throw Error("Failed to get todos data");
    })
    .catch((error) => {
        console.log(error.message);
    })
}

getTodos().then((data) => console.log(data))
    

// Fetch #2
// Instrucciones

// En este ejercicio, trabajarás con la función fetch() para mostrar datos de un servidor en una página web.

//     Define una función llamada displayData. Dentro de esta función, utiliza el método fetch() para hacer una petición al servidor en la URL https://jsonplaceholder.typicode.com/posts.
//     Después de que la petición tenga éxito, el servidor responderá con datos.
//     Necesitamos parsear estos datos en un formato que JavaScript pueda entender (JSON).
//     Después de analizar los datos, utilice JavaScript para crear nuevos elementos HTML, uno para cada entrada, y añada el título y el cuerpo de la entrada a cada elemento. Añade estos nuevos elementos a un elemento existente en la página (un div con el id “posts”).
//     Si la solicitud encuentra un error, muestre un mensaje de error en la página (por ejemplo, “Failed to fetch data”).
//     Finalmente, llama a la función displayData para ejecutar el código y recuperar los datos del servidor y mostrarlos en la página.


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

getPosts().then((data) => {
    console.log(data);
    let post = document.querySelector("#posts");
    let newChild = document.createElement("div");
    newChild.className = "post";
    for(let i = 0 ; i < data.length ; i++){
        newChild = document.createElement("div");
        newChild.innerHTML = `
        <div id="${data[i].id}">    
            <h2>${data[i].title}</h2>
            <p>${data[i].body}</p>
            <p>Author: ${data[i].userId}</p>
        </div> 
        `;
        post.appendChild(newChild);      
    }
})