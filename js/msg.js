function message(msg = String, type = Boolean){

    const msgContainer = document.querySelector(".msg")

    msgContainer.innerHTML = `<p>${msg}</p>`

    if(type){
        msgContainer.classList.add("success-msg")
    }else{
        msgContainer.classList.add("error-msg")
    }
    setTimeout(()=>{
        msgContainer.classList.remove("success-msg", "error-msg")
    }, 3000)


}