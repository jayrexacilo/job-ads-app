import React, { Component } from 'react';

export default class Modal extends Component {
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
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="username" className="col-form-label">Username:</label>
                                        <input type="text" className="form-control" id="username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-form-label">Password:</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Login</button>
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
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="username" className="col-form-label">Username:</label>
                                        <input type="text" className="form-control" id="username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-form-label">Password:</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Login</button>
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