const errorMsg = document.querySelector(".hidden")
const button = document.querySelector(".suscrib button")
const mailInput = document.querySelector(".form input")
const container = document.querySelector(".container")

const emailValue = document.querySelector(".subscribing-success p span")

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//const email = "email@company.com"
const subscription = document.querySelector(".subscribing-success")

button.addEventListener("click",()=>{

    if(!regexEmail.test(mailInput.value) || !mailInput.value){
        errorMsg.style.display = "block"
        container.classList.add("shake")
    }
    else{
        subscription.style.left = "-500px"
        container.style.left = "-1000px"
        emailValue.textContent = mailInput.value;
        //alert(`We sent a message at ${mailInput.value}`)
    }
})

const subButton = document.querySelector(".subscribing-success button")

subButton.addEventListener("click",()=>{
    alert("the message has been removed")
})




