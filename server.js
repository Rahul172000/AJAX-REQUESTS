const express=require('express')
const server=express();
server.use(express.json());
server.use(express.urlencoded({extended:true}));
let data=[];
server.use('/public',express.static(__dirname+'/public'))
server.use('/public/view',express.static(__dirname+'/public/view'))
server.use('/public/add',express.static(__dirname+'/public/addnew'))
server.get('/public/view/id',function(req,res){
    for(let i of data){
        if(i.id===req.query.id)
        {res.send(i.name);}
    }
    res.send("NO SUCH ID EXISTS IN OUR DATABASE")
})
server.post('/public/addnew',function(req,res){
    data.push({name:req.body.name,id:req.body.id})
    res.send("ADDED");
})
server.listen(9876);