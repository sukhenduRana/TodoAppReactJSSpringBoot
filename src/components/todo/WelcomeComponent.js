import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import HelloWorldService from '../../api/todo/HelloWorldService'

class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            message : ''
        }
        this.retrieveMsg = this.retrieveMsg.bind(this)
        this.showResponse = this.showResponse.bind(this)
    }
    render(){
        return(
            <div>
                <HeaderComponent/>
                <h1>Welcome {this.props.match.params.name} ! </h1>
                <div>
                    Click <Link to="/todos">here</Link> to see your todos.
                </div>
                <div>
                    Click here to get custom message!
                    <button className="btn btn-success" onClick={this.retrieveMsg}>Get Message</button>
                   <div>{this.state.message}</div>
                </div>
            </div>
            
        )
    }

    retrieveMsg(){
        HelloWorldService.executeHelloWorldService()
        .then(response => this.showResponse(response))
    }

    showResponse(response){
        this.setState({
            message : response.data
        })
    }
}

export default WelcomeComponent