import React, { Component } from 'react';

export default class Modal extends Component {
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
            <div className="Modal">
                {/* Employer */}
                <div className="modal fade" id="employerLoginModal" tabIndex="-1" role="dialog" aria-labelledby="employerLogin" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="employerLogin">Employer</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.handleLogin.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="username" className="col-form-label" >Username:</label>
                                        <input type="text" className="form-control" id="username" name="username" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-form-label">Password:</label>
                                        <input type="password" className="form-control" id="password" name="password" required />
                                    </div>
                                    <div className="modal-footer">
                                        <input type="hidden" value="employer" name="loginType" required />
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <input type="submit" className="btn btn-primary" value="Login" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Applicant */}
                <div className="modal fade" id="applicantLoginModal" tabIndex="-1" role="dialog" aria-labelledby="applicantLogin" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="applicantLogin">Applicant</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.handleLogin.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="username" className="col-form-label" name="username">Username:</label>
                                        <input type="text" className="form-control" id="username" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-form-label">Password:</label>
                                        <input type="password" className="form-control" id="password" name="password" required />
                                    </div>
                                    <div className="modal-footer">
                                        <input type="hidden" value="applicant" name="loginType" required />
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