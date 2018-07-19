import React, {Component} from "react";
import "./login.css"
// import logo from "../img/loginImage.png"

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
            <div class="loginBG">
            {/* <img src={logo} alt="logo"/> */}
                <div class="bgImg">
                    <form class="loginForm" onSubmit={this.handleLogin}>
                        <input onChange={this.handleFieldChange} placeholder='Email' type="email" id="email" />
                        <input style={{marginTop : 10}} onChange={this.handleFieldChange} placeholder='Password' type="password" id="password" />
                            <div class="btnDiv">
                                <button 
                                    id="button__login"
                                    type="submit" 
                                >Sign In
                                </button>
                            </div>
                            <div id="checkboxDiv">
                                <input type="checkbox" 
                                    id="rememberMe">
                                </input>
                                <label for="rememberMe">Remember Me
                                </label>
                            </div>
                            <div id="forgotDiv">
                                <label>Forgot Password?</label>
                            </div>
                            
                    </form>
                </div>
            </div>
            
        )
    }
}

export default Login