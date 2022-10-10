const router = require('express').Router();
const BlogModel = require('./../model/blog')

router.get('/blogs',(req,res)=>{
    BlogModel.find({},(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    }) 
})
router.post('/createblog',(req,res)=>{
    const newBlog = new BlogModel(req.body)
    newBlog.save()
    res.json(newBlog)
})
module.exports = router;