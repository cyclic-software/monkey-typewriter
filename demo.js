const express = require('express')
const Monkey = require('monkey-typewriter')
const app = express()
app.get('/', (req, res) => {
     console.log('received a [GET] ')

     let w  = Monkey.word()
     let l = w.length - 4;
     let fill = (c,n)=>{
          return Array.apply(null, Array(n)).map(l=>{
               return c
          }).join('')
     }

     let monkey = `
        ${fill(' ',l)}             .="=.
        ${fill(' ',l)}              _/.-.-.\_     _
        ${fill(' ',l)}             ( ( o o ) )    ))
        ${fill(' ',l)}              |/  "  \|    //
      .-${fill('-',l)}------.        \'---'/    //
     _| ${w}  |_       /'"""'\\  ((
   =(_|_${fill('_',l)}______|_)=    / /_,_\ \\  \\
     |::${fill(':',l)}:::::::|      \_\\_'__/ \  ))
      |::${fill(':',l)}:::::[]|       /'  /'~\  |//
     |o=${fill('=',l)}======.|      /   /    \  /
   '""${fill('"',l)}"""""""'  '--',--'\/\    /
        ${fill(' ',l)}           '-- "--'  '--'
                   `

     res.send(`<center><pre>${monkey}</pre></center>`)
})


app.listen(process.env.PORT)