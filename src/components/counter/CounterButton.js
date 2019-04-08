import React, {Component} from 'react'

class CounterButton extends Component{
    constructor(props){
        super();
    }
    
    render(){
        return(
            <div className="counter">
                <button onClick={()=>this.props.increment(this.props.by)}>+{this.props.by}</button>
                <button onClick={()=>this.props.decrement(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }    
}

export default CounterButton;