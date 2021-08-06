const express = require('express')
const app = express()
app.use(express.json())



app.get("/",(req,res)=>{
    res.send("sending data to server....")
    console.log("server is running")

})


//post
app.post("/",(req,res)=>{
    main={
        name:req.body.name,
        age:req.body.age
    }
    res.send(main)
})



//put
app.put("/:name",(req,req)=>{
    main={
        name:req.body.name,
        age:req.body.age
    }
    res.send(main)
    console.log("data updated")
    
})

//delete 
app.delete("/deleted/:name",(req,res)=>{
    if(req.params == "mona"){
        req.body.name.del(name)
    }
    main = {
        name:req.body.name,
        age:req.body.age
    }
    res.send("Hiiii")
    console.log("deleted data")
    console.log(req.body.name)
})



app.listen(7000,()=>{
    ("sever is running on port")
})