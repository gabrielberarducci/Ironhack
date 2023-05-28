/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

const form = document.getElementById("form"); 
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formPhone = document.getElementById("phone");
const formMessage = document.getElementById("message");
const passedMessage = document.getElementById("SuceedMessage");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(`Hi my name is ${formName.value}, my email is ${formEmail.value} and my phone number is ${formPhone.value}. I have this message for you: ${formMessage.value}`);

    passedMessage.hidden = false;

    const myTimeoutId = setTimeout(() => {
        passedMessage.hidden = true;
    }, 4000);
    
    formName.value = "";
    formEmail.value = "";
    formPhone.value = "";
    formMessage.value = "";
})