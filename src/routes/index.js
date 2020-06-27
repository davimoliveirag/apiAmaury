const express = require('express')
const axios = require('axios')
const api = require('../services/api')


const Message = require('../models/Message')
const routes = express.Router()

routes.get('/listFeed', async (req, res) => {
    const response = await api.get('/feednews')
    res.json(response.data)
})

routes.post('/newFeed', async (req, res) => {
    const feed = {
        title: req.body.title,
        description: req.body.description,
        postdate: req.body.postdate,
        author: req.body.author
    }
    const response = await api.post('/send-feed',feed)
    res.json(response.data)
})

routes.post('/feedToFriend', async (req, res) => {
    const feed = {
        from: req.body.from,
        to: req.body.to,
        message: req.body.message,
        apiurl: req.body.apiurl
    }
    const response = await api.post('/send-message-friend',feed)
    res.json(response.data)
})

routes.post('/saveMessage', async (req, res) => {
    const {origin, destiny, message} = req.body
    const response = await Message.create({
        origin, destiny, message
    })
    res.json(response)
})

module.exports = routes