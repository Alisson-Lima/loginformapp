function pagesChanger(page = String){

    const logged = document.querySelector(".logged-container")
    const loginOrRegister = document.querySelector(".login-register-container")
    
    if(page === "logged"){
        logged.classList.remove("hidden-page")
        logged.classList.add("show-page")
        loginOrRegister.classList.remove("show-page")
        loginOrRegister.classList.add("hidden-page")
        return
    }

    if(page === "loginOrRegister"){
        logged.classList.add("hidden-page")
        logged.classList.remove("show-page")
        loginOrRegister.classList.add("show-page")
        loginOrRegister.classList.remove("hidden-page")
    }

}