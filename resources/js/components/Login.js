import axios from "axios";
import React from "react";
import Navbar from "./Navbar";

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password:'',
            redirect: false,
            errors: []
        }
    }

    handleEmailChange = event => {
        this.setState({email : event.target.value});
    }

    handlePasswordChange = event => {
        this.setState({password : event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
       
        let bodyFormData = new FormData();
        bodyFormData.set('email', this.state.email);
        bodyFormData.set('password', this.state.password);

        axios.post('http://127.0.0.1:8000/api/login', bodyFormData)
             .then( res => {
               localStorage.setItem('token', res.data.api_token);
             })
             .catch(error => {
                this.setState({errors : error.response.data.errors})
             });
    }

    render() {
        return (
            <>
                <Navbar/>
                <div className="container w-50">
                    <h3 className='text-center my-5'>Login</h3>
                    <form method="POST"  onSubmit={this.handleSubmit} autoComplete='off'>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  onChange={this.handleEmailChange}/>
                            { this.state.errors.email ? <div className="invalide-feedback text-danger">{this.state.errors['email']}</div> : '' }
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" onChange={this.handlePasswordChange}/>
                            { this.state.errors.password ? <div className="invalide-feedback text-danger">{this.state.errors['password']}</div> : '' }
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form> 
                </div>
            </>
        )
    }
}

export default Login;