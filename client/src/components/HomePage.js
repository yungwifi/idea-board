import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeContainer = styled.div`
margin-left: 35px;`

const Button = styled.button`
height: 30px;
width: 90px;
background-color: lightblue;
margin-right: 35px;
border-radius: 5px;
display: flex;
flex-direction: row;
justify-content: center;
a{
    text-decoration: none;
}`

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;`


class HomePage extends Component {
    render() {
        return (
            <HomeContainer >
                <ButtonContainer >
                    <Button >
                        <Link to='/login'>User Login</Link>
                    </Button >
                    <Button >
                        <Link to='/login'>User Sign Up</Link>
                    </Button >
                </ButtonContainer>

                <div>
                    <h1>Home Page</h1>
                    <p> Welcome to Idea Board. Keep track of all of the things you think of right
                        before you fall asleep and remind your self that you'll never actually complete any of them.</p>
                </div>
            </HomeContainer>
        )
    }
}

export default HomePage