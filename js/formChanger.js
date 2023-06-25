(function(){

    const btnChangeForm = document.querySelectorAll(".change-form-side")    
    const formContainer = document.querySelector(".form-container")

    // Change form dinamics
    btnChangeForm[0].addEventListener("click", ()=>{
        formContainer.classList.toggle("active")
    })
    btnChangeForm[1].addEventListener("click", ()=>{
        formContainer.classList.toggle("active")
    })
    
})()