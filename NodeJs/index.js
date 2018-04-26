const express = require('express')
const app = express()

const server = app.listen(8089,()=>{
  console.log("Node Server Start. Port:",server.address().port)
})

app.get("/",(res,req)=>{
  req.send("Hello World!")
})