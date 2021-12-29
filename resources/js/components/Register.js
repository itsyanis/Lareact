import axios from 'axios';
import React from 'react';
import Navbar from './Navbar';
import { Navigate } from 'react-router-dom';

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password:'',
            passwordConfirmation:'',
            redirect: false,
            errors: []
        }
    }

    handleNameChange = event => {
        this.setState({name : event.target.value});
    }

    handleEmailChange = event => {
        this.setState({email : event.target.value});
    }

    handlePasswordChange = event => {
        this.setState({password : event.target.value});
    }

    handlePasswordConfirmationChange = event => {
        this.setState({passwordConfirmation : event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        let bodyFormData = new FormData();
        bodyFormData.set('name', this.state.name);
        bodyFormData.set('email', this.state.email);
        bodyFormData.set('password', this.state.password);
        bodyFormData.set('passwordConfirmation', this.state.passwordConfirmation);

        axios.post('http://127.0.0.1:8000/api/register', bodyFormData)
             .then(res => {
                localStorage.setItem('token', res.data.api_token);
                this.setState({redirect: true});
             })
             .catch(error => {
                this.setState({errors: error.response.data.errors})
             })
    }

    render() {
        if(this.state.redirect){
            return(<Navigate to="/"/>)
        }
        return (
            <>
                <Navbar/>
                <div className="container w-50">
                    <h3 className='text-center my-5'>Register</h3>
                    <form method="POST"  onSubmit={this.handleSubmit} autoComplete='off'>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" onChange={this.handleNameChange}/>
                            { this.state.errors.name ? <div className="invalide-feedback text-danger">{this.state.errors['name']}</div> : '' }

                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleEmailChange}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            { this.state.errors.email ? <div className="invalide-feedback text-danger">{this.state.errors['email']}</div> : '' }

                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" onChange={this.handlePasswordChange}/>
                            { this.state.errors.password ? <div className="invalide-feedback text-danger">{this.state.errors['password']}</div> : '' }

                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmpassword">Password confirmation</label>
                            <input type="password" className="form-control" id="confirmpassword" onChange={this.handlePasswordConfirmationChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form> 
                </div>
            </>
        )
    }
}

export default Register;