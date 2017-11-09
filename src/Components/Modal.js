import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

export default class Modal extends Component {
    
    render() {
        return (
            <div className="Modal">
                <Login />
                <Register />
            </div>
        );
    }
}