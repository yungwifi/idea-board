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

    render() {
        const ideas = this.props.ideas.map((idea, i) => {
            return (
                <div key={i}>
                    <IdeasItems >
                        <input type="text" name="title" value={idea.title} onChange={(e) => { this.props.handleChange(idea, e) }}
                            onBlur={() => this.props.updateIdea(this.props.idea)} />
                        <textarea name="description" value={idea.description} onChange={(e) => { this.props.handleChange(idea, e) }}
                            onBlur={() => this.props.updateIdea(idea._id)} />
                    </IdeasItems>
                    <Button onClick={() => { this.props.deleteIdea(idea._id) }}>Delete Idea</Button>
                </div>
            )
        })


        return (
            <div>
                <h1>{this.props.user.userName}'s Idea Board</h1>
                <Button onClick={this.props.createNewIdea} >New Idea </Button>
                {ideas}
            </div>

        )
    }
}

export default Ideas 