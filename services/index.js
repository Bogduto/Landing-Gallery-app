const url = `${process.env.DOMAIN}/api`

export const getAllProjectsClient = async () => {
    try {
        const carts = await fetch(`${url}/send/getAll`)

        const cartsJson = await carts.json()

        return cartsJson
    } catch (error) {
        console.error(error)
    }
}
export const getAllProjectsAdmin = async () => {
    try {
        const carts = await fetch(`${url}/approval/getAll`)

        const cartsJson = await carts.json()

        return cartsJson
    } catch (error) {
        console.error(error)
    }
}
export const getOneProject = async (id) => {
    try {
        const oneCart = await fetch(`${url}/send/getOne/${id}`)

        const oneCartJson = await oneCart.json()

        return oneCartJson
    } catch (error) {
        console.error(error)
    }
}
export const deleteOneProject = async (id) => {
    try {
        const deleteCart = await fetch(`${url}/approval/manipulation/remove/${id}`)

        const deleteCartJson = await deleteCart.json()

        return deleteCartJson
    } catch (error) {
        console.error(error)
    }
}
export const updateOneProject = async (id) => {
    try {
        const updateCart = await fetch(`${url}/approval/manipulation/update/${id}`)

        const updateCartJson = await updateCart.json()

        return updateCartJson
    } catch (error) {
        console.error(error)
    }
}
export const acceptOneProject = async (id) => {
    try {
        const acceptCart = await fetch(`${url}/approval/manipulation/accept/${id}`)

        const acceptCartJson = await acceptCart.json()

        return acceptCartJson
    } catch (error) {
        console.error(error)
    }
}