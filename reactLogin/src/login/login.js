import React, {Component} from "react";
import "./login.css"
import logo from "../img/loginImage.png"

class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
        console.log(stateToChange)
    }.bind(this)

    render() {
        return (
            <div class="bgImg">
            <img src={logo} alt="logo"/>
                <div>
                    <form onSubmit={this.handleLogin}>
                        <input onChange={this.handleFieldChange} placeholder='Email' type="email" id="email" />
                        <input style={{marginTop : 10}} onChange={this.handleFieldChange} placeholder='Password' type="password" id="password" />
                            <button 
                                id="button__login"
                                type="submit" 
                            >Log In
                            </button>
                            <button 
                                id="page__register" 
                                onClick={this.props.showView} 
                            >Sign Up!
                            </button>
                    </form>
                </div>
            </div>
            
        )
    }
}

export default Login