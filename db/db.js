function users(newUser = null){

    const users = [
        {
            name: "admin",
            email: "admin@admin.com",
            password: "admin123" 
        },
        {
            name: "Alisson",
            email: "alisson@gmail.com",
            password: "alisson123" 
        }
    ]

    if(newUser != null){
        users.push(newUser)
        return
    }

    return users
}