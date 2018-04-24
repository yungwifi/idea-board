import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogIn extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/users')
            .then(res => {
                this.setState({ users: res.data })
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        const userLinks = this.state.users.map((user, i) => {
            return (
                <div key={i}>
                    <Link to={`/user/${user._id}`}>{user.userName}</Link>
                </div>)
        })
        return (
            <div>
                <Link to='/'><button>Home Page</button></Link>
                <h1>Log-In</h1>
                <h3>Please Select an Existing User</h3>
                {userLinks}

                <h1>Sign-Up</h1>
                <form onSubmit={this.handleSignUp}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input onChange={this.handleChange} name="userName" type="text" value={this.state.userName} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} name="password" type="text" value={this.state.password} />
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default LogIn