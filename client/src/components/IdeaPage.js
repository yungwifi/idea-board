import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Ideas from './Ideas'

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

const IdeaContainer = styled.div`
display: flex;
flex-direction: row;
margin: 50px auto;
justify-content: space-around;
align-items: center;`

class IdeaPage extends Component {
    state = {
        user: {
            userName: 'Bob'
        },
        ideas: [{
            id: 1,
            title: 'hello',
            description: 'world'
        }, {
            id: 2,
            title: 'hola',
            description: 'mundo'
        }]
    }
    componentDidMount() {
        const userId = this.props.match.params.userId
        console.log(userId)
        axios.get(`/api/users/${userId}`)
            .then(response => {
                this.setState({
                    user: response.data,
                    ideas: response.data.ideas
                })
            })
    }
    render() {
        console.log(this.props.match)
        return (
            <div>
                <div>
                    <Button >
                        <Link to='/'>Home</Link>
                    </Button>
                    <IdeaContainer >
                        <Ideas ideas={this.state.ideas} user={this.state.user} {...this.props} />
                    </IdeaContainer>
                </div>
            </div>
        )
    }
}

export default IdeaPage