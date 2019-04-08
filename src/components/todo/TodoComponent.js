import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import HeaderComponent from './HeaderComponent';

class TodoComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id,
            description : '',
            targetDate : ''
        }

        this.submit = this.submit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount(){
        let user = AuthenticationService.getLoggedInUser()
        TodoDataService.retrieveTodo(user, this.state.id)
        .then(response => {
            console.log(response)
            this.setState({
                description : response.data.description,
                targetDate : moment(response.data.targetDate).format('YYYY-MM-DD')
            })
        })
    }
    submit(values){
        console.log('submitting...')
        let user = AuthenticationService.getLoggedInUser()
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: moment(values.targetDate).format('YYYY-MM-DD')
        }

        if(this.state.id === -1){
            TodoDataService.createTodo(user, todo)
            .then(response => {
                this.props.history.push('/todos')
            })

        } else{
            TodoDataService.updateTodo(user, this.state.id, todo)
                .then(response => {
                    this.props.history.push('/todos')
                })
        }
    }
    
    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a description'
        }else if(values.description.length < 5){
            errors.description = 'Please enter atleast 5 characters'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter valid date'
        }
        return errors
    }
    render(){

        let {description, targetDate} = this.state
        return(
            <div>
                <HeaderComponent/>
                <h1>Todo</h1>
                <div className="container">
                <Formik initialValues={
                    {description,targetDate}}
                    onSubmit={this.submit}
                    validate={this.validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"/>
                               </fieldset>
                               <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"/>
                               </fieldset>
                               <button type="submit" className="btn btn-success">Save</button>
                            </Form>
                        )
                    }
                    </Formik>
                </div>
            </div>
        )
    }

}

export default TodoComponent