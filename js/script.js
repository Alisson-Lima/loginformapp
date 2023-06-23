(function(){
    const body = document.querySelector("body")
    const links = document.querySelectorAll("a")

    body.addEventListener("submit", e=>{
        e.preventDefault()
    })

    links.forEach(link =>{
        link.addEventListener("click", e=>{
            e.preventDefault()
        })
    })
})()