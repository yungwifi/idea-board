import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to='/login'><button>User Login</button></Link>
                </div>
                <div>
                    Home Page
                </div>
            </div>
        )
    }
}

export default HomePage