import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService';
import HeaderComponent from './HeaderComponent';
class LogoutComponent extends Component{
    render(){
        return(
            <div>
                <HeaderComponent/>
                <h1>You are logged out!</h1>
                <div className="container">
                    Thank you for using our application.
                </div>
            </div>
        )
    }
}

export default LogoutComponent