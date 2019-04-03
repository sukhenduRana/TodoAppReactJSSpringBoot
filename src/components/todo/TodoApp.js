import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import TodoList from './TodoList'
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import AuthenticatedRoute from './AuthenticatedRoute'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                        <Switch>
                            <Route path = "/" exact component={LoginComponent}/>
                            <Route path = "/login" component={LoginComponent}/>
                            <AuthenticatedRoute path = "/welcome/:name" component ={WelcomeComponent}/>
                            <AuthenticatedRoute path = "/todos" component={TodoList}/>
                            <AuthenticatedRoute path = "/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

function ErrorComponent(){
    return(
        <div>Invalid Page</div>
    )
}

export default TodoApp