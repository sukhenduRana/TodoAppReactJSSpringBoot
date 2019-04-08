import axios from "axios";

class AuthenticationService{

    login(user, password) {
        sessionStorage.setItem('authenticatedUser',user)
        let basicAuthHeaders = "Basic " + window.btoa(user + ":" + password)
        this.setupAxiosIntercepters(basicAuthHeaders)
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

    setupAxiosIntercepters(basicAuthHeaders){        
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeaders
                }
                return config
        })
    }
}

export default new AuthenticationService()
