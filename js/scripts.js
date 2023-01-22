const form = document.querySelector("#form")
const nameInput = document.getElementById("name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextArea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
  event.preventDefault()//evita o page reload

  //verificação de vazio
  if(nameInput.value === ""){
    const text = "Por favor, preencha o campo do nome."
     toggleModal(text)
    return
  }
  if(emailInput.value === "" || !checkIfEmailIsValid(emailInput.value)){
    const text = "Por favor, preencha o campo do e-mail."
    toggleModal(text)
    return
  }

  if(!validatePassword(passwordInput.value, 8)){
    const text = "Por favor, preencha o campo da senha."
    toggleModal(text)
    return
  }

  if(jobSelect.value === ""){
    const text = "Por favor, preencha o campo da sua situação atual."
    toggleModal(text)
    return
  }

  if(messageTextArea.value === ""){
    const text = "Por favor, preencha o campo da messagem."
    toggleModal(text)
    return
  }
   //envio do form quando tudo dé certo
  form.submit();
})
 
 //função que valida e-mail
 function checkIfEmailIsValid(email) {

    //regex
    const emailRegex = new RegExp(
      //usuario12@host.com.be
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );

    if(emailRegex.test(email)){
      return true
    } return false
 }
 
 //validação de senha
 function validatePassword(password, minDigits){
  if(password.length >= minDigits){
    return true
  } return false
 }


 /*Modal*/
const closeModalButton = document.querySelector("#close-modal")
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const messageModal = document.querySelector("#message_modal")

function toggleModal(text){
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");

    messageModal.textContent = text
  }

 

 const closeModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
 }
 [closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => closeModal());
 })



 

