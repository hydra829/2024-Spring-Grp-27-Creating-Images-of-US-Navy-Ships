  const fs = require('fs')
  const express = require('express')

  const app = express ()

//app.get('/',(req, res)=>{
  //  res.send('<h1> Test for Group 27 Project!</h1>')
//})

app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log('server up and running on port 3000')
})
