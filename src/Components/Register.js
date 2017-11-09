import React, { Component } from 'react';
import validation from './Form Validation/registration';

export default class Register extends Component {
    constructor() {
        super();
        this.state = { 
            registerType: '',
            name: '',
            email: '',
            username: '',
            password: '',
            errors: []
        }
    }
    
    handleRegistration(e) {
        const validate = validation.registration(e.target);
        
        if(!validate.length) {
            console.log('send request to api');
            document.getElementById('errorMessages').innerHTML = '';
        } else {
            this.setState({errors: validate});
        }

        e.preventDefault();
    }

    render() {
        let errors = this.state.errors.map(error => {
            return (
                <div key={error} className="alert alert-danger" role="alert">
                    {error}
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
                                <form onSubmit={this.handleRegistration.bind(this)}>
                                    <div className="form-group">
                                        <div id="errorMessages">
                                            {errors}
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