function register(){

    // Register form
    const registerForms = document.querySelectorAll(".register-form-container form")
    const nextButtons = document.querySelectorAll(".next-button-register-form")
    const backButtons = document.querySelectorAll(".back-button-register-form")

    // inputs step 1
    const inputUserName = document.querySelector(".register-form .input-name")
    const inputUserEmail = document.querySelector(".register-form .input-email")

    // inputs step 2
    const inputPass = document.querySelector(".input-password-register")
    const inputConfirmPass = document.querySelector(".input-confirm-password-register")

    // inputs step 3
    const inputRecoveryEmail = document.querySelector(".input-recovery-email")
    const inputConfirmRecoveryEmail = document.querySelector(".input-confirm-recovery-email")
    

    // Stoping submit
    registerForms.forEach(form => form.addEventListener("submit", e => e.preventDefault()))

    // next step
    let registerStep = 0

    nextButtons.forEach(buttonNext => {
        buttonNext.addEventListener("click", () =>{

            if(registerStep === 0){
                
                // Verify name and email
                if(inputUserEmail.value.trim() === "" || inputUserName.value.trim() === "" ){
                    message("Preencha todos os campos!", false)
                    return
                }
    
                // Verify a valid email 
                if(!(inputUserEmail.value.includes("@"))){
                    message("Utilize um email válido!", false)
                    return
                }
    
                // Verify if email exist
                const dbUsersArr = users()
    
                if(dbUsersArr.length === 0){
                    registerStep++
                    return
                }else{
                    let emailExist = 0
                    // Verifying if email exist
                    dbUsersArr.forEach(user => {
                        const testUser = user.email === inputUserEmail.value 
                        if(testUser){
                            emailExist++
                            return
                        }
                    })
                    
                    if(emailExist > 0){
                        message(`E-mail já registrado, por favor cadastre outro email`, false)
                        emailExist++
                        return
                    }
                    
                    registerStep++
                    registerForms.forEach(form => form.classList.add("hidden-form"))
                    registerForms[registerStep].classList.remove("hidden-form")      
                    
    
                }

            }else if(registerStep === 1){
                if(inputPass.value.trim() === "" || inputConfirmPass.value.trim() === "" ){
                    message("Preencha todos os campos!", false)
                    return
                }
    
                // Verify a valid email 
                if(inputPass.value != inputConfirmPass.value){
                    message("As senhas devem ser iguais!", false)
                    return
                }

                registerStep++
                registerForms.forEach(form => form.classList.add("hidden-form"))
                registerForms[registerStep].classList.remove("hidden-form") 

            }else{

                // Verify white spaces
                if(inputRecoveryEmail.value.trim() === "" || inputConfirmRecoveryEmail.value.trim() === "" ){
                    message("Preencha todos os campos!", false)
                    return
                }

                // Verify a valid email 
                if(!(inputRecoveryEmail.value.includes("@") || inputConfirmRecoveryEmail.value.includes("@"))){
                    message("Utilize um email válido!", false)
                    return
                }
    
                // Verify if email and confirm email is equal 
                if(inputRecoveryEmail.value != inputConfirmRecoveryEmail.value){
                    message("Os emails de recuperação não são iguais!", false)
                    return
                }

                const registerUser = {
                    name: inputUserName.value,
                    email: inputUserEmail.value,
                    password: inputPass.value,
                    recoveryEmail: inputRecoveryEmail.value
                }

                users(registerUser)
                // Success message and changing pages
                message(`Usuário cadastrado com sucesso! Seja bem-vindo ${registerUser.name}`, true)
                pagesChanger("logged")
                cleanInputs()

            }



        })
    })

    backButtons.forEach(buttonBack => {
        buttonBack.addEventListener("click", () =>{
            
            // change page
            registerStep--
            registerForms.forEach(form => form.classList.add("hidden-form"))
            registerForms[registerStep].classList.remove("hidden-form")
            
            // change step
            

        })
    })

    function cleanInputs(){
        document.querySelectorAll(".input").forEach(input => input.value = "")
    }

}