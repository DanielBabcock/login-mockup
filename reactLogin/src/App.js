import React, { Component } from 'react';
import './App.css';
import NavBar from './nav/navBar';
import Login from './login/login';

class App extends Component {
  state = {
    currentView: "login",
    activeUser: ''
}

showView = function (e) {
    let view = null

    // Click event triggered switching view
    if (e.hasOwnProperty("target")) {
        view = e.target.id.split("__")[1]

        // View switch manually triggered by passing in string
    } else {
        view = e
    }

    // If user clicked logout in nav, empty local storage and update activeUser state
    if (view === "logout") {
        this.setActiveUser(null)
    }

    // Update state to correct view will be rendered
    this.setState({
        currentView: view,
    })

}.bind(this)


View = () => {
      switch (this.state.currentView) {
          case "logout":
              // return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
          default:
              return <Login activeUser={this.state.activeUser} showView={this.showView} />
      }
  }


render() {
    return (
        <article>
            <NavBar viewHandler={this.showView}
            />

            {this.View()}
        </article>
    )
}
}


export default App;
