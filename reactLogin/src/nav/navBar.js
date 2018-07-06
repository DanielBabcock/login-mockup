import React, { Component } from "react"
// import "./NavBar.css"
import logo from "../img/loginGrphics.png"


export default class NavBar extends Component {


    // LoginLogout = () => {
    //     if (this.props.activeUser === null) {
    //         return <h1 className="nav-link" id="nav__login"
    //             onClick={this.props.viewHandler} href="#" >Login</h1>
    //     } else {
    //         return <h1 className="nav-link" id="nav__logout"
    //             onClick={this.props.viewHandler} >Logout</h1>
    //     }
    // }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        return (
            <nav className="navBar" style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
                   <img id="nav_welcome" src={logo} alt="brand"/>    
                        {/* <this.LoginLogout /> */}
                    <h1 className="nav-link" id="title"
                        // onClick={this.props.viewHandler} 
                        >
                        Change Healthcare REZOLV</h1>
            </nav>    
        )
    }
}