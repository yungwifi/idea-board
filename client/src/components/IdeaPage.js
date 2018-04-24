import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class IdeaPage extends Component {
    render() {
        return (
            <div>
                <Link to='/'><button>Home Page</button></Link>
                <div>
                    <h1>Idea Page </h1>
                </div>
            </div>
        )
    }
}

export default IdeaPage