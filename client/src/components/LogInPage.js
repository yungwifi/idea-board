import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class LogInPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to='/'><button>Home Page</button></Link>
                </div>
                <div>
                    Log In Page
                </div>
            </div>
        )

    }
}

export default LogInPage