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
                             .="=.
                      _/.-.-.\_     _
                     ( ( o o ) )    ))
                      |/  "  \|    //
      .-${fill('-',l)}------.        \'---'/    //
     _| ${w} |_       /'"""'\\  ((
   =(_|_${fill('-',l)}______|_)=    / /_,_\ \\  \\
     |::${fill(':',l)}:::::::|      \_\\_'__/ \  ))
     |::${fill(':',l)}:::::[]|       /'  /'~\  |//
     |o=${fill('=',l)}======.|      /   /    \  /
     '""${fill('"',l)}"""""""'  '--',--'\/\    /
                   '-- "--'  '--'
                   `

     res.send(`<pre>${monkey}</pre>`)
})


app.listen(process.env.PORT)