import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Button = styled.button`
height: 30px;
width: 90px;
background-color: lightblue;
margin-right: 35px;
border-radius: 10%;
display: flex;
flex-direction: row;
justify-content: center;
a{
    text-decoration: none;
}`

class SignUp extends Component {
    state = {
        user: {
            userName: '',
            password: ''
        }
    }

    handleSignUp = (e) => {
        e.preventDefault()
        console.log("About to make API Call", this.state.user)
        axios.post('/api/users', { user: this.state.user })
            .then((res) => {
                console.log(res.data)
                const users = [...this.state.user]
                users.push(res.data)
                this.setState({ users })
            }).catch((error) => {
                console.error(error)
            })
    }

    handleChange = (e) => {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value
        this.setState({ user })
    }

    render() {
        return (
            <div>
                <h1>Sign-Up</h1>
                <form onSubmit={this.handleSignUp}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input onChange={this.handleChange} name="userName" type="text" value={this.state.user.userName} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} name="password" type="text" value={this.state.user.password} />
                    </div>

                    <Button >Sign Up </Button>
                </form>
            </div>
        )
    }
}

export default SignUp