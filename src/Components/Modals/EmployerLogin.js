import React from 'react';

const EmployerLogin = (props) => {
    return (
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
                        <form onSubmit={props.onLogin.bind(this)}>
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
    );
};

export default EmployerLogin;