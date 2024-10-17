const TOKEN_KEY = "vstep-access-token"

const getAccessToken = () => localStorage.getItem(TOKEN_KEY) || ""
const setAccessToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token)
}
const removeAccessToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}

export {
    getAccessToken,
    setAccessToken,
    removeAccessToken
}