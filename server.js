const httpServer = require('http')
const userObj = [
    {'name':'lsx','age':18}
    {'name':'zhufeng','age':20}
]
let server =  httpServer.createServer((req,res)=>{
    res.setHeader('Access-Contrl-Allow-Origin','*')
    if(req.url==='/api/getUser') {
        res.end(JSON.stringify(userObj))
    }else{
        res.end('URL NOT FOUND')
    }
})
httpServer.listen(3000,()=>{
    console.log('3000端口服务已经启动')
})