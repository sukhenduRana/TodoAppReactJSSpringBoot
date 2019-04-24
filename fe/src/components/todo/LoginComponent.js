import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'
import HeaderComponent from './HeaderComponent'
class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            isLoginSuccess: false,
            showMsg : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    render(){

        let loginSuccMsg = 'Login Successful'
        let loginFailMsg = 'Login Failed'
        return(
            <div>
                {<HeaderComponent/>}
                <h1>Login</h1>
                <div className="container">
                    Username : <input type="text" name="username" onChange={this.handleChange}/>
                    Password : <input type="password" name="password" onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    {this.state.showMsg ? (<div className="alert alert-warning">{this.state.isLoginSuccess ? loginSuccMsg : loginFailMsg}</div>) : (" ")}
                </div>
            </div>
        )
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }   

    loginClicked(){

        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
        .then(response => {
            AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
            this.props.history.push(`/welcome/${this.state.username}`)
        }).catch(() => {
            this.setState({isLoginSuccess:false})
            this.setState({showMsg:true})
        })        
    }
}

export default LoginComponent