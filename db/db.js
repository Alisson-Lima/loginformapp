function users(newUser){
    const users = [
        {
            name: "admin",
            email: "admin@admin.com",
            password: "admin123" 
        },
        {
            name: "Lucas",
            email: "lucas@gmail.com",
            password: "lucas123" 
        }
    ]

    if(newUser){
        users.push(newUser)
        return
    }

    return users
}