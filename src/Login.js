import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false,
            userType: '',
            error: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { username, password } = this.state;
        if (username === 'Admin' && password === '666') {
            this.setState({
                isLoggedIn: true,
                userType: 'Admin',
                error: ''
            });
        } 
        else if (username === 'Docente' && password === '6669') {
            this.setState({
                isLoggedIn: true,
                userType: 'Docente',
                error: ''
            });
        } else {
            this.setState({
                isLoggedIn: false,
                userType: '',
                error: 'Usuario o contraseña incorrectos'
            })
        }

    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    ¡Has iniciado sesión correctamente como {this.state.userType}!
                </div>
            );
        }
        return (
            <div>
                <h2>Iniciar Sesión</h2>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Usuario:</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Login;