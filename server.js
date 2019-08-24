let httpServer = require('http')
let userObj = [
    {'name':'lisixianhhhh888我真帅啊','id':8888666},
    {'name':'zhufeng6666hhhhh','id':8888666}
]
let server =  httpServer.createServer(function(req,res){
    res.setHeader('Access-Contrl-Allow-Origin','*')
    if(req.url==='/api/users') {
        res.end(JSON.stringify(userObj))
    }else{
        res.end('URL NOT FOUND')
    }
})
server.listen(3000,function(){
    console.log('3000端口服务已经启动')
})