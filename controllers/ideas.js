const express = require('express')
const { User, Idea } = require('../db/schema')
const router = express.Router({ mergeParams: true })

router.post('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            user.ideas.push(new Idea())
            user.save()
                .then((data) => {
                    console.log("DATA TO BE SENT", data)
                    res.json(data)
                })
        })
        .catch((err) => {
            console.error(err)
        })
})

router.delete('/:id', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            user.update({
                $pull:
                    { ideas: { _id: req.params.id } }
            })
                .then((data) => {
                    res.sendStatus(200)
                })
                .catch(console.error)
        })
        .catch(console.error)
})

router.patch('/:id', (req, res) => {
    console.log("IDEA UPDATE RESPONSE")
    User.findById(req.params.userId)
        .then((user) => {
            const update = req.body.idea
            const idea = user.ideas.id(req.params.id)
            if (update.title) {
                idea.title = update.title
            }
            if (update.description) {
                idea.description = update.description
            }
            user.save().then((user) => {
                user.ideas = user.ideas.reverse()
                res.json(user)
            })
        }).catch(console.error)
})

module.exports = router