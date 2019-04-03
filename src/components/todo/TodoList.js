import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            todos: [
                {id :1, Description:'One', done:false, TargetDate: new Date()},
                {id :2, Description:'Two', done:false, TargetDate: new Date()},
                {id :3, Description:'Three', done:false, TargetDate: new Date()}
            ]
        }
    }

    render(){
        return(
            <div>
            <HeaderComponent/>
            <div className="container">
                <h1>List Todos</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Completed?</th>
                            <th>TargetDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(todo => (
                            <tr>
                                <td>{todo.Description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.TargetDate.toString()}</td>
                            </tr>
                            
                        ))}
                        
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default TodoList