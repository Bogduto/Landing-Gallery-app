const url = `${process.env.DOMAIN}/api`

export const SignIn = async (username, password) => {
    const body = {
        username,
        password
    }
    const {status, user} = await fetch(`${url}/auth/singIn`, {
        method: "POST",
        body: JSON.stringify(body)
    })

    if (status === 400) return null


    // ... cookie token
    return user
}