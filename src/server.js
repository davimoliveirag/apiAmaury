const axios = require('axios')
const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(routes)

/*axios.get('http://165.22.142.228:1602/feednews').then(response => {
    const feed = response.data
    console.log(feed)
})*/

/*
axios.post('http://165.22.142.228:1602/send-feed', {
    "title": "Morte do Angular",
    "description": "Angular está morto informa polícia local",
    "postdate": "19/06/2020",
    "author": "William Brownie"
}).then(response => {
    console.log(response)
})*/

/*axios.post('http://165.22.142.228:1602/send-message-friend', {
    "from": "Davi",
    "to": "Arthur",
    "message": "Torime ameno ameno latire",
    "apiurl": "http://api.aptechs.com.br/src/store"
}).then(response => {
    console.log(response)
})*/

app.listen(3333, () => {
    console.log('Server started')
})