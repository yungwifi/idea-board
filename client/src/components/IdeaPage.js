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

    createNewIdea = () => {
        const userId = this.state.user._id
        const url = `/api/users/${userId}/ideas`
        console.log("CREATE IDEA ROUTE BEING CALLED", url)
        axios.post(url)
            .then((res) => {
                console.log("RESPONSE FROM NEW IDEAD", res.data)
                this.setState({ ideas: res.data.ideas })
            })
    }

    handleChange = (changedIdea, event) => {
        const ideas = [...this.state.ideas]
        const newIdeas = ideas.map((idea) => {
            if (idea._id === changedIdea._id) {
                idea[event.target.name] = event.target.value
            }
            return idea
        })
        console.log("HANDLE CHANGE", event.target.value)
        this.setState({ ideas: newIdeas })
    }

    updateIdea = (idea) => {
        const userId = this.state.user._id
        console.log(idea)
        console.log("UPDATE IDEA BEING CALLED")
        axios.patch(`/api/users/${userId}/ideas/${idea._id}`, { idea })
            .then((res) => {
                console.log("SETTING STATE", res.data)
                this.setState({ ideas: res.data.ideas })
            })
            .catch(console.error)
    }

    deleteIdea = (ideaId) => {
        const userId = this.state.user._id
        const url = `/api/users/${userId}/ideas/${ideaId}`
        console.log("DELETE IDEA ROUTE BEING CALLED", url)
        axios.delete(url)
            .then((res) => {
                console.log("RESPONSE FROM IDEA DELETING", res.data)
                this.setState({ ideas: res.data.ideas })
            }).catch(console.error)
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
                        <Ideas handleChange={this.handleChange} userId={this.state.user._id} user={this.state.user}
                            ideas={this.state.ideas} {...this.props} createNewIdea={this.createNewIdea}
                            updateIdea={this.updateIdea} deleteIdea={this.deleteIdea}
                        />
                    </IdeaContainer>
                </div>
            </div>
        )
    }
}

export default IdeaPage