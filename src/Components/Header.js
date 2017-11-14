import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="Header row">
				<nav className="col navbar navbar-dark bg-dark">
					<div className="container">
						<a className="navbar-brand" href="#">IT Jobs</a>
						<div className="dropdown">
							<a className="nav-link" href="#" role="button" data-toggle="modal" data-target="#loginModal">Login</a>
							<a href="#"  style={{fontSize: '13px'}} className="nav-link font-italic p-0 text-center" data-toggle="modal" data-target="#registerModal">Register</a>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}