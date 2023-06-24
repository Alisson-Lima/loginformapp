(function(){

    // Interrupting browser reloads

    const body = document.querySelector("body")
    const links = document.querySelectorAll(".no-reload")

    links.forEach(link =>{
        link.addEventListener("click", e=>{
            e.preventDefault()
        })
    })

    login()

    // Restart project and portfolio links
    const restartProjectBtn = document.querySelector(".links .secondary-button")

    restartProjectBtn.addEventListener("click", ()=>{
        pagesChanger("loginOrRegister")
    })


})()