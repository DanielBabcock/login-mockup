import React, { Component } from "react"
import "./navBar.css"
import changeLogo from "../img/changeLogo.png"
import analyticsLogo from "../img/analyticsLogo.png"


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
            <nav className="navBar" style={{ border: 'solid 1px #00D1B2', margin: '0', color: 'blue' }}>
                   <img id="change_logo" src={changeLogo} alt="brand"/>    
                        {/* <this.LoginLogout /> */}
                    <img id="analytics_logo" src={analyticsLogo} alt=" Analytics Logo"/>
                    <h1 className="nav-link" id="title"
                        // onClick={this.props.viewHandler} 
                        >
                        Change Healthcare REZOLV</h1>
            </nav>  
        )
    }
}