(function(){

    // Interrupting browser reloads
    document.querySelectorAll(".no-reload").forEach(link =>{
        link.addEventListener("click", e=>{
            e.preventDefault()
        })
    })

    // Restart project button
    document.querySelector(".links .secondary-button").addEventListener("click", ()=>{
        pagesChanger("loginOrRegister")
    })
    
    // Start login and register
    login()
    register()



})()