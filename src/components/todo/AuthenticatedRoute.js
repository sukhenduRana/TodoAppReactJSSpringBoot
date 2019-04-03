import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService';

class AuthenticatedRoute extends Component{

    render(){
        return(
            <div>
            {AuthenticationService.isUserLoggedIn() ?  
                <Route {...this.props}/> : <Redirect to='/login'/>
            }
            </div>
        )
    }

}

export default AuthenticatedRoute