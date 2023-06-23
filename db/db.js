function users(newUser){
    const users = [
        {
            name: "admin",
            email: "admin@admin.com",
            password: "admin123" 
        }
    ]

    if(newUser){
        users.push(newUser)
        return
    }

    return users
}