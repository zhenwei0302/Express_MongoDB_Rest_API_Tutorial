//Normal Case
const express = require("express");
const router = express.Router();
const app = express();
const port = 500;

app.get('/api/user',(req,res)=>{
    res.status(200).json({message:"get successfully"})
})

//Split into router, controller
//controller
const getAllUserController = (req,res)=>{
    res.status(200).json({message:"get successfully"})
}

//router
router.get('/getAllUser',getAllUserController())

app.use('/api/user',router.get('/getAllUser',getAllUserController()))

app.listen(port,()=>{
    console.log(`listening port ${port}`)
})


//Split into router, controller

