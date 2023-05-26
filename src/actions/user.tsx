export const setUser = (username: string, logged: boolean) => ({
    type: "SET_USER",
    username,
    logged
})