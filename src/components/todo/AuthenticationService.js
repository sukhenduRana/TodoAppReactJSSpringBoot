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
    
    getLoggedInUser(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null){
            return ''
        }
            return user
    }

}

export default new AuthenticationService()
