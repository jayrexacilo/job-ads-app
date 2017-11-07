import React, { Component } from 'react';

export default class Search extends Component {
	constructor() {
		super();
		this.state = {
			categories: [
				'Computer Engineering',
				'Database',
				'Design',
				'Mobile Dev',
				'Network / Sys Admin',
				'Operations / HR',
				'Programming / Dev',
				'QA / Testing',
				'Sales',
				'SEO / Online Marketing',
				'Tech Support',
				'Technical Writer',
				'Technician'
			]
		}
	}
	render() {
		let categoryOptions;
		
		if(this.state.categories) {
			categoryOptions = this.state.categories.map(category => {
				return <option key={category} value={category}>{category}</option>
			});
		}

		return (
			<div className="Search">
				<div className="container">
					<div className="row">
						<form className="form-inline m-4">
							<div className="form-group">
								<input type="text" name="search" className="form-control" placeholder="Search" />
								<select ref="category" className="form-control m-2">
									<option key="all" value="all">All</option>
									{categoryOptions}
								</select>
								<input type="submit" className="form-control" value="Go" />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}