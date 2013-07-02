express = require 'express'
CORS = require 'CORS'

app = express()

app.get '/', CORS(require __dirname + '/config.json'), (req, res) ->
    res.send 'Hello'
    
app.listen 3000