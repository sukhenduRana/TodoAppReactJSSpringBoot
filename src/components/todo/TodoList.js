import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            todos: [],
            message : ''
        }

        this.deleteTodo = this.deleteTodo.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount(){
       this.refreshTodos()
    }

    refreshTodos(){
        let user = AuthenticationService.getLoggedInUser();
        TodoDataService.retrieveAllTodos(user).then(response => {
            this.setState({
                todos: response.data
            })
        })
    }

    deleteTodo(id){
        let user = AuthenticationService.getLoggedInUser();
        TodoDataService.deleteTodo(user,id) 
        .then(response => {
            this.setState({
                message : `Delete of ${id} Successful`
            })
            this.refreshTodos()
        })    

    }

    render(){
        return(
            <div>
            <HeaderComponent/>
            <div className="container">
                <h1>List Todos</h1>
                {this.state.message ?<div className="alert alert-success">{this.state.message}</div> : ''}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Completed?</th>
                            <th>TargetDate</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(todo => (
                            <tr>
                                <td>{todo.description}</td>
                                <td>{String(todo.done)}</td>
                                <td>{todo.targetDate}</td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>
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