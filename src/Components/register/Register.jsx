import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormErrors from './formerrors';

import loginService from '../../services/loginservice'
class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            name:'',
            formError: { username: '', password: '',name:'' },
            usernamevalid: false,
            passwordvalid: false,
            namevalid:false,
            formvalid: false
        }
    }


    handleUserInput = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        }, () => {
            this.validateField(name, value);
        })
    }

    validateField(fieldname, value) {

        let fieldvalidationerror = this.state.formError;
        let usernameValid = this.state.usernamevalid;
        let passwordValid = this.state.passwordvalid;
        let nameValid = this.state.namevalid;
        switch (fieldname) {
            case 'username':
                usernameValid = value != null && value.length >= 6;
                fieldvalidationerror.username = usernameValid ? '' : 'is inValid';
                break;
            case 'name':
            nameValid = value != null && value.length >= 6;
            fieldvalidationerror.name = nameValid ? '' : 'is too short';
            break;
            case 'password':
                passwordValid = value != null && value.length >= 6;
                fieldvalidationerror.password = passwordValid ? '' : 'is too short';
                break;
            default:
                break;

        }
        this.setState({
            formError: fieldvalidationerror,
            usernamevalid: usernameValid,
            passwordvalid: passwordValid,
            namevalid: nameValid
        }, this.validateForm)

    }
    validateForm() {

        this.setState({
            formvalid: this.state.usernamevalid && this.state.passwordvalid && this.state.namevalid
        })
    }


    render() {
        return (
            <div className="container">
            <Form>
                <FormErrors errors={this.state.formError}></FormErrors>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="username" type="email" placeholder="Enter email" value={this.state.username} onChange={this.handleUserInput} />

                </Form.Group>
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleUserInput} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleUserInput} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.loginUser}>
                    Sign Up!
  </Button>
            </Form>
            </div>
        )
    }
}

export default Login