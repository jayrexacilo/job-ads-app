import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import timestamp from 'time-stamp';

export default class Jobs extends Component {
    constructor() {
        super();
        this.state = {
            jobs: [
                {
                    id: uuidv4(),
                    position: 'Front-end Web Developer',
                    category: 'Programming / Dev',
                    company: 'Company 1',
                    location: {
                        country: 'Philippines',
                        city: 'Cebu City',
                        office: 'IT Park bldg. 123'
                    },
                    date: timestamp()
                },
                {
                    id: uuidv4(),
                    position: 'Back-end Web Developer',
                    category: 'Programming / Dev',
                    company: 'Company 2',
                    location: {
                        country: 'Philippines',
                        city: 'Cebu City',
                        office: 'IT Park bldg. 123'
                    },
                    date: timestamp()
                },
                {
                    id: uuidv4(),
                    position: 'Graphic Artist',
                    category: 'Design',
                    company: 'Company 3',
                    location: {
                        country: 'Philippines',
                        city: 'Cebu City',
                        office: 'IT Park bldg. 123'
                    },
                    date: timestamp()
                }
            ]
        }
    }
    render() {
        let jobs = this.state.jobs.map(job => {
            return <tr key={job.id}>
                        <th scope="row">{job.position}</th>
                        <td>{job.company}</td>
                        <td>{job.location.city}, {job.location.country}<span className="d-block text-secondary">{job.location.office}</span></td>
                        <td>{job.date}</td>
                    </tr>
        });
        return (
            <div className="Jobs">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col-md-4">Position</th>
                                        <th scope="col-md-4">Company</th>
                                        <th scope="col-md-2">Location</th>
                                        <th scope="col-md-2">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}