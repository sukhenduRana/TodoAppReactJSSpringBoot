import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment'
class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            todos: [],
            message : ''
        }

        this.deleteTodo = this.deleteTodo.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.createTodo = this.createTodo.bind(this)
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

    updateTodo(id){
        this.props.history.push(`/todo/${id}`)
    }

    createTodo(){
        this.props.history.push('/todo/-1')
    }

    render(){
        return(
            <div>
            <HeaderComponent/>
            <div className="container">
                <h1>List Todos</h1>
                <span style={{float:'left', padding:'5px'}}><button onClick={this.createTodo} className="btn btn-success">Add</button></span>
                {this.state.message ?<div className="alert alert-success">{this.state.message}</div> : ''}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Completed?</th>
                            <th>TargetDate</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{String(todo.done)}</td>
                                <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                <td><button className="btn btn-success" onClick={() => this.updateTodo(todo.id)}>Update</button></td>
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