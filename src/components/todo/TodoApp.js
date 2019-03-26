import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import TodoList from './TodoList'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                        <Switch>
                            <Route path = "/" exact component={LoginComponent}/>
                            <Route path = "/login" component={LoginComponent}/>
                            <Route path = "/welcome/:name" component ={WelcomeComponent}/>
                            <Route path = "/todos" component={TodoList}/>
                            <Route path = "/logout" component={LogoutComponent}/>
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