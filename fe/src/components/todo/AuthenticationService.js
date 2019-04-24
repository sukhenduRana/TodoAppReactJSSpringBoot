import axios from "axios";

class AuthenticationService{

    executeJwtAuthenticationService(username, password) {

       return axios.post('http://localhost:8080/authenticate', {username ,password})
        
    }

    registerSuccessfulLoginForJwt(username, token){
            sessionStorage.setItem('authenticatedUser',username)
            this.setupAxiosIntercepters(this.createJwtToken(token))
    }


    createJwtToken(token){
        return "Bearer " + token
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

    setupAxiosIntercepters(token){        
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = token
                }
                return config
        })
    }
}

export default new AuthenticationService()
