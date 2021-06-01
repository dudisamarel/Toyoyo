const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const toyRoutes = require('./toy/toyRoute')

const app = express()

const PORT = process.env.PORT || 3001;

const coreOptions ={
    origin: 'http://localhost:3000',
    credentials: true
}
// Config the express App
app.use(cors(coreOptions))
app.use(express.static('public'))
app.use(bodyParser.json())

app.use('/api/toy', toyRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`listening at ${PORT}`)
})