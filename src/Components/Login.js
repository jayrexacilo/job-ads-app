import React, { Component } from 'react';
import EmployerLogin from './Modals/EmployerLogin';
import ApplicantLogin from './Modals/ApplicantLogin';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            loginType: ''
        };
    }
    handleLogin(e) {
        const username = e.target.username.value;
        const password = e.target.password.value;
        const loginType = e.target.loginType.value;
        let loginTypeValid = false;
        
        switch(loginType) {
            case 'employer':
                loginTypeValid = true;
                break;
            case 'applicant':
                loginTypeValid = true;
                break;
            default:
                break;
        }
        
        if(!loginTypeValid) {
            alert('Something is wrong, please reload and try again.');
        } else {
            this.setState({
                username: username,
                password: password,
                loginType: loginType
            }, function() {
                // send request to REST API login
                console.log(this.state);
            });
        }
        e.preventDefault();
    }
    render() {
        return (
            <div className="Login">
                <EmployerLogin onLogin={this.handleLogin.bind(this)} />
                <ApplicantLogin onLogin={this.handleLogin.bind(this)} />
            </div>
        );
    }
}