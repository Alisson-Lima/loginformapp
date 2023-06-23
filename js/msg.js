function message(msg = String, type = Boolean){

    const app = document.querySelector(".app")
    const msgContainer = document.querySelector(".msg")

    msgContainer.innerHTML = `<p>${msg}</p>`

    if(type){
        msgContainer.classList.add("success-msg")
    }else{
        msgContainer.classList.add("error-msg")
    }
    setTimeout(()=>{
        msgContainer.classList.remove("success-msg")
        msgContainer.classList.remove("error-msg")
    }, 3000)


}