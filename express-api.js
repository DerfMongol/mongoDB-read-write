
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const port = 4000

const uri = "mongodb+srv://Lee:Crusher79!@cluster0-efaxd.mongodb.net/test?retryWrites=true"
const options = {
    useNewUrlParser: true,
    dbName: 'critics'
}
mongoose.connect(uri, options)

const Schema = mongoose.Schema;

const pgaSchema = new Schema({ url: String, text: String, id: Number}, { collection: 'pga'})
const PGA = mongoose.model('pga', pgaSchema)

app.get('/', (req, res) => {
    PGA.find()
       .then(player => res.json(player))

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
