import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                Welcome {this.props.match.params.name}
                <div>
                    Click <Link to="/todos">here</Link> to see your todos.
                </div>
            </div>
            
        )
    }
}

export default WelcomeComponent