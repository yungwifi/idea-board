import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const IdeasItems = styled.div`
display: flex;
flex-direction: column;
`

const Button = styled.button`
height: 30px;
width: 90px;
background-color: lightblue;
margin-right: 35px;
border-radius: 5px;
display: flex;
flex-direction: row;
align-items: right;
a{
    text-decoration: none;
}`

class Ideas extends Component {

    handleChange = (e) => {
        const idea = { ...this.state.ideas }
        idea[e.target.name] = e.target.value
        this.setState({ idea })
    }

    render() {
        const ideas = this.props.ideas.map((idea, i) => {
            return (
                <div key={i}>
                    <IdeasItems >
                        <input type="text" name="title" value={idea.title} onChange={this.handleChange} />
                        <textarea name="description" value={idea.description} onChange={this.handleChange} />
                    </IdeasItems>
                    <Button >Delete Idea</Button>
                </div>
            )
        })
        return (
            <div>
                <h1>{this.props.user.userName}'s Idea Board</h1>
                <Button > New Idea </Button>
                {ideas}
            </div>

        )
    }
}

export default Ideas 