

const router = require("express").Router();
const UserModel = require('./../model/user');



router.get('/getusers',(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})
router.post('/createuser',(req,res)=>{
 const user = req.body;
 const newUser = new UserModel(user)
 newUser.save()
 res.json(user)
})

module.exports = router;
