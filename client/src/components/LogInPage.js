import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import SignUp from './SignUp'

const LoginContainer = styled.div`
display: flex;
justify-content: space-around;`

const Users = styled.div`
display: flex;
flex-direction: column;
justify-content: right;`

const Login = styled.div`
display: flex;
flex-direction: column;
justify-content: right;`

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
            <LoginContainer >
                <Users >
                    <Button >
                        <Link to='/'>Home Page</Link>
                    </Button>
                    <h1>Log-In</h1>
                    <h3>Please Select an Existing User</h3>
                    {userLinks}
                </Users>
                <Login >
                    <SignUp users={this.state.users} />
                </Login>
            </LoginContainer>
        )
    }
}

export default LogIn