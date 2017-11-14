import React, { Component } from 'react';
import axios from 'axios';
import validation from './FormValidation';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            validationMessages: [],
            messageClass: ''
        };
    }
    handleLogin(e) {
        const { username, password, loginType } = e.target;
        const validate = validation({
            username: {
                required: true
            },
            password: {
                required: true
            }
        }, e.target);

        if(!validate.length) {
            axios.post('http://localhost/job-ads-app/api/login.php',{
                username: username.value,
                password: password.value
            })
            .then(function(response) {
                if(response.data.error) {
                    this.setState({messageClass: 'alert alert-danger'});
                    this.setState({validationMessages: [response.data.error]});
                } else if(response.data.success) {
                    this.setState({messageClass: 'alert alert-success'});
                    this.setState({validationMessages: [response.data.success]});
                    this.areaForm.reset();
                }
            }.bind(this))
            .catch(function(response) {
                console.log(response);
            });
        }
        e.preventDefault();
    }
    render() {
        let validationMessages = this.state.validationMessages.map(message => {
            return (
                <div key={message} className={this.state.messageClass} role="alert">
                    {message}
                </div>
            );
        });

        return (
            <div className="Login">
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="loginModal">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form ref={(e) => { this.areaForm = e; }} onSubmit={this.handleLogin.bind(this)}>
                                    <div className="validationMessages">
                                        {validationMessages}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username" className="col-form-label" >Username:</label>
                                        <input type="text" className="form-control" id="username" name="username" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-form-label">Password:</label>
                                        <input type="password" className="form-control" id="password" name="password" required />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <input type="submit" className="btn btn-primary" value="Login" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}