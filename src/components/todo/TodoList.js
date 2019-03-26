import React, {Component} from 'react'

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
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>TargetDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(todo => (
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.Description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.TargetDate.toString()}</td>
                            </tr>
                            
                        ))}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList