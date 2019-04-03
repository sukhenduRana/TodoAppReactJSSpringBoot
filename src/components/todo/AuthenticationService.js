class AuthenticationService{

    login(user) {
        sessionStorage.setItem('authenticatedUser',user)
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')

        if(user===null){
            return false
        }
            return true
    }

}

export default new AuthenticationService()
