import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleSubmit = () => {

    }

    render() {
        <div>
            <form onSubmit={this.handleSubmit}>
                <input /> 
                <input />
                <button type="submit">submit</button>
            </form>
        </div>
    }
} 

export default Login;