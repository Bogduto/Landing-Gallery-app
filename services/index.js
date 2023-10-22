const url = `${process.env.DOMAIN}/api`

export const getAllProjectsClient = async () => {
    try {
        const carts = await fetch(`${url}/public-api/project/getAll`, {
            method: "GET",
            cache: "no-cache",
        })

        const cartsJson = await carts.json()

        return cartsJson
    } catch (error) {
        console.error(error)
    }
}
export const getAllProjectsAdmin = async () => {
    try {
        const carts = await fetch(`${url}/private-api/project/getAll`)

        const cartsJson = await carts.json()

        return cartsJson
    } catch (error) {
        console.error(error)
    }
}
export const getOneProject = async (id) => {
    try {
        const oneCart = await fetch(`${url}/public-api/project/${id}`, {
            method:"GET"
        })

        const oneCartJson = await oneCart.json()

        return oneCartJson
    } catch (error) {
        console.error(error)
    }
}

export const deleteOneProject = async (id) => {
    try {
        const deleteCart = await fetch(`${url}/private-api/project/management/remove/${id}`, 
        {
            method: "DELETE"
        })

        const deleteCartJson = await deleteCart.json()

        return deleteCartJson
    } catch (error) {
        console.error(error)
    }
}
export const updateOneProject = async (data) => {
    try {
        const updateCart = await fetch(`${url}/private-api/project/management/update/${id}`, {
            method: "POST",
            body: JSON.stringify(data)
        })

        const updateCartJson = await updateCart.json()

        return updateCartJson
    } catch (error) {
        console.error(error)
    }
}
export const acceptOneProject = async (id) => {
    try {
        const acceptCart = await fetch(`${url}/private-api/project/management/accept/${id}`, {
            method: "PUT"
        })

        const acceptCartJson = await acceptCart.json()

        return acceptCartJson
    } catch (error) {
        console.error(error)
    }
}