function login() {

    // Elements
    const loginForm = document.querySelector(".login-form")
    const inputEmail = document.querySelector(".login-form .input-email")
    const inputPass = document.querySelector(".login-form .input-pass")
    
    loginForm.addEventListener("submit", e =>{
        
        e.preventDefault()
        
        // Getting user's info in inputs
        const email = inputEmail.value
        const pass = inputPass.value

        // validating white spaces
        if(email.trim() === ""){
            message("Digite um email válido", false)
            return
        }
        if(pass.trim() === ""){
            message("Digite uma senha válida", false)
            return
        }


        // Validating infos

        // Get users from db
        const dbUsersArr = users()
        
        if(dbUsersArr.length === 0){
            message("O banco de dados de usuários está vazio.", false)
            return
        }else{

            let emailDoNotExist = 0
            // debugger
            dbUsersArr.forEach(dbUser => {

                // Verifying if email exist
                
                if(dbUser.email.includes(email)){
                    
                    // Verifying if password is correct
                    if(!(dbUser.password.includes(pass))){
                        message("Senha ou usuário incorretos", false)
                        return
                    }

                    // Success message and changing pages
                    message(`Usuário autenticado! Seja bem-vindo ${dbUser.name}`, true)
                    pagesChanger("logged")
                    cleanInputs()
                    return
                    
                }else{
                    emailDoNotExist++
                }

            })

            if(emailDoNotExist === dbUsersArr.length){
                message("O usuário não existe", false)
                return
            }
        }

    })


    // Clean inputs
    const cleanInputs = ()=>{
        inputEmail.value = ""
        inputPass.value = ""
    }


}