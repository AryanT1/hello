const express = require('express')
const app = express()

app.get("/" , (req ,res)=>{
    res.json({msg:"try"})
})




app.listen(3000)