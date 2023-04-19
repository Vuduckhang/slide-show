const user = useGetUser()

const isAuth = !!(user || getCookie(AUTH_USER))
