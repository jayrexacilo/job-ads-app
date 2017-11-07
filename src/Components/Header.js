import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="Header row">
				<nav className="col navbar navbar-dark bg-dark">
					<div className="container">
						<a className="navbar-brand" href="#">IT Jobs</a>
						<div className="dropdown">
							<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Login</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<a className="dropdown-item" href="" data-toggle="modal" data-target="#employerLoginModal">Employer</a>
								<a className="dropdown-item" href="" data-toggle="modal" data-target="#applicantLoginModal">Applicant</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}