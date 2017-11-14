import React, { Component } from 'react';
import validation from './FormValidation';
import axios from 'axios';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            validationMessages: [],
            messageClass: ''
        }
    }
    
    handleRegistration(e) {
        const { registerType, name, email, username, password, reTypePassword } = e.target;
        const validate = validation({
                            registerType: {
                                required: true,
                                type: ['employer', 'applicant']
                            },
                            email: {
                                required: true
                            },
                            username: {
                                required: true,
                                min: 2,
                                max: 20
                            },
                            password:{ 
                                required: true,
                                min: 6,
                            },
                            reTypePassword:{ 
                                required: true,
                                matches: password.value
                            },
                            name:{ 
                                required: true,
                                min: 2,
                                max: 50
                            }
                    }, e.target);
        
        if(!validate.length) {
            const data = JSON.stringify({registerType: registerType.value, name: name.value, email: email.value, username: username.value, password: password.value, reTypePassword: reTypePassword.value });

            axios.post('http://localhost/job-ads-app/api/register.php', data)
              .then(function (response) {
                if(response.data.error) {
                    this.setState({messageClass: 'alert alert-danger'});
                    this.setState({validationMessages: response.data.error});
                } else {
                    this.setState({messageClass: 'alert alert-success'});
                    this.setState({validationMessages: ['Successfully Registered!']});
                    this.areaForm.reset();
                }
              }.bind(this))
              .catch(function (error) {
                console.log(error);
                this.setState({messageClass: 'alert alert-danger'});
                this.setState({validationMessages: [error]});
              });
        } else {
            this.setState({messageClass: 'alert alert-danger'});
            this.setState({validationMessages: validate});
        }

        e.preventDefault();
    }

    resetForm() {
        this.areaForm.reset();
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
            <div className="Register">
                <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="register" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="register">Register</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form ref={(e) => { this.areaForm = e; }} onSubmit={this.handleRegistration.bind(this)}>
                                    <div className="form-group">
                                        <div className="validationMessages">
                                            {validationMessages}
                                        </div>
                                        <label htmlFor="registerType" className="col-form-label" >Register as:</label>
                                        <select className="form-control" name="registerType">
                                            <option value="employer">Employer</option>
                                            <option value="applicant">Applicant</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name" className="col-form-label" >Fullname/Company Name:</label>
                                        <input type="text" className="form-control" id="name" name="Fullname/Company Name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="col-form-label" >Email:</label>
                                        <input type="email" className="form-control" id="email" name="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username" className="col-form-label" >Username:</label>
                                        <input type="text" className="form-control" id="username" name="Username" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-form-label">Password:</label>
                                        <input type="password" className="form-control" id="password" name="Password" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-form-label">Re-type Password:</label>
                                        <input type="password" className="form-control" id="reTypePassword" name="Re-type Password" required />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <input type="submit" className="btn btn-primary" value="Register" />
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