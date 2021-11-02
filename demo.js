const express = require('express')
const Monkey = require('monkey-typewriter')
const app = express()
app.get('/', (req, res) => {
     console.log('received a [GET] ')
     res.json({
          'monkey says': Monkey.word()
     })
})
app.listen(process.env.PORT)